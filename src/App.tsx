import '@styles/blurred.css';
import { Banner } from '@components/section/banner';
import { Navigation } from '@components/navigation';
import { AboutUsSection } from '@components/section/about-us';
import { ContactSection } from '@components/section/contact';
import { ExperienceSection } from '@components/section/experience';
import { ProjectsSection } from '@components/section/projects';
import { SkillsSection } from '@components/section/skills';
import { Footer } from '@components/footer';

function App() {
  return (
    <main>
      <Navigation />
      <Banner />
      <ExperienceSection />
      <AboutUsSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}

export default App
