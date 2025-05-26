import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@/ReduxToolKit/store";
import SignOutModal from "../../Forms/SignOutModal";
import { limitName } from "@/helpers/Presentation";


export default function DropdownMenu({ isOpen, setIsOpen }) {
    const signOut = useSelector((state: RootState) => state.auth.signOut)
    const id = useSelector((state: RootState) => state.auth.user_id)
    const email = useSelector((state: RootState) => state.auth.email)
    const [shortenedEmail, setShortEmail] = useState<string>()


    useEffect(() => {

        if (email) {
            setShortEmail(limitName(email))
        } else {
            ;
        }

    }, [email, id])

 //**********Do not forget to change this back -->   <Link to={email ? '/Profile' : '/Login'} > */
    return (
        <div className="relative block">
            <Link to={'/Profile'} >
                <button
                    onClick={() => setIsOpen((prev) => !prev)}
                    className="flex flex-nowrap group items-center justify-between 2xl:w-auto
                                 2xl:gap-x-2 py-1.5 px-4 rounded-md  bg-gradient-to-tr from-ebony to-mirage shadow-thick border border-white/5
                                 bg-white/5 hover:bg-black hover:border-white/10 transition-all duration-200 ease-in-out w-auto cursor-pointer group"
                >
                    <div className="w-full h-auto flex items-center">
                        <p className="text-white font-light text-sm group-hover:text-blue-400 transition-all duration-200 ease-in-out whitespace-nowrap">{email ? 'Dashboard' : 'Log in'}</p>
                    </div>
                </button>
            </Link>
            {signOut && <SignOutModal />}

        </div>
    );
};

