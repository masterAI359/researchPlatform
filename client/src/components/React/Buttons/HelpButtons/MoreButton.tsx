import { useState } from "react"
import More from "./More"


//TODO: make popup menu to visit the source or all of the article's authors

export default function MoreButton({ article_url }) {
    const [open, setOpen] = useState<boolean>(false)

    return (
        <div className='w-fit h-fit xs:self-start md:self-end xl:mr-2 xs:mt-2 md:mt-0 relative'>
            {open && <More key={article_url} article_url={article_url} setOpen={setOpen} />}
            <div className="group relative">
                {!open && <div className="rounded-md xl:h-fit xl:w-16 flex xs:hidden md:block 
                mx-auto bg:black/80 opacity-0 absolute xl:-translate-x-16
border border-white/50 md:group-hover:opacity-100 transition-opacity duration-200 ease-in-out">

                    <h1 className="text-white xl:text-sm xl:p-1 text-center font-light tracking-tight justify-self-start text-center w-full">
                        More
                    </h1>
                </div>}
                <div
                    onMouseUp={() => { setOpen(prev => !prev) }}
                    className='box-border flex items-center hover:bg-white/10 transition-all duration-200 
            ease-in-out xs:py-1 xs:px-2 rounded-xl cursor-pointer'>
                    <button
                        className='flex items-center justify-center text-white xs:text-xs md:text-sm 
                    transition-all duration-200 ease-in-out my-auto xs:rounded-full md:rounded-full xs:w-5 lg:w-6 h-full'
                    >   <a href={article_url} target='_blank'></a>
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256" width="100%" height="100%" fillRule="nonzero"><g fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth={1} strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit={10} strokeDasharray="" strokeDashoffset={0} fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal' }}><g transform="scale(8.53333,8.53333)"><path d="M5,12c-1.657,0 -3,1.343 -3,3c0,1.657 1.343,3 3,3c1.657,0 3,-1.343 3,-3c0,-1.657 -1.343,-3 -3,-3zM15,12c-1.657,0 -3,1.343 -3,3c0,1.657 1.343,3 3,3c1.657,0 3,-1.343 3,-3c0,-1.657 -1.343,-3 -3,-3zM25,12c-1.657,0 -3,1.343 -3,3c0,1.657 1.343,3 3,3c1.657,0 3,-1.343 3,-3c0,-1.657 -1.343,-3 -3,-3z" /></g></g></svg>
                    </button>
                </div>
            </div>


        </div>
    )
}