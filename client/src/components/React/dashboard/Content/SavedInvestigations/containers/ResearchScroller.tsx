import { Virtuoso } from "react-virtuoso";
import { useVirtuoso } from "@/Hooks/useVirtuoso";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/ReduxToolKit/store";
import PriorInvestigation from "../components/InvestigationSaved";
import InvestigationSkeletons from "../skeletons/InvestigationSkeletons";
import { useEffect } from "react";
import { fetchSavedInvestigations } from "@/ReduxToolKit/Reducers/UserContent.ts/UserInvestigations";

export default function ResearchScroller() {
    const investigations = useSelector((state: RootState) => state.userWork.userResearch);
    const newArr = Array.isArray(investigations) ? [...investigations] : [];
    const timeline = newArr.reverse();
    const { visible, fullyLoaded, loadMore } = useVirtuoso(timeline);
    const dispatch = useDispatch<AppDispatch>();


    useEffect(() => {


        return () => {
            dispatch(fetchSavedInvestigations());
        }
    }, []);


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
                context={{ fullyLoaded }}
                components={{ Footer: InvestigationSkeletons }}
                itemContent={(index, investigation) => {
                    return (
                        <PriorInvestigation investigation={investigation} />
                    )
                }}
            />
        </div>
    );
};