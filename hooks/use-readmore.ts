import { UseReadMoreOptions, UseReadMoreReturn } from '@modules/interfaces';
import { useState, useMemo } from 'react';

export function useReadMore(
    text: string,
    options: UseReadMoreOptions = {}
): UseReadMoreReturn {
    const { maxLength = 150, suffix = '...' } = options;
    
    const [isExpanded, setIsExpanded] = useState(false);

    const isLongText = useMemo(() => text.length > maxLength, [text, maxLength]);

    const displayedText = useMemo(() => {
        if (isExpanded || !isLongText) {
            return text;
        }
        return `${text.slice(0, maxLength)}${suffix}`;
    }, [text, isExpanded, isLongText, maxLength, suffix]);

    const toggleExpand = () => setIsExpanded(!isExpanded);

    return {
        displayedText,
        isExpanded,
        isLongText,
        toggleExpand
    };
}