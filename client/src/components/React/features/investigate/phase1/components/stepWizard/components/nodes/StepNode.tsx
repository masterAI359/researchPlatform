import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { RootState } from "@/ReduxToolKit/store";
import { useMemo } from "react";
import NodeIcon from "../icons/containers/NodeIcon";
import WizardTrack from "../tracks/WizardTrack";
import NodeCaption from "../labels/NodeCaption";

interface TrackProps {
    thisStep: number,
    caption: string
};

export default function StepNode({ thisStep, caption }: TrackProps): JSX.Element {
    const investigateState = useSelector((state: RootState) => state.investigation);
    const { stepper } = investigateState;
    const { step } = stepper;
    const animateNode: boolean = useMemo(() => {
        const show: boolean = (thisStep > step);
        return show;
    }, [step]);

    const animateShadow: boolean = useMemo(() => {
        const animate: boolean = (thisStep === step) && (thisStep < 4);
        return animate;
    }, [step]);

    return (
        <li className={`flex flex-col h-16
        ${thisStep < 4 ? 'w-full items-center' : 'w-fit items-start'}
        `}>
            <div className={`flex items-center justify-center h-fit box-border
                ${thisStep < 4 ? 'w-full' : 'w-fit'}
                `}>
                <motion.div
                    className="flex items-center justify-self-start justify-center shrink-0 box-border max-w-7 max-h-7 
                                    sm:max-w-9 sm:max-h-9 sm:p-1
                                    rounded-full z-10 hover:cursor-pointer transition-all duration-300 hover:scale-110"
                    animate={{
                        backgroundColor: animateNode
                            ? "#374151"
                            : "#2563eb",
                        boxShadow: animateShadow
                            ? "0 0 0 4px rgba(37, 99, 235, 1)"
                            : "none"
                    }}
                    transition={{ duration: 0.4 }}
                    style={{ transformOrigin: 'left' }}
                >
                    <NodeIcon thisStep={thisStep} />

                </motion.div>
                {thisStep < 4 && <WizardTrack thisStep={thisStep} />}
            </div>
            <NodeCaption caption={caption} thisStep={thisStep} />
        </li>


    )
};


