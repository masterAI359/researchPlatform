import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Perspective from "./Perspective"
import HelpButton from "../Buttons/help"
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore




// IDEAS FOR PERSPECTIVE INPUT: asking the user to express their confidence level in their stance if it's an opinion they're directly challenging (their own or outside opinion)
// familiarity/expertise with the topic; 



export default function Step1({ dispatch, status, origin, setOrigin, containerWidth }: any) {
      const [isExpressed, setIsExpressed] = useState('')


      const handleStatement = (e: React.ChangeEvent<HTMLTextAreaElement>) => { setIsExpressed(e.target.value) }

      return (
            <div className="inline-block h-full  box-border w-full self-start">

                  <div className="flex-col justify-items-center w-full">
                        <div className="w-full box-border border-b h-fit border-white/10 flex flex-row justify-center items-baseline m-0">
                              <div className="self-center w-full grow justify-self-center">
                                    <h1 className="text-2xl tracking-tight font-light text-white p-4 self-end">Tackle an idea<br></br>
                                          <span className="text-zinc-400">from the top down </span>
                                    </h1>
                              </div>
                              <div className="w-fit justify-self-end self-end h-full">
                                    <HelpButton />
                              </div>


                        </div>
                        <div className="text-center z-10 w-full grow pl-3">
                              <textarea
                                    value={isExpressed}
                                    onChange={handleStatement}
                                    id="take"
                                    className="p-2.5 mt-4 w-11/12 md:h-36 text-md text-gray-900 bg-white/10 
        rounded-lg border-none focus:ring-white resize-none text-wrap
        focus:border-white dark:border-gray-600 dark:placeholder-gray-400 
        dark:text-white dark:focus:ring-white/80 dark:focus:border-white"
                                    placeholder="Write it down here, let's examine it" />
                        </div>
                        <div className="h-full top-0 bottom-0 right-0 left-0">

                              <div className="w-full box-border border-b h-fit border-white/10 flex flex-row justify-center items-baseline m-0">
                                    <div className="self-center w-full grow justify-self-center">
                                          <h1 className="text-2xl tracking-tight font-light text-white p-4 self-end">
                                                What's your perspective?
                                          </h1>
                                    </div>
                                    <div className="w-fit justify-self-end self-end h-full">
                                          <HelpButton />
                                    </div>


                              </div>

                              <div className="h-full flex flex-row gap-x-11 w-11/12 justify-center mx-auto mt-4 bottom-0 right-0 left-0">
                                    <Perspective
                                          setOrigin={setOrigin}
                                          origin={origin} />

                                    <Perspective
                                          setOrigin={setOrigin}
                                          origin={origin} />

                                    <Perspective
                                          setOrigin={setOrigin}
                                          origin={origin} />
                              </div>


                        </div>

                  </div>
            </div>
      )
}

