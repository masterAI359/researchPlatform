import HelpButton from "../../Buttons/Question";
import { Step3Help } from "@/helpInfo/help"
import StepsEditor from "../../TipTap/StepsEditor";
import { RootState } from "@/ReduxToolKit/store";
import { useSelector } from "react-redux";
import { getPremises } from "@/ReduxToolKit/Reducers/UserPOV";

export default function Step4({ containerWidth }: any) {
  const premises = useSelector((state: RootState) => state.pov.premises)

  return (
    <div style={{ flexShrink: 0, maxWidth: containerWidth }}
      className='xs:w-full
text-center mx-auto xs:h-full box-border flex xs:px-2 basis-full'>
      <div className="inline-block h-fit box-border mx-auto min-w-full max-w-full 2xl:h-full">
        <div className="flex flex-col items-center w-full 
       xs:px-0 md:px-5 relative lg:rounded-t-[3rem]">
          <div className="text-center relative z-10 w-full">
            <div className="w-full box-border border-b h-fit border-white/10 lg:mb-4 xs:mb-2
           flex flex-row gap-x-8 xs:items-center  md:items-baseline lg:mt-10">
              <div className="w-fit flex justify-items-start">
                <h1 className="2xl:text-3xl md:text-2xl xs:text-md tracking-tight font-light text-white pb-2">
                  What would support this claim?
                </h1>
              </div>
              <div className="w-fit h-full justify-items-start xs:mb-2 opacity-100">
                <HelpButton info={Step3Help} />
              </div>
            </div>
            <div className="block w-full xs:h-40 md:h-52 xl:h-80 text-md text-white bg-white/10 border-none focus:ring-1 focus:ring-white
    rounded-lg resize-none text-wrap flex justify-items-start">
              <StepsEditor context={premises} setterFunction={getPremises} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


