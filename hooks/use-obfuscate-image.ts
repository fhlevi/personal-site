import { useState, useEffect } from 'react';

export function useObfuscatedImage(imagePath: string) {
    const [blobUrl, setBlobUrl] = useState<string>('');

    useEffect(() => {
        let active = true;
        let url = '';

        fetch(imagePath)
            .then((res) => res.blob())
            .then((blob) => {
                if (active) {
                    url = URL.createObjectURL(blob);
                    setBlobUrl(url);
                }
            })
            .catch((err) => console.error('Error loading image:', err));

        return () => {
            active = false;
            if (url) URL.revokeObjectURL(url);
        };
    }, [imagePath]);

    return blobUrl;
}