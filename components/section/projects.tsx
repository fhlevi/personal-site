import React from 'react';
import { useQuery } from 'react-query';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { EffectCoverflow, Mousewheel } from 'swiper/modules';
import { getProjects } from '../../services/profiles';
import { IProject } from '../../modules/interfaces';

interface IProjectDisplay {
    title: string;
    description: string;
    link: string;
    linkText: string;
    img: string;
}

export const Projects: React.FC = () => {
    const { data: apiProjectsData, isLoading } = useQuery<IProject[], Error>('projects', getProjects);

    const defaultProjectsData: IProjectDisplay[] = [
        {
            title: "Currency Exchange Application",
            description: "Currency Exchange mobile application, developed using the powerful SwiftUI framework...",
            link: "https://github.com/yagizhitit/CurrencyExchangeApp",
            linkText: "Show on GitHub",
            img: "/assets/images/profiles-picture.jpeg"
        }
    ];

    let finalProjects: IProjectDisplay[] = apiProjectsData 
        ? apiProjectsData.map((item: IProject) => ({
            title: item.name,
            description: item.description,
            link: item.link || '#',
            linkText: item.link ? 'View Project' : 'Demo',
            img: item.image ? `/assets/images/projects/${item.image}` : "/assets/images/profiles-picture.jpeg"
        }))
        : defaultProjectsData;

    // Pastikan array selalu cukup untuk loop (minimal 6 slide agar tidak kosong/error)
    if (finalProjects.length > 0 && finalProjects.length < 6) {
        finalProjects = [...finalProjects, ...finalProjects, ...finalProjects];
    }

    return (
        <section className="portfolio section" id="portfolio">
            <h2 className="section__title">Projects</h2>
            <span className="section__subtitle">Most recent work</span>
            
            <div className="portfolio__container" style={{ position: 'relative', width: '100%' }}>
                {isLoading ? (
                    <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-color)' }}>
                        <i className="uil uil-spinner-alt animate-spin" style={{ fontSize: '2rem', display: 'inline-block', animation: 'spin 1s linear infinite' }}></i>
                        <p style={{ marginTop: '1rem' }}>Loading Projects...</p>
                        <style>{`@keyframes spin { 100% { transform: rotate(360deg); } }`}</style>
                    </div>
                ) : (
                    <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={'auto'}
                        loop={true}
                        spaceBetween={32} 
                        mousewheel={true}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0, 
                            depth: 150, 
                            modifier: 1.5, 
                            slideShadows: false,
                        }}
                        modules={[EffectCoverflow, Mousewheel]}
                        style={{ overflow: 'visible', padding: '2rem 1rem 5rem 1rem' }}
                    >
                        {finalProjects.map((project: IProjectDisplay, index: number) => (
                            <SwiperSlide className="portfolio__slide_custom" key={index}>
                                <div className="portfolio__content" style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)', borderRadius: '1.5rem', height: '100%', overflow: 'hidden' }}>
                                    <img src={project.img} alt="Project" className="portfolio__img" style={{ objectFit: 'cover' }} />
                                    <div className="portfolio__data">
                                        <h3 className="portfolio__title">{project.title}</h3>
                                        <p className="portfolio__description">
                                            {project.description}
                                        </p>
                                        <a href={project.link} className="button button--flex button--small portfolio__button" target={project.link !== '#' ? "_blank" : undefined} rel="noreferrer">
                                            {project.linkText}
                                            <i className="uil uil-arrow-right button__icon"></i>
                                        </a>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                )}
            </div>
        </section>
    );
};
