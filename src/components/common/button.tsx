import clsx from "clsx"
import React from "react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
    className?: string
}

export const Button = ({ children, className, ...props }: ButtonProps) => {
    return (
        <button
            className={clsx(
                'bg-orange-400 text-white rounded-6xl cursor-pointer',
                className
            )}
            {...props}
        >
            {children}
        </button>
    )
}