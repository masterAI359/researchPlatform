import { RootState } from "@/ReduxToolKit/store"
import { useSelector } from "react-redux"
import { limitString } from "@/helpers/Presentation";
import { useEffect } from "react";


export default function PerspectiveSidebar() {
    const investigation = useSelector((state: RootState) => state.investigation);
    const { pov } = investigation;
    const { idea, perspective, expertise, biases, premises } = pov;

    const statement = limitString(idea);

    return (
        <section className="flex items-start flex-col justify-center mx-auto relative h-full 2xl:max-h-96">
            <header className="w-full">
                <div className="w-full box-border border-b border-white/10 mb-4 flex flex-row gap-x-8 items-baseline">
                    <div className="w-fit flex justify-items-start">
                        <h1 className="2xl:text-3xl md:text-2xl sm:text-xl text-sm tracking-tight font-light text-zinc-300 pb-1">
                            Overview
                        </h1>
                    </div>
                </div>
            </header>
            <main className="rounded-4xl bg-ebony/50 shadow-inset w-auto h-full flex items-center">
                <ul className="grid grid-cols-1 w-4/5 mx-auto divide-y divide-white/20">
                    <li className="w-full">
                        <div className="py-4">
                            <p className="text-white text-left text-sm">
                                Idea: <span className="text-zinc-400">
                                    {statement ? statement : idea}
                                </span>
                            </p>
                        </div>
                    </li>
                    <li className={`w-full`}>
                        <div className="py-4">
                            <p className="text-white text-left text-sm text-nowrap block">
                                Perspective: <span className="text-zinc-400">
                                    {perspective ? perspective : null}
                                </span>
                            </p>
                            <p className="text-white text-left text-sm text-nowrap block">
                                Prior Knowldege: <span className={`transition-all duration-200 ease-in-out ${expertise ? 'opacity-100' : 'opacity-0'} text-zinc-400`}>
                                    {expertise ? expertise : null}
                                </span>
                            </p>
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