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

    const mappedProjects: IProjectDisplay[] = apiProjectsData 
        ? apiProjectsData.map((item: IProject) => ({
            title: item.name,
            description: item.description,
            link: item.link || '#',
            linkText: item.link ? 'View Project' : 'Demo',
            img: item.image ? `/assets/images/projects/${item.image}` : "/assets/images/profiles-picture.jpeg"
        }))
        : defaultProjectsData;

    const finalProjects: IProjectDisplay[] = mappedProjects.length > 0 && mappedProjects.length <= 3 
        ? [...mappedProjects, ...mappedProjects] 
        : mappedProjects;

    return (
        <section className="portfolio section" id="portfolio">
            <h2 className="section__title">Projects</h2>
            <span className="section__subtitle">{isLoading ? 'Loading...' : 'Most recent work'}</span>
            
            <div className="portfolio__container" style={{ position: 'relative', width: '100%' }}>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    initialSlide={0}
                    loop={true}
                    spaceBetween={0} 
                    mousewheel={true}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 150, 
                        depth: 200, 
                        modifier: 1.5, 
                        slideShadows: false,
                    }}
                    breakpoints={{
                        1024: { spaceBetween: 0 },
                        768: { spaceBetween: 0 },
                        0: { spaceBetween: 0 }
                    }}
                    modules={[EffectCoverflow, Mousewheel]}
                    style={{ overflow: 'visible', paddingBottom: '3rem' }}
                >
                    {finalProjects.map((project: IProjectDisplay, index: number) => (
                        <SwiperSlide className="portfolio__slide_custom" key={index}>
                            <div className="portfolio__content">
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
            </div>
        </section>
    );
};
