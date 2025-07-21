import { useEffect } from "react"
import AboutHeader from "../../About/AboutHeader"
import Stack from "../../About/Stack"
import WhyElenchus from "../../About/WhyElenchus"
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