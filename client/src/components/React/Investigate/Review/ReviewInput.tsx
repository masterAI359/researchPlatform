import Checks from "./Checks"

export default function ReviewInput({ reducerFunction, reducerBoolean, initialResponse, PieceOfPOV, questionPrompted }) {

    return (
        <section className="h-full w-full flex flex-col 2xl:gap-y-6 border-l border-white/10">
            <div className="w-full h-full flex items-start justify-self-start ml-6">
                <div className="w-full">
                    <div className="flex flex-col gap-y-2">
                        <h1 className="2xl:text-xl text-zinc-500 font-light tracking-tight">
                            {PieceOfPOV}
                        </h1>
                        <p className="text-white bg-white/10 rounded-lg p-3"><em className="2xl:text-lg font-light"> {initialResponse}</em></p>
                    </div>
                </div>
            </div>
            <div className="w-full h-full mx-auto flex flex-col gap-y-2 items-center justify-self-end">
                <h1 className="text-zinc-500 font-light w-full tracking-tight 2xl:text-lg">
                    {questionPrompted}
                </h1>
                <Checks setterFunction={reducerFunction} answer={reducerBoolean} />
            </div>
        </section>
    )
}