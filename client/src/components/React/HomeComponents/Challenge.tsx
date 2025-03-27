import { Link } from "react-router-dom"

export default function Challenge() {

    return (
        <section className="lg:p-8 xs:p-4 animate-fade-in ease-in duration-700">
            <div className="px-8 py-12 lg:py-24 mx-auto md:px-12 lg:px-16 xl:px-36 2xl:max-w-7xl">
                <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:gap-24 items-center">
                    <div>
                        <span className="text-blue-400"> Investigate</span>
                        <h2 className="text-3xl mt-6 tracking-tight font-light lg:text-4xl text-white">
                            Challenge a perspective
                            <span className="block text-zinc-400">web togther ideas</span>
                        </h2>
                        <p className="mt-4 text-base text-white text-balance">
                            When was the last time something invoked a sense of frustration,
                            passion or skepticism that came across your path?
                        </p>
                        <p className="mt-4 text-base text-zinc-400 text-balance">
                            From the top down visualize your entire thought process,
                            establishing what you believe and why
                        </p>
                        <div className="inline-flex flex-wrap items-center mt-8">
                            <div className="text-sm py-2 px-4 border focus:ring-2 rounded-full border-transparent 
                            bg-white hover:bg-white/10 text-black duration-200 focus:ring-offset-2 focus:ring-white 
                            hover:text-white inline-flex items-center justify-center ring-1 ring-transparent cursor-pointer">
                                <Link to='/Investigate'> Get started &nbsp; →</Link>

                            </div>
                        </div>
                    </div>
                    <img className="h-96 w-96 md:h-auto md:w-auto" src="/images/assets/circuitry.svg" alt="#" />
                </div>
            </div>
        </section>
    )
}