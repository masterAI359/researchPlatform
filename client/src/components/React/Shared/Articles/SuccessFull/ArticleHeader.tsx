import MoreButton from "../buttons/MoreButton";
import SaveArticle from '../buttons/SaveArticle';
import FrontMatter from "./FrontMatter";
import { useState } from "react";

export default function ArticleHeader({ articleData, investigating }) {
    const [open, setOpen] = useState<boolean>(false)


    return (
        <header
            className="border-b border-white/10"
        >
            <section
                className="flex flex-col gap-y-2 md:flex-row 
            md:gap-x-4 items-center w-full h-full mx-auto pb-3"
            >
                <article
                    className="w-full h-full flex items-center 
                justify-between self-end pt-4 md:pt-0"
                >
                    <FrontMatter article={articleData} />
                    <div
                        className="self-end w-auto h-full flex
                        flex-col gap-y-1 md:gap-y-4 items-center"
                    >
                        <div
                            className="w-auto h-auto flex justify-start"
                        >
                            {investigating && <SaveArticle
                                open={open}
                                article={articleData}

                            />}
                        </div>
                        <div className="w-auto h-auto">
                            <MoreButton
                                open={open}
                                setOpen={setOpen}
                                articleData={articleData}
                            />
                        </div>
                    </div>
                </article>
            </section>
        </header>
    );
};