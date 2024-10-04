import { useState } from "react";





export default function Step3({ containerWidth, setStartSearch }: any) {

  const [statedPremise, setPremise] = useState("")

  const handlePremise = (e: React.ChangeEvent<HTMLTextAreaElement>) => { setPremise(e.target.value) }





  return (
    <div className="inline-block box-border mx-auto w-full 2xl:h-full">
      <div className="flex flex-col items-center w-full 
            mt-12 py-20 px-10 relative lg:rounded-t-[3rem] 
            overflow-hidden">

        <div className="text-center relative z-10 w-full">
          <div className="w-full box-border border-b h-fit border-white/10 flex flex-row justify-center items-baseline mb-5">
            <div className="self-center grow">
              <h1 className="text-4xl tracking-tight font-light text-white p-4">Express your reasoning<br></br>
                <span className="text-zinc-400">how did your perspective come to be?</span>
              </h1>
            </div>
            <div className="hover:cursor-pointer mb-2 self-end rounded-full w-fit h-fit bg-white/10 flex-none">
              <svg className="text-white " xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256" width="23px" height="23px" fillRule="nonzero"><g fill="currentColor" fillRule="nonzero" stroke="none" strokeWidth={1} strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit={10} strokeDasharray="" strokeDashoffset={0} fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal' }}><g transform="scale(5.12,5.12)"><path d="M25,2c-12.6907,0 -23,10.3093 -23,23c0,12.69071 10.3093,23 23,23c12.69071,0 23,-10.30929 23,-23c0,-12.6907 -10.30929,-23 -23,-23zM25,4c11.60982,0 21,9.39018 21,21c0,11.60982 -9.39018,21 -21,21c-11.60982,0 -21,-9.39018 -21,-21c0,-11.60982 9.39018,-21 21,-21zM25.28906,12.50781c-3.73,0 -6.20319,2.26013 -6.74219,5.70313c-0.035,0.216 0.07111,0.35853 0.28711,0.39453l2.25977,0.39648c0.216,0.036 0.35853,-0.07211 0.39453,-0.28711c0.43,-2.188 1.72052,-3.4082 3.72852,-3.4082c2.045,0 3.47852,1.29194 3.47852,3.33594c0,1.22 -0.42959,2.04463 -1.68359,3.76563l-2.4043,3.29883c-0.753,1.041 -1.07422,1.79447 -1.07422,3.23047v1.46875c0,0.215 0.14242,0.35947 0.35742,0.35547h2.36719c0.215,0 0.35742,-0.14242 0.35742,-0.35742v-1.14648c0,-1.219 0.21659,-1.72145 0.93359,-2.68945l2.40234,-3.30078c1.22,-1.686 1.82813,-2.94011 1.82813,-4.66211c0,-3.551 -2.61823,-6.09766 -6.49023,-6.09766zM23.71289,33.49219c-0.216,0 -0.35937,0.14437 -0.35937,0.35937v3.08398c0,0.215 0.14238,0.35742 0.35938,0.35742h2.72656c0.214,0 0.35742,-0.14142 0.35742,-0.35742v-3.08398c0,-0.214 -0.14242,-0.35937 -0.35742,-0.35937z" /></g></g></svg>
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


