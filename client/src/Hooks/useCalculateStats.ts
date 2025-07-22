import { useCallback, useState } from "react";
import { calculatePercentages } from "@/helpers/Ratings";
import { useSelector } from "react-redux";
import { RootState } from "@/ReduxToolKit/store";

export function useCalculateStats() {
    const investigations = useSelector((state: RootState) => state.userWork.userResearch);
    const [stats, setStats] = useState({
        percentChanged: null,
        validated: null,
        neutral: null,
        neededMore: null
    });

    const getStats = useCallback(() => {
        if (!Array.isArray(investigations) || investigations.length === 0) return;

        const calculated: Calculations = calculatePercentages(investigations);

        if (calculated) {
            setStats({
                percentChanged: calculated.change,
                validated: calculated.valid,
                neutral: calculated.neutral,
                neededMore: calculated.needMore
            });
        };

    }, [investigations])

    return { getStats, stats, setStats };
};