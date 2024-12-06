import { motion } from "framer-motion"


export default function SearchNode({ currentStep, setCurrentStep }) {

    return (
        <div className="w-fit h-fit absolute bottom-6 left-1/2 left-1/2 transform -translate-x-1/2">
            <div className={`w-52 h-20 p-3 bg-ebony border border-3 border-button_blue
                 rounded-3xl flex items-center shadow-material transition-all duration-200 ease-in-out
                 ${currentStep === 4 ? 'scale-110 pointer-events-auto' : 'scale-100 pointer-events-none'}
                 `}>
                <motion.div
                    onClick={() => setCurrentStep(4)}
                    whileHover={{ scale: 1.15 }}
                    className="flex items-center justify-center rounded-full xs:max-w-7
                 xs:max-h-7 lg:max-h-12 lg:max-w-12 xs:p-0.5 sm:p-1 md:1.5 shrink-0 z-10
                  hover:cursor-pointer"
                    animate={{
                        backgroundColor: currentStep <= 4 ? "#374151" : "#2563eb",
                        boxShadow: currentStep === 4
                            ? "0 0 0 4px rgba(37, 99, 235, 1)"
                            : "none"
                    }}
                    transition={{ duration: 0.2, type: "tween" }}
                    style={{ transformOrigin: 'left' }}>
                    <svg className="xs:p-1 lg:p-1.5 box-border" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="100%" height="100%"><path d="M 20.5 6 C 12.509634 6 6 12.50964 6 20.5 C 6 28.49036 12.509634 35 20.5 35 C 23.956359 35 27.133709 33.779044 29.628906 31.75 L 39.439453 41.560547 A 1.50015 1.50015 0 1 0 41.560547 39.439453 L 31.75 29.628906 C 33.779044 27.133709 35 23.956357 35 20.5 C 35 12.50964 28.490366 6 20.5 6 z M 20.5 9 C 26.869047 9 32 14.130957 32 20.5 C 32 23.602612 30.776198 26.405717 28.791016 28.470703 A 1.50015 1.50015 0 0 0 28.470703 28.791016 C 26.405717 30.776199 23.602614 32 20.5 32 C 14.130953 32 9 26.869043 9 20.5 C 9 14.130957 14.130953 9 20.5 9 z" fill="#FFFFFF" /></svg>

                </motion.div>
                <h1 className="text-white text-md text-center font-light tracking tight">
                    Search for evidence
                </h1>
            </div>
        </div>
    )
}