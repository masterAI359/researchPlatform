import { createPortal } from "react-dom"
import { AnimatePresence, motion } from "framer-motion"
import { useDispatch, useSelector } from "react-redux"
import { displayFeedBackForm } from "@/ReduxToolKit/Reducers/Investigate/DisplayReducer"
import { getAuthorEmail, getFeedBackMessage, stopAskingForFeedBack, declineFeedBack } from "@/ReduxToolKit/Reducers/Feedback/FeedbackSlice"
import React, { useEffect, useState } from "react"
import { RootState } from "@/ReduxToolKit/store"
import { submitFeedback } from "@/helpers/SupabaseData"
import SubmittingFeedback from "../AuthNotifications/SubmittingFeedback"

export default function FeedBackForm () {
const authorEmail = useSelector((state: RootState) => state.feedback.authorEmail)
const message = useSelector((state: RootState) => state.feedback.message)
const seenFeedbackForm = useSelector((state: RootState) => state.feedback.seen)
const [needInput, setNeedInput] = useState<boolean>(null)
const [submitted, setSubmitted] = useState<boolean>(false)
const [feedbackSubmitted, setFeedbacksubmitted] = useState<boolean>(null)

const dispatch = useDispatch()

    const closeFeedback = () => {
        dispatch(declineFeedBack(true))
        dispatch(displayFeedBackForm(false))
        dispatch(stopAskingForFeedBack(true))
    }

    const getEmail = (e: React.ChangeEvent<HTMLInputElement>) => {

      let target = e.target.value;
      dispatch(getAuthorEmail(target))
    }

    const getMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const target = e.target.value;
      dispatch(getFeedBackMessage(target))
    }

    const giveFeedback = () => {
      if(authorEmail && message) {
        setSubmitted(true)

      } else {
        setNeedInput(true)
      }
    }


    useEffect(() => {

      if(authorEmail !== null && authorEmail !== '' && message !== null && message !== '' && message !== undefined && authorEmail !== undefined) {
        setNeedInput(false)
      } 

      if(submitted) {
        submitFeedback(authorEmail, message, setFeedbacksubmitted)
      
      } 

      if(feedbackSubmitted) {
        dispatch(stopAskingForFeedBack(true))
      }

    }, [authorEmail, message, needInput, submitted, seenFeedbackForm])

    const form = (
     <motion.div 
     initial={{ opacity: 0}}
     animate={{ opacity: 1}}
     exit={{ opacity: 0 }}
     className="fixed top-24 md:top-36 left-0.5 md:left-1/2 md:transform md:-translate-x-1/2 md:max-w-xl flex w-full max-w-[23rem] 
     md:max-w-xl flex-col items-center shadow-material rounded-xl md:rounded-3xl bg-gradient-to-tr from-ebony to-mirage p-8">
      <div onClick={closeFeedback} className="w-fit rounded-md p-1.5 md:hover:bg-white/10 transition-all duration-200 ease-in-out h-fit flex justify-end absolute top-2 right-2 cursor-pointer"> 
     <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={16} height={16} viewBox="0,0,256,256">
  <g fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth={1} strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit={10} strokeDasharray="" strokeDashoffset={0} fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode: 'normal'}}><g transform="scale(16,16)"><path d="M2.75,2.04297l-0.70703,0.70703l0.35547,0.35156l4.89453,4.89844l-5.25,5.25l0.70703,0.70703l5.25,-5.25l4.89453,4.89844l0.35547,0.35156l0.70703,-0.70703l-0.35156,-0.35547l-4.89844,-4.89453l5.25,-5.25l-0.70703,-0.70703l-5.25,5.25l-4.89844,-4.89453z" /></g></g>
</svg>
        <AnimatePresence>
          {submitted && <SubmittingFeedback setSubmitted={setSubmitted} feedbackSubmitted={feedbackSubmitted}/>}
        </AnimatePresence>
      </div>
  <h2 className="title-font mb-1 text-lg lg:text-2xl font-light font-serif tracking-tight text-center text-white">Feedback</h2>
  <p className="mb-5 w-auto md:w-2/3 font-light text-wrap text-center mx-auto leading-relaxed text-zinc-400">If you had any issues or you liked our product, please share
    with us!
  </p>
  <div className="mb-4 w-full">
    <label  htmlFor="email" className="text-sm leading-7 text-zinc-400">Email</label>
    <input onChange={(e) => getEmail(e)} type="email" id="email" name="email" 
    placeholder="youremail@example.com"
    className="block w-full px-3 py-3 border md:border-2 rounded-lg appearance-none text-white placeholder-black/50 bg-mirage focus:bg-black
    focus:outline-none focus:border-zinc-400 focus:ring-0 text-base sm:text-sm placeholder-zinc-500 h-10 relative prose-styles" />
  </div>
  <div className="mb-4 w-full">
    <label htmlFor="message" className="text-sm leading-7 text-zinc-400">Message</label>
  
    <textarea onChange={(e) => getMessage(e)}  placeholder="Let us know what you enjoyed, and what we can improve!" id="message" name="message" 
    className="h-32 w-full resize-none px-1 py-2 border md:border-2 rounded-lg appearance-none text-white placeholder-black/50 bg-mirage focus:bg-black
    focus:outline-none focus:border-zinc-400 focus:ring-0 text-base sm:text-sm placeholder-zinc-500 h-10 relative prose-styles" defaultValue={""} />
     {needInput && <label htmlFor="message" className="text-xs leading-7 text-red-500 ml-2">Please fill email and message fields to submit!</label>}
  </div>
  <button onClick={giveFeedback} type="button" className="rounded-full border-0 bg-white text-black py-1 px-6 text-base font-light transition-all duration-200 ease-in-out text-black sm:hover:text-white  sm:hover:bg-mirage focus:outline-none">Send</button>
</motion.div>

    )


    return createPortal(form, document.body)
}