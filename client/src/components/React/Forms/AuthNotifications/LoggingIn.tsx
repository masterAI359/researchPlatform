import { motion } from "framer-motion";
import Loader from "../../Loaders/Loader";
import LoggedInSuccessfully from "./LoggedInSuccessfully";

export default function LoggingIn({ successful }) {

    const variants = {
        show: {
            y: 0,
            opacity: 1
        },
        hide: {
            y: -100,
            opacity: 0
        }
    }

    return (
        <motion.div
            variants={variants}
            initial='hide'
            animate='show'
            exit='hide'
            transition={{ type: 'tween', duration: 0.2 }}
            className="absolute top-24 right-36 h-10 w-60 p-2 bg-mirage rounded-xl px-2"
        >
            <div className="flex w-full h-full items-center justify-between">
                <div className="w-auto h-fit">
                    <p className="text-white font-light">
                        {successful === null && 'Logging in'}
                        {successful === false && 'Login failed'}
                        {successful === true && 'Logged in successfully!'}
                    </p>
                </div>
                <div className="w-auto h-fit relative">
                    {successful === null && <Loader />}
                    {successful === true && <LoggedInSuccessfully />}
                </div>
            </div>
        </motion.div>
    )
}



