import Completed from "../results/Completed"


export default function CompletionHero() {

    return (
        <article className="w-full h-full flex flex-col items-center gap-y-2 xs:px-4 
        transition-all animate-fade-in duration-200 delay-200">
            <main className="bg-gradientdown xs:w-full xs:mt-12 2xl:max-w-7xl h-auto p-24 2xl:mt-16 rounded-4xl">
                <Completed />
            </main>
        </article>
    )
}