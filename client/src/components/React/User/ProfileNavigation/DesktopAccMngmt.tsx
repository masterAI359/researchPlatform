import { AnimatePresence } from "framer-motion"
import { useState } from "react"
import DeleteUserAccount from "../../Modals/DeleteUser"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@/ReduxToolKit/store"
import { presentDeleteModal } from "@/ReduxToolKit/Reducers/UserContent.ts/ProfileNavigationSlice"
import { useNavigate } from "react-router-dom"

export default function DesktopAccMngmt () {
    const showDeleteModal = useSelector((state: RootState) => state.profileNav.displayDeleteModal)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleChangePW = () => {

        navigate('/EmailForReset')
    }

    return (
        <section
            className="min-h-svh 2xl:w-full md:px-8 scroll-smooth
  inset mx-auto relative">
            <header className="mx-auto w-full h-auto">
                <h1 className="text-blue-400 ml-24 text-2xl font-light tracking-tight">
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
            <div onClick={handleChangePW} 
            className="cursor-pointer w-44 xl:w-168 
            gap-x-6 xl:gap-x-0 h-auto rounded-xl
            bg-gradient-to-tr from-ebony to-mirage
            p-4 flex items-center justify-center">
                <a href="#" className="flex flex-row-reverse w-full items-center p-2 rounded-lg dark:text-white group">
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" 
                className="icon icon-tabler text-white/50 group-hover:text-white transition-all duration-200 ease-in-out icons-tabler-outline icon-tabler-lock"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6z" /><path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" /><path d="M8 11v-4a4 4 0 1 1 8 0v4" /></svg>

                                <span className="flex-1 whitespace-nowrap xl:text-xl font-light">Change Password</span>
                            </a>
                </div>
             
                <div onClick={() => dispatch(presentDeleteModal(true))} 
                className="cursor-pointer w-44 xl:w-168 
                gap-x-6 xl:gap-x-0 h-auto rounded-xl
                 bg-gradient-to-tr from-ebony to-mirage
                  p-4 flex items-center justify-center">
                <a href="#" className="flex flex-row-reverse w-full items-center p-2 rounded-lg dark:text-white group">
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
                                    className="icon icon-tabler text-white/60 group-hover:text-red-500 transition-all duration-200 ease-in-out icons-tabler-outline icon-tabler-trash"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 7l16 0" /><path d="M10 11l0 6" /><path d="M14 11l0 6" /><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" /><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" /></svg>
                                <span className="flex-1 whitespace-nowrap xl:text-xl font-light">Delete Account</span>
                            </a>
                </div>
            </main>
        </section>
    )
}