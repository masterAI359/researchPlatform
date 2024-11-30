import { useState, useEffect } from "react"
import { motion, useAnimate } from "framer-motion"
import Node1 from "./Node1"
import Node2 from "./Node2"
import Node3 from "./Node3"
import Node4 from "./Node4"
import Node5 from "./Node5"

export default function StepWizard({ currentStep, setCurrentStep }: any) {



    return (
        <motion.ol
            className="flex items-center my-auto justify-center justify-between relative xs:top-6
         xs:w-full xs:px-2 lg:w-5/6 lg:mx-auto xs:h-28 lg:min-h-28 mx-auto">
            <Node1 setCurrentStep={setCurrentStep} currentStep={currentStep} />
            <Node2 setCurrentStep={setCurrentStep} currentStep={currentStep} />
            <Node3 setCurrentStep={setCurrentStep} currentStep={currentStep} />
            <Node4 setCurrentStep={setCurrentStep} currentStep={currentStep} />
            <Node5 setCurrentStep={setCurrentStep} currentStep={currentStep} />
        </motion.ol>

    )
}




