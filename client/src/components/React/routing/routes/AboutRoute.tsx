import AboutHeader from "@/components/React/features/about/AboutHeader";
import Stack from "@/components/React/features/about/Stack";
import WhyElenchus from "@/components/React/features/about/WhyElenchus";

export default function AboutContainer() {

    return (
        <section
            className="flex h-auto flex-col w-full grow 
        animate-fade-in transition-opacity"
        >
            <AboutHeader />
            <WhyElenchus />
            <Stack />
        </section>
    );
};