import Title from "./Title"
import ArticleThumbnail from "./ArticleThumbnail";
import React from "react"

interface ArticleSaved {
  article: SavedArticle;
  handleArticleSelection: (article: SavedArticle) => () => void;
  deleteHandler: (article: SavedArticle) => Promise<void>;
}

function ArticleSaved({ article, handleArticleSelection, deleteHandler }: ArticleSaved) {

  return (
    <div
      className="cursor-pointer bg-white/5 md:hover:bg-white/5 relative 
    rounded-3xl transition-all duration-200 ease-in-out
    h-96 sm:h-52 sm:p-6 md:p-4 md:h-60 2xl:h-72 my-16 w-full md:w-11/12 mx-auto">
      <a
        className={`
            flex flex-col-reverse justify-center
            sm:grid lg:gap-20 max-h-full rounded-3xl
            sm:grid-cols-2 items-center relative
            transition-opacity duration-200 ease-in-out
            md:justify-items-end md:items-start
            
             `}
        href="#"
      >

        <Title article={article} handleArticleSelection={handleArticleSelection} />
        <ArticleThumbnail article={article} deleteHandler={deleteHandler} />

      </a>
    </div>
  )
};

export default React.memo(ArticleSaved);

