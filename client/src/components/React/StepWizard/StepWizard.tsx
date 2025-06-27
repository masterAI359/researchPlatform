import { motion } from "framer-motion"
import Node1 from "./Node1"
import Node2 from "./Node2"
import Node3 from "./Node3"
import Node4 from "./Node4"
import Node5 from "./Node5"

export default function StepWizard({ currentStep, setCurrentStep }: any) {



    return (
        <motion.div className="w-full h-fit flex items-baseline lg:justify-center mx-auto relative">
            <motion.ol
                className="flex items-center my-auto justify-between
         w-11/12 sm:w-2/3 lg:w-4/5 lg:mx-auto h-28 lg:h-auto lg:min-h-24 mx-auto">
                <Node1 />
                <Node2 />
                <Node3 />
                <Node4 />
                <Node5 />
            </motion.ol>
        </motion.div>


    )
}




