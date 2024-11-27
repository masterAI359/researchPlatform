import React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChangeEvent, ReactHTMLElement, useRef, useState } from "react"
import Lottie from "lottie-react"
import checkMark from '../../../../lotties/checkMark.json'
import Rating from "./Rating"
import { element } from "prop-types"

const expertise: string[] = [
    "I'm new to this topic",
    "I study this on occasion",
    "This is my area of expertise"
]

const passsion: string[] = [
    "I don't care about this",
    "I'm somewhat invested in this",
    "I'm passionate about this",
]


export default function Expertise() {
    const [insight, setInsight] = useState<string>(null)


    return (
        <div className="box-border h-auto w-full flex gap-x-5">
            <div className="w-full h-auto box-border flex flex-col gap-x-3">
                <h1 className="text-white text-xl tracking-tight font-light self-center mr-2">
                    Insight
                </h1>
                {expertise.map((element) => (
                    <Rating
                        key={element}
                        knowledge={element}
                    />
                ))}
            </div>
            <div className="w-full h-auto box-border flex flex-col gap-x-3">
                <h1 className="text-white text-xl tracking-tight font-light self-center">
                    Passion
                </h1>
                {passsion.map((element) => (
                    <Rating
                        key={element}
                        knowledge={element}
                    />
                ))}
            </div>
        </div>
    )
}