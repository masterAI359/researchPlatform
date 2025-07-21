import NotifySavedArticle from "../notifications/NotifySaved";
import { checkArticle } from "@/services/SupabaseData"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "@/ReduxToolKit/store"
import { useEffect, useMemo } from "react"
import SaveArticleTooltip from "../tooltips/SaveArticleTooltip";
import { useSaveArticle } from "@/Hooks/useSaveArticle"
import { AnimatePresence } from "framer-motion"

export default function Bookmark({ dataToSave, showNotification, setShowNotification, open }) {
    const userArticles = useSelector((state: RootState) => state.userdata.userArticles);
    const { notification, setNotification, handleSaveArticle } = useSaveArticle(dataToSave, setShowNotification);
    const { url } = dataToSave;
    const dispatch = useDispatch<AppDispatch>();
    const showTooltip: boolean = !showNotification && !notification.anonUser;

    const urls = useMemo((): Set<string> => {
        if (Array.isArray(userArticles) && (userArticles.length > 0)) {
            return new Set(userArticles.map((article: ScrapedArticle) =>
                article.article_url)
            )
        };
    }, [userArticles]);

    useEffect(() => {
        const check = () => {
            const exists = checkArticle(url, urls);
            setNotification((prev) => ({
                ...prev,
                articleExists: exists
            }));
        };

        if (Array.isArray(userArticles) && (userArticles.length > 0)) {
            check();
        };

    }, [dispatch]);



    return (
        <div onClick={handleSaveArticle}
            className={`${open
                ? 'pointer-events-none'
                : 'pointer-events-auto'} 
            w-full h-full self-start flex items-center justify-start 
            group relative cursor-pointer`}
        >
            {showTooltip &&
                <SaveArticleTooltip exists={notification.articleExists}
                />
            }
            <AnimatePresence>
                {showNotification && <NotifySavedArticle
                    showNotification={showNotification}
                    message={notification.message}
                    setNotification={setNotification}
                    setShowNotification={setShowNotification}
                />}
            </AnimatePresence>


            <svg className={`${notification.articleExists ? 'text-white' : 'text-white/30 hover:text-white/60'}
            transition-all duration-200 ease-in-out`}
                xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={30} height={30} viewBox="0,0,256,256">
                <g fill="currentColor" fillRule="nonzero" stroke="none" strokeWidth={1} strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit={10} strokeDasharray="" strokeDashoffset={0} fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal' }}><g transform="scale(8.53333,8.53333)"><path d="M23,27l-8,-7l-8,7v-22c0,-1.105 0.895,-2 2,-2h12c1.105,0 2,0.895 2,2z" /></g></g>
            </svg>
        </div>
    )
}

