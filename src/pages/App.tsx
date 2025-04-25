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
    <main className="flex flex-col">
      <Navigation />
      <Banner />
      <ExperienceSection
        experience={experience}
      />
      <AboutUsSection
        description="I am a skilled web developer with extensive experience 
        in building and optimizing applications using technologies like React, 
        Vue, Laravel, and more. My problem-solving abilities allow me to tackle 
        complex challenges and deliver innovative solutions. I’m a collaborative team player, 
        ensuring smooth communication and delivering high-quality work. 
        Passionate about staying up-to-date with the latest trends, 
        I am committed to continuous learning and applying new techniques. My focus is always on delivering 
        results that drive business growth, enhance user experience, and improve performance. 
        Let’s work together to create something exceptional"
        stats={ProjectCount}
      />
      <ProjectsSection />
      <SkillsSection 
        skills={SKILLS} 
      />
      <ContactSection />
      <Footer />
    </main>
  )
}

export default App
