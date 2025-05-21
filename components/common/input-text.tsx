import React from 'react';
import clsx from 'clsx';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string
}

export const InputText = ({ className, ...props }: InputProps) => {
    return (
        <input
            type="text"
            className={clsx(
                'border border-[#E4E7EC] bg-white w-full h-[86px] text-xl',
                className
            )}
            {...props}
        />
    )
}