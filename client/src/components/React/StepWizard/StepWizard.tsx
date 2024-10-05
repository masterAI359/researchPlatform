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
                            className="flex items-center justify-center w-10 h-10 rounded-full lg:h-12 lg:w-12 shrink-0 z-40"
                            animate={{
                                backgroundColor: currentStep === 0 ? "#374151" : "#2563eb",
                                boxShadow: currentStep === 0
                                    ? "0 0 0 4px rgba(37, 99, 235, 1)"
                                    : "none"
                            }}
                            transition={{ duration: 0.4 }}
                            style={{ transformOrigin: 'left' }}>
                            <svg fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 50 50" width="28px" height="28px">
                                <path fill="none" stroke="#FFFFFF" strokeWidth={2} strokeLinejoin="round" strokeMiterlimit={10} d="M24,32v-7c0-1.105,0.895-2,2-2h0.5" /><path fill="none" stroke="#FFFFFF" strokeWidth={2} strokeLinejoin="round" strokeMiterlimit={10} d="M24,25c0-1.105-0.895-2-2-2h-0.5" />
                                <circle cx="26.5" cy="23.5" r="1.5" /><circle cx="21.5" cy="23.5" r="1.5" /><path d="M47.529,27.241l-4.098-7.365C41.986,8.347,35.092,2,24,2C10.36,2,3,11.997,3,21.403c0,4.999,1.958,8.814,3.851,12.504C8.471,37.063,10,40.044,10,43.412V48h24v-3h1.886C40.36,45,44,41.36,44,36.886v-4.221l1.935-0.813c0.857-0.359,1.523-1.07,1.827-1.948C48.065,29.024,47.981,28.055,47.529,27.241z M25.82,38.82C25.507,39.515,24.812,40,24,40s-1.507-0.485-1.82-1.18C21.485,38.507,21,37.812,21,37v-1h6v1C27,37.812,26.515,38.507,25.82,38.82z M28.168,30.973c-0.494,0.874-0.926,1.821-1.089,3.027h-6.157c-0.161-1.195-0.584-2.144-1.071-3.018C16.97,29.481,15,26.473,15,23c0-4.971,4.029-9,9-9s9,4.029,9,9C33,26.466,31.038,29.469,28.168,30.973z" />
                            </svg>

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
                        text-slate-200 self-start w-fit"
                        animate={{ scale: 1, opacity: currentStep > 0 ? 0 : 1 }}
                        transition={{ duration: 0.7 }}
                        style={{ translateX: '-18px' }}
                    >
                        Challenge an <br></br> idea
                    </motion.div>

                </li>
                <li className="flex flex-col w-full lg:h-28 items-center">
                    <div className="flex  items-center justify-center w-full h-full">
                        <motion.div
                            className="flex items-center justify-center w-10 h-10 rounded-full lg:h-12 lg:w-12 shrink-0 z-40"
                            animate={{
                                backgroundColor: currentStep >= 2 ? "#2563eb" : "#374151",
                                boxShadow: currentStep === 1
                                    ? "0 0 0 4px rgba(37, 99, 235, 1)"
                                    : "none"
                            }}
                            transition={{ duration: 0.4 }}
                            style={{ transformOrigin: 'left' }}
                        >
                            <svg fill="#FFFFFF" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="28px" height="28px" x="0px" y="0px" viewBox="0 0 64 64" xmlSpace="preserve">
                                <path d="M32,3L1,28l0.127,0.169C2.074,29.432,3.437,30,5,30c0.242,0,5.635,0,5.635,0v-3.45L32,9l21.365,17.55V30
	c0,0,5.393,0,5.635,0c1.563,0,2.926-0.568,3.873-1.831L63,28L32,3z" />
                                <g>
                                    <polygon points="43.5,34.659 38.96,45 48.04,45 	" />
                                    <polygon points="15.96,42 25.04,42 20.5,31.659 	" />
                                    <path d="M32,6L8,25v31h48V28L32,6z M43.5,50C37,50,35,45,35,45h1.775l5.086-11.585c-3.287-1.155-6.574-3.611-9.861-4.044
		c-3.23-0.426-6.461,1.104-9.691,1.431L27.225,42H29c0,0-2,5-8.5,5S12,42,12,42h1.775l5.008-11.407C15.602,30.002,14,29,14,29v-3
		c0,0,2,1.263,6,1.79c4,0.527,6.005-2.408,10-2.682v-3.473l2-1.263l2,1.263v4c3.995,1.327,6,4.791,10,5.318s6-0.21,6-0.21v3
		c0,0-1.522,0.559-4.563,0.353L50.225,45H52C52,45,50,50,43.5,50z" />
                                </g>
                            </svg>
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
                        text-slate-200 self-start w-fit"
                        animate={{ scale: 1, opacity: currentStep == 1 ? 1 : 0 }}
                        transition={{ duration: 0.7 }}
                        style={{ translateX: '-10px' }}
                    >
                        Explore<br></br> our Biases
                    </motion.div>

                </li>
                <li className="flex flex-col w-full lg:h-28 items-center">
                    <div className="flex  items-center justify-center w-full h-full">
                        <motion.div
                            className="flex items-center justify-center w-10 h-10 rounded-full lg:h-12 lg:w-12 shrink-0 z-40"
                            animate={{
                                backgroundColor: currentStep >= 3 ? "#2563eb" : "#374151",
                                boxShadow: currentStep === 2
                                    ? "0 0 0 4px rgba(37, 99, 235, 1)"
                                    : "none"
                            }}
                            transition={{ duration: 0.4 }}
                            style={{ transformOrigin: 'left' }}>
                            <svg fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="28px" height="28px">
                                <path d="M 35 0 C 20.839844 0 10.328125 9.410156 10.007813 22.375 C 10 22.6875 9.953125 22.984375 9.863281 23.25 L 4.445313 39.511719 C 4.25 40.085938 4.328125 40.707031 4.65625 41.21875 C 4.980469 41.730469 5.515625 42.0625 6.117188 42.128906 L 9.109375 42.464844 C 9.617188 42.519531 10 42.945313 10 43.457031 L 10 52.53125 C 10 53.953125 10.605469 55.308594 11.664063 56.257813 C 12.722656 57.207031 14.144531 57.660156 15.550781 57.5 L 18.453125 57.179688 L 23.84375 56.578125 L 23.308594 60.609375 C 23.195313 61.464844 23.457031 62.328125 24.027344 62.980469 C 24.59375 63.628906 25.417969 64 26.28125 64 L 52.777344 64 C 53.625 64 54.441406 63.640625 55.007813 63.007813 C 55.574219 62.375 55.851563 61.53125 55.761719 60.6875 L 54.324219 47.035156 C 54.1875 45.738281 54.414063 44.4375 54.980469 43.28125 C 58.261719 36.554688 60 29.195313 60 22 C 60 9.046875 49.71875 0 35 0 Z M 35 2 C 50.890625 2 58 12.046875 58 22 C 58 28.890625 56.335938 35.949219 53.183594 42.40625 C 52.453125 43.898438 52.160156 45.574219 52.339844 47.246094 L 53.773438 60.894531 C 53.800781 61.179688 53.714844 61.457031 53.519531 61.671875 C 53.328125 61.882813 53.0625 62 52.777344 62 L 26.28125 62 C 25.988281 62 25.722656 61.878906 25.53125 61.65625 C 25.335938 61.4375 25.253906 61.160156 25.292969 60.871094 L 25.890625 56.351563 L 29.109375 55.992188 C 29.660156 55.929688 30.054688 55.4375 29.996094 54.890625 C 29.933594 54.339844 29.441406 53.941406 28.890625 54.003906 L 26.160156 54.308594 L 15.332031 55.511719 C 14.480469 55.605469 13.636719 55.335938 13 54.765625 C 12.363281 54.195313 12 53.382813 12 52.53125 L 12 43.457031 C 12 41.925781 10.851563 40.644531 9.328125 40.476563 L 6.339844 40.140625 L 11.761719 23.882813 C 11.914063 23.429688 11.996094 22.9375 12.007813 22.421875 C 12.300781 10.589844 21.96875 2 35 2 Z M 35 5 C 34.445313 5 34 5.449219 34 6 L 34 8 C 34 8.550781 34.445313 9 35 9 C 35.554688 9 36 8.550781 36 8 L 36 6 C 36 5.449219 35.554688 5 35 5 Z M 29.574219 5.742188 C 29.445313 5.722656 29.308594 5.730469 29.175781 5.765625 C 28.644531 5.910156 28.324219 6.457031 28.46875 6.992188 L 28.984375 8.921875 C 29.105469 9.371094 29.507813 9.664063 29.953125 9.664063 C 30.039063 9.664063 30.125 9.65625 30.214844 9.632813 C 30.746094 9.488281 31.0625 8.9375 30.921875 8.40625 L 30.402344 6.472656 C 30.292969 6.070313 29.957031 5.792969 29.574219 5.742188 Z M 40.425781 5.742188 C 40.042969 5.792969 39.707031 6.074219 39.597656 6.472656 L 39.078125 8.40625 C 38.9375 8.9375 39.253906 9.488281 39.785156 9.632813 C 39.875 9.652344 39.960938 9.664063 40.046875 9.664063 C 40.488281 9.664063 40.894531 9.371094 41.015625 8.921875 L 41.53125 6.992188 C 41.675781 6.457031 41.355469 5.910156 40.824219 5.765625 C 40.691406 5.730469 40.554688 5.722656 40.425781 5.742188 Z M 24.125 7.886719 C 23.996094 7.902344 23.867188 7.945313 23.75 8.015625 C 23.269531 8.289063 23.109375 8.902344 23.386719 9.382813 L 24.386719 11.109375 C 24.570313 11.433594 24.90625 11.609375 25.25 11.609375 C 25.421875 11.609375 25.59375 11.570313 25.75 11.480469 C 26.230469 11.203125 26.390625 10.589844 26.113281 10.109375 L 25.113281 8.382813 C 24.90625 8.023438 24.511719 7.839844 24.125 7.886719 Z M 45.875 7.890625 C 45.484375 7.839844 45.089844 8.023438 44.886719 8.382813 L 43.886719 10.113281 C 43.609375 10.589844 43.769531 11.203125 44.25 11.480469 C 44.40625 11.570313 44.578125 11.613281 44.75 11.613281 C 45.09375 11.613281 45.429688 11.433594 45.613281 11.113281 L 46.613281 9.382813 C 46.890625 8.902344 46.726563 8.292969 46.25 8.015625 C 46.128906 7.945313 46 7.90625 45.875 7.890625 Z M 47 14 C 44.242188 14 42 16.242188 42 19 C 42 19.960938 42.285156 20.847656 42.753906 21.609375 L 38.421875 25.578125 C 37.21875 24.59375 35.675781 24 34 24 C 32.386719 24 30.902344 24.554688 29.714844 25.476563 L 26.71875 22.484375 C 26.328125 22.089844 25.6875 22.089844 25.296875 22.484375 C 24.902344 22.875 24.902344 23.511719 25.296875 23.90625 L 28.316406 26.929688 C 27.492188 28.078125 27 29.480469 27 31 C 27 31.128906 27.011719 31.25 27.019531 31.375 L 21.5625 32.46875 C 21.039063 31.59375 20.09375 31 19 31 C 17.347656 31 16 32.347656 16 34 C 16 35.652344 17.347656 37 19 37 C 20.507813 37 21.746094 35.878906 21.957031 34.425781 L 27.410156 33.339844 C 28.265625 35.746094 30.402344 37.546875 33 37.921875 L 33 41 C 33 41.550781 33.445313 42 34 42 C 34.554688 42 35 41.550781 35 41 L 35 37.921875 C 36.527344 37.699219 37.894531 36.992188 38.9375 35.953125 L 42.304688 38.476563 C 42.109375 38.949219 42 39.460938 42 40 C 42 42.207031 43.792969 44 46 44 C 48.207031 44 50 42.207031 50 40 C 50 37.792969 48.207031 36 46 36 C 45.058594 36 44.203125 36.339844 43.515625 36.890625 L 40.140625 34.355469 C 40.6875 33.359375 41 32.214844 41 31 C 41 29.542969 40.550781 28.1875 39.785156 27.0625 L 44.128906 23.082031 C 44.945313 23.65625 45.929688 24 47 24 C 49.757813 24 52 21.757813 52 19 C 52 16.242188 49.757813 14 47 14 Z M 22 15 C 19.792969 15 18 16.792969 18 19 C 18 21.207031 19.792969 23 22 23 C 24.207031 23 26 21.207031 26 19 C 26 16.792969 24.207031 15 22 15 Z M 47 15.875 C 48.722656 15.875 50.125 17.277344 50.125 19 C 50.125 20.722656 48.722656 22.125 47 22.125 C 45.277344 22.125 43.875 20.722656 43.875 19 C 43.875 17.277344 45.277344 15.875 47 15.875 Z M 22 16.75 C 23.238281 16.75 24.25 17.757813 24.25 19 C 24.25 20.242188 23.238281 21.25 22 21.25 C 20.761719 21.25 19.75 20.242188 19.75 19 C 19.75 17.757813 20.761719 16.75 22 16.75 Z M 34 25.625 C 36.964844 25.625 39.375 28.035156 39.375 31 C 39.375 33.964844 36.964844 36.375 34 36.375 C 31.035156 36.375 28.625 33.964844 28.625 31 C 28.625 28.035156 31.035156 25.625 34 25.625 Z M 19 32.75 C 19.691406 32.75 20.25 33.3125 20.25 34 C 20.25 34.6875 19.691406 35.25 19 35.25 C 18.308594 35.25 17.75 34.6875 17.75 34 C 17.75 33.3125 18.308594 32.75 19 32.75 Z M 46 37.75 C 47.238281 37.75 48.25 38.757813 48.25 40 C 48.25 41.242188 47.238281 42.25 46 42.25 C 44.761719 42.25 43.75 41.242188 43.75 40 C 43.75 38.757813 44.761719 37.75 46 37.75 Z M 34 43 C 32.347656 43 31 44.347656 31 46 C 31 47.652344 32.347656 49 34 49 C 35.652344 49 37 47.652344 37 46 C 37 44.347656 35.652344 43 34 43 Z M 34 44.859375 C 34.628906 44.859375 35.140625 45.371094 35.140625 46 C 35.140625 46.628906 34.628906 47.140625 34 47.140625 C 33.371094 47.140625 32.859375 46.628906 32.859375 46 C 32.859375 45.371094 33.371094 44.859375 34 44.859375 Z" />
                            </svg>

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
                        text-slate-200 self-start w-fit"
                        animate={{ scale: 1, opacity: currentStep == 2 ? 1 : 0 }}
                        transition={{ duration: 0.7 }}
                        style={{ translateX: '-4px' }}
                    >
                        Establish<br></br>Premises
                    </motion.div>

                </li>
                <li className="flex flex-col w-full lg:h-28 items-center">
                    <div className="flex  items-center justify-center w-full h-full">
                        <motion.div
                            className="flex items-center justify-center w-10 h-10 rounded-full lg:h-12 lg:w-12 shrink-0 z-40"
                            animate={{
                                backgroundColor: currentStep <= 3 ? "#374151" : "#2563eb",
                                boxShadow: currentStep === 3
                                    ? "0 0 0 4px rgba(37, 99, 235, 1)"
                                    : "none"
                            }}
                            transition={{ duration: 0.4 }}
                            style={{ transformOrigin: 'left' }}>
                            <svg fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 50 50" width="28px" height="28px">
                                <path d="M25,36c-9.925,0-18-8.075-18-18C7,8.075,15.075,0,25,0c9.925,0,18,8.075,18,18C43,27.925,34.925,36,25,36z" /><path fill="none" stroke="#FFFFFF" strokeWidth={2} strokeLinecap="round" strokeMiterlimit={10} d="M46,18c0,11.6-9.4,21-21,21C13.4,39,4,29.6,4,18" /><line fill="none" stroke="#FFFFFF" strokeWidth={2} strokeLinecap="round" strokeMiterlimit={10} x1={25} y1={39} x2={25} y2={49} /><line fill="none" stroke="#FFFFFF" strokeWidth={2} strokeLinecap="round" strokeMiterlimit={10} x1={15} y1={49} x2={35} y2={49} /><line fill="none" stroke="#FFFFFF" strokeWidth={2} strokeMiterlimit={10} x1={44} y1={19} x2={46} y2={19} /><line fill="none" stroke="#FFFFFF" strokeWidth={2} strokeMiterlimit={10} x1={4} y1={19} x2={6} y2={19} />
                            </svg>

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
    text-slate-200 self-start w-fit"
                        animate={{ scale: 1, opacity: currentStep == 3 ? 1 : 0 }}
                        transition={{ duration: 0.7 }}
                        style={{ translateX: '-4px' }}
                    >
                        Let's Self <br></br>Reflect
                    </motion.div>

                </li>
                <li className="flex flex-col max-w-full lg:h-28 items-start justify-center">
                    <motion.div
                        className="flex items-center justify-center w-10 h-10 rounded-full lg:h-12 lg:w-12 shrink-0 z-40"
                        animate={{
                            backgroundColor: currentStep <= 4 ? "#374151" : "#2563eb",
                            boxShadow: currentStep === 4
                                ? "0 0 0 4px rgba(37, 99, 235, 1)"
                                : "none"
                        }}
                        transition={{ duration: 0.4 }}
                        style={{ transformOrigin: 'left' }}>
                        <svg fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 50 50" width="28px" height="28px">
                            <path d="M43,4H7C5.35,4,4,5.35,4,7v36c0,1.65,1.35,3,3,3h36c1.65,0,3-1.35,3-3V7C46,5.35,44.65,4,43,4z M36.29,37.71l-7.82-7.82C26.84,31.21,24.76,32,22.5,32c-5.24,0-9.5-4.26-9.5-9.5s4.26-9.5,9.5-9.5s9.5,4.26,9.5,9.5c0,2.26-0.79,4.34-2.11,5.97l7.82,7.82L36.29,37.71z" /><circle cx="22.5" cy="22.5" r="7.5" />
                        </svg>
                    </motion.div>


                    <motion.div
                        className="text-sm text-center mt-5 text-slate-200 self-start w-fit"
                        animate={{ scale: 1, opacity: currentStep == 4 ? 1 : 0 }}
                        transition={{ duration: 0.7 }}
                        style={{ translateX: '-4px' }}
                    >
                        <div className="w-full translate-x-1">Search</div>
                    </motion.div>

                </li>



            </ol>
        </section>

    )
}




