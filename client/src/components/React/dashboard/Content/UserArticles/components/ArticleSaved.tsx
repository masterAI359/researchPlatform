import React from "react"
import { ArticleSavedComponent } from "@/env";
import { JSX } from "react";

function ArticleSaved({ children }: ArticleSavedComponent): JSX.Element {

  return (
    <div
      className="cursor-pointer
      relative rounded-3xl
    overflow-hidden h-76 sm:h-40 
      lg:h-[12.8rem] 2xl:h-60 my-16 w-full md:w-11/12 
      2xl:w-3/4 mx-auto"
    >
      <div
        className="bg-white/5 md:bg-white/5
        md:hover:bg-white/10
        flex flex-col-reverse justify-center
            sm:grid max-h-full rounded-3xl
            sm:[grid-template-columns:1.5fr_1fr] 
            h-76 sm:h-40 
            lg:h-[12.8rem] 2xl:h-60 w-full
            relative items-stretch
            sm:justify-items-end 
            md:items-start"
      >
        {children}

      </div>
    </div>
  )
};

export default React.memo(ArticleSaved);