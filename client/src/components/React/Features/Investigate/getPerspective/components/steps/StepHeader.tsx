import HelpButton from "../../../../../Buttons/HelpButtons/Question";
import { AnimatePresence, motion } from "framer-motion";
import { headerTransitions } from "@/motion/variants";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/ReduxToolKit/store";

interface StepHeader {
    title: string,
    subheader?: string | null,
    info: Help[],
};

export default function StepHeader({ title, subheader, info }: StepHeader) {
    const investigateState = useSelector((state: RootState) => state.investigation);
    const { step } = investigateState.stepper;
    const [display, setDisplay] = useState({
        title: title,
        subheader: subheader
    });
    const [propsChanging, setPropsChanging] = useState<boolean>(false);

    useEffect(() => {

        setPropsChanging(true);

        const timer = setTimeout(() => {
            setDisplay({
                title: title,
                subheader: subheader
            });
            setPropsChanging(false);
        }, 200);

        return () => clearTimeout(timer);

    }, [step]);

    return (
        <div
            className='w-full h-20 basis-3 sm:basis-4 relative
            text-center mx-auto box-border flex'>
            <div
                className="w-full box-border border-b h-fit border-white/10 mb-2 
            flex flex-row justify-between items-center">
                <AnimatePresence mode="wait">
                    {!propsChanging &&
                        <motion.div
                            key={title}
                            variants={headerTransitions}
                            initial='initial'
                            animate='open'
                            exit='closed'
                            className="w-full h-full flex justify-items-start flex-nowrap">
                            <h1 className="2xl:text-2xl md:text-2xl sm:text-xl text-sm 
                     tracking-tight font-light text-nowrap text-zinc-300 pb-1"
                            >{display.title} <span className="text-zinc-500"
                            >{subheader ? display.subheader : null}
                                </span>
                            </h1>
                        </motion.div>}
                </AnimatePresence>

                <HelpButton info={info} />
            </div>
        </div>

    );
};