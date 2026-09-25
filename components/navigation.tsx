import React, { useState, useEffect } from 'react';
import { NavigationItems } from './navigation-items';
import { useTheme } from '@hook/use-theme';

export const Navigation: React.FC = () => {
    const { theme, toggleTheme } = useTheme();
    const [toggle, setToggle] = useState<boolean>(false);
    const [scrollHeader, setScrollHeader] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = (): void => {
            if (window.scrollY >= 80) setScrollHeader(true);
            else setScrollHeader(false);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`header ${scrollHeader ? "scroll-header" : ""}`} id="header">
            <nav className="nav container">
                <a href="#" className="nav__logo">Faisal Fahlevi</a>
                <div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list grid">
                        <NavigationItems name="Home" to="home" icon="uil-estate" />
                        <NavigationItems name="About" to="about" icon="uil-user" />
                        <NavigationItems name="Skills" to="skills" icon="uil-file-alt" />
                        <NavigationItems name="Experience" to="experience" icon="uil-briefcase-alt" />
                        <NavigationItems name="Projects" to="projects" icon="uil-scenery" />
                        <NavigationItems name="Contact" to="contact" icon="uil-message" />
                    </ul>
                    <i className="uil uil-times nav__close" onClick={() => setToggle(!toggle)}></i>
                </div>
                <div className="nav__btns">
                    <i className={`uil ${theme === 'dark' ? 'uil-sun' : 'uil-moon'} change-theme`} onClick={toggleTheme} id="theme-button"></i>
                    <div className="nav__toggle" onClick={() => setToggle(!toggle)}>
                        <i className="uil uil-apps"></i>
                    </div>
                </div>
            </nav>
        </header>
    );
};
