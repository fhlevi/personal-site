import '@styles/navigation.css';
import { NavigationItems } from './navigation-items';

import ProfileImg from '@assets/images/profiles-picture.jpg';
import React from 'react';

export const Navigation = () => {
    const [menuActive, setMenuActive] = React.useState<string>('banner');

    const handleSetActive = (to: string) => {
        setMenuActive(to);
    };

    return (
        <header className="flex items-center justify-center w-full sticky top-0 z-50">
            <nav className="text-white mt-10 h-20 nav">
                <ul className="relative flex justify-between items-center p-2.5 h-full">
                    <NavigationItems 
                        name="Home"
                        to="banner"
                        offset={-100}
                        menuActive={menuActive}
                        onSetActive={handleSetActive}
                    />
                    <NavigationItems 
                        name="Experience"
                        to="experience"
                        offset={-100}
                        menuActive={menuActive}
                        onSetActive={handleSetActive}
                    />
                    <NavigationItems 
                        name="About"
                        to="about-us"
                        offset={-100}
                        menuActive={menuActive}
                        onSetActive={handleSetActive}
                    />
                    <NavigationItems
                        image={ProfileImg}
                        to="#"
                    />
                    <NavigationItems
                        name="Projects"
                        to="projects"
                        offset={-100}
                        menuActive={menuActive}
                        onSetActive={handleSetActive}
                    />
                    <NavigationItems
                        name="Skills"
                        to="skills"
                        offset={-100}
                        menuActive={menuActive}
                        onSetActive={handleSetActive}
                    />
                    <NavigationItems
                        name="Contact"
                        to="contact"
                        offset={-100}
                        menuActive={menuActive}
                        onSetActive={handleSetActive}
                    />
                </ul>
            </nav>
        </header>
    );
};
