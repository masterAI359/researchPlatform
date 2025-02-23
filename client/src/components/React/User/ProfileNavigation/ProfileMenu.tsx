import { getUserInvestigations } from "@/helpers/SupabaseData"
import { RootState } from "@/ReduxToolKit/store"
import { useSelector, useDispatch } from "react-redux"
import { fetchSavedInvestigations } from "@/ReduxToolKit/Reducers/UserContent.ts/UserInvestigations"
import { AppDispatch } from "@/ReduxToolKit/store"

export default function ProfileMenu({ setDislayArticles, displayArticles, setDisplayInvestigations }) {
    const id = useSelector((state: RootState) => state.auth.user_id)
    const dispatch = useDispatch<AppDispatch>()

    return (
        <div className="w-full h-fit xs:block md:hidden border-t border-white/10">
            <div className="flex items-center justify-between pt-2">
                <div
                    onClick={() => {
                        (setDisplayInvestigations(true))
                        setDislayArticles(false)
                    }}
                    className="w-fit h-auto flex
            text-white text-xs font-light tracking-tight hover:text-blue-400 cursor-pointer
            transition-all duration-200 ease-in-out">
                    My research
                </div>
                <div
                    onClick={() => {
                        setDislayArticles(true)
                        setDisplayInvestigations(false)
                    }}
                    className={`w-fit text-xs text-nowrap font-light tracking-tight  h-auto flex
                            font-light cursor-pointer  hover:text-blue-500
                            ${displayArticles ? 'text-blue-500' : 'text-white'}
                            transition-all duration-200 ease-in-out`}>
                    Saved Articles
                </div>
                <div className="w-fit text-xs font-light tracking-tight text-nowrap h-auto flex
            text-white hover:text-blue-500 cursor-pointer
            transition-all duration-200 ease-in-out">
                    Connecting Ideas
                </div>
            </div>

        </div>
    )
}



