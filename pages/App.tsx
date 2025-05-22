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
import { Helmet } from 'react-helmet-async';
import ProfilePicture from '@assets/images/profiles-picture.jpg';

function App() {
  const experience = useExperience();
  const aboutUs = ABOUT;

  return (
    <main className="flex flex-col">
      <Helmet>
        <link rel="icon" type="image/svg+xml" href={ProfilePicture} />
        <title>Faisal Fahlevi | Personal Portfolio</title>
      </Helmet>

      <Navigation />
      <Banner />
      <ExperienceSection experience={experience} />
      <AboutUsSection description={aboutUs.description} stats={aboutUs.stats}/>
      <ProjectsSection />
      <SkillsSection skills={SKILLS} />
      <ContactSection />
      <Footer />
    </main>
  )
}

export default App
