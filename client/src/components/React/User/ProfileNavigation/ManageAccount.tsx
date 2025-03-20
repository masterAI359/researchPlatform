import { AnimatePresence } from "framer-motion"
import { useState } from "react"
import DeleteUserAccount from "../../Modals/DeleteUser"

export default function ManageAccount() {
    const [showModal, setShowModal] = useState<boolean>(false)



    return (
        <section
            className="min-h-svh 2xl:w-full md:px-8 scroll-smooth
  inset mx-auto sm:mt-10 relative">
            <AnimatePresence>
                {showModal && <DeleteUserAccount setShowModal={setShowModal} />}
            </AnimatePresence>
            <main
                className="xl:max-w-7xl xl:w-4/5 lg:w-3/4
        md:w-3/4 mt-16 sm:mt-0 w-72 h-full mx-auto 
        transition-all duration-1000 animate-fade-in 
        mb-12 xl:px-24">
                <div onClick={() => setShowModal(true)} className="cursor-pointer mt-44 w-fit gap-x-6 h-20 rounded-4xl bg-mirage p-4 flex items-center justify-center">
                    <p className="text-xl text-white font-light text-nowrap tracking-tight">
                        Delete Account
                    </p>
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
                        className="icon icon-tabler text-red-500 icons-tabler-outline icon-tabler-trash"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 7l16 0" /><path d="M10 11l0 6" /><path d="M14 11l0 6" /><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" /><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" /></svg>

                </div>
            </main>
        </section>
    )
}