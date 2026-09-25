import React from 'react';

export const Contact: React.FC = () => {
    // Helper to render the cool digit structure from the original template
    const renderCodeString = (str: string): React.JSX.Element => {
        return (
            <div className="code">
                {str.split('').map((char: string, index: number) => (
                    <div className="digit" key={index}>
                        <span>{char === ' ' ? '\u00A0' : char}</span>
                    </div>
                ))}
            </div>
        );
    };

    return (
        <section className="contact section" id="contact">
            <h2 className="section__title">Contact Me</h2>
            <span className="section__subtitle">Get in touch</span>
            
            <div className="contact__container container grid">
                <div>
                    <div className="contact__information">
                        <i className="uil uil-phone contact__icon"></i>
                        <div>
                            <h3 className="contact__title">Call Me</h3>
                            {renderCodeString('+62-85-156-589-457')}
                        </div>
                    </div>
                    
                    <div className="contact__information">
                        <i className="uil uil-envelope contact__icon"></i>
                        <div>
                            <h3 className="contact__title">Email</h3>
                            {renderCodeString('faisal@example.com')}
                        </div>
                    </div>

                    <div className="contact__information">
                        <i className="uil uil-map-marker contact__icon"></i>
                        <div>
                            <h3 className="contact__title">Location</h3>
                            {renderCodeString('Indonesia')}
                        </div>
                    </div>
                </div>
                
                <form action="#" method="POST" className="contact__form grid">
                    <div className="contact__inputs grid">
                        <div className="contact__content">
                            <label htmlFor="name" className="contact__label">Name</label>
                            <input type="text" id="name" name="name" className="contact__input" />
                        </div>

                        <div className="contact__content">
                            <label htmlFor="email" className="contact__label">Email</label>
                            <input type="email" id="email" name="email" className="contact__input" />
                        </div>
                    </div>
                    <div className="contact__content">
                        <label htmlFor="project" className="contact__label">Project</label>
                        <input type="text" id="project" name="project" className="contact__input" />
                    </div>
                    <div className="contact__content">
                        <label htmlFor="message" className="contact__label">Message</label>
                        <textarea name="message" id="message" cols={0} rows={7} className="contact__input"></textarea>
                    </div>

                    <div className="letter-button-container">
                        <button type="button" className="letter-button" aria-label="Send Message" onClick={() => window.open('https://wa.me/6285156589457', '_blank')}>
                            <div className="animated-mail">
                                <div className="back-fold"></div>
                                <div className="letter">
                                    <div className="letter-border"></div>
                                    <div className="letter-title"></div>
                                    <div className="letter-context"></div>
                                    <div className="letter-stamp">
                                        <div className="letter-stamp-inner"></div>
                                    </div>
                                </div>
                                <div className="top-fold"></div>
                                <div className="body"></div>
                                <div className="left-fold"></div>
                            </div>
                            <div className="shadow"></div>
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};
