import { useState } from "react";
import HelpButton from "../Buttons/help";




export default function Step3({ containerWidth, setStartSearch }: any) {

  const [statedPremise, setPremise] = useState("")

  const handlePremise = (e: React.ChangeEvent<HTMLTextAreaElement>) => { setPremise(e.target.value) }





  return (
    <div className="inline-block box-border mx-auto w-full 2xl:h-full">
      <div className="flex flex-col items-center w-full 
            mt-12 py-20 px-5 relative lg:rounded-t-[3rem]">

        <div className="text-center relative z-10 w-full">
          <div className="w-full box-border border-b h-fit border-white/10 lg:mb-4 flex flex-row gap-x-8 items-baseline lg:mt-10">
            <div className="w-fit flex justify-items-start">
              <h1 className="text-2xl tracking-tight font-light text-white pb-4">
                What informs your point of view?
              </h1>
            </div>
            <div className="w-fit h-full justify-items-start translate-y-1 opacity-100">
              <HelpButton />
            </div>


          </div>


          <textarea
            value={statedPremise}
            onChange={e => setPremise(e.target.value)}
            id="take"
            className="p-2.5 w-full md:h-56 text-md text-white bg-white/10 
              rounded-lg resize-none text-wrap border-none focus:ring-1 focus:ring-white
            focus:border-none focus:outline-none  placeholder-gray-40"
            placeholder="Write your thoughts here..."
          ></textarea>
        </div>



      </div>
    </div>




  );
}


