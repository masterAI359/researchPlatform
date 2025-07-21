import { motion } from "framer-motion"

export default function NoContent() {

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            key='noContent'
        >
            <div className="w-full h-full flex items-center justify-center">
                <div className="w-fit h-fit flex flex-col justify-center items-center gap-y-8 py-24">
                    <div className="h-16 w-16 flex items-center justify-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg" width={'100%'} height={'100%'} viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
                            className="text-zinc-400 icon icon-tabler icons-tabler-outline icon-tabler-file-alert"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M14 3v4a1 1 0 0 0 1 1h4" />
                            <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" /><path d="M12 17l.01 0" />
                            <path d="M12 11l0 3" />
                        </svg>
                    </div>

                    <h1 className="w-fit text-zinc-400 mt-16 font-light tracking-tight 2xl:text-3xl">
                        Unfortunately we couldn't retrieve the content from those sources
                    </h1>
                    <p className="text-zinc-400 font-light tracking-tight text-sm 2xl:text-xl">
                        Some websites block content extraction, which may prevent summaries from being generated
                    </p>
                </div>
            </div>
        </motion.div>
    )
}