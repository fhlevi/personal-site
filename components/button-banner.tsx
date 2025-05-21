import clsx from "clsx";
import { motion } from "framer-motion";
import { Button } from "react-scroll";
import { ButtonBannerProps } from "@modules/interfaces";

export const ButtonBanner = ({ 
    name, 
    children, 
    onSetActive, 
    buttonActive, 
    onClick, 
    to = '' 
}: ButtonBannerProps) => {
    const framerMotion = {
        initial: { x: buttonActive === 'contact' ? "100%" : "-100%" },
        animate: { x: 0, opacity: 1 },
        transition: {
            type: "spring",
            stiffness: 200,
            damping: 20,
        }
    }

    const handleSetActive = () => {
        onSetActive(name);
    }

    const isActiveButton = buttonActive === name;

    return (
        <Button
            className="relative px-5 py-2.5 w-full h-full rounded-6xl cursor-pointer"
            onMouseMove={handleSetActive}
            to={to}
            onClick={onClick}>
            <p className={clsx("relative z-10 flex flex-row items-center justify-center", isActiveButton && 'text-white font-bold')}>
                {children}
            </p>
            {isActiveButton && (
                <motion.div
                    className="absolute inset-0 active-item z-0 bg-orange-400"
                    initial={framerMotion.initial}
                    animate={framerMotion.animate}
                    transition={framerMotion.transition}
                ></motion.div>
            )}
        </Button>
    )
}