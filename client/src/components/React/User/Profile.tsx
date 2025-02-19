import { useSelector } from "react-redux";
import { RootState } from "@/ReduxToolKit/store";
import { useEffect, useState } from "react";
import ProfileMenu from "./ProfileMenu";
import SavedArticles from "./DisplayContent/SavedArticles";



export default function Profile() {
    const [displayArticles, setDislayArticles] = useState<boolean>(true)
    const id = useSelector((state: RootState) => state.auth.user_id)
    const { userArticles, error, status } = useSelector((state: RootState) => state.userdata)


    useEffect(() => {

    }, [id, userArticles, error, status])


    //TODO: display the user's previous investigations in their profile

    return (
        <article className="w-full h-full flex relative justify-center scroll-smooth">


            <main className="w-full flex relative justify-center">

                <section className="lg:p-8">
                    <div
                        className="mx-auto 2xl:max-w-7xl pb-8 lg:px-16 md:px-12 xs:px-2 xl:px-2 items-center relative w-full">
                        <div
                            className="relative 2xl:max-w-7xl 2xl:min-w-[78rem] lg:flex-col overflow-hidden p-6 lg:flex lg:p-20">
                            <div className="pb-12 border-b border-white/10 flex">
                                <div>
                                    <span className="text-blue-500 2xl:text-lg font-light tracking-tight w-fit relative">Your Library</span>
                                    <h2
                                        className="text-3xl mt-6 tracking-tight font-light xs:text-2xl lg:text-4xl text-white">
                                        Access your saved content
                                        <span className="block text-zinc-400"
                                        >below</span>
                                    </h2>
                                </div>

                            </div>
                            <ProfileMenu displayArticles={displayArticles} setDislayArticles={setDislayArticles} />

                        </div>
                        <div className="2xl:max-w-7xl flex flex-col lg:px-20">
                            {displayArticles && <div className="h-fit">
                                <h1 className="text-white font-light tracking-tight 2xl:text-3xl xs:text-center md:text-left">
                                    Your Saved Articles
                                </h1>
                            </div>}
                            {displayArticles && <SavedArticles />}

                        </div>
                    </div>
                </section>


            </main>
        </article>
    )
}