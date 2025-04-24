import React from 'react';
import { NAVIGATE } from 'src/constants/navigate';
import { INavigationGroup } from 'src/types/navigation';

export const useNavigation = () => {
    const [navigationList, setNavigationList] = React.useState<INavigationGroup>([]);

    React.useEffect(() => {
        setNavigationList(NAVIGATE);
    }, []);

    return { navigationList };
};
