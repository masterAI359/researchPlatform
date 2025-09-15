import More from "./More"

export default function MoreButton({ article_url, open, setOpen, context, setShowAllAuthors, authors, showAllAuthors }) {

    //TODO: change 'more' options from showing all authors, to displaying more about the source bias information

    return (
        <div className='w-full h-full xs:self-start md:self-center xs:mt-2 md:mt-0 relative'>
            {open &&
                <More
                    showAllAuthors={showAllAuthors}
                    authors={authors}
                    setShowAllAuthors={setShowAllAuthors}
                    context={context}
                    key={article_url}
                    article_url={article_url}
                    setOpen={setOpen}
                />
            }
            <div className="group relative">

                {!open &&
                    <div className="relative">
                        <div className="rounded-md xl:h-fit xl:w-16 flex xs:hidden md:block 
                  mx-auto group-hover:bg-white bg-white opacity-0 absolute xl:right-11
                  border border-black/20 md:group-hover:opacity-100 transition-all duration-200 ease-in-out">

                            <h1 className="text-black xl:text-sm xl:p-1 font-light tracking-tight text-center w-full">
                                More
                            </h1>

                            <div className="absolute top-1/2 -right-2 transform -translate-y-1/2 w-0 h-0 
                    border-t-4 border-b-6 border-l-8 border-transparent 
                    border-l-white"/>
                        </div>
                    </div>}

                <div
                    onMouseUp={() => { setOpen(prev => !prev) }}
                    className='box-border flex items-center hover:bg-white/10 transition-all duration-200 
            ease-in-out xs:py-1 xs:px-2 rounded-xl cursor-pointer'>
                    <button
                        className='flex items-center justify-center text-white xs:text-xs md:text-sm md:p-0.5
                    transition-all duration-200 ease-in-out my-auto xs:rounded-full md:rounded-md xs:w-5 lg:w-5 lg:h-5'
                    >   <a href={article_url} target='_blank'></a>
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256" width="100%" height="100%" fillRule="nonzero"><g fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth={1} strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit={10} strokeDasharray="" strokeDashoffset={0} fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal' }}><g transform="scale(8.53333,8.53333)"><path d="M5,12c-1.657,0 -3,1.343 -3,3c0,1.657 1.343,3 3,3c1.657,0 3,-1.343 3,-3c0,-1.657 -1.343,-3 -3,-3zM15,12c-1.657,0 -3,1.343 -3,3c0,1.657 1.343,3 3,3c1.657,0 3,-1.343 3,-3c0,-1.657 -1.343,-3 -3,-3zM25,12c-1.657,0 -3,1.343 -3,3c0,1.657 1.343,3 3,3c1.657,0 3,-1.343 3,-3c0,-1.657 -1.343,-3 -3,-3z" /></g></g></svg>
                    </button>
                </div>
            </div>


        </div>
    )
}