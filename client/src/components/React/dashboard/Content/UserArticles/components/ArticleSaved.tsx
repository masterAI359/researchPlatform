import Title from "./Title"
import ArticleThumbnail from "./ArticleThumbnail";
import React from "react"
import { ArticleSavedComponent } from "@/env";

function ArticleSaved({ children }: ArticleSavedComponent) {

  return (
    <div
      className="cursor-pointer bg-white/5 md:bg-transparent 
      md:hover:bg-white/5 relative rounded-3xl transition-all 
      duration-200 ease-in-out overflow-hidden h-76 sm:h-40 
      lg:h-[12.8rem] 2xl:h-60 my-16 w-full md:w-11/12 
      2xl:w-3/4 mx-auto"
    >
      <a
        className="flex flex-col-reverse justify-center
            sm:grid max-h-full rounded-3xl
            sm:[grid-template-columns:1.5fr_1fr] 
            h-76 sm:h-40 
            lg:h-[12.8rem] 2xl:h-60 w-full
            relative transition-opacity items-stretch
            duration-200 ease-in-out sm:justify-items-end 
            md:items-start"
        href="#"
      >
        {children}

      </a>
    </div>
  )
};

export default React.memo(ArticleSaved);