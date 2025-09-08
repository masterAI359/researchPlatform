import { useEffect } from "react"
import AboutHeader from "../../features/about/AboutHeader"
import Stack from "../../features/about/Stack"
import WhyElenchus from "../../features/about/WhyElenchus"
import { ScrollUp } from "../../../../helpers/ScrollToTop"


export default function AboutContainer() {

    useEffect(() => {

        ScrollUp();
    }, [])

    return (
        <section className="flex h-auto flex-col w-full grow animate-fade-in transition-all duration-200 ease-in">
            <AboutHeader />
            <WhyElenchus />
            <Stack />
        </section>
    )
}