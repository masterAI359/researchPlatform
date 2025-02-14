import { useSelector } from "react-redux"
import { RootState } from "@/ReduxToolKit/store"
import { useEffect } from "react"
import { motion } from "framer-motion"
import ArticleSaved from "./ArticleSaved"
import { useAppdispatch } from "@/Hooks/appDispatch"

export default function SavedArticles() {
    const { userArticles, error, status } = useSelector((state: RootState) => state.userdata)
    const id = useSelector((state: RootState) => state.auth.user_id)
    const appDispatch = useAppdispatch()

    useEffect(() => {



    }, [userArticles, error, status])

    return (
        <div className="w-full h-full mx-auto animate-fade-in duration-300 delay-200 ease-in">
            <motion.section
                layout
                className="w-full 2xl:px-2 xs:gap-3 h-full mt-12">


                <article className="w-full flex flex-col gap-y-4 h-auto items-end xs:px-4 md:px-0">
                    {userArticles.map((article: any, index: number) => (
                        <ArticleSaved key={index} article={article} index={index} />
                    ))}
                </article>

            </motion.section>
        </div>

    )
}