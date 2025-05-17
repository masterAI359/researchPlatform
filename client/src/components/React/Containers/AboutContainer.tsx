import AboutHeader from "../About/AboutHeader"
import Stack from "../About/Stack"


export default function AboutContainer() {

    return (
        <section className="flex h-auto flex-col 2xl:gap-y-24 w-full grow animate-fade-in">
            <AboutHeader />
            <Stack />
        </section>
    )
}