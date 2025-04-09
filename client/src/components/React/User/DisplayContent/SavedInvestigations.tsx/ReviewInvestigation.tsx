import { useSelector, useDispatch } from "react-redux"
import DetailsTable from "./Details/DetailsTable"
import SourcesUsed from "./Details/SourcesUsed"
import { RootState } from "@/ReduxToolKit/store"
import { useLayoutEffect } from "react"
import { getInvestigationSources } from "@/helpers/SupabaseData"
import { getSourcesToReview } from "@/ReduxToolKit/Reducers/UserContent.ts/UserInvestigations"
import BackToSavedResearch from "./BackToSavedResearch"
import ErrorBoundary from "@/components/React/ErrorBoundaries/ErrorBoundary"
import LostData from "@/components/React/ErrorMessages/LostData"

export default function ReviewInvestigation() {
    const investigation = useSelector((state: RootState) => state.userWork.investigationToReview)
    const sources = useSelector((state: RootState) => state.userWork.sourcesToReview)
    const savedArticles = useSelector((state: RootState) => state.userdata.userArticles)
    const dispatch = useDispatch()
    const cachedSources = JSON.parse(localStorage.getItem('cachedSources'))

    useLayoutEffect(() => {

        if (sources) {
            const retrieved = getInvestigationSources(sources, savedArticles)
            if (retrieved) {
                dispatch(getSourcesToReview(retrieved))
            }
        } 

        if(!sources && cachedSources) {
            dispatch(getSourcesToReview(cachedSources))
            console.log(sources)
        }

       return () => {
        dispatch(getSourcesToReview(null))
       }

    }, [])


    return (
        <section
            className="min-h-full 2xl:w-full xs:px-2 md:px-8 scroll-smooth
  inset mx-auto mt-0 md:mt-6 relative animate-fade-in duration-200">
            <BackToSavedResearch />
            <ErrorBoundary fallback={ <LostData /> }>
           {investigation !== null && <>
            <DetailsTable />
             <SourcesUsed />
           </>}
            </ErrorBoundary>
           
        </section>
    )
}