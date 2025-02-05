import { useState } from "react"

export default function SaveArticle() {
    const [open, setOpen] = useState<boolean>(false)



    return (
        <div className="w-auto h-auto self-start flex items-center justify-start group relative cursor-pointer">
            {!open && <div className="rounded-md xl:h-fit md:w-24 flex xs:hidden md:block 
                mx-auto bg:black/80 opacity-0 absolute md:left-7
border border-white/50 md:group-hover:opacity-100 transition-opacity duration-200 ease-in-out">

                <h1 className="text-white xl:text-sm xl:p-1 text-center font-light tracking-tight justify-self-start text-center w-full">
                    Save Article
                </h1>
            </div>}
            <svg className="text-white" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256" width="24px" height="24px" fillRule="nonzero"><g fill="currentColor" fillRule="nonzero" stroke="none" strokeWidth={1} strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit={10} strokeDasharray="" strokeDashoffset={0} fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal' }}><g transform="scale(10.66667,10.66667)"><path d="M6.00977,2c-1.09545,0 -2,0.9026 -2,1.99805l-0.00977,18.00195l8,-3l8,3v-1.44336v-16.55664c0,-1.09306 -0.90694,-2 -2,-2zM6.00977,4h11.99023v15.11328l-6,-2.25l-5.99805,2.25z" /></g></g></svg>
        </div>
    )
}



