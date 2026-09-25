import React from 'react';

export const FooterMain: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer__bg">
                <div className="footer__container container grid">
                    <div>
                        <h1 className="footer__title">Faisal</h1>
                        <span className="footer__subtitle">Frontend Developer</span>
                    </div>
                    <ul className="footer__links">
                        <li><a href="#experience" className="footer__link">Experiences</a></li>
                        <li><a href="#portfolio" className="footer__link">Projects</a></li>
                        <li><a href="#contact" className="footer__link">Contact Me</a></li>
                    </ul>
                    <div className="footer__socials">
                        <a href="https://linkedin.com/in/fhlevi" target="_blank" rel="noreferrer" className="footer__social"><i className="uil uil-linkedin"></i></a>
                        <a href="https://github.com/fhlevi" target="_blank" rel="noreferrer" className="footer__social"><i className="uil uil-github"></i></a>
                        <a href="#" target="_blank" rel="noreferrer" className="footer__social"><i className="uil uil-instagram-alt"></i></a>
                    </div>
                </div>
                <p className="footer__copy">&#169; Faisal Fahlevi. All right reserved</p>
            </div>
        </footer>
    );
};
