import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import { getSkills } from '../../services/profiles';
import { ISkill } from '../../modules/interfaces';

interface IDisplaySkill {
    name: string;
    percentage: string;
}

export const Skills: React.FC = () => {
    const [open, setOpen] = useState<boolean>(true);
    const [animate, setAnimate] = useState<boolean>(false);

    useEffect(() => {
        if (open) {
            const timer: NodeJS.Timeout = setTimeout(() => setAnimate(true), 100);
            return () => clearTimeout(timer);
        } else {
            setAnimate(false);
        }
    }, [open]);

    const { data: apiSkills, isLoading, isError } = useQuery<ISkill[], Error>('skills', getSkills);

    const defaultSkills: IDisplaySkill[] = [
        { name: 'SwiftUI', percentage: '85%' },
        { name: 'Swift', percentage: '70%' },
        { name: 'ReactNative', percentage: '70%' },
        { name: 'Kotlin', percentage: '75%' },
        { name: 'Flutter', percentage: '80%' },
        { name: 'HTML', percentage: '85%' },
    ];

    const getPercentage = (str: string): string => {
        const hash: number = str.length % 5;
        const percentages: string[] = ['75%', '80%', '85%', '90%', '95%'];
        return percentages[hash];
    };

    const displaySkills: IDisplaySkill[] = apiSkills 
        ? apiSkills.map((item: ISkill) => ({
            name: item.skill,
            percentage: getPercentage(item.skill)
        }))
        : defaultSkills;

    const renderLightsaber = (percentage: string): React.JSX.Element => (
        <div className="skill-saber" data-percent={percentage}>
            <div className="handle">
                <div className="tip"></div>
                <div className="grip grip1"></div>
                <div className="grip grip2"></div>
                <div className="grip grip3"></div>
                <div className="center"></div>
                <div className="guard-tip"></div>
                <div className="guard-rectangle"></div>
            </div>
            <div className="laser-container">
                <div 
                    className="laser" 
                    style={{ width: animate ? percentage : '0' }}
                >
                    <div className="laser-glow"></div>
                </div>
            </div>
        </div>
    );

    return (
        <section className="skills section" id="skills">
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">My technical level</span>
            <div className="skills__container container grid">
                <div className={`skills__content ${open ? 'skills__open' : 'skills__close'}`}>
                    <div className="skills__header" onClick={() => setOpen(!open)}>
                        <i className="uil uil-brackets-curly skills__icon"></i>
                        <div>
                            <h1 className="skills__title">Frontend Developer</h1>
                            <span className="skills__subtitle">
                                {isLoading ? 'Loading skills...' : 'More than 4 years'}
                            </span>
                        </div>
                        <i className="uil uil-angle-down skills__arrow"></i>
                    </div>
                    
                    {!isLoading && !isError && (
                        <div className="skills__list grid">
                            {displaySkills.map((skill: IDisplaySkill, index: number) => (
                                <div className="skills__data" key={index}>
                                    <div className="skills__titles">
                                        <h3 className="skills__name">{skill.name}</h3>
                                        <span className="skills__number">{skill.percentage}</span>
                                    </div>
                                    {renderLightsaber(skill.percentage)}
                                </div>
                            ))}
                        </div>
                    )}
                    
                    {isError && (
                        <div className="skills__list grid">
                            <p>Failed to load skills from API.</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};
