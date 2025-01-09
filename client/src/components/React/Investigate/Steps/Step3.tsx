import { useState, useEffect } from "react";
import HelpButton from "../../Buttons/Question";
import { Step2Help } from "@/helpInfo/help"
import StepsEditor from "../../TipTap/StepsEditor";
import { RootState } from "@/ReduxToolKit/store";
import { useSelector, useDispatch } from "react-redux";
import { getBiases } from "@/ReduxToolKit/Reducers/UserPOV";

export default function Step3({ setGettingHelp }: any) {
  const [bias, setBias] = useState<string>(null)
  const biases = useSelector((state: RootState) => state.pov.biases)
  const dispatch = useDispatch()

  useEffect(() => {

    if (bias !== null) dispatch(getBiases(bias))

  }, [bias])

  return (
    <div className={`h-fit box-border content-start mx-auto min-w-full max-w-full inline-block`}>
      <div className="flex flex-col items-center w-full xs:px-2 xs:px-0">

        <div className="w-full box-border border-b h-fit border-white/10 
        rounded-lg xs:mb-2 lg:mb-4 flex flex-row xs:gap-x-4 md:gap-x-8 items-baseline lg:mt-10">
          <div className="w-fit flex justify-items-start">
            <h1 className="2xl:text-3xl md:text-2xl tracking-tight font-light text-white pb-2 xs:text-md">Explore our biases
            </h1>
          </div>
          <div className="w-fit h-full justify-items-start translate-y-1 opacity-100">
            <HelpButton info={Step2Help} setGettingHelp={setGettingHelp} />
          </div>
        </div>
        <div className="text-center w-full">
          <div
            className="block w-full xs:h-40 md:h-52 xl:h-80 text-md text-white bg-white/10 border-none focus:ring-1 focus:ring-white
    rounded-lg resize-none text-wrap flex justify-items-start"
          >
            <StepsEditor setterFunction={setBias} />
          </div>
        </div>
      </div>
    </div>
  )
}


