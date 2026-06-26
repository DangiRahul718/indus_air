import GalleryClient from './GalleryClient';
import { projectGallery } from '@/lib/data';

export const metadata = {
    title: 'Project Gallery - Indus Air Compressor',
    description: 'View our project gallery showcasing successful air compressor installations worldwide.',
};

export default function GalleryPage() {
    return <GalleryClient galleryItems={projectGallery} />;
}
