import { useState, useEffect } from "react";
import HelpButton from "../../Buttons/Question";
import { Step2Help } from "@/helpInfo/help"
import StepsEditor from "../../TipTap/StepsEditor";
import { Help } from "@/env"

interface BiasProps {
  statement: string,
  identifier: string,
  status: string,
  contianerWidth: number
}

//{ identifier, statement, status }

export default function Step3({ containerWidth, setGettingHelp }: any) {
  const [bias, setBias] = useState('')

  console.log(bias)


  return (
    <div className={`h-fit box-border content-start mx-auto w-full inline-block`}>
      <div className="flex flex-col items-center w-full px-5">

        <div className="w-full box-border border-b h-fit border-white/10 lg:mb-4 flex flex-row gap-x-8 items-baseline lg:mt-10">
          <div className="w-fit flex justify-items-start">
            <h1 className="text-2xl tracking-tight font-light text-white pb-2 xs:text-xl">Explore our biases
            </h1>
          </div>
          <div className="w-fit h-full justify-items-start translate-y-1 opacity-100">
            <HelpButton info={Step2Help} setGettingHelp={setGettingHelp} />
          </div>


        </div>
        <div className="text-center w-full">

          <div
            id="take"
            className="block w-full xs:h-40 md:h-52 lg:mb-12 text-md text-white bg-white/10 border-none focus:ring-1 focus:ring-white
    rounded-lg resize-none text-wrap flex justify-items-start"
          >
            <StepsEditor setterFunction={setBias} />
          </div>
        </div>
      </div>
    </div>
  )
}


