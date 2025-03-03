import { AnimatePresence } from "framer-motion"
import NotifySavedArticle from "../../Notifications/NotifySaved"
import { saveArticle, checkArticle } from "@/helpers/SupabaseData"
import { useSelector } from "react-redux"
import { RootState } from "@/ReduxToolKit/store"
import { useLayoutEffect, useState } from "react"
import { session } from "@/SupaBase/supaBaseClient"
import RegisteredUsersOnly from "../../Notifications/RegisteredUsersOnly"

export default function Bookmark({ dataToSave, showNotification, setShowNotification, open }) {
    const id = useSelector((state: RootState) => state.auth.user_id)
    const [articleExists, setArticleExists] = useState<boolean>(false)
    const [registeredExclusiveFeature, setRegisteredExclusiveFeature] = useState<boolean>(false)
    const { url } = dataToSave

    useLayoutEffect(() => {

        checkArticle(setArticleExists, url, id)

    }, [articleExists, showNotification, session])

    console.log(id)


    return (
        <div onClick={() => { saveArticle(dataToSave, setShowNotification, setArticleExists, articleExists, setRegisteredExclusiveFeature) }}
            className={`${open ? 'pointer-events-none' : 'pointer-events-auto'} w-full h-full self-start flex items-center justify-start group relative cursor-pointer`}>
            {!showNotification && <div className="rounded-md xl:h-fit md:w-24 flex xs:hidden md:block 
                mx-auto group-hover:bg-black opacity-0 absolute md:right-7
                border border-gray group-hover:opacity-100 transition-all 
                z-50 duration-200 ease-in-out">

                <h1 className="text-white xl:text-sm xl:p-1 font-light tracking-tight justify-self-start text-center w-full">
                    {articleExists ? 'unsave' : 'save article'}
                </h1>
            </div>}
            <AnimatePresence>
                {showNotification &&
                    <NotifySavedArticle articleExists={articleExists} setShowNotification={setShowNotification} />
                }

                {registeredExclusiveFeature && <RegisteredUsersOnly setRegisteredExclusiveFeature={setRegisteredExclusiveFeature} registeredExclusiveFeature={registeredExclusiveFeature} />}

            </AnimatePresence>
            <svg className={`${articleExists ? 'text-white' : 'text-white/30 hover:text-white/60'}
            transition-all duration-200 ease-in-out`}
                xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={30} height={30} viewBox="0,0,256,256">
                <g fill="currentColor" fillRule="nonzero" stroke="none" strokeWidth={1} strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit={10} strokeDasharray="" strokeDashoffset={0} fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal' }}><g transform="scale(8.53333,8.53333)"><path d="M23,27l-8,-7l-8,7v-22c0,-1.105 0.895,-2 2,-2h12c1.105,0 2,0.895 2,2z" /></g></g>
            </svg>

        </div>
    )
}


