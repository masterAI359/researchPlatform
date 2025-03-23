import { RootState } from "@/ReduxToolKit/store"
import { useSelector, useDispatch } from "react-redux"
import { AppDispatch } from "@/ReduxToolKit/store"
import { presentArticles, presentResearch } from "@/ReduxToolKit/Reducers/UserContent.ts/ProfileNavigationSlice";
import { Link } from "react-router-dom";

export default function ProfileMenu({ }) {
    const displaySavedArticles = useSelector((state: RootState) => state.profileNav.displaySavedArticles)
    const dispatch = useDispatch<AppDispatch>()

    return (
        <div className="w-full h-fit xs:block md:hidden border-t border-white/10">
            <div className="flex items-center justify-between pt-2">
                <div
                    onClick={() => {
                        dispatch(presentArticles(false))
                        dispatch(presentResearch(true))
                    }}
                    className="w-fit h-auto flex
            text-white text-xs font-light tracking-tight hover:text-blue-400 cursor-pointer
            transition-all duration-200 ease-in-out">
                    My research
                </div>
                <div
                    onClick={() => {
                        dispatch(presentArticles(true))
                        dispatch(presentResearch(false))
                    }}
                    className={`w-fit text-xs text-nowrap font-light tracking-tight  h-auto flex
                            font-light cursor-pointer  hover:text-blue-500
                            ${displaySavedArticles ? 'text-blue-500' : 'text-white'}
                            transition-all duration-200 ease-in-out`}>
                    Saved Articles
                </div>
                <Link to={'/ManageAccount'} >
                    <div className="w-fit text-xs font-light tracking-tight text-nowrap h-auto flex
            text-white hover:text-blue-500 cursor-pointer
            transition-all duration-200 ease-in-out">
                        Manage Account
                    </div>
                </Link>

            </div>

        </div>
    )
}



