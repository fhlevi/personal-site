import React, { useEffect, useState } from 'react';
import { Link, LinkProps } from "react-scroll";
import ImageItem from './ImageItem';
import LabelItem from './LabelItem';
import { motion } from "framer-motion";

interface NavigationItemsProps extends LinkProps {
    name?: string; // The label name for the navigation item
    image?: string; // The image source for the navigation item
    menuActive?: string; // The currently active menu item
}

export const NavigationItems: React.FC<NavigationItemsProps> = ({ 
    name,
    to = "#", // Default target section
    image,
    offset, // Offset for scrolling
    onSetActive, // Callback when the item becomes active
    menuActive = '' // Default active menu is empty
}) => {
    const [previousActiveMenu, setPreviousActiveMenu] = useState<string>(''); // Track the previously active menu
    const menuOrder = ["banner", "experience", "about-us", "projects", "skills", "contact"]; // Define the order of menu items

    // Update the previous active menu whenever the active menu changes
    useEffect(() => {
        if (menuActive && menuActive !== previousActiveMenu) {
            setPreviousActiveMenu(menuActive);
        }
    }, [menuActive]);

    // Determine the sliding direction for the animation
    const getSlidingDirection = () => {
        const previousIndex = menuOrder.indexOf(previousActiveMenu);
        const currentIndex = menuOrder.indexOf(menuActive);

        // Return "0%" if indices are invalid or the same
        if (previousIndex === -1 || currentIndex === -1 || previousIndex === currentIndex) return "0%";

        // Slide left if the current menu is after the previous menu, otherwise slide right
        return currentIndex > previousIndex ? "-100%" : "100%";
    };

    return (
        <li className="relative h-full nav-item">
            {/* Navigation link */}
            <Link 
                className="z-10"
                to={to}
                spy // Enable scroll spying
                offset={offset}
                onSetActive={onSetActive}
            >
                {/* Render label or image based on props */}
                {name && <LabelItem name={name} />}
                {image && <ImageItem image={image} />}
            </Link>

            {/* Active menu indicator with sliding animation */}
            {menuActive === to && (
                <motion.div 
                    key={to}
                    initial={{ x: getSlidingDirection() }} // Start animation
                    animate={{ x: 0, opacity: 1 }} // End animation
                    transition={{
                        type: "spring", // Smooth spring animation
                        stiffness: 200,
                        damping: 20,
                    }}
                    className="absolute inset-0 active-item z-0 bg-blue-500" // Styling for the active indicator
                ></motion.div>
            )}
        </li>
    );
};
