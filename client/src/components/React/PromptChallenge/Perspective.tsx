import React from "react"
import Lottie from "lottie-react"
import checkMark from "../../../lotties/checkMark.json"
import { motion, AnimatePresence } from "framer-motion"
import { ChangeEvent, ReactHTMLElement, useRef, useState } from "react"


interface lottieTypes {
  loop: boolean,
  autoplay: boolean,
  animationData: any
}

const defaultOptions: lottieTypes = {
  loop: true,
  autoplay: true,
  animationData: checkMark,
}



export default function Perspective({ setOrigin, origin }: any) {
  const animationRef = useRef(null)

  const assignOrigin = (e: React.MouseEvent<HTMLDivElement>) => {
    const targetDiv = e.target as HTMLDivElement
    setOrigin(targetDiv.getAttribute('data-set'))

  }



  return (
    <div
      className="grid-cols-1 justify-center w-fit h-[14rem]">

      <div className="lg:mb-3">
        <header className="text-xl text-center text-zinc-200">Point of view</header>
      </div>

      <motion.div
        className="grid-cols-1 gap-2 items-center text-center"
      >
        <motion.div
          className="mb-1"
          key="My Opinion"
        >
          <div
            className="bg-white/10 text-white rounded-lg lg:w-[15rem] md:w-[12rem] h-12 
                        cursor-pointer hover:bg-black flex justify-between items-center lg:px-4 grow-0 gap-5"
            data-set="My Opinion"
            onClick={(e) => { assignOrigin(e) }}
          >My Opinion
            <div className="h-7 w-7 relative">
              {origin === "My Opinion" && <motion.svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256" width="100%" height="100%" fillRule="nonzero"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.1, type: "tween" }}
              ><g fill="none" fillRule="nonzero" stroke="none" strokeWidth={1} strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit={10} strokeDasharray="" strokeDashoffset={0} fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal' }}><g transform="scale(6.4,6.4)"><path d="M20,38.5c-10.201,0 -18.5,-8.299 -18.5,-18.5c0,-10.201 8.299,-18.5 18.5,-18.5c10.201,0 18.5,8.299 18.5,18.5c0,10.201 -8.299,18.5 -18.5,18.5z" fill="#12171b" /><path d="M20,2c9.925,0 18,8.075 18,18c0,9.925 -8.075,18 -18,18c-9.925,0 -18,-8.075 -18,-18c0,-9.925 8.075,-18 18,-18M20,1c-10.493,0 -19,8.507 -19,19c0,10.493 8.507,19 19,19c10.493,0 19,-8.507 19,-19c0,-10.493 -8.507,-19 -19,-19z" fill="#2563eb" /><g fill="#ffffff"><path d="M16.025,28.02l-6.907,-6.907l2.122,-2.121l4.785,4.785l12.093,-12.093l2.122,2.121z" /></g></g></g>
              </motion.svg>}
            </div>
          </div>
        </motion.div>
        <motion.div
          className="mb-1"
          key="Opposing Opinion"
        >
          <div
            className="bg-white/10 text-white rounded-lg w-[15rem] h-12 
                        cursor-pointer hover:bg-black flex justify-between items-center lg:px-4 grow-0 gap-5"
            data-set="Opposing Opinion"
            onClick={(e) => { assignOrigin(e) }}
          >Opposing Opinion
            <div className="h-7 w-7">
              {origin === "Opposing Opinion" && <motion.svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256" width="100%" height="100%" fillRule="nonzero"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.1, type: "tween" }}
              ><g fill="none" fillRule="nonzero" stroke="none" strokeWidth={1} strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit={10} strokeDasharray="" strokeDashoffset={0} fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal' }}><g transform="scale(6.4,6.4)"><path d="M20,38.5c-10.201,0 -18.5,-8.299 -18.5,-18.5c0,-10.201 8.299,-18.5 18.5,-18.5c10.201,0 18.5,8.299 18.5,18.5c0,10.201 -8.299,18.5 -18.5,18.5z" fill="#12171b" /><path d="M20,2c9.925,0 18,8.075 18,18c0,9.925 -8.075,18 -18,18c-9.925,0 -18,-8.075 -18,-18c0,-9.925 8.075,-18 18,-18M20,1c-10.493,0 -19,8.507 -19,19c0,10.493 8.507,19 19,19c10.493,0 19,-8.507 19,-19c0,-10.493 -8.507,-19 -19,-19z" fill="#2563eb" /><g fill="#ffffff"><path d="M16.025,28.02l-6.907,-6.907l2.122,-2.121l4.785,4.785l12.093,-12.093l2.122,2.121z" /></g></g></g>
              </motion.svg>}
            </div>
          </div>
        </motion.div>
        <motion.div
          className="mb-1"
          key="Just Curious"
        >
          <div
            className="bg-white/10 text-white rounded-lg w-[15rem] h-12 
                        cursor-pointer hover:bg-black flex justify-between items-center lg:px-4 grow-0 gap-5"
            data-set="Just Curious"
            onClick={(e) => { assignOrigin(e) }}
          >Just Curious
            <div className="h-7 w-7">
              {origin === "Just Curious" && <motion.svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256" width="100%" height="100%" fillRule="nonzero"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.1, type: "tween" }}
              ><g fill="none" fillRule="nonzero" stroke="none" strokeWidth={1} strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit={10} strokeDasharray="" strokeDashoffset={0} fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal' }}><g transform="scale(6.4,6.4)"><path d="M20,38.5c-10.201,0 -18.5,-8.299 -18.5,-18.5c0,-10.201 8.299,-18.5 18.5,-18.5c10.201,0 18.5,8.299 18.5,18.5c0,10.201 -8.299,18.5 -18.5,18.5z" fill="#12171b" /><path d="M20,2c9.925,0 18,8.075 18,18c0,9.925 -8.075,18 -18,18c-9.925,0 -18,-8.075 -18,-18c0,-9.925 8.075,-18 18,-18M20,1c-10.493,0 -19,8.507 -19,19c0,10.493 8.507,19 19,19c10.493,0 19,-8.507 19,-19c0,-10.493 -8.507,-19 -19,-19z" fill="#2563eb" /><g fill="#ffffff"><path d="M16.025,28.02l-6.907,-6.907l2.122,-2.121l4.785,4.785l12.093,-12.093l2.122,2.121z" /></g></g></g>
              </motion.svg>}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}