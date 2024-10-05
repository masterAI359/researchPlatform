import HelpButton from "../Buttons/help"

export default function Step4({ setStartSearch }) {

    return (
        <div className="block h-full w-full">
            <div className="w-full box-border border-b h-fit border-white/10 flex flex-row justify-center items-baseline pb-5 mb-5">
                <div className="self-center w-full grow justify-self-center">
                    <h1 className="text-2xl tracking-tight font-light text-white p-4 self-end">
                        Explore our biases<br></br>
                        <span className="text-zinc-400">what influences your conclusions?</span>
                    </h1>
                </div>
                <div className="w-fit justify-self-end self-end h-full">
                    <HelpButton />
                </div>


            </div>

            <div className="bg-white/10 w-full h-52 rounded-lg" >
                <div className="flex justify-between p-1">

                </div>
            </div>
        </div>
    )
}

