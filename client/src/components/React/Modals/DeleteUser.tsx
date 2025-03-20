import { motion } from "framer-motion";
import { createPortal } from "react-dom";
import { deleteUser } from "@/helpers/SupabaseData"
import { useSelector } from "react-redux";
import { RootState } from "@/ReduxToolKit/store";
import { useState } from "react";

const variants = {
    closed: { opacity: 0 },
    open: { opacity: 1 }
}


export default function DeleteUserAccount({ setShowModal }) {
    const id = useSelector((state: RootState) => state.auth.user_id)
    const [deleting, setDeleting] = useState<boolean>(null)
    const [deleteSuccessful, setDeleteSuccessful] = useState<boolean>(null)

    console.log(typeof id)

    const modal = (
        <motion.div
            key='returnToSearch'
            variants={variants}
            initial="closed"
            animate="open"
            exit="closed"
            transition={{ duration: 0.2, type: 'tween' }}
            className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50
         xl:min-w-96 xl:min-h-80 w-80 flex flex-col items-start gap-x-8 gap-y-6 rounded-3xl p-8 
        sm:gap-y-10 sm:p-10 lg:col-span-2 lg:flex-row lg:items-center bg-ebony mt-2 
        shadow-inset text-center">
            <div className="lg:min-w-0 lg:flex-1 max-w-sm mx-auto">
                <p className="text-white xl:text-3xl font-light tracking-tight">Delete your account?</p>
                <p className="mt-4">
                    <span className="text-2xl font-lighter text-white" />
                    <span className="text-base font-medium text-zinc-400">This action cannot be undone</span><br></br>
                </p>
                <p className="mx-auto mt-6 text-sm text-white" />
                {deleteSuccessful !== false ? <div className="inline-flex flex-no-wrap gap-x-4 items-center mt-8 w-full">

                    <button onClick={() => setShowModal(false)} type="button" className="text-sm py-2 w-full px-4 border focus:ring-2 rounded-full border-transparent bg-white hover:bg-white/10 text-black duration-200 focus:ring-offset-2 focus:ring-white hover:text-white inline-flex items-center justify-center ring-1 ring-transparent">
                        No
                    </button>
                    <button onClick={() => deleteUser(id, setDeleting, setDeleteSuccessful)} type="button" className="text-sm py-2 w-full px-4 border focus:ring-2 rounded-full border-transparent bg-white hover:bg-white/10 text-black duration-200 focus:ring-offset-2 focus:ring-white hover:text-white inline-flex items-center justify-center ring-1 ring-transparent">
                        Yes
                    </button>
                </div> : <div className="mx-auto min-w-full min-h-full flex items-center justify-center">
                    <p className="text-white font-light tracking-tight text-lg">
                        {deleting && 'Deleting your account'}
                    </p>
                </div>}

            </div>
        </motion.div>)


    return (
        createPortal(modal, document.body)
    )


}

