import { AnimatePresence } from "framer-motion"
import NotifySavedArticle from "../../Notifications/NotifySaved"
import { saveArticle, checkArticle } from "@/services/SupabaseData"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "@/ReduxToolKit/store"
import { useEffect, useMemo, useState } from "react"
import { fetchSavedArticles } from "@/ReduxToolKit/Reducers/UserContent.ts/UserContentReducer"

export default function Bookmark({ dataToSave, showNotification, setShowNotification, open }) {
    const userArticles = useSelector((state: RootState) => state.userdata.userArticles);
    const [articleExists, setArticleExists] = useState<boolean>(false)
    const [saving, setSaving] = useState<boolean | null>(null);
    const [notification, setNotification] = useState<string | null>(null);
    const [registeredExclusiveFeature, setRegisteredExclusiveFeature] = useState<boolean>(false)
    const { url } = dataToSave;
    const dispatch = useDispatch<AppDispatch>();

    const urls = useMemo((): Set<string> => {
        if (userArticles) {
            return new Set(userArticles.map((article: ScrapedArticle) => article.article_url));
        }
    }, [userArticles]);

    useEffect(() => {
        const check = () => {
            const exists = checkArticle(url, urls);
            setArticleExists(exists);
        };

        if (userArticles) {
            check();

        }


    }, [dispatch]);

    useEffect(() => {

        const executeSave = async () => {
            const status = await saveArticle(dataToSave, articleExists);
            if (status === 'Saved') {
                setNotification('article saved!')
                setShowNotification(true);
                setArticleExists(true);
                setSaving(false)
            } else if (status === 'Deleted') {
                setNotification('removed')
                setShowNotification(true);
                setArticleExists(false);
                setSaving(false)

            } else {
                setNotification('operation failed');
                setSaving(false)
            };
            dispatch(fetchSavedArticles());
        };

        if (saving && userArticles) {
            executeSave();
        } else if (saving && !userArticles) {
            setNotification('Register or Login to save articles!');
            setShowNotification(true);
            setSaving(false)
        }

    }, [saving])





    return (
        <div onClick={() => setSaving(true)}
            className={`${open ? 'pointer-events-none' : 'pointer-events-auto'} w-full h-full self-start flex items-center justify-start group relative cursor-pointer`}>
            {!showNotification && !registeredExclusiveFeature ? <div className="rounded-md xl:h-fit md:w-24 flex xs:hidden md:block 
                mx-auto group-hover:bg-white bg-white opacity-0 absolute md:right-9
                border border-black/20 group-hover:opacity-100 transition-all 
                z-50 duration-200 ease-in-out">

                <h1 className="text-black xl:text-sm xl:p-1 font-light tracking-tight justify-self-start text-center w-full">
                    {articleExists ? 'unsave' : 'save article'}
                </h1>

                <div
                    className="absolute top-1/2 -right-2 transform -translate-y-1/2"
                    style={{
                        width: 0,
                        height: 0,
                        borderTop: '6px solid transparent',
                        borderBottom: '6px solid transparent',
                        borderLeft: '8px solid white'
                    }}
                />
            </div>
                : null}
            <AnimatePresence>
                {showNotification &&
                    <NotifySavedArticle setShowNotification={setShowNotification} notification={notification} />
                }

            </AnimatePresence>
            <svg className={`${articleExists ? 'text-white' : 'text-white/30 hover:text-white/60'}
            transition-all duration-200 ease-in-out`}
                xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={30} height={30} viewBox="0,0,256,256">
                <g fill="currentColor" fillRule="nonzero" stroke="none" strokeWidth={1} strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit={10} strokeDasharray="" strokeDashoffset={0} fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal' }}><g transform="scale(8.53333,8.53333)"><path d="M23,27l-8,-7l-8,7v-22c0,-1.105 0.895,-2 2,-2h12c1.105,0 2,0.895 2,2z" /></g></g>
            </svg>

        </div>
    )
}

