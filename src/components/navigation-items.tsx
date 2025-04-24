import React from 'react';
import { INavigationList } from '@type/navigation';

interface NavigationItemsProps {
    items?: INavigationList;
}

export const NavigationItems: React.FC<NavigationItemsProps> = ({ items }) => (
    <>
        {items?.map((item, index) => (
            <li key={index} className="nav-item">
                <a href={item.href} className="nav-label">{item.name}</a>
            </li>
        ))}
    </>
);
