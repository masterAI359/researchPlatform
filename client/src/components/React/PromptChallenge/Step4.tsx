import HelpButton from "../Buttons/Question"

export default function Step4({ setStartSearch }) {

    return (
        <div className="block h-full w-full ">
            <div className="px-5">
                <div className="w-full box-border border-b h-fit border-white/10 lg:mb-4 flex flex-row gap-x-8 items-baseline lg:mt-10">
                    <div className="w-fit flex justify-items-start">
                        <h1 className="text-2xl tracking-tight font-light text-white pb-2">Reflect on our argument
                        </h1>
                    </div>
                    <div className="w-fit h-full justify-items-start translate-y-1 opacity-100">
                        <HelpButton />
                    </div>


                </div>

                <div className="bg-white/10 w-full h-56 rounded-lg" >
                    <div className="flex justify-between p-1">

                    </div>
                </div>
            </div>

        </div>
    )
}

