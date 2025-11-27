import '@styles/blurred.css';
// components
import { Banner } from '@components/section/banner';
import { Navigation } from '@components/navigation';
import { AboutUsSection } from '@components/section/about-us';
import { ContactSection } from '@components/section/contact';
import { ExperienceSection } from '@components/section/experience';
import { ProjectsSection } from '@components/section/projects';
import { SkillsSection } from '@components/section/skills';
import { Footer } from '@components/footer/footer-main';
import MainLayout from '@components/main-layout';

function App() {
  return (
    <MainLayout>
      <Navigation />
        <Banner />
        <ExperienceSection />
        <AboutUsSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      <Footer />
    </MainLayout>
  )
}

export default App
