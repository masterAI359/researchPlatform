import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@/ReduxToolKit/store";
import { useDispatch } from "react-redux";
import { showSignOut } from "@/ReduxToolKit/Reducers/Athentication/Authentication";
import SignOutModal from "../../Forms/SignOutModal";
import { limitName } from "@/helpers/Presentation";

const DropdownMenu = ({ isOpen, setIsOpen }) => {
    const authenticated = useSelector((state: RootState) => state.auth.authenticated)
    const signOut = useSelector((state: RootState) => state.auth.signOut)
    const id = useSelector((state: RootState) => state.auth.user_id)
    const email = useSelector((state: RootState) => state.auth.email)
    const [shortenedEmail, setShortEmail] = useState<string>()
    const dispatch = useDispatch()


    const handleLogOut = () => {

        if (id) {
            dispatch(showSignOut(true))
            setIsOpen(false)
        } else if (!id) {
            setIsOpen(true)
            dispatch(showSignOut(false))
            alert("You're not signed in yet")
        }
    }

    useEffect(() => {

        if (email) {
            setShortEmail(limitName(email))
        }

    }, [email, id])

    const menuVariants = {
        open: {
            opacity: 1,
            height: "auto",
            transition: { duration: 0.3 }
        },
        closed: {
            opacity: 0,
            height: 0,
            transition: { duration: 0.2 }
        }
    };

    return (
        <div style={{ position: "relative", display: "inline-block" }}>
            <button
                onClick={() => setIsOpen((prev) => !prev)}
                className="flex flex-row-reverse flex-nowrap group items-center justify-between 2xl:w-60
                                 2xl:gap-x-2 py-1 px-4 rounded-md bg-black/30 shadow-thick border border-white/5
                                 hover:bg-white/5 transition-all duration-200 ease-in-out w-auto cursor-pointer group"
            >

                {/*   <div className="w-7 h-7">
                    <svg className={`transition-all duration-200 ease-in-out ${isOpen ? 'rotate-180 text-blue-400' : 'rotate-0 text-white'
                        }`} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256" width="100%" height="100%" fillRule="nonzero"><g fill="currentColor" fillRule="nonzero" stroke="none" strokeWidth={1} strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit={10} strokeDasharray="" strokeDashoffset={0} fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal' }}><g transform="scale(5.12,5.12)"><path d="M44.98828,13.98438c-0.26172,0.00781 -0.51172,0.11719 -0.69531,0.30859l-19.29297,19.29297l-19.29297,-19.29297c-0.1875,-0.19531 -0.44531,-0.30078 -0.71484,-0.30469c-0.41016,0.00391 -0.77344,0.25 -0.92969,0.625c-0.15234,0.37891 -0.0625,0.80859 0.23047,1.09375l20,20c0.39063,0.39063 1.02344,0.39063 1.41406,0l20,-20c0.29688,-0.28516 0.38672,-0.72656 0.23047,-1.10547c-0.16016,-0.37891 -0.53516,-0.625 -0.94922,-0.61719z" /></g></g></svg>
                </div> */}

                <div className="w-full h-auto flex items-center">

                    <p className="text-white font-light 2xl:text-md group-hover:text-blue-400 transition-all duration-200 ease-in-out whitespace-nowrap">{email ? shortenedEmail : 'Guest'}</p>


                </div>

                <div className="w-7 h-7 rounded-full cursor-pointer opacity-85 hover:opacity-100 transition-all duration-300 ease-out" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler text-white icons-tabler-outline icon-tabler-user-circle"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" /></svg>
                </div>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial="closed"
                        animate="open"
                        exit="closed"
                        className="bg-black/30 border border-white/10 z-50"
                        variants={menuVariants}
                        style={{
                            position: "absolute",
                            top: "calc(100% + 3px)",
                            right: 0,
                            left: 0,
                            borderRadius: "5px",
                            overflow: "hidden",
                            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
                            zIndex: 100
                        }}
                    >
                        <ul className="bg-black" style={{ listStyle: "none", margin: 0, padding: 0, minWidth: "150px" }}>
                            {id && <li
                                key="Profile"
                                className="text-white flex font-light border-b border-white/10 hover:text-blue-400"
                                style={{
                                    padding: "10px",
                                    cursor: "pointer"
                                }}

                            >
                                <Link
                                    onClick={() => { setIsOpen(false) }}
                                    className="h-full w-full grow py-1" to='/Profile' >My Profile</Link>

                            </li>}
                            {!id && <li
                                key="Signup"
                                className="text-white  flex font-light border-b border-white/10 hover:text-blue-400"
                                style={{
                                    padding: "10px",
                                    cursor: "pointer"
                                }}

                            >
                                <Link
                                    onClick={() => { setIsOpen(false); }}
                                    className="min-h-full w-full py-1 grow" to='/Signup'>Sign up</Link>
                            </li>}
                            {!id && <li
                                key="Login"
                                className="text-white box-content flex font-light border-b border-white/10 hover:text-blue-400"
                                style={{
                                    padding: "10px",
                                    cursor: "pointer",
                                }}

                            >
                                <Link
                                    onClick={() => { setIsOpen(false); }}
                                    className="min-h-full w-full py-1 grow" to={'/Login'}>Log in</Link>
                            </li>
                            }
                            {id && <li
                                key="Logout"
                                className="text-white flex py-1 font-light border-b border-white/10 group"
                                style={{
                                    padding: "10px",
                                    cursor: "pointer"
                                }}
                                onClick={handleLogOut}
                            >
                                <p className="text-white py-1 group-hover:text-blue-400">
                                    Log out
                                </p>

                            </li>}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
            {signOut && <SignOutModal />}

        </div>
    );
};

export default DropdownMenu;
