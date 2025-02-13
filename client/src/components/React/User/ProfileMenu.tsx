

export default function ProfileMenu({ setDislayArticles, displayArticles }) {

    return (
        <div className="w-full h-auto flex items-center p-2 lg:bg-gradient-to-tr from-ebony to-mirage lg:border border-white/5 rounded-lg justify-between mt-2">

            <div

                className="w-fit h-auto flex md:text-lg
            text-white xs:text-xs font-light hover:text-blue-500 cursor-pointer
            transition-all duration-200 ease-in-out">
                Investigations
            </div>
            <div
                onClick={() => setDislayArticles(prev => !prev)}
                className={`w-fit xs:text-xs text-nowrap h-auto flex md:text-lg
                            font-light cursor-pointer
                            ${displayArticles ? 'text-blue-500' : 'text-white'}
                            transition-all duration-200 ease-in-out`}>
                Saved Articles
            </div>
            <div className="w-fit xs:text-xs md:text-lg text-nowrap h-auto flex
            text-white hover:text-blue-500 cursor-pointer
            transition-all duration-200 ease-in-out">
                Connecting Ideas
            </div>
        </div>
    )
}