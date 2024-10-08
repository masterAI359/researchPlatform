import { useState, useEffect } from "react"
import { motion, useAnimate } from "framer-motion"



export default function StepWizard({ currentStep }: any) {

    //  console.log({ "Current Step: ": currentStep })

    return (
        <section className="w-11/12 h-full  justify-self-center">
            <ol className="flex items-center w-full h-full lg:min-h-28">
                <li className="flex flex-col w-full lg:h-28 items-center">
                    <div className="flex  items-center justify-center w-full h-full">
                        <motion.div
                            className="flex items-center justify-center w-10 h-10 rounded-full lg:h-12 lg:w-12 shrink-0 z-40 hover:cursor-pointer transition-all duration-300 hover:scale-125"
                            animate={{
                                backgroundColor: currentStep === 0 ? "#374151" : "#2563eb",
                                boxShadow: currentStep === 0
                                    ? "0 0 0 4px rgba(37, 99, 235, 1)"
                                    : "none"
                            }}
                            transition={{ duration: 0.4 }}
                            style={{ transformOrigin: 'left' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256" width="28px" height="28px" fillRule="nonzero"><g fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth={1} strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit={10} strokeDasharray="" strokeDashoffset={0} fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal' }}><g transform="scale(5.12,5.12)"><path d="M24,2c-12.6875,0 -21,9.22656 -21,19.40625c0,4.80469 1.86719,8.59766 3.625,12.03125c1.75781,3.43359 3.375,6.49219 3.375,9.96875v4.59375h2v-4.59375c0,-4.09375 -1.88281,-7.46875 -3.625,-10.875c-1.74219,-3.40625 -3.375,-6.83594 -3.375,-11.125c0,-9.10156 7.26563,-17.40625 19,-17.40625c6.20703,0 10.24609,2.01953 12.9375,5.03125c2.69141,3.01172 4.03516,7.10938 4.53125,11.28125l0.03125,0.1875l0.09375,0.1875l4.1875,7.53125c0.375,0.67969 0.08984,1.48047 -0.625,1.78125l-2.53125,1.0625l-0.625,0.28125v5.53125c0,3.38672 -2.73828,6.125 -6.125,6.125h-3.875v5h2v-3h1.875c4.46875,0 8.125,-3.65625 8.125,-8.125v-4.21875l1.9375,-0.8125c1.78125,-0.75 2.53125,-2.90234 1.59375,-4.59375l-4.125,-7.40625c-0.55078,-4.37109 -1.98437,-8.78516 -5,-12.15625c-3.06641,-3.42969 -7.75391,-5.6875 -14.40625,-5.6875zM24,13c-5.51172,0 -10,4.48828 -10,10c0,3.71484 2.04688,6.93359 5.0625,8.65625c0.50781,0.93359 0.90234,1.85938 0.9375,3.15625c-0.00781,0.0625 -0.00781,0.125 0,0.1875c0,0.03125 0,0.0625 0,0.09375v1.90625c0,1.37109 0.95313,2.52344 2.21875,2.875c0.32422,0.66406 0.99219,1.125 1.78125,1.125c0.78906,0 1.45703,-0.46094 1.78125,-1.125c1.26563,-0.35156 2.21875,-1.50391 2.21875,-2.875v-1.84375c0.00391,-0.05078 0.00391,-0.10547 0,-0.15625c0,-0.03125 0,-0.0625 0,-0.09375c0.01953,-1.39453 0.42188,-2.33203 0.96875,-3.3125c2.98438,-1.73047 5.03125,-4.90234 5.03125,-8.59375c0,-5.51172 -4.48828,-10 -10,-10zM24,15c4.42969,0 8,3.57031 8,8c0,3.08984 -1.73047,5.75781 -4.28125,7.09375c-0.16797,0.08594 -0.30859,0.21484 -0.40625,0.375c-0.52734,0.93359 -0.97266,2.12891 -1.15625,3.53125h-4.3125c-0.17969,-1.38672 -0.60547,-2.56641 -1.125,-3.5c-0.09375,-0.17187 -0.23437,-0.3125 -0.40625,-0.40625c-2.5625,-1.33594 -4.3125,-4 -4.3125,-7.09375c0,-4.42969 3.57031,-8 8,-8zM21.5,22c-0.82812,0 -1.5,0.67188 -1.5,1.5c0,0.82813 0.67188,1.5 1.5,1.5c0.51953,0 0.98047,-0.25781 1.25,-0.65625c0.15234,0.17578 0.25,0.39844 0.25,0.65625v7h2v-7c0,-0.25781 0.09766,-0.48047 0.25,-0.65625c0.26953,0.39844 0.73047,0.65625 1.25,0.65625c0.82813,0 1.5,-0.67187 1.5,-1.5c0,-0.82812 -0.67187,-1.5 -1.5,-1.5h-0.5c-0.76562,0 -1.46875,0.30078 -2,0.78125c-0.53125,-0.48047 -1.23437,-0.78125 -2,-0.78125zM22,36h4v1c0,0.56641 -0.43359,1 -1,1h-2c-0.56641,0 -1,-0.43359 -1,-1z" /></g></g></svg>

                        </motion.div>
                        <motion.div
                            className="w-full h-1 grow"
                            initial={{ scaleX: 0, backgroundColor: "#374151" }}
                            animate={{ scaleX: 1, backgroundColor: currentStep > 0 ? "#2563eb" : "#374151" }}
                            exit={{ scale: 0 }}
                            transition={{ duration: 0.5 }}
                            style={{ transformOrigin: 'left' }}
                        />
                    </div>

                    <motion.div
                        className="lg:-translate-x-4 text-sm text-center bg-transparent
                        text-white self-start w-fit"
                        animate={{ scale: 1, opacity: currentStep > 0 ? 0 : 1 }}
                        transition={{ duration: 0.7 }}
                        style={{ translateX: '-34px' }}
                    >
                        Challenge an idea
                    </motion.div>

                </li>
                <li className="flex flex-col w-full lg:h-28 items-center">
                    <div className="flex  items-center justify-center w-full h-full">
                        <motion.div
                            className="flex items-center justify-center w-10 h-10 rounded-full lg:h-12 lg:w-12 shrink-0 z-40 hover:cursor-pointer transition-all duration-300 hover:scale-125"
                            animate={{
                                backgroundColor: currentStep >= 2 ? "#2563eb" : "#374151",
                                boxShadow: currentStep === 1
                                    ? "0 0 0 4px rgba(37, 99, 235, 1)"
                                    : "none"
                            }}
                            transition={{ duration: 0.4 }}
                            style={{ transformOrigin: 'left' }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256" width="28px" height="28px" fillRule="nonzero"><g fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth={1} strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit={10} strokeDasharray="" strokeDashoffset={0} fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal' }}><g transform="scale(5.12,5.12)"><path d="M25,2c-1.64453,0 -3,1.35547 -3,3v1.55859c-1.35937,-0.89453 -2.94531,-1.88281 -4.78125,-2.30859c-0.90234,-0.21094 -1.8125,-0.26953 -2.69922,-0.25c-0.88281,0.01953 -1.73828,0.11719 -2.53906,0.21094c-0.71484,0.08984 -1.36719,0.16016 -1.96094,0.20703l-0.01953,-0.04297l-0.01953,0.04688c-0.72656,0.05469 -1.35156,0.07031 -1.75391,-0.02344c-0.53906,-0.125 -1.07422,0.21094 -1.20313,0.74609c-0.125,0.53906 0.21094,1.07813 0.75,1.20313c0.44141,0.10156 0.89844,0.12891 1.35938,0.13281l-7.21094,17.51563l0.14844,0.375c0,0 2.26172,5.62891 7.92969,5.62891c5.66797,0 7.92578,-5.62891 7.92578,-5.62891l0.15234,-0.375l-7.26172,-17.63672c0.46484,-0.05469 0.92188,-0.10547 1.40234,-0.16406c1.56641,-0.1875 3.17188,-0.31641 4.54688,0c1.78516,0.41797 3.55469,1.6875 5.23438,2.75391v34.05078h-6c-2.19922,0 -4,1.80078 -4,4v1h26v-1c0,-2.19922 -1.80078,-4 -4,-4h-6v-32.65234c1.94141,-0.21875 4.02344,-0.55469 5.76563,-0.14844c1.41016,0.32422 2.79688,1.08594 4.12109,1.86328c0.50391,0.30078 0.98828,0.58594 1.47266,0.86328l-7.4375,18.07031l0.15234,0.375c0,0 2.25781,5.62891 7.92578,5.62891c5.66797,0 7.92578,-5.62891 7.92578,-5.62891l0.15234,-0.375l-7.11328,-17.28516c0.26563,0.10156 0.53125,0.19922 0.80859,0.26172c0.53906,0.12891 1.07422,-0.20703 1.19922,-0.74609c0.12891,-0.53906 -0.20703,-1.07422 -0.74609,-1.19922c-0.78516,-0.18359 -1.96875,-0.88672 -3.32031,-1.68359c-1.35547,-0.80078 -2.90625,-1.68359 -4.6875,-2.09375c-1.26172,-0.29687 -2.53516,-0.29687 -3.73437,-0.20312c-0.89062,0.07031 -1.71484,0.18359 -2.48437,0.27734v-3.32422c0,-1.64453 -1.35547,-3 -3,-3zM25,4c0.5625,0 1,0.4375 1,1v38h-2v-38c0,-0.5625 0.4375,-1 1,-1zM10,9.625l5.50391,13.375h-11.01172zM40,16.625l5.50391,13.375h-11.00781zM4.71484,25h10.57031c-0.79687,1.22656 -2.42578,3 -5.28516,3c-2.85937,0 -4.48828,-1.77344 -5.28516,-3zM34.71484,32h10.57031c-0.79687,1.22656 -2.42578,3 -5.28516,3c-2.85937,0 -4.48828,-1.77344 -5.28516,-3zM16,45h18c0.72266,0 1.23828,0.4375 1.58984,1h-21.17969c0.35156,-0.5625 0.86719,-1 1.58984,-1z" /></g></g></svg>
                        </motion.div>
                        <motion.div
                            className="w-full h-1"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1, backgroundColor: currentStep > 1 ? "#2563eb" : "#374151" }}
                            transition={{ duration: 0.5 }}
                            style={{ transformOrigin: 'left' }}
                        />
                    </div>
                    <motion.div
                        className="left-0 text-sm text-center bg-transparent
                        text-white self-start w-fit"
                        animate={{ scale: 1, opacity: currentStep == 1 ? 1 : 0 }}
                        transition={{ duration: 0.7 }}
                        style={{ translateX: '-33px' }}
                    >
                        Explore our Biases
                    </motion.div>

                </li>
                <li className="flex flex-col w-full lg:h-28 items-center">
                    <div className="flex  items-center justify-center w-full h-full">
                        <motion.div
                            className="flex items-center justify-center w-10 h-10 rounded-full lg:h-12 lg:w-12 shrink-0 z-40 hover:cursor-pointer transition-all duration-300 hover:scale-125"
                            animate={{
                                backgroundColor: currentStep >= 3 ? "#2563eb" : "#374151",
                                boxShadow: currentStep === 2
                                    ? "0 0 0 4px rgba(37, 99, 235, 1)"
                                    : "none"
                            }}
                            transition={{ duration: 0.4 }}
                            style={{ transformOrigin: 'left' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256" width="28px" height="28px" fillRule="nonzero"><g fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth={1} strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit={10} strokeDasharray="" strokeDashoffset={0} fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal' }}><g transform="scale(5.12,5.12)"><path d="M23.0293,0c-7.22619,0 -12.55444,2.491 -16,6.40039c-3.44556,3.90939 -5,9.15913 -5,14.59961c0,4.40556 1.36599,8.50701 3.67578,11.86719c2.09383,3.04601 3.32422,6.65654 3.32422,10.33203v6.80078h2v-6.80078c0,-4.12051 -1.37161,-8.11285 -3.67578,-11.46484c-2.08821,-3.03783 -3.32422,-6.74193 -3.32422,-10.73437c0,-5.05952 1.44556,-9.80978 4.5,-13.27539c3.05444,-3.46561 7.72619,-5.72461 14.5,-5.72461c6.80236,0 11.20543,1.9786 14.11523,5.00586c2.9098,3.02726 4.3559,7.19978 4.89063,11.71289l0.02539,0.20703l4.79297,8.25977c0.24837,0.45002 0.12459,0.89305 -0.30859,1.13672l-4.51562,2.25781v6.02148c0,3.73832 -3.08023,6.64922 -6.80469,6.30078l-0.01562,-0.00195l-4.17969,-0.26758v7.36719h2v-5.23437l2.00781,0.12891c4.86954,0.45556 8.99219,-3.43728 8.99219,-8.29297v-4.78516l3.4668,-1.73242l0.01953,-0.01172c1.35867,-0.7565 1.83723,-2.50562 1.08789,-3.85742l-0.00586,-0.00977l-4.64648,-8.00586c-0.59563,-4.68245 -2.11875,-9.2006 -5.36523,-12.57813c-3.3147,-3.44849 -8.359,-5.62109 -15.55664,-5.62109zM21.05859,6.30469c-2.86833,0.04413 -5.93349,0.97808 -8.97266,3.30664l1.2168,1.58789c5.38279,-4.1242 10.36155,-3.3417 14.37109,-1.20898l-0.61328,1.51562l5.07617,-0.52734l-3.11133,-4.32031l-0.5957,1.4668c-2.16222,-1.11322 -4.678,-1.86175 -7.37109,-1.82031zM20.78711,11.96484c-1.27123,0.0293 -2.45104,0.24574 -3.60156,0.63867c-2.09952,0.71703 -4.0927,1.98712 -6.51172,3.64062l-0.90039,-1.32227l-2.25977,4.74805l5.18164,-0.45117l-0.89648,-1.31836c2.38368,-1.6257 4.25284,-2.79626 6.0332,-3.4043c1.95196,-0.66664 3.86691,-0.75264 6.64648,-0.09961l0.45703,-1.94726c-1.51521,-0.35598 -2.87721,-0.51368 -4.14844,-0.48437zM34.73438,12.16797l-1.10937,1.66406c1.3514,0.90094 2.53872,2.23426 3.2168,3.5332c0.67807,1.29895 0.7968,2.48031 0.44336,3.1875c-0.45526,0.91116 -1.68225,1.56633 -3.98242,2.11719l-0.39062,-1.55273l-3.80859,3.33984l5.07617,1.70703l-0.38672,-1.54102c2.55757,-0.60448 4.41487,-1.44182 5.28125,-3.17578c0.77556,-1.55181 0.39324,-3.37151 -0.46094,-5.00781c-0.85418,-1.6363 -2.23031,-3.17242 -3.87891,-4.27148zM29.73242,14.94141l-0.05469,1.61914c-6.8767,-0.2249 -11.93289,1.99568 -16.85547,7.0918l1.43945,1.38867c4.66522,-4.82969 8.91697,-6.7097 15.34766,-6.48437l-0.05469,1.5957l4.625,-2.15234zM26.17773,22l-4.85742,1.69336l1.18359,1.09375c-2.60634,2.84627 -3.82069,3.41739 -5.60156,3.84766c-1.26395,0.30571 -2.86528,-0.10818 -4.19336,-1.03711c-1.32807,-0.92893 -2.32761,-2.33 -2.54101,-3.74609l-1.97852,0.29688c0.3166,2.1009 1.66912,3.89607 3.37305,5.08789c1.70392,1.19182 3.8165,1.82409 5.81055,1.3418c2.01844,-0.48793 3.82512,-1.43052 6.59766,-4.43555l1.20898,1.11719z" /></g></g></svg>
                        </motion.div>
                        <motion.div
                            className="w-full h-1 grow"
                            initial={{ scaleX: 0, backgroundColor: "#374151" }}
                            animate={{ scaleX: 1, backgroundColor: currentStep > 2 ? "#2563eb" : "#374151" }}
                            exit={{ scale: 0 }}
                            transition={{ duration: 0.5 }}
                            style={{ transformOrigin: 'left' }}
                        />
                    </div>

                    <motion.div
                        className="text-sm text-center
                        text-white self-start w-fit"
                        animate={{ scale: 1, opacity: currentStep == 2 ? 1 : 0 }}
                        transition={{ duration: 0.7 }}
                        style={{ translateX: '-34px' }}
                    >
                        Establish Premises
                    </motion.div>

                </li>
                <li className="flex flex-col w-full lg:h-28 items-center">
                    <div className="flex  items-center justify-center w-full h-full">
                        <motion.div
                            className="flex items-center justify-center w-10 h-10 rounded-full lg:h-12 lg:w-12 shrink-0 z-40 hover:cursor-pointer transition-all duration-300 hover:scale-125"
                            animate={{
                                backgroundColor: currentStep <= 3 ? "#374151" : "#2563eb",
                                boxShadow: currentStep === 3
                                    ? "0 0 0 4px rgba(37, 99, 235, 1)"
                                    : "none"
                            }}
                            transition={{ duration: 0.4 }}
                            style={{ transformOrigin: 'left' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256" width="28px" height="28px" fillRule="nonzero"><g fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth={1} strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit={10} strokeDasharray="" strokeDashoffset={0} fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal' }}><g transform="scale(5.12,5.12)"><path d="M23,0c-7.22656,0 -12.55469,2.49609 -16,6.40625c-3.44531,3.91016 -5,9.15234 -5,14.59375c0,4.40625 1.375,8.51563 3.6875,11.875c2.09375,3.04688 3.3125,6.63281 3.3125,10.3125v6.8125h2v-6.8125c0,-4.08594 -1.35937,-8.04297 -3.625,-11.375l-0.0625,-0.09375c-2.08984,-3.03906 -3.3125,-6.72656 -3.3125,-10.71875c0,-5.05859 1.44531,-9.81641 4.5,-13.28125c3.05469,-3.46484 7.72656,-5.71875 14.5,-5.71875c6.80078,0 11.21484,1.97266 14.125,5c2.91016,3.02734 4.33984,7.20703 4.875,11.71875l0.03125,0.21875l0.09375,0.15625l4.71875,8.09375h-0.03125c0.25,0.44922 0.125,0.88281 -0.3125,1.125v0.03125l-4.5,2.25v6c0,3.74219 -3.08594,6.66016 -6.8125,6.3125h-0.03125l-3.09375,-0.21875l-1.0625,-0.0625v7.375h2v-5.25l2,0.15625c0.01172,0 0.01953,0 0.03125,0c4.85938,0.43359 8.96875,-3.46484 8.96875,-8.3125v-4.78125l3.4375,-1.71875h0.03125l0.03125,-0.03125c1.36328,-0.75781 1.8125,-2.49219 1.0625,-3.84375v-0.03125l-4.625,-8c-0.59375,-4.68359 -2.12891,-9.18359 -5.375,-12.5625c-3.31641,-3.44922 -8.36328,-5.625 -15.5625,-5.625zM19.65625,6l-0.15625,0.84375l-0.5,2.96875c-0.46484,0.14063 -0.91406,0.33594 -1.34375,0.5625l-2.46875,-1.78125l-0.6875,-0.5l-0.59375,0.59375l-2.125,2.09375l-0.59375,0.625l0.5,0.6875l1.78125,2.46875c-0.21094,0.40625 -0.39844,0.85547 -0.5625,1.34375l-3.09375,0.625l-0.8125,0.15625v4.65625l0.84375,0.15625l2.96875,0.5c0.16406,0.48828 0.35156,0.9375 0.5625,1.34375l-1.78125,2.46875l-0.5,0.6875l0.59375,0.59375l2.09375,2.125l0.625,0.59375l0.6875,-0.5l2.46875,-1.78125c0.40625,0.21094 0.85547,0.39844 1.34375,0.5625l0.5,2.96875l0.15625,0.84375h4.6875l0.125,-0.84375l0.53125,-3.0625c0.46875,-0.16797 0.91797,-0.35156 1.34375,-0.5625l2.5625,1.78125l0.6875,0.46875l0.59375,-0.59375l2.125,-2.09375l0.59375,-0.59375l-0.5,-0.6875l-1.78125,-2.46875c0.20703,-0.39844 0.39844,-0.83594 0.5625,-1.3125l3.03125,-0.4375l0.875,-0.125v-4.71875l-0.84375,-0.15625l-3.0625,-0.5c-0.14453,-0.45312 -0.32812,-0.91406 -0.5625,-1.375l1.78125,-2.5625l0.5,-0.6875l-0.59375,-0.59375l-2.125,-2.09375l-0.59375,-0.59375l-0.6875,0.5l-2.46875,1.78125c-0.40625,-0.21094 -0.85547,-0.39844 -1.34375,-0.5625l-0.5,-2.96875l-0.15625,-0.84375zM21.34375,8h1.3125l0.46875,2.65625l0.09375,0.6875l0.65625,0.125c0.74609,0.16406 1.46094,0.52734 2.125,0.90625l0.5625,0.3125l0.53125,-0.375l2.21875,-1.59375l0.875,0.90625l-1.59375,2.3125l-0.40625,0.53125l0.375,0.5625c0.4375,0.69922 0.69531,1.40234 0.875,2.125l0.15625,0.625l0.65625,0.09375l2.75,0.46875v1.28125l-3.4375,0.46875l-0.125,0.6875c-0.16406,0.74609 -0.52734,1.46094 -0.90625,2.125l-0.3125,0.5625l0.375,0.53125l1.59375,2.1875l-0.90625,0.90625l-2.3125,-1.625l-0.46875,-0.34375l-0.5625,0.28125c-0.80078,0.39844 -1.53906,0.77734 -2.1875,0.9375l-0.625,0.15625l-0.125,0.625l-0.46875,2.78125h-1.28125l-0.46875,-2.6875l-0.09375,-0.65625l-0.65625,-0.125c-0.74609,-0.16406 -1.46094,-0.52734 -2.125,-0.90625l-0.5625,-0.3125l-0.53125,0.375l-2.1875,1.59375l-0.90625,-0.875l1.59375,-2.21875l0.375,-0.53125l-0.3125,-0.5625c-0.37891,-0.66406 -0.74219,-1.37891 -0.90625,-2.125l-0.125,-0.65625l-0.6875,-0.09375l-2.65625,-0.46875v-1.34375l2.78125,-0.53125l0.65625,-0.125l0.125,-0.625c0.16406,-0.74609 0.52734,-1.46094 0.90625,-2.125l0.3125,-0.5625l-0.375,-0.53125l-1.59375,-2.1875l0.875,-0.90625l2.21875,1.59375l0.59375,0.40625l0.59375,-0.40625c0.5625,-0.40234 1.21484,-0.66406 2.03125,-0.84375l0.65625,-0.125l0.09375,-0.6875zM22,14c-2.74609,0 -5,2.25391 -5,5c0,2.74609 2.25391,5 5,5c2.74609,0 5,-2.25391 5,-5c0,-2.74609 -2.25391,-5 -5,-5zM22,16c1.65625,0 3,1.34375 3,3c0,1.65625 -1.34375,3 -3,3c-1.65625,0 -3,-1.34375 -3,-3c0,-1.65625 1.34375,-3 3,-3z" /></g></g></svg>
                        </motion.div>
                        <motion.div
                            className="w-full h-1 grow"
                            initial={{ scaleX: 0, backgroundColor: "#374151" }}
                            animate={{ scaleX: 1, backgroundColor: currentStep > 3 ? "#2563eb" : "#374151" }}
                            exit={{ scale: 0 }}
                            transition={{ duration: 0.5 }}
                            style={{ transformOrigin: 'left' }}
                        />
                    </div>

                    <motion.div
                        className="text-sm text-center
    text-white self-start w-fit"
                        animate={{ scale: 1, opacity: currentStep == 3 ? 1 : 0 }}
                        transition={{ duration: 0.7 }}
                        style={{ translateX: '-32px' }}
                    >
                        Let's Self Reflect
                    </motion.div>

                </li>
                <li className="flex flex-col max-w-full lg:h-28 items-start justify-center">
                    <motion.div
                        className="flex items-center justify-center w-10 h-10 rounded-full lg:h-12 lg:w-12 shrink-0 z-40 hover:cursor-pointer transition-all duration-300 hover:scale-125"
                        animate={{
                            backgroundColor: currentStep <= 4 ? "#374151" : "#2563eb",
                            boxShadow: currentStep === 4
                                ? "0 0 0 4px rgba(37, 99, 235, 1)"
                                : "none"
                        }}
                        transition={{ duration: 0.4 }}
                        style={{ transformOrigin: 'left' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256" width="28px" height="28px" fillRule="nonzero"><g fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth={1} strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit={10} strokeDasharray="" strokeDashoffset={0} fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal' }}><g transform="scale(5.12,5.12)"><path d="M7,4c-1.64545,0 -3,1.35455 -3,3v36c0,1.64545 1.35455,3 3,3h36c1.64545,0 3,-1.35455 3,-3v-36c0,-1.64545 -1.35455,-3 -3,-3zM7,6h36c0.55454,0 1,0.44545 1,1v36c0,0.55454 -0.44546,1 -1,1h-36c-0.55455,0 -1,-0.44546 -1,-1v-36c0,-0.55455 0.44545,-1 1,-1zM22.5,13c-5.23486,0 -9.5,4.26514 -9.5,9.5c0,5.23486 4.26514,9.5 9.5,9.5c2.25822,0 4.33208,-0.79824 5.96484,-2.12109l7.82813,7.82813l1.41406,-1.41406l-7.82812,-7.82812c1.32286,-1.63277 2.12109,-3.70662 2.12109,-5.96484c0,-5.23486 -4.26514,-9.5 -9.5,-9.5zM22.5,15c4.15398,0 7.5,3.34602 7.5,7.5c0,4.15398 -3.34602,7.5 -7.5,7.5c-4.15398,0 -7.5,-3.34602 -7.5,-7.5c0,-4.15398 3.34602,-7.5 7.5,-7.5z" /></g></g></svg>
                    </motion.div>

                    <motion.div
                        className="text-sm text-center text-white self-start w-fit"
                        animate={{ scale: 1, opacity: currentStep == 4 ? 1 : 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className="w-full translate-y-5">Search</div>
                    </motion.div>

                </li>



            </ol>
        </section>

    )
}




