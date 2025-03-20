import { useDispatch, useSelector } from "react-redux";
import { presentArticles, presentResearch } from "@/ReduxToolKit/Reducers/UserContent.ts/ProfileNavigationSlice";
import { showSignOut } from "@/ReduxToolKit/Reducers/Athentication/Authentication";
import Boards from "./Boards";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import DeleteUserAccount from "@/components/React/Modals/DeleteUser";


export default function SideBarMenu({ }) {
    const [showModal, setShowModal] = useState<boolean>(false)
    const dispatch = useDispatch()

    return (

        <div className="hidden md:block absolute left-0 z-30 transition-all duration-200 ease-in-out">
            <AnimatePresence>
                {showModal && <DeleteUserAccount setShowModal={setShowModal} />}
            </AnimatePresence>
            <button data-drawer-target="separator-sidebar" data-drawer-toggle="separator-sidebar" aria-controls="separator-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                <span className="sr-only">Open sidebar</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z" />
                </svg>
            </button>
            <aside id="separator-sidebar" className="fixed top-16 left-0 z-1 w-52 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
                <div className="h-full px-3 py-4 overflow-y-auto bg-black border-r border-white/10">
                    <ul className="space-y-2 font-medium">
                        <li className="cursor-pointer"
                            onClick={() => {
                                dispatch(presentResearch(true))
                                dispatch(presentArticles(false))
                            }}
                        >
                            <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-white/10 group">
                                <svg className="shrink-0 p-0.5  w-6 h-6 text-white/60 transition duration-75  group-hover:text-gray-900 dark:group-hover:text-white" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0,0,256,256">
                                    <g fill="currentColor" fillRule="nonzero" stroke="none" strokeWidth={1} strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit={10} strokeDasharray="" strokeDashoffset={0} fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal' }}><g transform="scale(2,2)"><path d="M54,1c-29.22,0 -53,23.78 -53,53c0,29.22 23.78,53 53,53c13.54,0 25.89953,-5.11023 35.26953,-13.49023l32.32031,32.32031c0.59,0.59 1.3511,0.88086 2.1211,0.88086c0.77,0 1.53914,-0.29086 2.11914,-0.88086c1.17,-1.17 1.17,-3.07024 0,-4.24024l-32.32031,-32.32031c8.38,-9.37 13.49023,-21.73953 13.49023,-35.26953c0,-3.32 -0.30992,-6.65062 -0.91992,-9.89062c-0.31,-1.63 -1.87,-2.69867 -3.5,-2.38867c-1.63,0.31 -2.70063,1.88 -2.39063,3.5c0.53,2.88 0.81055,5.8293 0.81055,8.7793c0,25.92 -21.08,47 -47,47c-25.92,0 -47,-21.08 -47,-47c0,-25.92 21.08,-47 47,-47c12.55,0 24.36047,4.88953 33.23047,13.76953c1.17,1.17 3.07023,1.17 4.24023,0c1.17,-1.17 1.17,-3.07023 0,-4.24023c-10,-10.02 -23.3107,-15.5293 -37.4707,-15.5293zM102,1c-1.66,0 -3,1.34 -3,3c0,1.66 1.34,3 3,3h14.75977l-45.34961,45.33984c-0.76,0.75 -2.07008,0.76 -2.83008,0l-12.91992,-12.92969c-1.51,-1.51 -3.52016,-2.33984 -5.66016,-2.33984c-2.14,0 -4.15016,0.82984 -5.66016,2.33984l-23.45898,23.4707c-1.17,1.17 -1.17,3.06828 0,4.23828c0.58,0.59 1.34914,0.88086 2.11914,0.88086c0.77,0 1.53914,-0.29086 2.11914,-0.88086l23.46094,-23.45898c0.76,-0.75 2.07008,-0.76 2.83008,0l12.92969,12.92969c1.51,1.51 3.52016,2.33984 5.66016,2.33984c2.14,0 4.15016,-0.82984 5.66016,-2.33984l45.33984,-45.34961v14.75977c0,1.66 1.34,3 3,3c1.66,0 3,-1.34 3,-3v-22c0,-1.66 -1.34,-3 -3,-3z" /></g></g>
                                </svg>

                                <span className="ms-3 text-white font-light">Investigations</span>
                            </div>


                        </li>

                        <li className="cursor-pointer"
                            onClick={() => {
                                dispatch(presentResearch(false))
                                dispatch(presentArticles(true))
                            }}
                        >
                            <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-white/10 group">
                                <svg className="shrink-0 w-6 h-6 text-white/60 transition duration-75  group-hover:text-gray-900 dark:group-hover:text-white"
                                    xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={30} height={30} viewBox="0,0,256,256">
                                    <g fill="currentColor" fillRule="nonzero" stroke="none" strokeWidth={1} strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit={10} strokeDasharray="" strokeDashoffset={0} fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal' }}><g transform="scale(8.53333,8.53333)"><path d="M23,27l-8,-7l-8,7v-22c0,-1.105 0.895,-2 2,-2h12c1.105,0 2,0.895 2,2z" /></g></g>
                                </svg>

                                <span className="flex-1 ms-3 whitespace-nowrap font-light">Saved Articles</span>
                            </div>
                        </li>
                        {/* <Boards /> <------adding at a later date when react-flow is implemented to draw maps of larger arguments */}
                    </ul>
                    <ul className="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 dark:border-gray-700">
                        <li onClick={() => setShowModal(true)}>
                            <a href="#" className="flex items-center p-2 rounded-lg dark:text-white hover:bg-white/10 group">
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
                                    className="icon icon-tabler text-white/60 group-hover:text-red-500 transition-all duration-200 ease-in-out icons-tabler-outline icon-tabler-trash"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 7l16 0" /><path d="M10 11l0 6" /><path d="M14 11l0 6" /><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" /><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" /></svg>

                                <span className="flex-1 ms-3 whitespace-nowrap font-light">Delete Account</span>
                            </a>

                        </li>
                        <li onClick={() => dispatch(showSignOut(true))}>
                            <a href="#" className="flex items-center p-2 rounded-lg dark:text-white hover:bg-white/10 group">
                                <svg className="shrink-0 w-6 h-6 text-white/60 transition duration-75  group-hover:text-gray-900 dark:group-hover:text-white" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0,0,256,256">
                                    <g fill="currentColor" fillRule="nonzero" stroke="none" strokeWidth={1} strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit={10} strokeDasharray="" strokeDashoffset={0} fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal' }}><g transform="scale(5.33333,5.33333)"><path d="M24,4c-11.02771,0 -20,8.97229 -20,20c0,11.02771 8.97229,20 20,20c6.34895,0 12.01563,-2.97689 15.67578,-7.59961c0.33535,-0.41986 0.42052,-0.98701 0.22329,-1.48685c-0.19723,-0.49984 -0.64674,-0.85601 -1.17843,-0.93374c-0.53169,-0.07773 -1.06435,0.13485 -1.39642,0.55731c-3.11585,3.93528 -7.91117,6.46289 -13.32422,6.46289c-9.40629,0 -17,-7.59371 -17,-17c0,-9.40629 7.59371,-17 17,-17c5.41305,0 10.20837,2.52761 13.32422,6.46289c0.33207,0.42246 0.86473,0.63504 1.39642,0.55731c0.53169,-0.07773 0.9812,-0.4339 1.17843,-0.93374c0.19723,-0.49984 0.11206,-1.06699 -0.22329,-1.48685c-3.66015,-4.62272 -9.32683,-7.59961 -15.67578,-7.59961zM36.48438,16.48438c-0.61065,0.00015 -1.16026,0.37042 -1.38978,0.93629c-0.22952,0.56587 -0.09314,1.21439 0.34486,1.63988l3.4375,3.4375l-20.375,-0.01758c-0.54092,-0.00832 -1.04443,0.27524 -1.31772,0.74212c-0.2733,0.46688 -0.27405,1.04474 -0.00197,1.51233c0.27208,0.46759 0.77484,0.75246 1.31579,0.74555l20.38281,0.01758l-3.44141,3.44141c-0.39185,0.37623 -0.54969,0.9349 -0.41265,1.46055c0.13704,0.52565 0.54754,0.93616 1.07319,1.07319c0.52565,0.13704 1.08432,-0.0208 1.46055,-0.41265l6,-6c0.58555,-0.58579 0.58555,-1.5353 0,-2.12109l-6,-6c-0.28248,-0.2909 -0.67069,-0.45506 -1.07617,-0.45508z" /></g></g>
                                </svg>


                                <span className="flex-1 ms-3 whitespace-nowrap font-light">Sign Out</span>
                            </a>
                        </li>

                    </ul>
                </div>
            </aside>

        </div>


    );
}
