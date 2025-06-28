import PerspectiveSidebar from "../Investigate/Wrappers/PerspectiveSideBar";
import Steps from "../Investigate/Wrappers/Steps";

export default function WindowContainer() {

    return (
        <main className="w-full 2xl:h-4/5 relative 2xl:mt-32 flex items-center 2xl:gap-x-24">
            <section className="w-full h-full 2xl:max-w-168 md:max-w-128 relative">
                <Steps />
            </section>
            <section className="w-full flex h-full items-baseline 2xl:w-96 relative">
                <PerspectiveSidebar />
            </section>
        </main>
    )
}

