import { Virtuoso } from "react-virtuoso";
import { useVirtuoso } from "@/Hooks/useVirtuoso";
import { useSelector } from "react-redux";
import { RootState } from "@/ReduxToolKit/store";
import PriorInvestigation from "../components/InvestigationSaved";
import InvestigationSkeletons, { InvestigationSkeleton } from "../skeletons/InvestigationSkeletons";
import { useState, useRef } from "react";

export default function ResearchScroller() {
    const [inSeek, setInSeek] = useState<boolean>(false)
    const investigations = useSelector((state: RootState) => state.userWork.userResearch);
    const newArr = Array.isArray(investigations) ? [...investigations] : [];
    const timeline = newArr.reverse();
    const { visible, fullyLoaded, loadMore } = useVirtuoso(timeline);
    const scrollRef = useRef<number | null>(null)
    const enter_velocity: number = 550;
    const exit_velocity: number = 10;
    const dwell_velocity: number = 250;


    return (
        <div
            className="relative w-full h-svh overflow-x-hidden px-4"
        >
            <Virtuoso
                style={{
                    height: '100%', width: '100%', display: 'flex',
                    flexDirection: 'column', alignItems: 'start', justifyContent: 'end'
                }}
                className="no-scrollbar 2xl:gap-y-12"
                data={visible}
                endReached={loadMore}
                increaseViewportBy={50}
                context={{ fullyLoaded, inSeek }}
                components={{ Footer: InvestigationSkeletons, ScrollSeekPlaceholder: InvestigationSkeleton }}
                itemContent={(_, investigation, inSeek) => {
                    return (
                        <PriorInvestigation inSeek={inSeek} investigation={investigation} />
                    )
                }}
                scrollSeekConfiguration={{
                    enter: (velocity) => {
                        const shouldEnter: boolean = Math.abs(velocity) > enter_velocity;
                        if (shouldEnter) {
                            setInSeek(true);
                        };
                        return shouldEnter;
                    },
                    exit: (velocity) => {
                        const currentScrollSpeed: number = performance.now();
                        const shouldExit: boolean = (Math.abs(velocity) < exit_velocity);
                        if (shouldExit) {
                            if (scrollRef.current === null) scrollRef.current = currentScrollSpeed;
                            const stable = (currentScrollSpeed - scrollRef.current) >= dwell_velocity;

                            if (stable) {
                                scrollRef.current = null
                                setInSeek(false)
                            };

                            return stable;
                        }
                        return shouldExit;
                    },

                }}
            />
        </div>
    );
};