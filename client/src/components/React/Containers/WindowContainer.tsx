import PerspectiveSidebar from "../Features/investigate/getPerspective/containers/PerspectiveSideBar";
import Steps from "../Features/investigate/getPerspective/containers/Steps";

export default function WindowContainer() {

    return (
        <main className="w-full h-full relative flex justify-center items-center">
            <article className="h-fit w-11/12 sm:w-full flex items-center justify-center 
            lg:pt-8 md:pt-20 pt-24 md:gap-x-4
            lg:gap-x-16 xl:gap-x-20 2xl:gap-x-24">
                <section className="w-full h-fit relative">
                    <Steps />
                </section>
                <section className="hidden md:flex h-fit w-auto relative">
                    <PerspectiveSidebar />
                </section>
            </article>

        </main>
    )
}

