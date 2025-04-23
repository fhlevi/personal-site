import clsx from 'clsx';
import React from 'react';

interface ContainerProps {
    children: React.ReactNode;
    className?: string
}

export const Container = ({ 
    children, 
    className = "container mx-auto px-4 sm:px-6 md:px-0"
}: ContainerProps) => {
    return (
        <div className={clsx(className)}>
            {children}
        </div>
    )
}