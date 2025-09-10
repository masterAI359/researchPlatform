import { Link } from "react-router-dom";

export default function GetStarted(): JSX.Element {

    return (
        <div className="text-xs sm:text-sm py-2 px-4 border focus:ring-2 rounded-full border-transparent w-32 lg:w-36 
        bg-white hover:bg-white/10 text-black duration-200 focus:ring-offset-2 focus:ring-white 
        hover:text-white flex items-center flex-nowrap justify-center ring-1 ring-transparent cursor-pointer">

            <Link to='/Signup'><div className="flex text-nowrap">Sign up  &nbsp;→</div>  </Link>

        </div>
    )
};