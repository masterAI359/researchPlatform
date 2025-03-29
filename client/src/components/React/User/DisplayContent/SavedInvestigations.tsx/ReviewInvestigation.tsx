import { useSelector, useDispatch } from "react-redux"
import DetailsTable from "./Details/DetailsTable"
import SourcesUsed from "./Details/SourcesUsed"
import { RootState } from "@/ReduxToolKit/store"
import { useLayoutEffect, useState } from "react"
import { getInvestigationSources } from "@/helpers/SupabaseData"
import { getSourcesToReview } from "@/ReduxToolKit/Reducers/UserContent.ts/UserInvestigations"
import BackToSavedResearch from "./BackToSavedResearch"

export default function ReviewInvestigation() {
    const investigation = useSelector((state: RootState) => state.userWork.investigationToReview)
    const [stored, setStored] = useState<any>()
    const sources = investigation.sources
    const savedArticles = useSelector((state: RootState) => state.userdata.userArticles)
    const savedSources = savedArticles
    const sourcesSaved = useSelector((state: RootState) => state.userWork.sourcesToReview)
    const dispatch = useDispatch()

    useLayoutEffect(() => {

        setStored(localStorage.getItem('storedResearch'))

        if (sources) {
            const retrieved = getInvestigationSources(sources, savedSources)

            if (retrieved) {
                dispatch(getSourcesToReview(retrieved))
            }
        }

        console.log(stored)

    }, [stored])


    return (
        <section
            className="min-h-full 2xl:w-full xs:px-2 md:px-8 scroll-smooth
  inset mx-auto mt-0 md:mt-6 relative animate-fade-in duration-200">
            <BackToSavedResearch />
            <DetailsTable />
            {sourcesSaved && <SourcesUsed />}
        </section>
    )
}