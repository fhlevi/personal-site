import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { getExperience } from '../../services/profiles';
import { IExperience } from '../../modules/interfaces';

interface IQualificationData {
    title: string;
    subtitle: string;
    date: string;
}

export const Experience: React.FC = () => {
    const [tab, setTab] = useState<string>('education');

    const { data: apiWorkData, isLoading } = useQuery<IExperience[], Error>('experience', getExperience);

    const educationData: IQualificationData[] = [
        { title: "Sınav Anatolian High School", subtitle: "GPA: 94.2/100", date: "2014 - 2017" },
        { title: "Baskent University Computer Engineer", subtitle: "GPA: 3.01/4", date: "2017 - 2022" },
        { title: "AGH University of Science and Technology - Poland", subtitle: "Erasmus+ Programme", date: "2021 - 2021" },
        { title: "MSc in Computing Griffith College Dublin", subtitle: "2nd Class Honours", date: "2022 - 2023" },
    ];

    const defaultWorkData: IQualificationData[] = [
        { title: "Frontend Engineer", subtitle: "Tech Company", date: "2021 - Present" },
        { title: "Web Developer", subtitle: "Freelance", date: "2019 - 2021" }
    ];

    const workData: IQualificationData[] = apiWorkData
        ? apiWorkData.map((item: IExperience) => ({
            title: item.position,
            subtitle: item.status ? `${item.company} - ${item.status}` : item.company,
            date: item.date
        }))
        : defaultWorkData;

    const renderList = (data: IQualificationData[]): React.JSX.Element | React.JSX.Element[] => {
        if (isLoading && tab === 'work') {
            return <div>Loading experience...</div>;
        }
        
        return data.map((item: IQualificationData, index: number) => {
            const isLeft: boolean = index % 2 === 0;
            return (
                <div className="qualification__data" key={index}>
                    {isLeft ? (
                        <>
                            <div>
                                <h3 className="qualification__title">{item.title}</h3>
                                <span className="qualification__subtitle">{item.subtitle}</span>
                                <div className="qualification__calendar"><i className="uil uil-calendar-alt"></i> {item.date}</div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                {index !== data.length - 1 && <span className="qualification__line"></span>}
                            </div>
                        </>
                    ) : (
                        <>
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                {index !== data.length - 1 && <span className="qualification__line"></span>}
                            </div>
                            <div>
                                <h3 className="qualification__title">{item.title}</h3>
                                <span className="qualification__subtitle">{item.subtitle}</span>
                                <div className="qualification__calendar"><i className="uil uil-calendar-alt"></i> {item.date}</div>
                            </div>
                        </>
                    )}
                </div>
            );
        });
    };

    return (
        <section className="qualification section qualification-animate" id="experience">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personal journey</span>
            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className={`qualification__button button--flex ${tab === 'education' ? 'qualification__active' : ''}`} onClick={() => setTab('education')}>
                        <i className="uil uil-graduation-cap qualification__icon"></i> Education
                    </div>
                    <div className={`qualification__button button--flex ${tab === 'work' ? 'qualification__active' : ''}`} onClick={() => setTab('work')}>
                        <i className="uil uil-briefcase-alt qualification__icon"></i> Work
                    </div>
                </div>
                <div className="qualification__sections">
                    <div key={tab} className="qualification__content qualification__active" style={{ display: 'block' }}>
                        {tab === 'education' ? renderList(educationData) : renderList(workData)}
                    </div>
                </div>
            </div>
        </section>
    );
};
