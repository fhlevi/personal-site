import { useState, useEffect } from 'react';
import { SOCIAL_NETWORK } from '@constant/networking';
import { SocialNetworkList } from '@type/social-network';

export const useSocialNetwork = (): SocialNetworkList => {
    const [socialList, setSocialList] = useState<SocialNetworkList>([]);

    useEffect(() => {
        setSocialList(SOCIAL_NETWORK);
    }, []);

    return socialList;
};
