import clsx from "clsx"

interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
    children: React.ReactNode
    className?: string
}

export const Tag = ({ children, className, ...props }: TagProps) => {
    return (
        <span
            className={clsx(
                'bg-[#F2F4F7] text-[#344054] rounded-3xl px-8 py-4 text-xl',
                className
            )}
            {...props}
        >
            {children}
        </span>
    )
}