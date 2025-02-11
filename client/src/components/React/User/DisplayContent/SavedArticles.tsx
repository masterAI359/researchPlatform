import { useSelector } from "react-redux"
import { RootState } from "@/ReduxToolKit/store"
import { useEffect } from "react"


export default function SavedArticles() {
    const { userArticles, error, status } = useSelector((state: RootState) => state.userdata)

    useEffect(() => {


    }, [userArticles, error, status])

    console.log(userArticles)


    return (
        <section className="w-full border-l border-white/20 flex justify-end grow-0 xs:gap-3 min-h-full 2xl:gap-6 mt-6">

            <article className="w-full flex flex-col-reverse gap-y-4 h-auto items-end">
                {userArticles.map((article: any, index: number) => (
                    <main key={index}
                        className="w-full 2xl:max-h-72 2xl:min-h-44
                border-white/20 cursor-pointer flex justify-end
                group">
                        <div className="w-fit border-b border-white/20 grow h-fit pb-4 pl-4 self-end">
                            <p className="text-white font-light text-sm">
                                <em className="text-zinc-400">
                                    Archived on:
                                </em> {article.created_at.split('').splice(0, 10).join('')}
                            </p>
                        </div>
                        <div className="flex w-2/3 h-full items-end border-b border-white/20">
                            <div className="flex flex-col h-auto w-auto mb-3">
                                <div className="flex flex-row-reverse justify-between h-full w-full items-center gap-x-4">
                                    <div className="flex flex-col h-full w-auto">
                                        <div className="w-fit h-full flex flex-col justify-end">
                                            <img className="2xl:max-w-80 2xl:min-w-80 h-auto object-cover rounded-2xl" src={article.image_url} />
                                        </div>

                                    </div>

                                    <div className="flex flex-col h-full justify-between items-start">
                                        <h1 className="text-lg w-fit group-hover:text-blue-400 transition-all duration-200
                                        ease-in-out text-white font-light tracking-tight self-start">
                                            {article.title}
                                        </h1>
                                        <div className="flex flex-col h-full justify-end gap-y-4">
                                            <div className="w-auto h-fit">
                                                <p className="text-white font-light text-sm group-hover:text-blue-400 transition-all duration-200 ease-in-out">
                                                    Source: <span className="text-zinc-400">
                                                        <em>
                                                            {article.provider}
                                                        </em>
                                                    </span>
                                                </p>
                                            </div>
                                            <div className="font-light">
                                                <p className="text-white font-light text-sm group-hover:text-blue-400 transition-all duration-200 ease-in-out">
                                                    Authors: <span className="text-zinc-400">
                                                        <em>
                                                            {article.authors ? (`${article.authors.map((author: string) => {
                                                                if (author !== 'Https') {
                                                                    return author
                                                                }
                                                            })}`) : 'Authors N/A: Visit source for authors'}
                                                        </em>

                                                    </span>
                                                </p>
                                            </div>
                                        </div>

                                    </div>


                                </div>



                            </div>
                        </div>



                    </main>
                ))}
            </article>



        </section>
    )
}