import { useSelector, useDispatch } from "react-redux"
import DetailsTable from "./Details/DetailsTable"
import SourcesUsed from "./Details/SourcesUsed"
import { RootState } from "@/ReduxToolKit/store"
import { useLayoutEffect } from "react"
import { getInvestigationSources } from "@/helpers/SupabaseData"
import { getSourcesToReview } from "@/ReduxToolKit/Reducers/UserContent.ts/UserInvestigations"

export default function ReviewInvestigation() {
    const investigation = useSelector((state: RootState) => state.userWork.investigationToReview)
    const sources = investigation.sources
    const savedArticles = useSelector((state: RootState) => state.userdata.userArticles)
    const savedSources = savedArticles
    const sourcesSaved = useSelector((state: RootState) => state.userWork.sourcesToReview)
    const dispatch = useDispatch()

    useLayoutEffect(() => {
        if (sources) {
            const retrieved = getInvestigationSources(sources, savedSources)

            if (retrieved) {
                dispatch(getSourcesToReview(retrieved))
            }
        }

    }, [])


    return (
        <section
            className="min-h-full 2xl:w-full xs:px-2 md:px-8 scroll-smooth
  inset mx-auto xs:mt-10 xl:mt-6 relative animate-fade-in duration-200">
            <DetailsTable />
            {sourcesSaved && <SourcesUsed />}
        </section>
    )
}