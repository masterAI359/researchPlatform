import { useCallback } from "react";
import { Tooltips } from "@/env";


export function useTooltipFlags() {

    const getFlags = useCallback(() => {
        const stored: string = localStorage.getItem('tooltipFlags');
        return stored ? JSON.parse(stored) : {};
    }, []);

    const setFlag = useCallback((flagName: keyof Tooltips, value: boolean): void => {

        const flags: Tooltips = getFlags();
        flags[flagName] = value;
        localStorage.setItem('tooltipFlags', JSON.stringify(flags));
    }, [getFlags]);

    return { getFlags, setFlag };
};