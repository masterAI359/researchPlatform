import Steps from "../Investigate/Wrappers/Steps";

export default function WindowContainer() {

    return (
        <main className="w-full min-h-full relative flex">
            <section className="w-full 2xl:max-w-168 md:max-w-128 h-full relative mt-6 mb:16 md:mt-0">
                <Steps />
            </section>
        </main>
    )
}

