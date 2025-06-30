import { RootState } from "@/ReduxToolKit/store"
import { useSelector } from "react-redux"
import { limitString } from "@/helpers/Presentation";


export default function PerspectiveSidebar() {
    const investigation = useSelector((state: RootState) => state.investigation);
    const { pov } = investigation;
    const { idea, perspective, expertise, biases, premises } = pov;

    const statement = idea ? limitString(idea) : null;

    return (
        <section className={`mx-auto w-full relative h-full`}>

            <main className="rounded-4xl bg-ebony/50 shadow-inset h-full w-full flex flex-col shrink-0 items-center py-4 
            md:w-[16.5rem] md:h-80 2xl:w-96 xl:w-88 lg:w-80 lg:h-88 xl:h-88 2xl:h-96">
                <header className="w-4/5">
                    <div className="w-full">
                        <div className="w-fit mx-auto">
                            <h1 className="2xl:text-3xl md:text-2xl sm:text-xl text-sm tracking-tight text-center font-light text-zinc-400 pb-1">
                                Your Framework
                            </h1>
                        </div>
                    </div>
                </header>
                <ul className="grid grid-cols-1 items-center justify-center h-full w-4/5 mx-auto divide-y divide-white/20">
                    <li className="w-full">
                        <div className="py-4">
                            <p className="text-white text-left lg:text-sm text-xs">
                                Idea: <span className="text-zinc-400">
                                    {statement ? statement : idea}
                                </span>
                            </p>
                        </div>
                    </li>
                    <li className={`w-full`}>
                        <div className="py-2 flex flex-col gap-y-3">
                            <div>
                                <p className="text-white text-left text-sm text-nowrap">
                                    Perspective: <span className="text-zinc-400">
                                        {perspective ? perspective : null}
                                    </span>
                                </p>
                            </div>

                            <div>
                                <p className="text-white text-left text-sm text-nowrap">
                                    Prior Knowldege: <span className={`transition-all duration-200 ease-in-out ${expertise ? 'opacity-100' : 'opacity-0'} text-zinc-400`}>
                                        {expertise ? expertise : null}
                                    </span>
                                </p>
                            </div>

                        </div>
                    </li>
                    <li className={`w-full`}>
                        <div className="py-4">
                            <p className="text-white text-left text-sm text-nowrap block">
                                Biases: <span className={`transition-all duration-200 ease-in-out ${biases ? 'opacity-100' : 'opacity-0'} text-zinc-400`}>
                                    {biases ? biases : null}
                                </span>
                            </p>
                        </div>
                    </li>
                    <li className={`w-full`}>
                        <div className="py-4">
                            <p className="text-white text-left text-sm text-nowrap block">
                                Premises: <span className={`transition-all duration-200 ease-in-out ${premises ? 'opacity-100' : 'opacity-0'} text-zinc-400`}>
                                    {premises ? premises : null}
                                </span>
                            </p>
                        </div>
                    </li>
                </ul>
            </main>
        </section>
    )
}