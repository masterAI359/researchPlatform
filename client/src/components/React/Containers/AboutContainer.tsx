import { useEffect } from "react"
import AboutHeader from "../About/AboutHeader"
import Stack from "../About/Stack"
import { ScrollUp } from "../../../helpers/ScrollToTop"


export default function AboutContainer() {

    useEffect(() => {

        ScrollUp();
    }, [])

    return (
        <section className="flex h-auto flex-col 2xl:gap-y-24 w-full grow animate-fade-in">
            <AboutHeader />
            <Stack />
        </section>
    )
}