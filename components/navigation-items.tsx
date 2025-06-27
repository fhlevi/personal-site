import React from 'react';
import { Link } from "react-scroll";
import { NavigationItemsProps } from "@modules/interfaces";
import { motion } from "framer-motion";

export const NavigationItems: React.FC<NavigationItemsProps> = ({ 
    name,
    to = "#",
    image,
    offset,
    onSetActive,
    menuActive = ''
}) => {
    const [previousActiveMenu, setPreviousActiveMenu] = React.useState<string>('');
    const menuOrder = ["banner", "experience", "about-us", "projects", "skills", "contact"];

    React.useEffect(() => {
        if (menuActive && menuActive !== previousActiveMenu) {
            setPreviousActiveMenu(menuActive);
            return;
        }
    }, [menuActive, previousActiveMenu]);


    const getSlidingDirection = () => {
        const previousIndex = menuOrder.indexOf(previousActiveMenu);
        const currentIndex = menuOrder.indexOf(menuActive);

        if (previousIndex === -1 || currentIndex === -1 || previousIndex === currentIndex) return "0%";

        return currentIndex > previousIndex ? "-100%" : "100%";
    };

    return (
        <li className="relative h-full nav-item cursor-pointer">
            <Link 
            className="z-10"
            to={to}
            spy
            offset={offset}
            onSetActive={onSetActive}>
                {name && <span className="nav-label">{name}</span>}
                {image && <img src={image} alt="avatar" className="avatar" />}
            </Link>

            {menuActive === to && (
                <motion.div 
                    key={to}
                    initial={{ x: getSlidingDirection() }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 20,
                    }}
                    className="absolute inset-0 active-item z-0"
                ></motion.div>
            )}
        </li>
    );
};
