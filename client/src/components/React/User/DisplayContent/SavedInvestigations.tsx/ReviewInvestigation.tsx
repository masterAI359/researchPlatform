import FinalResults from "@/components/React/Results/FinalResults"
import InitialThoughts from "./Details/InitialThoughts"
import { RootState } from "@/ReduxToolKit/store"
import { useSelector } from "react-redux"
import { Testing } from "./Details/Testing"

export default function ReviewInvestigation() {
    const investigation = useSelector((state: RootState) => state.userWork.investigationToReview)

    return (
        <section
            className="min-h-full 2xl:w-full xs:px-2 md:px-8 scroll-smooth
  inset mx-auto xs:mt-10 xl:mt-6 relative animate-fade-in duration-200">
            <Testing />
        </section>
    )
}