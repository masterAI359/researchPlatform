import React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChangeEvent, ReactHTMLElement, useRef, useState } from "react"
import Lottie from "lottie-react"
import checkMark from '../../../../lotties/checkMark.json'
import Rating from "./Rating"
import { element } from "prop-types"

const expertise: string[] = [
    "I'm new to this topic",
    "I'm somewhat familiar with the topic",
    "I've read some information about it",
    "I study this on occasion",
    "This is my area of expertise"
]

const passsion: string[] = [
    "I don't care about this",
    "This invokes some reaction",
    "I'm somewhat invested in this",
    "I'm passionate about this",
    "This is a hot button issue for me"
]


export default function Expertise() {
    const [insight, setInsight] = useState<string>(null)


    return (
        <div className="box-border h-auto w-full flex flex-col gap-y-5">
            <div className="w-full h-auto box-border flex gap-x-3">
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
            <div className="w-full h-auto box-border flex gap-x-3">
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