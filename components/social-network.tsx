import React from 'react';
import { SocialNetworkProps } from '@modules/interfaces';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const SocialNetwork: React.FC<SocialNetworkProps> = ({ 
    socialList,
    onOpenLink 
}) => {
    return (
        <div className="w-full h-6 flex flex-row space-x-1.5">
            {socialList.map((item) => (
                <FontAwesomeIcon 
                    icon={item.icon} 
                    className="text-white text-2xl cursor-pointer" 
                    key={item.id} 
                    onClick={() => onOpenLink(item.link)}
                />
            ))}
        </div>
    );
};