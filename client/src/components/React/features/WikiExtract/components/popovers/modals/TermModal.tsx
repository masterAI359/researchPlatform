import { motion } from "framer-motion";
import { variants } from "@/motion/variants";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "@/ReduxToolKit/store";
import { InvestigateState } from "@/ReduxToolKit/Reducers/Root/InvestigateReducer";
import { getWikiExtract, modalStages } from "@/ReduxToolKit/Reducers/Investigate/WikipediaSlice";
import { useState } from "react";

export default function TermModal(): JSX.Element | null {
    const investigate: InvestigateState = useSelector((state: RootState) => state.investigation);
    const { wiki } = investigate;
    const { wikiModalStages } = wiki;
    const text: string | null = wikiModalStages?.text;
    const [inputText, setInputText] = useState<string | null>(wikiModalStages.text ?? null);
    const dispatch = useDispatch<AppDispatch>();

    const retrieveWikiExtract = () => {
        dispatch(getWikiExtract(inputText));
        dispatch(modalStages({
            display: true,
            highlight: false,
            confirmExtract: false,
            text: null
        }));
    };


    const handleDeny = () => {
        dispatch(modalStages({
            display: true,
            highlight: true,
            confirmExtract: false,
            text: null
        }));
    };

    const update = (e: React.ChangeEvent<HTMLInputElement>) => {
        const target: string | null = e.currentTarget.value;
        if (target !== null) {
            setInputText(target);
        };
    };



    return (
        <motion.div
            variants={variants}
            initial='closed'
            animate='open'
            exit='closed'
            transition={{ type: 'tween', duration: 0.2, ease: 'easeInOut' }}
            className="2xl:w-[26rem] md:w-96 rounded-3xl h-80 bg-black border border-border_gray
            flex items-center justify-center"
        >

            <div className="lg:min-w-0 lg:flex-1 max-w-sm mx-auto flex flex-col items-center justify-center">
                <header className="w-full h-auto text-center">
                    <p className="text-white xl:text-lg font-light tracking-tight">Look this up?</p>
                    <input
                        onChange={(e) => update(e)}
                        type="text" value={inputText} className="text-white mt-2 bg-ebony/60 rounded-md">

                    </input>
                    <p className="mx-auto text-sm text-white" />
                </header>

                <div className="inline-flex flex-no-wrap justify-center gap-x-4 items-center mt-8 w-full">
                    <button
                        onClick={retrieveWikiExtract}
                        type="button"
                        className="text-sm py-2 w-32 px-4 border focus:ring-2 rounded-full 
                        border-transparent bg-white lg:hover:bg-blue-500 text-black duration-200 focus:ring-offset-2
                         focus:ring-white hover:text-white inline-flex items-center justify-center ring-1 ring-transparent">
                        Yes
                    </button>
                    <button onClick={handleDeny} type="button"
                        className="text-sm py-2 w-32 px-4 border focus:ring-2 rounded-full 
                     border-transparent bg-white lg:hover:bg-black/60 text-black
                     transition-all duration-200 ease-in-out focus:ring-offset-2 
                     focus:ring-white hover:text-white inline-flex items-center 
                     justify-center ring-1 ring-transparent">
                        No
                    </button>
                </div>
            </div>
        </motion.div>
    )
}