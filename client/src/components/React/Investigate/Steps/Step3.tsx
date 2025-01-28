import { useState, useEffect } from "react";
import HelpButton from "../../Buttons/HelpButtons/Question";
import { Step2Help } from "@/helpInfo/help"
import StepsEditor from "../../TipTap/StepsEditor";
import { RootState } from "@/ReduxToolKit/store";
import { useSelector, useDispatch } from "react-redux";
import { getBiases } from "@/ReduxToolKit/Reducers/UserPOV";

export default function Step3({ containerWidth }: any) {
  const biases = useSelector((state: RootState) => state.pov.biases)
  const dispatch = useDispatch()



  return (
    <div style={{ flexShrink: 0, maxWidth: containerWidth }}
      className='xs:w-full
  text-center mx-auto xs:h-full box-border flex xs:px-2 md:px-0 basis-full'>
      <div className={`h-fit box-border content-start mx-auto min-w-full max-w-full inline-block`}>
        <div className="flex flex-col items-center w-full">

          <div className="w-full box-border border-b h-fit border-white/10 
        rounded-lg xs:mb-2 lg:mb-4 flex flex-row xs:gap-x-4 md:gap-x-8 items-baseline">
            <div className="w-fit flex justify-items-start">
              <h1 className="2xl:text-3xl md:text-2xl tracking-tight font-light text-white pb-2 xs:text-md">Explore our biases
              </h1>
            </div>
            <div className="w-fit h-full justify-items-start translate-y-1 opacity-100">
              <HelpButton info={Step2Help} />
            </div>
          </div>
          <div className="text-center w-full">
            <div
              className="block w-full xs:h-40 md:h-52 xl:h-80 text-md text-white bg-white/10 border-none focus:ring-1 focus:ring-white
    rounded-lg resize-none text-wrap flex justify-items-start"
            >
              <StepsEditor context={biases} setterFunction={getBiases} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


