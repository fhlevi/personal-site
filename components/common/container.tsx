import clsx from 'clsx';
import React from 'react';

interface ContainerProps {
    children: React.ReactNode;
    className?: string
}

export const Container = ({ 
    children, 
    className
}: ContainerProps) => {
    return (
        <div className={clsx("container mx-auto px-4 sm:px-6", className)}>
            {children}
        </div>
    )
}