import { AnimatePresence, motion } from "framer-motion"
import AccountActions from "./AccountActions"
import { variants } from "@/motion/variants"
import DeleteUserAccount from "@/components/React/Session/modals/DeleteUser";
import { useSelector } from "react-redux";
import { RootState } from "@/ReduxToolKit/store";

export default function AccManagement() {
    const showDeleteModal = useSelector((state: RootState) => state.profileNav.displayDeleteModal);

    console.log('rendering acc mngmt')

    return (
        <motion.section
            variants={variants}
            initial="closed"
            animate="open"
            exit="closed"
            transition={{ type: 'tween', duration: 0.3 }}
            className="min-h-svh 2xl:w-full md:px-8 scroll-smooth inset mx-auto relative">
            <AccountActions />

            <AnimatePresence>
                {showDeleteModal && <DeleteUserAccount />}
            </AnimatePresence>

        </motion.section>
    );
};

