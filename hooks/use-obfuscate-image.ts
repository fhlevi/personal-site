import { useState, useEffect } from 'react';

const pathAssets: { [key: string]: string } = {
    'images': '../assets/images/',
    'projects': '../assets/projects/',
}

export function useObfuscateImage(imagePath: string, pathType: keyof typeof pathAssets = 'images') {
    const [blobUrl, setBlobUrl] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        let isMounted = true;
        let objectUrl = '';

        const loadImage = async () => {
            try {
                const importedImage = new URL(`${pathAssets[pathType]}${imagePath}`, import.meta.url).href;

                // Fetch gambar sebagai Blob
                const response = await fetch(importedImage);
                const blob = await response.blob();

                objectUrl = URL.createObjectURL(blob);
                if (isMounted) {
                    setBlobUrl(objectUrl);
                    setLoading(false);
                }
            } catch (error) {
                console.error('Failed to load hidden image:', error);
                setLoading(false);
            }
        };

        loadImage();

        // Clean up memory leaks saat komponen unmount
        return () => {
            isMounted = false;
            if (objectUrl) URL.revokeObjectURL(objectUrl);
        };
    }, [imagePath]);

    return { blobUrl, loading };
}