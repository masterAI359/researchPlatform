import { useState, useEffect } from "react"
import { motion, useAnimate } from "framer-motion"
import Node1 from "./Node1"
import Node2 from "./Node2"
import Node3 from "./Node3"
import Node4 from "./Node4"
import Node5 from "./Node5"

export default function StepWizard({ currentStep, setCurrentStep }: any) {



    return (
        <motion.div className="w-full h-fit flex items-baseline mx-auto relative sm:block md:hidden">
            <motion.ol
                className="flex items-center my-auto justify-center justify-between
         xs:w-full lg:w-5/6 lg:mx-auto xs:h-28 lg:min-h-28 mx-auto">
                <Node1 setCurrentStep={setCurrentStep} />
                <Node2 setCurrentStep={setCurrentStep} currentStep={currentStep} />
                <Node3 setCurrentStep={setCurrentStep} currentStep={currentStep} />
                <Node4 setCurrentStep={setCurrentStep} currentStep={currentStep} />
                <Node5 setCurrentStep={setCurrentStep} currentStep={currentStep} />
            </motion.ol>
        </motion.div>


    )
}




