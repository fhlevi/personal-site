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
    const menuOrder = ["banner", "experience", "overview", "projects", "skills", "contact"];

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

    const isAvatar = !!image;

    return (
        <motion.div 
            layout
            initial={isAvatar ? { opacity: 0, scale: 0.5, width: "50px" } : { width: 0, opacity: 0 }}
            animate={isAvatar ? { opacity: 1, scale: 1, width: "50px" } : { width: "136px", opacity: 1 }}
            transition={{
                duration: 0.8,
                delay: isAvatar ? 0.2 : 1.2,
                type: "spring", 
                bounce: 0.4 
            }}
            className={`relative h-full cursor-pointer flex items-center justify-center overflow-hidden ${!isAvatar ? 'nav-item' : ''}`}
        >
            <Link 
            className="z-10 flex items-center justify-center w-full h-full"
            to={to}
            spy
            offset={offset}
            onSetActive={onSetActive}>
                {name && <motion.span 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 0.5 }}
                    className="nav-label whitespace-nowrap"
                >
                    {name}
                </motion.span>}
                {image && <img src={image} alt="avatar" className="avatar" />}
            </Link>

            {menuActive === to && !isAvatar && (
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
        </motion.div>
    );};
