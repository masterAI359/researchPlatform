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
        <div className="relative block">
            <Link to={email ? '/Profile' : '/Login'} >
                <button
                    onClick={() => setIsOpen((prev) => !prev)}
                    className="flex flex-nowrap group items-center justify-between 2xl:w-auto
                                 2xl:gap-x-2 py-1 px-4 rounded-md bg-black/30 shadow-thick border border-white/5
                                 bg-white/5 hover:bg-black hover:border-white/10 transition-all duration-200 ease-in-out w-auto cursor-pointer group"
                >


                    <div className="w-full h-auto flex items-center">

                        <p className="text-white font-light text-sm group-hover:text-blue-400 transition-all duration-200 ease-in-out whitespace-nowrap">{email ? email : 'Log in'}</p>


                    </div>

                    {email && <div className="w-7 h-7 p-0 cursor-pointer opacity-70 hover:opacity-100 transition-all duration-300 ease-out" >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                            className="icon icon-tabler h-full w-full text-white icons-tabler-outline icon-tabler-user-circle"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" /></svg>
                    </div>}
                </button>
            </Link>



            {signOut && <SignOutModal />}

        </div>
    );
};

export default DropdownMenu;
