


export default function More({ article_url, setOpen }) {

    return (
        <div className="bg-black border border-white/40 z-30 rounded-md xs:w-36 xl:w-40 h-auto p-5 absolute xs:-translate-x-40 md:-translate-y-20">
            <div
                onClick={() => { setOpen(false) }}
                className="absolute right-1 top-1 hover:bg-white/10 rounded-md p-1 xs:h-7 xs:w-7 md:h-8 md:w-8 cursor-pointer">
                <svg className="text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="100%" height="100%">
                    <path d="M 39.486328 6.9785156 A 1.50015 1.50015 0 0 0 38.439453 7.4394531 L 24 21.878906 L 9.5605469 7.4394531 A 1.50015 1.50015 0 0 0 8.484375 6.984375 A 1.50015 1.50015 0 0 0 7.4394531 9.5605469 L 21.878906 24 L 7.4394531 38.439453 A 1.50015 1.50015 0 1 0 9.5605469 40.560547 L 24 26.121094 L 38.439453 40.560547 A 1.50015 1.50015 0 1 0 40.560547 38.439453 L 26.121094 24 L 40.560547 9.5605469 A 1.50015 1.50015 0 0 0 39.486328 6.9785156 z" fill="currentColor" />
                </svg>
            </div>
            <div className="w-full mx-auto flex flex-col gap-y-2">
                <div className="text-white text-left hover:text-blue-400 transition-all cursor-pointer 
                duration-200 ease-in-out xs:text-xs md:text-lg font-light tracking-tight">
                    <a href={article_url} target="_blank">
                        Visit source
                    </a>
                </div>
                <div className="text-white text-left xs:text-xs hover:text-blue-400 transition-all cursor-pointer duration-200 ease-in-out md:text-lg font-light tracking-tight">
                    <a href="#">
                        All authors
                    </a>
                </div>
            </div>
        </div>
    )
}