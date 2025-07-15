import HelpButton from "../../Buttons/HelpButtons/Question";
import { Step4Help } from "@/helpInfo/help";
import StepsEditor from "../../TipTap/StepsEditor";
import { RootState } from "@/ReduxToolKit/store";
import { useSelector } from "react-redux";
import { getPremises } from "@/ReduxToolKit/Reducers/Investigate/UserPOV";

export default function Step4({ containerWidth }: any) {
  const investigateState = useSelector((state: RootState) => state.investigation)
  const { pov } = investigateState
  const { premises } = pov

  return (
    <div style={{ flexShrink: 0, maxWidth: containerWidth }}
      className='absolute inset-0'>
      <div className="inline-block h-fit box-border mx-auto min-w-full max-w-full 2xl:h-full">
        <div className="flex flex-col items-center w-full 
       xs:px-0 relative lg:rounded-t-[3rem]">
          <div className="text-center relative z-10 w-full">

            <div className="w-full border-none h-44 sm:h-52 xl:h-72 2xl:max-w-168 text-md text-white bg-transparent focus:ring-1 focus:ring-white
     resize-none text-wrap flex justify-items-start">
              <StepsEditor context={premises} setterFunction={getPremises} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


