import { Link } from "react-router-dom";



export default function GetStarted() {

    return (
        <div className="text-sm py-2 px-4 border focus:ring-2 rounded-full border-transparent lg:w-36 
        bg-white hover:bg-white/10 text-black duration-200 focus:ring-offset-2 focus:ring-white 
        hover:text-white inline-flex items-center justify-center ring-1 ring-transparent cursor-pointer">
            <Link to='/Signup'>Sign up  &nbsp; →</Link>

        </div>
    )
}