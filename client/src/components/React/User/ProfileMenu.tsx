

export default function ProfileMenu({ setDislayArticles }) {

    return (
        <div className="w-full h-auto flex items-center p-2 bg-white/5 rounded-lg justify-between mt-2">

            <div
                onClick={() => setDislayArticles(prev => !prev)}
                className="w-fit h-auto flex
            text-white hover:text-blue-500 cursor-pointer
            transition-all duration-200 ease-in-out">
                Investigations
            </div>
            <div className="w-fit text-nowrap h-auto flex
            text-blue-500 hover:text-blue-500 cursor-pointer
            transition-all duration-200 ease-in-out">
                Saved Articles
            </div>
            <div className="w-fit text-nowrap h-auto flex
            text-white hover:text-blue-500 cursor-pointer
            transition-all duration-200 ease-in-out">
                Connecting Ideas
            </div>
        </div>
    )
}