import { motion } from "framer-motion"

export default function LinkPlaceholder() {

    return (
        <motion.li
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={`group cursor-pointer box-border list-none xl:min-h-72 xl:max-h-72 xl:min-w-80 xl:max-w-80
        lg:w-72 lg:h-72 md:h-60 md:w-60 h-44 w-40
        relative rounded-xl md:rounded-3xl text-white
        md:opacity-85 transition-all ease-in-out duration-200 overflow-y-hidden overflow-x-hidden
        shadow-material bg-ebony
      `}
        >
            {/* Top background block */}
            <div className="relative w-full m-0 p-0 xl:max-h-36 xl:min-h-36 md:max-h-28 md:min-h-28 min-h-20 max-h-20 overflow-hidden">
                <div className="absolute inset-0 w-full h-full bg-[#26272B] opacity-40 rounded-t-xl md:rounded-t-3xl animate-pulse" />
                <div className="relative z-10 p-4">
                    <div className="flex flex-col lg:gap-y-6">
                        <div className="h-4 w-3/4 bg-ebony rounded animate-pulse" />
                    </div>
                </div>
            </div>

            {/* Bottom text area */}
            <div className="relative w-full mx-auto h-auto box-border pt-2">
                <div className="flex gap-4 items-center relative px-4">
                    <div className="rounded-full bg-[#26272B] lg:h-8 lg:w-8 xs:h-6 xs:w-6 animate-pulse" />
                    <div className="h-4 w-1/2 bg-[#26272B] rounded animate-pulse" />
                </div>
                <div className="h-full group mt-2 lg:mt-6 xl:mt-4 pt-2 opacity-100">
                    <blockquote className="relative px-4">
                        <div className="h-3 w-full bg-[#26272B] rounded animate-pulse" />
                    </blockquote>
                </div>
            </div>
        </motion.li>
    )
}