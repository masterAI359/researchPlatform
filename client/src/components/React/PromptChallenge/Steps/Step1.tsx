import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Perspective from "../Appproach/Perspective"
import HelpButton from "../../Buttons/Question"
import { PerspectiveHelp, IdeaHelp } from "@/helpInfo/help"
import { Help } from "@/env"
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore




// IDEAS FOR PERSPECTIVE INPUT: asking the user to express their confidence level in their stance if it's an opinion they're directly challenging (their own or outside opinion)
// familiarity/expertise with the topic; 



export default function Step1({ dispatch, status, origin, setOrigin, containerWidth }: any) {
      const [isExpressed, setIsExpressed] = useState('')


      const handleStatement = (e: React.ChangeEvent<HTMLTextAreaElement>) => { setIsExpressed(e.target.value) }

      return (
            <div className="inline-block h-fit py-40 box-border content-center w-full overflow-y-clip">
                  <div className="flex-col items-center w-full px-3 box-border">
                        <div className="w-full box-border border-b h-fit border-white/10 mb-4 flex flex-row gap-x-8 items-baseline">
                              <div className="w-fit flex justify-items-start">
                                    <h1 className="text-3xl tracking-tight font-light text-zinc-300 pb-1">Tackle an idea
                                          <span className="text-zinc-500"> from the top down </span>
                                    </h1>
                              </div>
                              <div className="w-fit h-full justify-items-start translate-y-1">
                                    <HelpButton
                                          info={IdeaHelp}
                                    />
                              </div>
                        </div>
                        <div className="flex justify-items-start gap-2 z-10 w-full">
                              <textarea
                                    value={isExpressed}
                                    onChange={handleStatement}
                                    id="take"
                                    className="p-2 w-full md:h-40 text-md text-gray-900 bg-white/10 
                              rounded-lg border-none focus:ring-white resize-none text-wrap
                              focus:border-white dark:border-gray-600 dark:placeholder-gray-400 
                              dark:text-white dark:focus:ring-white/80 dark:focus:border-white"
                                    placeholder="Write it down here, let's examine it" />
                              <Perspective
                                    setOrigin={setOrigin}
                                    origin={origin} />
                        </div>
                        {/*   <div className="h-auto top-0 bottom-0 right-0 left-0">
                              <div className="w-full box-border border-b h-fit border-white/10 flex flex-row gap-x-8 items-baseline">
                                    <div className="w-fit flex justify-items-start pb-2">
                                          <h1 className="text-2xl tracking-tight font-light text-white">Angle of approach
                                          </h1>
                                    </div>
                                    <div className="w-fit h-full justify-items-start translate-y-1 z-1">
                                          <HelpButton
                                                info={IdeaHelp}
                                          />
                                    </div>
                              </div>
                              <div className="h-full flex flex-row lg:gap-x-11 md:gap-x-6 w-11/12 justify-start mt-4 bottom-0 right-0 left-0">

                              </div>
                        </div> */}
                  </div>
            </div>
      )
}

