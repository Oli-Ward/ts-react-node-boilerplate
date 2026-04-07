import { useState, useEffect } from 'react';
import { setItem, getItem } from '@/utils/localStorage';

export const useLocalStorage = <T>(key: string, initialValue: T) => {
    const [state, setState] = useState<T>(() => {
        return getItem(key) ?? initialValue;
    });

    useEffect(() => {
        setItem(key, state);
    }, [key, state]);

    return [state, setState] as const;
}