import { useState, useEffect } from 'react';
import { SOCIAL_NETWORK } from '@constants/networking';
import { SocialNetworkListSchema } from 'modules/types';

export const useSocialNetwork = () => {
    const [socialList, setSocialList] = useState<SocialNetworkListSchema>([]);

    useEffect(() => {
        setSocialList(SOCIAL_NETWORK);
    }, []);

    return socialList;
};
