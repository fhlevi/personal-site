import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { SOCIAL_NETWORK } from 'src/constants/networking';
import { SocialNetworkList } from 'src/types/social-network';

export const SocialNetwork = () => {
    const [socialList, setSocialList] = React.useState<SocialNetworkList>([]);

    const handleOpenLink = (link: string) => {
        window.open(link, '_blank');
    }

    React.useEffect(() => {
        setSocialList(SOCIAL_NETWORK);
    }, []);

    return (
        <div className="w-full h-6 flex flex-row space-x-1.5">
            {socialList.map((item) => (
                <FontAwesomeIcon 
                    icon={item.icon} 
                    className="text-white text-2xl cursor-pointer" 
                    key={item.id} 
                    onClick={() => handleOpenLink(item.link)}
                />
            ))}
        </div>
    )
}