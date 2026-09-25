import React from 'react';
import { Link } from 'react-scroll';

interface NavigationItemsProps {
    name: string;
    to: string;
    icon: string;
}

export const NavigationItems: React.FC<NavigationItemsProps> = ({ name, to, icon }) => {
    return (
        <li className="nav__item">
            <Link 
                activeClass="active-link" 
                to={to} 
                spy={true} 
                smooth={true} 
                offset={-50} 
                duration={500} 
                className="nav__link"
                style={{ cursor: 'pointer' }}
            >
                <i className={`uil ${icon} nav__icon`}></i> {name}
            </Link>
        </li>
    );
};
