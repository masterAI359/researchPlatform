import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { RootState } from "@/ReduxToolKit/store";
import { useMemo } from "react";

interface Caption {
    caption: string,
    thisStep: number
}

export default function NodeCaption({ caption, thisStep }: Caption): JSX.Element {
    const investigateState = useSelector((state: RootState) => state.investigation);
    const { stepper } = investigateState;
    const { step } = stepper;
    const showCaption: boolean = useMemo(() => {
        const show: boolean = (thisStep === step) || (thisStep < step);
        return show;
    }, [step]);


    return (
        <motion.div
            className="text-xs lg:text-[0.85rem] text-center bg-transparent
          text-white self-start pt-2 2xl:pt-4 w-7 md:w-10"
            animate={{
                scale: 1,
                opacity: showCaption
                    ? 1
                    : 0
            }}
            transition={{
                duration: 0.7
            }}
        >
            {caption}
        </motion.div>
    );
};