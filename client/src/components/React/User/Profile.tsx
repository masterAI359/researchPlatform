import { useSelector, useDispatch } from "react-redux";
import { AppDispatch } from "@/ReduxToolKit/store";
import { RootState } from "@/ReduxToolKit/store";
import { useEffect, useLayoutEffect, useState } from "react";
import ProfileMenu from "./ProfileNavigation/ProfileMenu";
import SideBar from "./ProfileNavigation/SideBar";
import SavedArticles from "./DisplayContent/SavedArticles";
import SavedResearchLayout from "./DisplayContent/SavedInvestigations.tsx/SavedResearchLayout";
import { fetchSavedArticles } from "@/ReduxToolKit/Reducers/UserContent.ts/UserContentReducer";
import { fetchSavedInvestigations } from "@/ReduxToolKit/Reducers/UserContent.ts/UserInvestigations";

export default function Profile() {
    const [displayArticles, setDisplayArticles] = useState<boolean>(false)
    const [displayInvestigations, setDisplayInvestigations] = useState<boolean>(true)
    const id = useSelector((state: RootState) => state.auth.user_id)
    const activeSession = useSelector((state: RootState) => state.auth.activeSession)
    const status = useSelector((state: RootState) => state.auth.status)
    const dispatch = useDispatch<AppDispatch>()


    useLayoutEffect(() => {

        dispatch(fetchSavedArticles(id))
        dispatch(fetchSavedInvestigations(id))

    }, [id])


    const handleArticleSelection = () => {

        setDisplayArticles(true)
        setDisplayInvestigations(false)
    }


    //todo: handle view on navigation back to profile


    return (
        <article className="w-full h-full flex relative justify-center scroll-smooth">


            <main className="w-full flex relative justify-center">
                <SideBar setDislayArticles={setDisplayArticles} setDisplayInvestigations={setDisplayInvestigations} />

                <section className="lg:p-8">
                    <div
                        className="mx-auto 2xl:max-w-7xl pb-8 lg:px-16 md:px-12 xs:px-2 xl:px-2 items-center relative w-full">
                        <div
                            className="relative 2xl:max-w-7xl 2xl:min-w-[78rem] lg:flex-col overflow-hidden p-8 lg:flex lg:p-12">
                            <div className="pb-12 flex">
                                <div>
                                    <span className="text-blue-400 2xl:text-lg font-light tracking-tight w-fit relative">Your Library</span>
                                    {/*<h2
                                        className="text-3xl mt-6 tracking-tight font-light xs:text-2xl lg:text-4xl text-white">
                                        Access your saved content
                                        <span className="block text-zinc-400"
                                        >below</span>
                                    </h2>*/}
                                </div>

                            </div>
                            <ProfileMenu displayArticles={displayArticles} setDislayArticles={setDisplayArticles} setDisplayInvestigations={setDisplayInvestigations} />
                        </div>
                        <div className="2xl:max-w-7xl flex flex-col lg:px-0">
                            {displayArticles && <div className="h-fit">
                                <h1 className="text-white font-light tracking-tight 2xl:text-3xl xs:text-center md:text-left">
                                    Your Saved Articles
                                </h1>
                            </div>}
                            {displayArticles && <SavedArticles articleSelect={handleArticleSelection} setDisplayArticles={setDisplayArticles} setDisplayInvestigations={setDisplayInvestigations} />}
                            {displayInvestigations && <SavedResearchLayout />}

                        </div>
                    </div>
                </section>

            </main>
        </article>
    )
}