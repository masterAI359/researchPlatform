import { useNavigate } from "react-router-dom"




export default function ViewMyInvestigations() {
    const navigate = useNavigate()

    const goToProfile = () => {

        navigate('/Profile')
    }

    return (
        <button
            onClick={goToProfile}
            className={`bg-white w-auto 2xl:w-60 hover:bg-white/10 group shadow-thick 
                            transition-all duration-200 ease-in-out rounded-full h-fit py-2 px-4 mx-auto flex items-center`}>
            <p className={`text-black transition-all duration-200 ease-in-out
                     w-full text-xs 2xl:text-lg text-nowrap group-hover:text-white font-light text-center`}>
                See my research <span className="ml-2">&#8594;</span>
            </p>
        </button>
    )
}