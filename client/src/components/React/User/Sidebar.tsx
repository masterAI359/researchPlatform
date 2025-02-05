

export default function SideBar() {

    return (
        <div className="w-full h-auto flex flex-col gap-y-6 2xl:mt-40">
            <div className="w-full h-auto flex items-start justify-start 
            text-white hover:text-blue-400 cursor-pointer
            transition-all duration-200 ease-in-out">
                Investigations
            </div>
            <div className="w-full h-auto flex items-start justify-start 
            text-white hover:text-blue-400 cursor-pointer
            transition-all duration-200 ease-in-out">
                Saved Articles
            </div>
            <div className="w-full h-auto flex items-start justify-start 
            text-white hover:text-blue-400 cursor-pointer
            transition-all duration-200 ease-in-out">
                Leads
            </div>
        </div>
    )
}