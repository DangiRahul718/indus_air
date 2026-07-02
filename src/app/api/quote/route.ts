import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Simple in-memory rate limiter
const ipCache = new Map<string, { count: number; lastReset: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS = 5;

function isRateLimited(ip: string): boolean {
    const now = Date.now();
    const clientData = ipCache.get(ip);

    if (!clientData) {
        ipCache.set(ip, { count: 1, lastReset: now });
        return false;
    }

    if (now - clientData.lastReset > RATE_LIMIT_WINDOW) {
        clientData.count = 1;
        clientData.lastReset = now;
        return false;
    }

    if (clientData.count >= MAX_REQUESTS) {
        return true;
    }

    clientData.count++;
    return false;
}

// Input sanitization helper to prevent script/HTML injection
function sanitizeString(str: string): string {
    if (!str) return '';
    return str
        .replace(/<[^>]*>/g, '') // Strip HTML tags
        .replace(/[<>'"&]/g, (match) => {
            switch (match) {
                case '<': return '&lt;';
                case '>': return '&gt;';
                case "'": return '&#x27;';
                case '"': return '&quot;';
                case '&': return '&amp;';
                default: return match;
            }
        })
        .trim();
}

export async function POST(request: NextRequest) {
    // 1. Rate Limiting
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';
    if (isRateLimited(ip)) {
        return NextResponse.json(
            { error: 'Too many requests. Please try again in a minute.' },
            { status: 429 }
        );
    }

    try {
        const body = await request.json();
        const { name, phone, company, product, details, website } = body;

        // 2. Honeypot check (hidden field filled by bots)
        if (website) {
            // Silently discard spam and return 200 success
            return NextResponse.json(
                { success: true, message: 'Form submitted successfully (spam check passed)' },
                { status: 200 }
            );
        }

        // 3. Input Validation
        if (!name || !phone || !company || !product) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Validate name length
        if (name.length < 2 || name.length > 100) {
            return NextResponse.json(
                { error: 'Invalid name length' },
                { status: 400 }
            );
        }

        // Validate phone number format (basic check)
        const phoneCleaned = phone.replace(/[\s\-\+\(\)]/g, '');
        if (phoneCleaned.length < 7 || phoneCleaned.length > 15 || !/^\d+$/.test(phoneCleaned)) {
            return NextResponse.json(
                { error: 'Invalid phone number format' },
                { status: 400 }
            );
        }

        // 4. Input Sanitization
        const sanitizedName = sanitizeString(name);
        const sanitizedPhone = sanitizeString(phone);
        const sanitizedCompany = sanitizeString(company);
        const sanitizedProduct = sanitizeString(product);
        const sanitizedDetails = sanitizeString(details || '');

        // 5. Send Email via Resend
        const resend = new Resend(process.env.RESEND_API_KEY || 'mock_key');
        
        // If Resend key is not set, log and return mock success to prevent crashes in staging/dev
        if (!process.env.RESEND_API_KEY) {
            console.log('MOCK EMAIL SEND (Missing RESEND_API_KEY):', {
                to: 'roker94023@icubik.com',
                subject: `New B2B Lead from ${sanitizedName}`,
                data: { sanitizedName, sanitizedPhone, sanitizedCompany, sanitizedProduct, sanitizedDetails }
            });
            return NextResponse.json(
                { success: true, message: 'Lead received successfully (mock mode)' },
                { status: 200 }
            );
        }

        const { data, error } = await resend.emails.send({
            from: 'Indus Air Leads <onboarding@resend.dev>',
            to: 'roker94023@icubik.com',
            subject: `New B2B Quote Lead: ${sanitizedName}`,
            html: `
                <h2>New Quote Request (B2B Lead)</h2>
                <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
                <hr />
                <p><strong>Name:</strong> ${sanitizedName}</p>
                <p><strong>Company:</strong> ${sanitizedCompany}</p>
                <p><strong>Phone:</strong> ${sanitizedPhone}</p>
                <p><strong>Product Needed:</strong> ${sanitizedProduct}</p>
                <p><strong>Requirement Details:</strong></p>
                <p>${sanitizedDetails || 'No additional details provided'}</p>
                <hr />
                <p><em>This lead was securely processed and sent from the Indus Air landing page form.</em></p>
            `,
        });

        if (error) {
            console.error('Resend error:', error);
            return NextResponse.json(
                { error: 'Failed to send lead notification' },
                { status: 500 }
            );
        }

        return NextResponse.json(
            { success: true, messageId: data?.id },
            { status: 200 }
        );
    } catch (err) {
        console.error('API error:', err);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
