import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { RootState } from "@/ReduxToolKit/store";
import { useMemo } from "react";
import NodeIcon from "../icons/NodeIcon";

interface TrackProps {
    thisStep: number,
    icon: string
};

export default function StepNode({ thisStep, icon }: TrackProps): JSX.Element {
    const investigateState = useSelector((state: RootState) => state.investigation);
    const { stepper } = investigateState;
    const { step } = stepper;
    const animateNode: boolean = useMemo(() => {
        const show: boolean = (thisStep === step) || (thisStep < step);
        return show;
    }, [step]);

    const animateShadow: boolean = useMemo(() => {
        const animate: boolean = (thisStep === step) && (thisStep < 4);
        return animate;
    }, [step]);

    return (
        <div className="flex items-center justify-center w-full h-fit box-border">
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
                <NodeIcon src={icon} />

            </motion.div>
            <motion.div
                className="w-full h-1 grow"
                initial={{ scaleX: 0, backgroundColor: "#374151" }}
                animate={{ scaleX: 1, backgroundColor: animateShadow ? "#2563eb" : "#374151" }}
                exit={{ scale: 0 }}
                transition={{ duration: 0.5 }}
                style={{ transformOrigin: 'left' }}
            />
        </div>

    )
};


