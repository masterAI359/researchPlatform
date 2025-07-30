import Title from "./Title"
import ArticleThumbnail from "./ArticleThumbnail";
import React from "react"

function ArticleSaved({ article, handleArticleSelection }) {

  return (
    <div key={article.article_url}
      className="cursor-pointer bg-white/5 md:hover:bg-white/5 md:hover:scale-[1.01] relative 
    rounded-3xl transition-all duration-200 ease-in-out
    h-96 sm:h-52 sm:p-6 md:p-4 md:h-60 xl:h-72 2xl:h-80 my-16 w-full md:w-11/12 mx-auto">
      <a
        className={`
            flex flex-col-reverse justify-center
            sm:grid lg:gap-20 max-h-full rounded-3xl
            sm:grid-cols-2 items-center relative
            transition-opacity duration-200 ease-in-out
            md:justify-items-end md:items-start
            
             `}
        href="#"
        title={article.title}>

        <Title article={article} handleArticleSelection={handleArticleSelection} />
        <ArticleThumbnail article={article} />
      </a>
    </div>
  )
};

export default React.memo(ArticleSaved);

