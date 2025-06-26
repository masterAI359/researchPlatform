import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@/ReduxToolKit/store";
import SignOutModal from "../../Forms/SignOutModal";

export default function DropdownMenu({ }) {
    const signOut = useSelector((state: RootState) => state.auth.signOut)
    const id = useSelector((state: RootState) => state.auth.user_id)

    useEffect(() => {
        if (id) return;

    }, [id]);

    return (
        <div className="relative block">
            <Link to={id ? '/Profile' : '/Login'} >
                <button
                    className="flex flex-nowrap group items-center justify-between 2xl:w-auto
                                 2xl:gap-x-2 py-1.5 px-4 rounded-md  bg-gradient-to-tr from-ebony to-mirage shadow-thick border border-white/5
                                 bg-white/5 hover:bg-black hover:border-white/10 transition-all duration-200 ease-in-out w-auto cursor-pointer group">

                    <p
                        className="text-white text-center font-light text-sm 
                            group-hover:text-blue-400 transition-all duration-200 
                            ease-in-out whitespace-nowrap">
                        {id ? 'Dashboard' : 'Log in'}
                    </p>
                </button>
            </Link>
            {signOut && <SignOutModal />}
        </div>
    );
};

