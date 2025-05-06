import { navigate } from "astro/dist/transitions/router"
import { useNavigate } from "react-router-dom"


export default function BackToSavedArticles() {
    const navigate = useNavigate()

    const backToSaved = () => {

        navigate('/Profile')
    }


    return (
        <button onClick={backToSaved} className="absolute top-2 -left-1 sm:fixed sm:top-1/2 sm:left-12 text-white font-light w-12 h-8
          lg:w-14 lg:h-12 p-1 sm:p-1.5 transition-all flex justify-start sm:justify-center 
          duration-200 bg-white hover:bg-white/10 items-center group
          rounded-2xl">
            <div className="absolute left-11 bottom-12 opacity-0 transition-all duration-200 ease-in-out rounded-lg 
            group-hover:opacity-100 group-hover:bg-white group-hover:text-black p-2 text-sm">go back</div>
            <span className="flex items-center justify-center h-fit w-full p-1 sm:p-0">
                <svg className={`sm:p-1.5 w-7 h-7 p-1 mx-auto rounded-full text-black group-hover:text-white`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="100%" height="100%">
                    <path d="M 33.960938 2.9804688 A 2.0002 2.0002 0 0 0 32.585938 3.5859375 L 13.585938 22.585938 A 2.0002 2.0002 0 0 0 13.585938 25.414062 L 32.585938 44.414062 A 2.0002 2.0002 0 1 0 35.414062 41.585938 L 17.828125 24 L 35.414062 6.4140625 A 2.0002 2.0002 0 0 0 33.960938 2.9804688 z" fill="currentColor" />
                </svg>
            </span>

        </button>
    )
}