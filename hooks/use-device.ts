import React from 'react';

export const useDevice = () => {
    const [isMobile, setIsMobile] = React.useState(false);

    const checkMobile = () => setIsMobile(window.innerWidth <= 768);

    React.useEffect(() => {
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const devices = {
        mobile: isMobile
    }

    return { devices }
}