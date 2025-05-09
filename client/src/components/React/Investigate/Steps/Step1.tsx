import { useState, useEffect } from "react"
import StepsEditor from "../../TipTap/StepsEditor"
import HelpButton from "../../Buttons/HelpButtons/Question"
import { Step1Help } from "@/helpInfo/help"
import { getIdea } from "@/ReduxToolKit/Reducers/Investigate/UserPOV"
import { acceptedInput, denyIncrement } from "@/ReduxToolKit/Reducers/Investigate/Steps"
import { useSelector, useDispatch } from "react-redux"
import { RootState } from "@/ReduxToolKit/store"

export default function Step1({ containerWidth }: any) {
      const investigateState = useSelector((state: RootState) => state.investigation)
      const selected = useSelector((state: RootState) => state.bluesky.selected);
      const [nextClicked, setNextClicked] = useState<boolean>(false);
      const { showBlueSkySearch } = investigateState.display;
      const { stepper, pov } = investigateState
      const { step, acceptInput, denied } = stepper
      const { idea } = pov
      const dispatch = useDispatch()
      const chosenTake = selected ? selected : idea;

      let wordCount = (statement: string) => {
            if (statement !== '') {
                  let trimmed: string[] = statement.trim().split(' ')
                  return trimmed.length
            }
      }

   
        


      useEffect(() => {


            if(selected && idea !== '') return
           

            window.addEventListener('nextStepClick', () => {
                  setNextClicked(true)
            })

            let words: number = null
            if(nextClicked) {
                  words = wordCount(idea);
            } 

            if(selected && idea !== '') {
                  dispatch(acceptedInput(true))
            } else if(selected && idea === '') {
                  dispatch(acceptedInput(false))
            }

            if(selected) {
                  words = wordCount(idea)
            }
           

            if (words < 5 && words !== null) {
                  dispatch(denyIncrement(true))
                  dispatch(acceptedInput(false))
            } else if (words >= 5 && words !== null) {
                  dispatch(denyIncrement(false))
                  dispatch(acceptedInput(true))
            }

      }, [idea, acceptInput, nextClicked, showBlueSkySearch, selected, denied])


      return (
            <div
                  className='w-full shrink-0 snap-center snap-always
                  text-center mx-auto xs:h-full box-border flex xs:px-2 basis-full'>
                  <div className="w-full box-border">
                        <div className="flex-col items-center h-full w-full box-border">
                              <div className="w-full box-border border-b h-fit border-white/10 mb-4 flex flex-row gap-x-8 items-baseline">
                                    <div className="w-fit flex justify-items-start">
                                          <h1 className="2xl:text-3xl md:text-2xl sm:text-xl text-sm tracking-tight font-light text-zinc-300 pb-1">Tackle an idea
                                                <span className="text-zinc-500"> from the top down </span>
                                          </h1>
                                    </div>
                                    <div className="w-fit h-full justify-items-start translate-y-1">
                                          <HelpButton
                                                info={Step1Help}
                                          />
                                    </div>
                              </div>
                              <div className="flex justify-items-start gap-2 z-10 w-full">
                                    <div className={`w-full max-w-full overflow-hidden grow-0 bg-white/10 h-44 sm:h-52 md:w-full lg:h-60 xl:h-80 pb-8 sm:pb-7 rounded-lg border border-solid box-border shadow-material_2
                                    ${acceptInput === null ? 'border-transparent' : acceptInput === true ? 'border-blue-500' : 'border-red-800'}`}>
                                          <StepsEditor context={chosenTake} setterFunction={getIdea}/>
                                          <div
                                                className={`flex flex-row-reverse items-center w-full h-fit`}>
                                                <div className="justify-self-end h-fit w-auto rounded-full">
                                                      {acceptInput === null
                                                            ? ''
                                                            : acceptInput === true
                                                                  ? <svg className="text-blue-500 bottom-2 right-2" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256" width="25px" height="25px" fillRule="nonzero"><g fill="currentColor" fillRule="nonzero" stroke="none" strokeWidth={1} strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit={10} strokeDasharray="" strokeDashoffset={0} fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal' }}><g transform="scale(16,16)"><path d="M7.5,1c-3.58203,0 -6.5,2.91797 -6.5,6.5c0,3.58203 2.91797,6.5 6.5,6.5c3.58203,0 6.5,-2.91797 6.5,-6.5c0,-3.58203 -2.91797,-6.5 -6.5,-6.5zM7.5,2c3.04297,0 5.5,2.45703 5.5,5.5c0,3.04297 -2.45703,5.5 -5.5,5.5c-3.04297,0 -5.5,-2.45703 -5.5,-5.5c0,-3.04297 2.45703,-5.5 5.5,-5.5zM10.14453,5.14844l-3.64453,3.64453l-1.64844,-1.64453l-0.70312,0.70313l2.35156,2.35547l4.35547,-4.35547z" /></g></g></svg>
                                                                  : acceptInput === false
                                                                        ? <svg className="bottom-2 pr-1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256" width="25px" height="25px" fillRule="nonzero"><g fill="#f24343" fillRule="nonzero" stroke="none" strokeWidth={1} strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit={10} strokeDasharray="" strokeDashoffset={0} fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal' }}><g transform="scale(5.12,5.12)"><path d="M25,2c-12.6907,0 -23,10.3093 -23,23c0,12.69071 10.3093,23 23,23c12.69071,0 23,-10.30929 23,-23c0,-12.6907 -10.30929,-23 -23,-23zM25,4c11.60982,0 21,9.39018 21,21c0,11.60982 -9.39018,21 -21,21c-11.60982,0 -21,-9.39018 -21,-21c0,-11.60982 9.39018,-21 21,-21zM17.52734,16l6.08789,8.94336l-6.16211,9.05664h2.54492l4.80273,-7.09766h0.19922l4.7168,7.09766h2.69336l-6.09961,-8.95508l6.23633,-9.04492h-2.55664l-4.81445,7.16016h-0.20117l-4.74023,-7.16016z" /></g></g></svg>
                                                                        : null}

                                                </div>
                                                <div className="justify-self-end items-center h-fit w-auto mr-2">
                                                      {acceptInput === null
                                                            ? ''
                                                            : acceptInput === true
                                                                  ? <p className="font-light tracking-tight text-zinc-400 text-md">Proceed</p>
                                                                  : acceptInput === false
                                                                        ? <p className="font-normal tracking-tight text-red-600 text-md">Input must be a minimum of 5 words</p>
                                                                        : null}
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      )
}

