import '@styles/navigation.css';
import React from 'react';
import { NAVIGATE } from 'src/constants/navigate';
import { INavigationGroup } from 'src/types/navigation';

import ProfileImg from '@assets/images/profiles-picture.jpg';

export const Navigation = () => {
    const [navigationList, setNavigationList] = React.useState<INavigationGroup>([]);

    React.useEffect(() => {
        setNavigationList(NAVIGATE);;
    });

    return (
        <header className="flex items-center justify-center w-full sticky top-0 z-50">
            <nav className="text-white mt-10 h-20 nav">
                <ul className="flex justify-between items-center p-2.5 h-full">
                    {navigationList?.[0]?.map((item, index) => (
                        <li key={index} className="nav-item">
                            <a href={item.href} className="nav-label">{item.name}</a>
                        </li>
                    ))}

                    <li className="text-2xl">
                        <img src={ProfileImg} alt="avatar" className="avatar" />
                    </li>

                    {navigationList?.[1]?.map((item, index) => (
                        <li key={index} className="nav-item">
                            <a href={item.href} className="nav-label">{item.name}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};
