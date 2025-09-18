import { useSelector, useDispatch } from "react-redux"
import { SourcesFromResearch } from "../Details/SourcesUsed"
import { RootState } from "@/ReduxToolKit/store"
import { useLayoutEffect } from "react"
import { getInvestigationSources } from "@/services/supabase/SupabaseData"
import { getSourcesToReview } from "@/ReduxToolKit/Reducers/UserContent/UserInvestigations"
import DetailsTable from "../Details/DetailsTable"
import { Terms } from "../Details/wiki/containers/WikipediaTerms"
import ErrorBoundary from "@/components/React/Shared/ErrorBoundaries/ErrorBoundary"
import LostData from "@/components/React/Shared/ErrorBoundaries/messages/LostData"
import ScrolltoTop from "@/helpers/ScrollToTop"
import DetailView from "../../../ProfileNavigation/mobile/DetailView"
import { presentResearch } from "@/ReduxToolKit/Reducers/UserContent/ProfileNavigationSlice"

export default function ResearchReview() {
    const investigation = useSelector((state: RootState) => state.userWork.investigationToReview)
    const sources = investigation.sources
    const savedArticles = useSelector((state: RootState) => state.userdata.userArticles)
    const dispatch = useDispatch()
    const cachedSources = JSON.parse(localStorage.getItem('cachedSources'))

    useLayoutEffect(() => {
        const retrieved = getInvestigationSources(sources, savedArticles)
        if (retrieved) {
            dispatch(getSourcesToReview(retrieved))
        }

        if (!sources && cachedSources) {
            dispatch(getSourcesToReview(cachedSources))
        }
    }, [investigation]);


    const backTo = (): void => {
        dispatch(presentResearch());
    };


    return (
        <section
            className="h-full w-full
         relative animate-fade-in duration-200">
            <DetailView backTo={backTo} />
            <div className="w-full h-full overscroll-contain overflow-y-scroll no-scrollbar grow flex flex-col gap-y-20 items-center justify-center">
                <ErrorBoundary fallback={<LostData />}>
                    <DetailsTable />
                    <SourcesFromResearch />
                    <Terms />
                </ErrorBoundary>
            </div>


        </section>
    )
};