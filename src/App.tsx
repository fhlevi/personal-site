import '@styles/blurred.css';
import { Banner } from '@components/section/banner';
import { Navigation } from '@components/navigation';
import { AboutUsSection } from '@components/section/about-us';
import { ContactSection } from '@components/section/contact';
import { ExperienceSection } from '@components/section/experience';
import { ProjectsSection } from '@components/section/projects';
import { SkillsSection } from '@components/section/skills';
import { Footer } from '@components/footer';
import { ProjectCount } from '@constant/projects';
import { useExperience } from "@hook/use-experience";
import { SKILLS } from '@constant/skills';

function App() {
  const experience = useExperience();

  return (
    <main>
      <Navigation />
      <Banner />
      <ExperienceSection 
        experience={experience} 
      />
      <AboutUsSection 
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales"
        stats={ProjectCount}
      />
      <ProjectsSection />
      <SkillsSection skills={SKILLS} />
      <ContactSection />
      <Footer />
    </main>
  )
}

export default App
