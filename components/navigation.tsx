import '@styles/navigation.css';
import { NavigationItems } from './navigation-items';

import ProfileImg from '@assets/images/profiles-picture.jpg';
import React from 'react';
import { useDevice } from '@hook/use-device';

export const Navigation = () => {
    const { devices } = useDevice();
    const [menuActive, setMenuActive] = React.useState<string>('banner');

    const handleSetActive = (to: string) => {
        setMenuActive(to);
    };

    return (
        <header className="relative flex items-center justify-center w-full sticky top-0 z-50">
            {devices.mobile ? (
                <div className="px-5 flex items-center justify-start h-14 text-md text-white font-semibold nav w-full">
                    Faisal Fahlevi
                </div>
            ) : (
                <nav className="text-white mt-0 sm:mt-10 h-14 sm:h-20 nav min-w-[calc(var(--container-xs) * 3)] rounded-[var(--rounded-50)]">
                    <ul className="relative hidden sm:flex justify-between items-center p-2.5 h-full">
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
            )}
        </header>
    );
};
