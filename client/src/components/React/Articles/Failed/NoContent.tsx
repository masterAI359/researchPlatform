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
                <div className="w-fit h-fit flex flex-col gap-y-8">
                    <h1 className="w-fit text-zinc-400 mt-16 font-light tracking-tight 2xl:text-3xl">
                        Unfortunately we couldn't retrieve the content from those sources :/
                    </h1>
                    <p className="text-zinc-400 font-light tracking-tight text-sm 2xl:text-xl">
                        some sources may prevent any extraction of their articles
                    </p>
                </div>
            </div>
        </motion.div>
    )
}