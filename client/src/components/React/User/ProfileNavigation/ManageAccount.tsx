import { AnimatePresence } from "framer-motion"
import { useState } from "react"
import DeleteUserAccount from "../../Modals/DeleteUser"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@/ReduxToolKit/store"
import { presentDeleteModal } from "@/ReduxToolKit/Reducers/UserContent.ts/ProfileNavigationSlice"

export default function ManageAccount() {
    const showDeleteModal = useSelector((state: RootState) => state.profileNav.displayDeleteModal)
    const dispatch = useDispatch()


    return (
        <section
            className="min-h-svh 2xl:w-full md:px-8 scroll-smooth
  inset mx-auto sm:mt-10 relative">
            <header className="mx-auto w-fit mx-auto h-auto mt-24">
                <h1 className="text-zinc-400 text-xl font-light tracking-tight">
                    Manage your account
                </h1>
            </header>
            <AnimatePresence>
                {showDeleteModal && <DeleteUserAccount />}
            </AnimatePresence>
            <main
                className="xl:max-w-7xl xl:w-4/5 lg:w-3/4 flex flex-col gap-y-12 items-center justify-center
        md:w-3/4 md:mt-16 sm:mt-0 w-72 h-full mx-auto mt-12 
        transition-all duration-1000 animate-fade-in 
        mb-12 xl:px-24">

                <div onClick={() => dispatch(presentDeleteModal(true))} className="cursor-pointer w-44 gap-x-6 h-auto rounded-xl bg-mirage p-4 flex items-center justify-center">
                    <p className="text-xl text-white text-xs font-light text-nowrap tracking-tight">
                        Change Password
                    </p>
                    <div className="relative w-6 h-6">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
                            className="icon icon-tabler text-white icons-tabler-outline icon-tabler-lock absolute bottom-0 right-0"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6z" /><path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" /><path d="M8 11v-4a4 4 0 1 1 8 0v4" /></svg>

                    </div>

                </div>
                <div onClick={() => dispatch(presentDeleteModal(true))} className="cursor-pointer w-44 gap-x-6 h-auto rounded-xl bg-mirage p-4 flex items-center justify-center">
                    <p className="text-xl text-white text-xs font-light text-nowrap tracking-tight">
                        Delete Account
                    </p>
                    <div className="relative w-6 h-6">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
                            className="icon icon-tabler text-red-500 icons-tabler-outline absolute right-0 bottom-0 icon-tabler-trash"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 7l16 0" /><path d="M10 11l0 6" /><path d="M14 11l0 6" /><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" /><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" /></svg>
                    </div>
                </div>
            </main>
        </section>
    )
}