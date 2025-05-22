import React from 'react'
import { Title, Meta } from 'react-head';

interface MainLayoutProps {
    children: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
    return (
        <main className="flex flex-col">
            <Title>Faisal Fahlevi | Personal Site</Title>
            <Meta name="description" content="Personal portfolio website of Faisal Fahlevi, Frontend Developer focusing on React, Vite, and UI/UX design." />
            <Meta name="keywords" content="Faisal Fahlevi, Frontend Developer, React, Vite, JavaScript, Portfolio, UI/UX" />
            <Meta name="author" content="Faisal Fahlevi" />
            <Meta name="robots" content="index, follow" />
            <Meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <Meta property="og:title" content="Faisal Fahlevi Personal Site" />
            <Meta property="og:description" content="Explore projects, skills, and contact information of Faisal Fahlevi." />
            <Meta property="og:type" content="website" />
            <Meta property="og:url" content="https://www.linkedin.com/in/fhlevi" />
            {children}
        </main>
    )
}

export default MainLayout