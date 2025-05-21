import React from 'react';
import { NAVIGATE } from '@constants/navigate';
import { NavigationSchema } from '@modules/types';

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

        NAVIGATE.forEach((item: NavigationSchema) => {
            if (item?.href) {
                const element = document.getElementById(item.href.slice(1));
                if (element) observer.observe(element);
            }
        });

        return () => observer.disconnect();
    }, []);

    return { 
        navigationList: NAVIGATE,
        activeMenu,
    };
};
