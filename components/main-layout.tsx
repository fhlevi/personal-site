import React, { ReactNode, useState, useEffect } from "react";
import { Navigation } from "./navigation";
import { FooterMain } from "./footer/footer-main";

interface MainLayoutProps {
    children: ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    const [showScroll, setShowScroll] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = (): void => {
            if (window.scrollY >= 560) setShowScroll(true);
            else setShowScroll(false);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    return (
        <>
            <Navigation />
            <main className="main">{children}</main>
            <FooterMain />
            <a href="#" className={`scrollup ${showScroll ? "show-scroll" : ""}`} id="scroll-up">
                <i className="uil uil-arrow-up scrollup__icon"></i>
            </a>
        </>
    );
};
