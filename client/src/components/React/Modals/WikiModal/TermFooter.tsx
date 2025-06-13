import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/ReduxToolKit/store";
import { getExtract } from "@/ReduxToolKit/Reducers/Investigate/Review";

export default function TermFooter({ article_url, setShowNotification }) {
    const investigateState = useSelector((state: RootState) => state.investigation);
    const { extract, title, timestamp } = investigateState.wiki;
    const { extracts } = investigateState.review;
    const dispatch = useDispatch();
    const updatedTime: string | null = timestamp ? timestamp.split('').slice(0, 10) : null;
    const saved: boolean | null = extract ? extracts.some((item: any) => item.title === title) : null

    const handleSave = async () => {
        dispatch(getExtract({ title: title, extract: extract, associatedArticle: article_url }));
        setShowNotification(true);
    };


    return (
        <motion.footer className="min-w-full h-fit flex shrink-0 items-center justify-between">
            <div className="text-zinc-400 text-sm font-light tracking-tight">Last Updated: <span className="text-white">{updatedTime ? updatedTime : null}</span></div>
            <div className="h-6 w-6 cursor-pointer group relative">
                <div className="rounded-md xl:h-fit md:w-24 flex xs:hidden md:block 
                mx-auto group-hover:bg-white opacity-0 absolute md:-left-24 top-3
                border border-gray group-hover:opacity-100 transition-all 
                z-50 duration-200 ease-in-out">

                    <h1 className="text-black xl:text-sm xl:p-1 font-light tracking-tight text-center w-full">
                        save extract
                    </h1>
                </div>
                <svg
                    onClick={handleSave}
                    className={`${saved ? 'text-white' : 'text-white/30'} group-hover:text-white/60 transition-all duration-200 ease-in-out'}
            transition-all duration-200 ease-in-out`}
                    xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={'100%'} height={'100%'} viewBox="0,0,256,256">
                    <g fill="currentColor" fillRule="nonzero" stroke="none" strokeWidth={1} strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit={10} strokeDasharray="" strokeDashoffset={0} fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal' }}><g transform="scale(8.53333,8.53333)"><path d="M23,27l-8,-7l-8,7v-22c0,-1.105 0.895,-2 2,-2h12c1.105,0 2,0.895 2,2z" /></g></g>
                </svg>
            </div>
        </motion.footer>
    )
}