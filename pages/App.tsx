import '@styles/blurred.css';
import { Banner } from '@components/section/banner';
import { Navigation } from '@components/navigation';
import { AboutUsSection } from '@components/section/about-us';
import { ContactSection } from '@components/section/contact';
import { ExperienceSection } from '@components/section/experience';
import { ProjectsSection } from '@components/section/projects';
import { SkillsSection } from '@components/section/skills';
import { Footer } from '@components/footer/footer';
import { useExperience } from "@hook/use-experience";
import { SKILLS } from '@constants/skills';
import { ABOUT } from '@constants/profiles';
import MainLayout from '@components/main-layout';

function App() {
  const experience = useExperience();
  const aboutUs = ABOUT;

  return (
    <MainLayout>
      <Navigation />
      <Banner />
      <ExperienceSection experience={experience} />
      <AboutUsSection description={aboutUs.description} stats={aboutUs.stats}/>
      <ProjectsSection />
      <SkillsSection skills={SKILLS} />
      <ContactSection />
      <Footer />
    </MainLayout>
  )
}

export default App
