import { session } from "@/SupaBase/supaBaseClient";
import SideBar from "./ProfileMenu";
import { useSelector } from "react-redux";
import { RootState } from "@/ReduxToolKit/store";
import { useDispatch } from "react-redux";
import { clearUser } from "@/ReduxToolKit/Reducers/UserContent.ts/UserContentReducer";
import { useEffect, useState } from "react";
import ProfileMenu from "./ProfileMenu";
import SavedArticles from "./DisplayContent/SavedArticles";



export default function Profile() {
    const [displayArticles, setDislayArticles] = useState<boolean>(false)
    const id = useSelector((state: RootState) => state.auth.user_id)
    const email = useSelector((state: RootState) => state.auth.email)
    const { userArticles, error, status } = useSelector((state: RootState) => state.userdata)

    useEffect(() => {

        console.log(userArticles)

    }, [id, userArticles, error, status])

    return (
        <article className="w-full h-full flex relative justify-center scroll-smooth">


            <main className="w-full flex relative justify-center">

                <section className="lg:p-8">
                    <div
                        className="mx-auto 2xl:max-w-7xl pb-8 lg:px-16 md:px-12 xs:px-2 xl:px-2 items-center relative w-full">
                        <div
                            className="relative 2xl:max-w-7xl lg:flex-col overflow-hidden p-6 lg:flex lg:p-20">
                            <div className="pb-12 border-b border-white/10 flex">
                                <div>
                                    <span className="text-white w-fit relative rounded-full px-3 py-1 text-sm leading-6 ring-1 ring-white/20">Your Library</span>
                                    <h2
                                        className="text-3xl mt-6 tracking-tight font-light xs:text-2xl lg:text-4xl text-white">
                                        Access your saved content
                                        <span className="block text-zinc-400"
                                        >below</span>
                                    </h2>
                                </div>

                            </div>
                            <ProfileMenu setDislayArticles={setDislayArticles} />

                        </div>
                        <div className="2xl:max-w-7xl flex flex-col lg:px-20">
                            <div className="h-fit">
                                <h1 className="text-blue-500 font-light tracking-tight 2xl:text-3xl text-left">
                                    Your Saved Articles
                                </h1>
                            </div>
                            <SavedArticles />

                        </div>
                    </div>
                </section>


            </main>
        </article>
    )
}