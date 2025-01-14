


export default function StartingPoint({ statement, premise }) {


    return (
        <section
            className="xs:w-full xs:h-full xs:px-6 flex flex-col xs:gap-y-16 xs:mt-8 xl:mt-0 items-center content-center mx-auto">
            <div className="flex flex-col xs:gap-y-4">
                <header className="xs:w-full border-b border-white/10 flex justify-start">
                    <div>
                        <h1 className="xs:text-md lg:text-2xl lg:mb-2 2xl:text-3xl text-white font-light tracking-tight">
                            Revisit the idea
                            <span className="xs:ml-1 text-zinc-500">
                                under scrutiny
                            </span>
                        </h1>
                    </div>
                </header>
                <main className="xs:w-full xs:h-auto mx-auto">
                    <div className="xs:w-11/12">
                        <p className="xs:text-sm text-white font-light tracking-tight">
                            <em>
                                '{statement}'
                            </em>
                        </p>
                    </div>
                </main>
            </div>

            <div className="flex flex-col xs:gap-y-4">
                <header className="xs:w-full border-b border-white/10 flex justify-start">
                    <div>
                        <h1 className="xs:text-md lg:text-xl lg:mb-2 2xl:text-2xl text-white font-light tracking-tight">
                            <span className="text-zinc-500">These premises below</span> would support the above idea
                        </h1>
                    </div>
                </header>
                <main className="xs:w-full xs:h-auto mx-auto">
                    <div className="xs:w-11/12">
                        <p className="xs:text-sm text-white font-light tracking-tight">
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