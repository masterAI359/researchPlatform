import MoreButton from "../buttons/MoreButton";
import SaveArticle from '../buttons/SaveArticle';
import FrontMatter from "./FrontMatter";
import { useState } from "react";

export default function ArticleHeader({ articleData, setFullStory, fullStory, investigating }) {
    const [showNotification, setShowNotification] = useState<boolean>(false)
    const [open, setOpen] = useState<boolean>(false)
    const [showAllAuthors, setShowAllAuthors] = useState<boolean>(false);

    const {
        article_title,
        article_authors,
        article_url,
    } = articleData


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
                        flex-col gap-y-1 md:gap-y-6 items-center"
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
                                showAllAuthors={showAllAuthors}
                                authors={article_authors}
                                setShowAllAuthors={setShowAllAuthors}
                                context={'reading'} key={article_title}
                                open={open} setOpen={setOpen}
                                article_url={article_url}
                            />
                        </div>
                    </div>
                </article>
            </section>
        </header>
    );
};