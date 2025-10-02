import React from "react"
import type { ArticleSavedComponent } from "@/env";
import { JSX } from "react";

function ArticleSaved({ children }: ArticleSavedComponent): JSX.Element {

  return (
    <div
      className="cursor-pointer shrink-0
      relative
     h-76 sm:h-40 
      lg:h-[12.8rem] 2xl:h-60 flex items-center
       justify-center py-2 w-full md:w-11/12 
      2xl:w-full mx-auto opacity-90"
    >
      <div
        className="bg-white/5 overflow-hidden
        md:hover:bg-white/10
        flex flex-col-reverse justify-center
            sm:grid max-h-full rounded-3xl
            sm:[grid-template-columns:1.5fr_1fr] 
            h-76 sm:h-40 
            lg:h-[12.8rem] 2xl:h-[15.5rem] w-full
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