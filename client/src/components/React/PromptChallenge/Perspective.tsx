import { motion, AnimatePresence } from "framer-motion"
import { ChangeEvent, ReactHTMLElement, useState } from "react"
import Lottie from 'react-lottie';
import checkMark from '../../../lotties/checkMark.json'

interface lottieTypes {
  loop: boolean,
  autoplay: boolean,
  animationData: any
}

const defaultOptions: lottieTypes = {
  loop: false,
  autoplay: true,
  animationData: checkMark,
}

export default function Perspective ({ setOrigin, origin }: any) {
    const [visible, setVisible] = useState<boolean>(false)

    const assignOrigin = (e: React.MouseEvent<HTMLDivElement>) => {
      const targetDiv = e.target as HTMLDivElement
      setOrigin(targetDiv.getAttribute('data-set'))
    }
    
    console.log(origin)


    const container = {
        hidden: {
          transition: {
            staggerChildren: 0.02,
            staggerDirection: -1
          }
        },
        show: {
          transition: {
            staggerChildren: 0.04
          }
        }
      };
      
      const itemVariants = {
        hidden: {
          opacity: 0,
          scale: 0.8,
          transition: { type: "spring", bounce: 0.4 }
        },
        show: { opacity: 1, scale: 1, transition: { type: "spring", bounce: 0.4 } }
      };


    return (
        <div
        className="grid-cols-1 w-full h-[10rem]"
        >
            <button 
            onClick={() => {setVisible(!visible)}}
            className="group text-sm py-2 px-4 border overflow-hidden md:w-[15rem] h-12 focus:ring-2 rounded-lg border-transparent bg-black
             hover:bg-white/10 text-white duration-200 hover:text-black inline-flex 
             items-center justify-center ring-1 ring-transparent mb-2">
              <div className="group-hover:text-white pr-3"> {origin === '' ? "Point Of View" : origin } </div>
   {origin === '' ? <div className={`top-3 bottom-3 right-3 transform transition-transform duration-200 
              ${ visible ? 'rotate-180' : ''}`}>
                <svg className="text-white p-1 top-3 bottom-3 right-3" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256" width="25px" height="25px" fillRule="nonzero"><g fill="currentColor" fillRule="nonzero" stroke="none" strokeWidth={1} strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit={10} strokeDasharray="" strokeDashoffset={0} fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode: 'normal'}}><g transform="scale(5.12,5.12)"><path d="M44.98828,13.98438c-0.26172,0.00781 -0.51172,0.11719 -0.69531,0.30859l-19.29297,19.29297l-19.29297,-19.29297c-0.1875,-0.19531 -0.44531,-0.30078 -0.71484,-0.30469c-0.41016,0.00391 -0.77344,0.25 -0.92969,0.625c-0.15234,0.37891 -0.0625,0.80859 0.23047,1.09375l20,20c0.39063,0.39063 1.02344,0.39063 1.41406,0l20,-20c0.29688,-0.28516 0.38672,-0.72656 0.23047,-1.10547c-0.16016,-0.37891 -0.53516,-0.625 -0.94922,-0.61719z" /></g></g></svg>
              </div>
              : <div id="lottie_check_mark" className="p-0">
                <Lottie
                options = {defaultOptions}
                height = {30}
                width = {30}
                ></Lottie>
              </div>
              }
            </button>
        <AnimatePresence>
          {visible && (
            <motion.div
            className="grid-cols-1 gap-2 items-center text-center"
            variants={container}
            initial = "hidden"
            animate = "show"
            exit= "hidden"
            >
                    <motion.div
                    onClick={() => {setVisible(!visible)}}
                    className="mb-1"
                    variants={itemVariants}
                    key = "My Opinion"
                    >
                      <div
                        className="bg-black text-white rounded-lg w-[15rem] h-12 
                        cursor-pointer hover:bg-white/10 relative flex items-center justify-center z-1"
                        data-set = "My Opinion"
                        onClick= {(e) => {assignOrigin(e)}}
                        > My Opinion
                      </div>
                    </motion.div>
                    <motion.div
                    onClick={() => {setVisible(!visible)}}
                    className="mb-1"
                    variants={itemVariants}
                    key = "Opposing Opinion"
                    >
                      <div
                        className="bg-black text-white rounded-lg w-[15rem] h-12 
                        cursor-pointer hover:bg-white/10 relative flex items-center justify-center z-1"
                        data-set = "Opposing Opinion"
                        onClick= {(e) => {assignOrigin(e)}}
                        >Opposing Opinion
                      </div>
                    </motion.div>
                    <motion.div
                    onClick={() => {setVisible(!visible)}}
                    className="mb-1"
                    variants={itemVariants}
                    key = "Just Curious"
                    >
                      <div
                        className="bg-black text-white rounded-lg w-[15rem] h-12 
                        cursor-pointer hover:bg-white/10 relative flex items-center justify-center z-1"
                        data-set = "Just Curious"
                        onClick= {(e) => {assignOrigin(e)}}
                        >Just Curious
                      </div>
                    </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        </div>
    )
}