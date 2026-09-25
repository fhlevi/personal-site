import React from 'react';
import { useObfuscatedImage } from '@hook/use-obfuscate-image';

export const AboutUs: React.FC = () => {
    const blobUrl: string | null = useObfuscatedImage('/assets/images/profiles-picture.jpeg');
    return (
        <section className="about section" id="about">
            <h2 className="section__title">About Me</h2>
            <span className="section__subtitle">My introduction</span>
            
            <div className="about__container container grid">
                <div className="about__img-wrapper">
                    <img src={blobUrl || ''} alt="" className="about__img-layer" />
                </div>
                
                <div className="about__data">
                    <p className="about__description">Web developer, with extensive knowledge and years of experience, working in web technologies and UI / UX design, delivering quality work.</p>
                    
                    <div className="about__info">
                        <div className="about__box">
                            <span className="about__info-title">07+</span>
                            <span className="about__info-name">Years <br /> experience</span>
                        </div>
                        <div className="about__box">
                            <span className="about__info-title">10+</span>
                            <span className="about__info-name">Completed <br /> project</span>
                        </div>
                        <div className="about__box">
                            <span className="about__info-title">02+</span>
                            <span className="about__info-name">Companies <br /> worked</span>
                        </div>
                    </div>
                    
                    <div className="about__buttons">
                        <a href="/cv.pdf" className="button button--flex">
                            Download CV <i className="uil uil-download-alt button__icon"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};
