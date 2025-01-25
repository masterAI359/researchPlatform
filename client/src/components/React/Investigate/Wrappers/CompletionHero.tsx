import Completed from "../Completion/Completed"


export default function CompletionHero() {

    return (
        <article className="w-full h-full flex flex-col items-center gap-y-2 xs:px-4">
            <main className="bg-gradientdown 2xl:max-w-7xl h-auto p-24 mt-16 rounded-4xl">
                <Completed />
            </main>
        </article>
    )
}