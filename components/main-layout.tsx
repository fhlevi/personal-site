import React from 'react'
import Base from './abstracts/base';

interface MainLayoutProps {
    children: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
    return (
        <main className="flex flex-col">
            <Base />
            {children}
        </main>
    )
}

export default MainLayout