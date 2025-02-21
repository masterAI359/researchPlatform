import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { session, supabase } from "@/SupaBase/supaBaseClient"
import { useSelector } from "react-redux";
import { RootState } from "@/ReduxToolKit/store";
import { useDispatch } from "react-redux";
import { getEmail } from "@/ReduxToolKit/Reducers/Athentication/Authentication";
import { showSignOut } from "@/ReduxToolKit/Reducers/Athentication/Authentication";
import SignOutModal from "../../Forms/SignOutModal";

const DropdownMenu = ({ isOpen, setIsOpen }) => {
    const signOut = useSelector((state: RootState) => state.auth.signOut)
    const id = useSelector((state: RootState) => state.auth.user_id)
    const email = useSelector((state: RootState) => state.auth.email)
    const [shortenedEmail, setShortEmail] = useState<string>()
    const dispatch = useDispatch()


    function limitName(name: string) {

        let splitName = name.split('')

        let shortenedArray = []

        for (let i = 0; i < splitName.length; i++) {

            if (i <= 13) {
                shortenedArray.push(splitName[i])

            } else {
                break
            }
        }

        let shortString = shortenedArray.join('')
        let emailWithElipses = shortString + '...'

        setShortEmail(emailWithElipses)
    }



    function retrieveEmail(currentSession: any) {

        const { user } = currentSession

        const { user_metadata } = user;

        const { email } = user_metadata

        const retrievedEmailString = email

        limitName(retrievedEmailString)

    }



    const handleLogOut = () => {

        if (session) {
            dispatch(showSignOut(true))
            setIsOpen(false)
        } else if (!session) {
            setIsOpen(true)
            dispatch(showSignOut(false))
            alert("You're not signed in yet")
        }
    }

    useEffect(() => {

        console.log(id)

        const { data } = supabase.auth.onAuthStateChange((event, session) => {

            if (event === 'INITIAL_SESSION') {
                retrieveEmail(session)

            } else if (event === 'SIGNED_IN') {
            } else if (event === 'SIGNED_OUT') {
            } else if (event === 'PASSWORD_RECOVERY') {
            } else if (event === 'TOKEN_REFRESHED') {
            } else if (event === 'USER_UPDATED') {
            }
        })

    }, [session, dispatch, retrieveEmail, supabase, email])

    //top: "calc(100% + 5px)",


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
                className="flex flex-row-reverse flex-nowrap group items-center justify-between
                                 2xl:gap-x-2 py-0.5 px-4 rounded-md bg-black/30 shadow-thick border border-white/5
                                 hover:bg-white/5 transition-all duration-200 ease-in-out w-auto cursor-pointer group"
            >

                <div className="w-6 h-6">
                    <svg className={`transition-all duration-200 ease-in-out ${isOpen ? 'rotate-180 text-blue-400' : 'rotate-0 text-white'
                        }`} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256" width="100%" height="100%" fillRule="nonzero"><g fill="currentColor" fillRule="nonzero" stroke="none" strokeWidth={1} strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit={10} strokeDasharray="" strokeDashoffset={0} fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal' }}><g transform="scale(5.12,5.12)"><path d="M44.98828,13.98438c-0.26172,0.00781 -0.51172,0.11719 -0.69531,0.30859l-19.29297,19.29297l-19.29297,-19.29297c-0.1875,-0.19531 -0.44531,-0.30078 -0.71484,-0.30469c-0.41016,0.00391 -0.77344,0.25 -0.92969,0.625c-0.15234,0.37891 -0.0625,0.80859 0.23047,1.09375l20,20c0.39063,0.39063 1.02344,0.39063 1.41406,0l20,-20c0.29688,-0.28516 0.38672,-0.72656 0.23047,-1.10547c-0.16016,-0.37891 -0.53516,-0.625 -0.94922,-0.61719z" /></g></g></svg>
                </div>

                <div className="w-full h-auto flex items-center">

                    <p className="text-white font-light 2xl:text-md group-hover:text-blue-400 transition-all duration-200 ease-in-out whitespace-nowrap">{email ? shortenedEmail : 'Account'}</p>


                </div>

                <div className="w-8 h-8 rounded-full overflow-hidden cursor-pointer opacity-85 hover:opacity-100 transition-all duration-300 ease-out" >

                    <svg className="text-white" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256" width="100%" height="100%" fillRule="nonzero"><g fill="currentColor" fillRule="nonzero" stroke="none" strokeWidth={1} strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit={10} strokeDasharray="" strokeDashoffset={0} fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal' }}><g transform="scale(2,2)"><path d="M64,1c-34.74,0 -63,28.26 -63,63c0,12.01 3.39055,23.68953 9.81055,33.76953c0.89,1.4 2.73867,1.80992 4.13867,0.91992c1.4,-0.89 1.80992,-2.73867 0.91992,-4.13867c-5.8,-9.12 -8.86914,-19.69078 -8.86914,-30.55078c0,-31.43 25.57,-57 57,-57c31.43,0 57,25.57 57,57c0,10.96 -3.11953,21.60906 -9.01953,30.78906c-0.9,1.39 -0.48961,3.25039 0.90039,4.15039c0.5,0.32 1.05914,0.48047 1.61914,0.48047c0.99,0 1.9493,-0.49086 2.5293,-1.38086c6.52,-10.15 9.9707,-21.91906 9.9707,-34.03906c0,-34.74 -28.26,-63 -63,-63zM64,31c-12.68,0 -23,10.32 -23,23c0,12.68 10.32,23 23,23c12.68,0 23,-10.32 23,-23c0,-12.68 -10.32,-23 -23,-23zM64,37c9.37,0 17,7.63 17,17c0,9.37 -7.63,17 -17,17c-9.37,0 -17,-7.63 -17,-17c0,-9.37 7.63,-17 17,-17zM64,88.59766c-15.255,0 -30.50914,5.80688 -42.11914,17.42187c-0.04,0.04 -0.07156,0.07133 -0.10156,0.11133l-0.28906,0.31836c-1.11,1.23 -1.02102,3.12023 0.20898,4.24023c11.6,10.52 26.62078,16.31055 42.30078,16.31055c15.68,0 30.70078,-5.79031 42.30078,-16.32031c1.23,-1.11 1.31899,-3.01024 0.20899,-4.24024l-0.15039,-0.15039c-0.07,-0.09 -0.16024,-0.18953 -0.24024,-0.26953c-11.61,-11.615 -26.86414,-17.42187 -42.11914,-17.42187zM64,94.59766c12.8425,0 25.68484,4.57742 35.83984,13.73242c-10.12,8.19 -22.72984,12.66992 -35.83984,12.66992c-13.11,0 -25.71984,-4.47992 -35.83984,-12.66992c10.155,-9.155 22.99734,-13.73242 35.83984,-13.73242z" /></g></g></svg>
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
                                    className="h-full w-full grow" to='/Profile' >My Profile</Link>

                            </li>}
                            <li
                                key="Signup"
                                className="text-white flex font-light border-b border-white/10 hover:text-blue-400"
                                style={{
                                    padding: "10px",
                                    cursor: "pointer"
                                }}

                            >
                                <Link
                                    onClick={() => { setIsOpen(false); }}
                                    className="min-h-full w-full grow" to='/Signup'>Sign up</Link>
                            </li>
                            <li
                                key="Login"
                                className="text-white box-content flex font-light border-b border-white/10 hover:text-blue-400"
                                style={{
                                    padding: "10px",
                                    cursor: "pointer",
                                }}

                            >
                                <Link
                                    onClick={() => { setIsOpen(false); }}
                                    className="min-h-full w-full grow" to={'/Login'}>Log in</Link>
                            </li>

                            <li
                                key="Logout"
                                className="text-white flex font-light border-b border-white/10 hover:text-blue-400"
                                style={{
                                    padding: "10px",
                                    cursor: "pointer"
                                }}
                                onClick={handleLogOut}
                            >
                                Log out

                            </li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
            {signOut && <SignOutModal />}

        </div>
    );
};

export default DropdownMenu;
