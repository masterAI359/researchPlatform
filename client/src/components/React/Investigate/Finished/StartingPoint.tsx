


export default function StartingPoint({ statement, premise }) {


    return (
        <section
            className="xs:w-full xl:min-w-full xs:h-full xs:px-6 flex flex-col xs:gap-y-16
             xs:mt-8 xl:mt-0 items-start content-center mx-auto">
            <div className="flex flex-col xs:gap-y-4 xl:gap-y-12">
                <header className="xs:w-full border-b border-white/10 flex justify-start">
                    <div className="">
                        <h1 className="xs:text-md lg:text-2xl lg:mb-2 2xl:text-3xl text-white font-light tracking-tight">
                            Now that we've come full circle, <span className="text-zinc-500">
                                let's recap where we began
                            </span>
                        </h1>
                    </div>
                </header>
                <main className="xs:w-full xs:h-auto mx-auto">
                    <div className="xs:w-11/12 bg-white/5 rounded-full p-3">
                        <p className="xs:text-sm 2xl:text-lg text-white font-light tracking-tight">
                            <em>
                                {statement}
                            </em>
                        </p>
                    </div>
                </main>
            </div>

            <div className="flex flex-col xs:gap-y-4 xl:gap-y-16">
                <header className="xs:w-full border-b border-white/10 flex justify-start">
                    <div>
                        <h1 className="xs:text-md lg:text-xl lg:mb-2 2xl:text-3xl text-white font-light tracking-tight">
                            <span className="text-zinc-500">These premises below</span> would support the above idea
                        </h1>
                    </div>
                </header>
                <main className="xs:w-full xs:h-auto mx-auto">
                    <div className="xs:w-11/12 bg-white/5 rounded-full p-3">
                        <p className="xs:text-sm 2xl:text-lg text-white font-light tracking-tight">
                            <em>
                                {premise}
                            </em>
                        </p>
                    </div>
                </main>
            </div>

        </section>
    )
}