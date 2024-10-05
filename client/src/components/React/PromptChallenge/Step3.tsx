import { useState } from "react";
import HelpButton from "../Buttons/help";




export default function Step3({ containerWidth, setStartSearch }: any) {

  const [statedPremise, setPremise] = useState("")

  const handlePremise = (e: React.ChangeEvent<HTMLTextAreaElement>) => { setPremise(e.target.value) }





  return (
    <div className="inline-block box-border mx-auto w-full 2xl:h-full">
      <div className="flex flex-col items-center w-full 
            mt-12 py-20 px-10 relative lg:rounded-t-[3rem] 
            overflow-hidden">

        <div className="text-center relative z-10 w-full">
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


          <textarea
            value={statedPremise}
            onChange={e => setPremise(e.target.value)}
            id="take"
            className="p-2.5 w-full md:h-56 text-md text-white bg-white/10 
              rounded-lg resize-none text-wrap border-none
            focus:border-zinc-500  placeholder-gray-40"
            placeholder="Write your thoughts here..."
          ></textarea>
        </div>



      </div>
    </div>




  );
}


