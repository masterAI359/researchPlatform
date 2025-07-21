import { useState, useEffect } from "react"
import StepsEditor from "../../../../../Shared/TipTap/StepsEditor"
import { getIdea } from "@/ReduxToolKit/Reducers/Investigate/UserPOV"
import { acceptedInput, denyIncrement } from "@/ReduxToolKit/Reducers/Investigate/Steps"
import { useSelector, useDispatch } from "react-redux"
import { RootState } from "@/ReduxToolKit/store"
import { motion } from "framer-motion"
import { variants } from "@/motion/variants"
import Requirements from "../inputs/Requirements"

export default function Step1() {
      const investigateState = useSelector((state: RootState) => state.investigation)
      const selected = useSelector((state: RootState) => state.bluesky.selected);
      const [nextClicked, setNextClicked] = useState<boolean>(false);
      const { showBlueSkySearch } = investigateState.display;
      const { stepper, pov } = investigateState
      const { acceptInput, denied } = stepper
      const { idea } = pov
      const dispatch = useDispatch()
      const chosenTake = selected ? selected : idea;

      let wordCount = (statement: string) => {
            if (statement !== '') {
                  let trimmed: string[] = statement.trim().split(' ')
                  return trimmed.length
            }
      };

      useEffect(() => {

            if (selected && idea !== null) return

            window.addEventListener('nextStepClick', () => {
                  setNextClicked(true)
            })

            let words: number = null
            if (nextClicked && idea !== null) {
                  words = wordCount(idea);
            }

            if (selected && idea !== '') {
                  dispatch(acceptedInput(true))
            } else if (selected && idea === '') {
                  dispatch(acceptedInput(false))
            }

            if (selected) {
                  words = wordCount(idea)
            }


            if (words < 5 && words !== null) {
                  dispatch(denyIncrement(true))
                  dispatch(acceptedInput(false))
            } else if (words >= 5 && words !== null) {
                  dispatch(denyIncrement(false))
                  dispatch(acceptedInput(true))
            }

      }, [idea, acceptInput, nextClicked, showBlueSkySearch, selected, denied]);


      return (
            <motion.div
                  variants={variants}
                  initial='closed'
                  animate='open'
                  exit='closed'
                  transition={{ type: 'tween', duration: 0.2 }}
                  className="flex justify-center items-start gap-2 z-10 
                  absolute inset-0">
                  <div
                        className={`w-full max-w-full overflow-hidden grow-0 max-h-full min-h-44
                        pb-8 sm:pb-7 box-border relative`}>
                        <StepsEditor context={chosenTake} setterFunction={getIdea} />
                        <Requirements acceptInput={acceptInput} />
                  </div>
            </motion.div>
      );
};

