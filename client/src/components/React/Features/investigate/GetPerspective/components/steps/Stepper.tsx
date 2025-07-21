import { AnimatePresence } from "framer-motion"
import { useSelector } from "react-redux"
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import { RootState } from "@/ReduxToolKit/store";

export default function Stepper() {
    const investigateState = useSelector((state: RootState) => state.investigation)
    const { stepper } = investigateState
    const { step } = stepper

    return (
        <div className="grow h-44 sm:h-52 2xl:h-72
         w-full relative mx-auto">
            <AnimatePresence mode="wait">
                {step === 0 &&
                    <Step1 key={'step1'} />
                }
                {step === 1 &&
                    <Step2 key={'step2'} />
                }
                {step === 2 &&
                    <Step3 key={'step3'} />
                }
                {step === 3 &&
                    <Step4 key={'step4'} />
                }
                {step === 4 &&
                    <Step5 key={'step5'} />
                }
            </AnimatePresence>
        </div>

    )
}