import { Link, useLocation } from "react-router-dom";
import { shallowEqual, useSelector } from "react-redux";
import { RootState } from "@/ReduxToolKit/store";
import SignOutModal from "@/components/React/session/forms/AuthForms/SignOutModal";


export default function DashboardButton(): JSX.Element {
    const { signOut, activeSession } = useSelector((state: RootState) => state.auth,
        shallowEqual);
    const location = useLocation();
    const active: boolean = (
        location.pathname === '/dashboard'
    )
        || (
            location.pathname === '/login'
        );

    return (
        <div className="relative block">
            <Link to={activeSession ? '/dashboard' : '/login'} >
                <button
                    className="flex flex-nowrap group items-center justify-between 2xl:w-28
                                 2xl:gap-x-2 py-1.5 px-4 rounded-md  bg-gradient-to-tr from-ebony to-mirage shadow-thick border border-white/5
                                 bg-white/5 hover:bg-black hover:border-white/10 transition-all duration-200 ease-in-out w-auto cursor-pointer group">

                    <p
                        className={`
                            ${active
                                ? 'text-blue-300'
                                : 'text-white'}
                            text-center font-light text-sm w-full
                            group-hover:text-blue-400 transition-all duration-200 
                            ease-in-out whitespace-nowrap
                            `}
                    >
                        {activeSession ? 'Dashboard' : 'Log in'}
                    </p>
                </button>
            </Link>
            {signOut && <SignOutModal />}
        </div>
    );
};

