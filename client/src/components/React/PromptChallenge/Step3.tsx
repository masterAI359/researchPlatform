import { useState } from "react";





export default function Step3 ({ containerWidth }: any) {

    const [statedPremise, setPremise] = useState("")

    const handlePremise = (e: React.ChangeEvent<HTMLTextAreaElement>) => {setPremise(e.target.value)}
 


        
    
    return (
            <div className="inline-block box-border mx-auto w-full 2xl:h-full">
              <div className="lg:text-center max-w-xl mx-auto">
              <h2 className="2xl:text-3xl text-2xl tracking-tight mt-6 font-light text-center
              lg:text-4xl text-white">
                So you have a perspective<div className="md:block text-zinc-300 whitespace-pre-line"
                >
                  How'd you arrive here?</div>
              </h2>
            </div>

            <div className="flex flex-col items-center w-full 
            mt-12 py-20 px-10 relative lg:rounded-t-[3rem] 
            overflow-hidden">
              
              <div className="text-center relative z-10 w-full">
               
              <div className="bg-black w-full md:mb-3 rounded-lg">
                <p className="md:text-lg text-white p-3">So you have a perspective, what have you encountered that lead you to this point?<br></br>
                  Did you see some evidence in a report? Hear a convincing argument?
                </p>
            </div>
              <textarea
              value={statedPremise}
               onChange={e => setPremise(e.target.value)}
              id="take" 
              className="p-2.5 w-full md:h-56 text-md text-white bg-black 
              rounded-lg resize-none text-wrap border-none
            focus:border-zinc-500  placeholder-gray-40" 
              placeholder="Write your thoughts here..."
              ></textarea>
                    </div>
                    <div>
                   
                    </div>
                   
                  </div>
            </div>
            


              
    );
}


