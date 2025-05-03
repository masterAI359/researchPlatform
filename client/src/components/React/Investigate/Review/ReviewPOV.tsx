import { useSelector } from "react-redux"
import { RootState } from "@/ReduxToolKit/store"
import { delay, motion } from "framer-motion"

export default function ReviewPOV() {
    const investigateState = useSelector((state: RootState) => state.investigation)
    const { pov } = investigateState
    const { idea, perspective } = pov

    return (
        <section className="h-fit w-full p-6 2xl:w-[36rem] 2xl:h-[32rem] 2xl:p-10 box-border md:grow flex flex-col
         lg:bg-gradient-to-tr from-ebony to-mirage border border-white/5
        rounded-3xl xs:gap-y-6 2xl:gap-y-16 items-center content-center">
            <header className="xs:w-full 2xl:min-w-96 mx-auto ">
                <h1 className="text-lg text-left text-center mx-auto w-full lg:text-xl 
                lg:mb-2 2xl:text-4xl text-white font-light tracking-tight">
                    Where you began
                </h1>
            </header>
            <main
                className="h-full w-full flex flex-col gap-y-6 grow lg:min-h-16">
                <div className="w-full h-full flex flex-col gap-y-4 ">
                    <div className="w-full border-b border-white/20">
                        <h1 className="text-white font-light mb-0.5 text-sm 2xl:text-xl">
                            <em>Idea Examined</em>
                        </h1>
                    </div>
                    <div className="w-full h-full">
                        <p className="text-zinc-300 text-sm font-light tracking-tight">
                            {idea}
                        </p>
                    </div>
                </div>
                <div className="w-full h-full flex flex-col gap-y-4 lg:min-h-20">
                    <div className="w-full border-b border-white/20">
                        <h1 className="text-white font-light mb-0.5 text-base 2xl:text-xl ">
                            <em> Initial Perspective</em>

                        </h1>
                    </div>
                    <div className="w-full h-full">
                        <p className="text-zinc-300 text-xs">
                            {perspective}
                        </p>
                    </div>
                </div>
            </main>
        </section>
    )
}
