import clsx from "clsx"

interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
    children: React.ReactNode
    className?: string
}

export const Tag = ({ children, className, ...props }: TagProps) => {
    return (
        <p
            className={clsx(
                'bg-[#F2F4F7] text-[#344054] rounded-3xl px-4 py-2 text-base md:px-8 md:py-4 md:text-xl',
                className
            )}
            {...props}
        >
            {children}
        </p>
    )
}