import { motion } from "framer-motion"
import Node1 from "./Node1"
import Node2 from "./Node2"
import Node3 from "./Node3"
import Node4 from "./Node4"
import Node5 from "./Node5"

export default function StepWizard({ currentStep, setCurrentStep }: any) {



    return (

        <motion.div className="animate-fade-in delay-500 duration-200 ease-in-out w-full h-fit flex md:justify-center mx-auto
        absolute top-0
        ">
            <motion.ol
                className="flex items-center my-auto mx-auto
         w-11/12 md:w-11/12 lg:w-full lg:px-8 h-24 lg:h-20">
                <Node1 />
                <Node2 />
                <Node3 />
                <Node4 />
                <Node5 />
            </motion.ol>
        </motion.div>


    )
}




