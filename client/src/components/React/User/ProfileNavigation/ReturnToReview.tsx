import { useNavigate } from "react-router-dom";

export default function ReturnToReview() {
    const navigate = useNavigate()

    const backToReview = () => {
        navigate('/ReviewInvestigation')
    }

    return (
        <button onClick={backToReview} className="absolute top-3 -left-3 sm:fixed sm:top-1/2 sm:left-12 xs:w-14 xs:h-8
        lg:w-16 lg:h-auto p-2 transition-all mx-auto flex
        duration-300 hover:bg-white/10 items-center group
        rounded-2xl">
             <div className="absolute p-1 bg-white z-50 hidden transition-all duration-200 ease-in-out md:group-hover:block 2xl:p-2 2xl:bottom-16 2xl:-left-3 bottom-12 -left-5
                    rounded-md items-center border border-astro_gray shadow-thick after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 
                    after:transform after:-translate-x-1/2 after:border-t-[10px] after:border-l-[10px] after:border-r-[10px] after:border-b-0 
                    after:border-t-white after:border-l-transparent after:border-r-transparent after:border-b-transparent">
                        <p className="text-black text-wrap 2xl:text-nowrap">go back</p>
                    </div>
            <span className="mx-auto text-white lg:text-zinc-400 2xl:text-3xl font-light">
               ←
            </span>
        </button>
    )
}


  {/* <svg className={`p-3 text-black group-hover:text-white`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="100%" height="100%">
                    <path d="M 33.960938 2.9804688 A 2.0002 2.0002 0 0 0 32.585938 3.5859375 L 13.585938 22.585938 A 2.0002 2.0002 0 0 0 13.585938 25.414062 L 32.585938 44.414062 A 2.0002 2.0002 0 1 0 35.414062 41.585938 L 17.828125 24 L 35.414062 6.4140625 A 2.0002 2.0002 0 0 0 33.960938 2.9804688 z" fill="currentColor" />
                </svg> */}
