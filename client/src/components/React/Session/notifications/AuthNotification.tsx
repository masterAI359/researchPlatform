import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import Success from "./Success";
import Failed from "./Failed";
import Pending from "./Pending";
import { hideTop } from "@/motion/variants";
import { createPortal } from "react-dom";
import { AuthNotificationProps } from "@/env";


export default function AuthNotification({ complete, setterFunction, status, redirect }: AuthNotificationProps) {

    useEffect(() => {

        const timer = setTimeout(() => {
            setterFunction(prev => !prev);
            if (redirect) {
                redirect();
            };
        }, 2000);

        return () => clearTimeout(timer)

    }, [complete])


    const notification = (
        <motion.div
            key='accountCreationNotification'
            variants={hideTop}
            initial='hide'
            animate='show'
            exit='hide'
            transition={{ type: 'tween', duration: 0.2 }}
            className="fixed top-24 right-36 h-10 w-60 p-2 bg-mirage border border-zinc-700 rounded-xl px-2"
        >
            <div key='title' className="flex w-full h-full items-center justify-between">
                <div key='titleContainer' className="w-auto h-fit">
                    <p className="text-white font-light text-sm">
                        {complete === null && status.pending}
                        {complete === true && status.successful}
                        {complete === false && status.failed}
                    </p>
                </div>
                <div className="w-auto h-fit relative">
                    {<AnimatePresence mode="wait">
                        {complete === null && <Pending />}
                        {complete === true && <Success />}
                        {complete === false && <Failed />}
                    </AnimatePresence>}
                </div>
            </div>
        </motion.div>
    );

    return createPortal(notification, document.body);
};