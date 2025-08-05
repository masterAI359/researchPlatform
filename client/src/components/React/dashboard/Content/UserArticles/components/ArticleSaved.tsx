import Title from "./Title"
import ArticleThumbnail from "./ArticleThumbnail";
import React from "react"
import { ArticleSavedComponent } from "@/env";

function ArticleSaved({ article, handleArticleSelection, deleteHandler }: ArticleSavedComponent) {

  return (
    <div
      className="animate-fade-in cursor-pointer bg-white/5 md:bg-transparent md:hover:bg-white/5 relative 
    rounded-3xl transition-all duration-200 ease-in-out overflow-hidden
    h-76 sm:h-36 md:h-40 lg:h-[12.8rem] 2xl:h-60 my-16 w-full sm:w-4/5 md:w-11/12 2xl:w-3/4 mx-auto">
      <a
        className={`
            flex flex-col-reverse justify-center
            sm:grid lg:gap-4 xl:gap-20 max-h-full rounded-3xl
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

