import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { RootState } from "@/ReduxToolKit/store";
import { useMemo } from "react";

interface Track {
    thisStep: number,
};

export default function WizardTrack({ thisStep }: Track): JSX.Element {
    const investigateState = useSelector((state: RootState) => state.investigation);
    const { stepper } = investigateState;
    const { step } = stepper;
    const animateTrack: boolean = useMemo(() => {
        const show: boolean = (thisStep < step);
        return show;
    }, [step]);

    return (
        <motion.div
            className="w-full h-1 grow"
            initial={{ scaleX: 0, backgroundColor: "#374151" }}
            animate={{
                scaleX: 1, backgroundColor: animateTrack
                    ? "#2563eb"
                    : "#374151"
            }}
            exit={{ scale: 0 }}
            transition={{ duration: 0.5 }}
            style={{ transformOrigin: 'left' }}
        />
    );
};