import React from 'react';
import '@styles/blurred.css';
// components
import { Banner } from '@components/section/banner';
import { AboutUs } from '@components/section/about-us';
import { Contact } from '@components/section/contact';
import { Experience } from '@components/section/experience';
import { Projects } from '@components/section/projects';
import { Skills } from '@components/section/skills';
import { MainLayout } from '@components/main-layout';

const App: React.FC = () => {
  return (
    <MainLayout>
        <Banner />
        <AboutUs />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
    </MainLayout>
  );
};

export default App;
