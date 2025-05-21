import { ArrowRight } from 'lucide-react';
import { cva } from 'class-variance-authority';
import React from 'react';
import { cn } from '@utils/cn';

interface ProjectButtonProps {
    variant: "default" | "outline";
    onClick?: () => void;
}

const buttonVariants = cva(
    "absolute h-16 w-16 rounded-full border top-3 right-3 p-4 z-10 border-orange-400 cursor-pointer duration-300 ease-in-out",
    {
        variants: {
            variant: {
                default: "bg-orange-400 text-white",
                outline: "text-orange-400"
            }
        },
        defaultVariants: {
            variant: 'outline',
        },
    }
)

export const ProjectButton: 
React.FC<ProjectButtonProps> = ({ 
    variant, onClick
}) => {
    return (
        <button 
        type="button"
        aria-label="direction-button"
        className={cn(buttonVariants({ variant }))}
        onClick={onClick}>
            <ArrowRight size={32} />
        </button>
    );
};
