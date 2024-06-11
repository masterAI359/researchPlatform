import Prompt from "./PromptChallenge/Prompt";
import LoadArticles from "./LoadArticles";
import { useState } from "react";



type IsLoading = boolean;


export default function InvestigateContainer () {

    const [isLoading, setIsLoading] = useState<IsLoading>(false)



    return (
        <div className="grid grid-cols-1 h-screen mx-auto justify-center">
        <div className="block">
        <Prompt
        isLoading = {isLoading}
        setIsLoading={setIsLoading}
        />
        </div>
        <div className="block mx-auto">
        {isLoading ? <LoadArticles/> : ""}
        </div>
       
        </div>
    )
}
