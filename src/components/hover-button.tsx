import clsx from 'clsx';
import { ArrowRight } from 'lucide-react';
import React from 'react';

interface HoverButtonProps {
    isHover: boolean;
}

export const HoverButton: React.FC<HoverButtonProps> = ({ isHover }) => {
    return (
        <button 
            type="button"
            aria-label="direction-button"
            className={clsx(
                "absolute h-16 w-16 rounded-full border top-3 right-3 p-4 z-10 border-orange-400 cursor-pointer duration-300 ease-in-out",
                isHover ? "bg-orange-400 text-white" : "text-orange-400"
            )}
        >
            <ArrowRight size={32} />
        </button>
    );
};
