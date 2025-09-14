import PerspectiveSidebar from "../containers/PerspectiveSideBar";
import Steps from "../containers/Steps";

export default function WindowWrapper() {

    return (
        <main className="w-full h-full relative flex justify-center items-center">
            <article
                className="h-fit w-11/12 sm:w-full md:w-[820px] lg:w-[1000px] xl:w-[1200px] 2xl:w-full
            flex xl:mt-8 lg:mt-7 mt-16
            items-center justify-center md:justify-between md:gap-x-4
            ">
                <section className="w-fit h-fit relative">
                    <Steps />
                </section>
                <section className="hidden md:flex h-fit w-auto relative">
                    <PerspectiveSidebar />
                </section>
            </article>

        </main>
    )
}

