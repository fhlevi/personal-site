import { useState, useCallback } from 'react';

export const useHover = () => {
    const [isHover, setIsHover] = useState(false);

    const onHoverEnter = useCallback(() => setIsHover(true), []);
    const onHoverLeave = useCallback(() => setIsHover(false), []);

    return { isHover, onHoverEnter, onHoverLeave };
};
