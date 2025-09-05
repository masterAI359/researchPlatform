import { motion } from "framer-motion"
import { captions, NodeLabels } from "../components/labels/labels"
import StepNode from "../components/nodes/StepNode"

export default function StepWizard(): JSX.Element {

    return (
        <motion.div className="animate-fade-in delay-500 duration-200 ease-in-out w-full h-fit flex md:justify-center mx-auto
        absolute top-0
        ">
            <motion.ol
                className="flex items-center my-auto mx-auto
         w-11/12 md:w-11/12 lg:w-full lg:px-8 h-24 lg:h-20">
                {Array.isArray(captions) && (captions.length > 0) &&
                    captions.map((node: NodeLabels, index: number) => (
                        <StepNode key={node.caption} thisStep={index} caption={node.caption} />
                    ))
                }
            </motion.ol>
        </motion.div>
    );
};