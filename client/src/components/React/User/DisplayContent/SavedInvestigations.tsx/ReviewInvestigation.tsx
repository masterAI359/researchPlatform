import { useSelector, useDispatch } from "react-redux"
import DetailsTable from "./Details/DetailsTable"
import { SourcesFromResearch } from "./Details/SourcesUsed"
import { RootState } from "@/ReduxToolKit/store"
import { useLayoutEffect } from "react"
import { getInvestigationSources } from "@/helpers/SupabaseData"
import { getSourcesToReview } from "@/ReduxToolKit/Reducers/UserContent.ts/UserInvestigations"
import BackToSavedResearch from "./BackToSavedResearch"
import ErrorBoundary from "@/components/React/ErrorBoundaries/ErrorBoundary"
import LostData from "@/components/React/ErrorMessages/LostData"
import ScrolltoTop from "@/components/React/AppRouting/ScrollToTop"
import { Terms } from "./Details/WikipediaTerms"

export default function ReviewInvestigation() {
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

        if(!sources && cachedSources) {
            dispatch(getSourcesToReview(cachedSources))
        }
    }, [investigation])


    return (
        <section
            className="min-h-full 2xl:w-full xs:px-2 md:px-8 scroll-smooth
  inset mx-auto mt-0 md:mt-6 relative animate-fade-in duration-200">
            <ScrolltoTop />
            <BackToSavedResearch />
            <div className="w-full h-full flex flex-col gap-y-24 items-center justify-center">
 <ErrorBoundary fallback={ <LostData /> }>
             <DetailsTable />
            <SourcesFromResearch  />
            <Terms/>
            </ErrorBoundary>
            </div>
           
           
        </section>
    )
}