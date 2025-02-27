import SavedResearchLayout from "./SavedResearchLayout"

export default function SavedInvestigations() {

    return (
        <section className="lg:p-8 bg-black">
            <div className="px-8 py-12 lg:py-0 mx-auto md:px-12 lg:px-16 xl:px-36 2xl:max-w-7xl">
                <div className="prose-styles">
                    <h2 className="text-3xl mt-6 tracking-tight font-light lg:text-4xl text-zinc-400 mb-12">
                    </h2>
                </div>
                <div className="w-full h-full flex flex-col items-start">
                    <SavedResearchLayout />
                </div>

            </div>
        </section>


    )
}