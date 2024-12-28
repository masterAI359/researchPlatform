import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import { Help } from "@/env"

export default function HelpButton({ info, setGettingHelp }) {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const handleExpand = () => {

        setIsOpen(isOpen => !isOpen);

    }





    return (
        <motion.div
            className="w-full flex flex-row items-center gap-2 relative">

            <motion.div
                className="cursor-pointer group relative">
                <div className="rounded-md xl:h-fit xl:w-16 flex mx-auto bg:black opacity-0 absolute xl:-translate-y-9 xl:-translate-x-4
                border border-astro_gray md:group-hover:opacity-100 transition-opacity duration-200 ease-in-out">

                    <h1 className="text-white xl:text-xs text-center font-light tracking-tight justify-self-start text-center w-full">Click for help
                    </h1>
                </div>
                <div
                    onClick={() => {
                        setIsOpen(isOpen => !isOpen)
                        setGettingHelp(true)
                    }}
                    className="hover:cursor-pointer rounded-full xs:max-w-5 xs:max-h-5 bg-white/10">
                    <svg className="text-white " xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256" width="100%" height="100%" fillRule="nonzero"><g fill="currentColor" fillRule="nonzero" stroke="none" strokeWidth={1} strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit={10} strokeDasharray="" strokeDashoffset={0} fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal' }}><g transform="scale(5.12,5.12)"><path d="M25,2c-12.6907,0 -23,10.3093 -23,23c0,12.69071 10.3093,23 23,23c12.69071,0 23,-10.30929 23,-23c0,-12.6907 -10.30929,-23 -23,-23zM25,4c11.60982,0 21,9.39018 21,21c0,11.60982 -9.39018,21 -21,21c-11.60982,0 -21,-9.39018 -21,-21c0,-11.60982 9.39018,-21 21,-21zM25.28906,12.50781c-3.73,0 -6.20319,2.26013 -6.74219,5.70313c-0.035,0.216 0.07111,0.35853 0.28711,0.39453l2.25977,0.39648c0.216,0.036 0.35853,-0.07211 0.39453,-0.28711c0.43,-2.188 1.72052,-3.4082 3.72852,-3.4082c2.045,0 3.47852,1.29194 3.47852,3.33594c0,1.22 -0.42959,2.04463 -1.68359,3.76563l-2.4043,3.29883c-0.753,1.041 -1.07422,1.79447 -1.07422,3.23047v1.46875c0,0.215 0.14242,0.35947 0.35742,0.35547h2.36719c0.215,0 0.35742,-0.14242 0.35742,-0.35742v-1.14648c0,-1.219 0.21659,-1.72145 0.93359,-2.68945l2.40234,-3.30078c1.22,-1.686 1.82813,-2.94011 1.82813,-4.66211c0,-3.551 -2.61823,-6.09766 -6.49023,-6.09766zM23.71289,33.49219c-0.216,0 -0.35937,0.14437 -0.35937,0.35937v3.08398c0,0.215 0.14238,0.35742 0.35938,0.35742h2.72656c0.214,0 0.35742,-0.14142 0.35742,-0.35742v-3.08398c0,-0.214 -0.14242,-0.35937 -0.35742,-0.35937z" /></g></g></svg>
                </div>
            </motion.div>

            {createPortal(
                <AnimatePresence>

                    {isOpen && <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        transition={{ type: 'tween', duration: 0.15 }}
                        className="bg-black opacity-100 h-auto shadow-black
                         border border-2 border-border_gray shadow-thick rounded-4xl 
                         z-50 fixed xs:bottom-4 xs:left-12 xl:pb-2 xl:bottom-24 lg:left-1/3 xl:w-[38rem]"
                    >   <div className="pb-2">
                            {info.map((element: Help) => (
                                <div key={element.explanation} className="flex flex-col gap-5">
                                    <div className="w-full mx-auto bg-black/50 flex h-full justify-between items-center py-2 my-auto rounded-t-4xl">
                                        <h1 key={element.heading} className="text-white text-2xl font-light tracking-tight ml-4">{element.heading}</h1>
                                        <div
                                            onClick={() => {
                                                handleExpand();
                                                { isOpen ? setGettingHelp(false) : null }
                                            }}
                                            className="w-fit h-fit cursor-pointer p-1 mr-4 rounded-lg 
                                            hover:bg-white/10 transition-all ease-in-out duration-200 
                                            justify-self-center">
                                            <svg
                                                className="text-zinc-200 cursor-pointer opacity-55 hover:opacity-100 
                                            transition-opacity duration-200 ease-in-out" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="28px" height="28px">
                                                <path d="M 39.486328 6.9785156 A 1.50015 1.50015 0 0 0 38.439453 7.4394531 L 24 21.878906 L 9.5605469 7.4394531 A 1.50015 1.50015 0 0 0 8.484375 6.984375 A 1.50015 1.50015 0 0 0 7.4394531 9.5605469 L 21.878906 24 L 7.4394531 38.439453 A 1.50015 1.50015 0 1 0 9.5605469 40.560547 L 24 26.121094 L 38.439453 40.560547 A 1.50015 1.50015 0 1 0 40.560547 38.439453 L 26.121094 24 L 40.560547 9.5605469 A 1.50015 1.50015 0 0 0 39.486328 6.9785156 z" fill="currentColor" />
                                            </svg>
                                        </div>
                                    </div>
                                    <p key={element.explanation} className="text-zinc-200 2xl:text-xl xl:text-lg lg:text-md md:text-md font-light tracking-tight w-11/12 mx-auto text-left md:leading-9 lg:leading-10">{element.explanation}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>}
                </AnimatePresence>,
                document.body)}

        </motion.div>

    )
}