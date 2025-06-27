import React from 'react'
import Base from './abstracts/base';

interface MainLayoutProps {
    children: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
    return (
        <main className="flex flex-col">
            <Base />
            <div className="blurred-circle"></div>
            <div className="decorative-circle"></div>
            {children}
        </main>
    )
}

export default MainLayout