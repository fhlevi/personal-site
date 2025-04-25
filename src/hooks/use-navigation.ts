import React from 'react';
import { NAVIGATE } from 'src/constants/navigate';

export const useNavigation = () => {
    const [activeMenu, setActiveMenu] = React.useState<string|null>(null);

    React.useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.4,
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const id = entry.target.id;
                    if (id) setActiveMenu(id);
                }
            });
        }, options);

        NAVIGATE.forEach((item) => {
            if (item?.href) {
                const element = document.getElementById(item.href.slice(1));
                if (element) observer.observe(element);
            }
        });

        return () => observer.disconnect();
    }, [NAVIGATE]);

    return { 
        navigationList: NAVIGATE,
        activeMenu,
    };
};
