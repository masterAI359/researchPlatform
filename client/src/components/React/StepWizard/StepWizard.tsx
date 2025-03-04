import { motion } from "framer-motion"
import Node1 from "./Node1"
import Node2 from "./Node2"
import Node3 from "./Node3"
import Node4 from "./Node4"
import Node5 from "./Node5"

export default function StepWizard({ currentStep, setCurrentStep }: any) {



    return (
        <motion.div className="w-full h-fit flex items-baseline mx-auto absolute top-0 block md:hidden">
            <motion.ol
                className="flex items-center my-auto justify-center justify-between
         w-11/12 lg:w-5/6 lg:mx-auto xs:h-28 lg:min-h-28 mx-auto">
                <Node1 />
                <Node2 />
                <Node3 />
                <Node4 />
                <Node5 />
            </motion.ol>
        </motion.div>


    )
}




