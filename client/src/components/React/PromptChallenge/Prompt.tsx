import { useReducer } from "react";
import InputStatement from "./InputStatement";
import Bias  from "./Bias";
import Premise from "./Premise";
import SuggestQuery from "./SuggestQuery";
import SearchBox from "./SearchBox";
import ArticlesGrid from "../ArticleComponents/ArticlesGrid";

//Should install Redux on the container for these in Investigate.astro page

type Articles = {
    articles: object
}

interface State {
    statement: string,
    status: string,
    identifier: string,
    biases: string,
    premise: string,
}

const initialState: State = {

    statement: "",
    status: "prompt",
    identifier: "",
    biases: "",
    premise: "",
}

interface Action {
    type: string;
    payload: any;
}


function reducer (state: State, action: Action): any {
    console.log(state)


    switch(action.type) {
        case "prompt":
            return {
                ...state,
                identifier: null
            }
        case "assertion":
            console.log(state)
            return {
                ...state,
                statement: action.payload.userInput,
                status: "assertion",
                identifier: action.payload.origin
            }
        case "acknowledge-bias":
            return {
                ...state,
                biases: action.payload,
                status: "establish-premises",
                
            }
        case "search":
            return {
                ...state,
                premises: action.payload,
                status: "searchBox"
            }
       
            default:
            return state
    }
}

export default function Prompt({ isLoading, setIsLoading, articles, setArticles,
     readyToSelect, setReadyToSelect, isSubmitted, setIsSubmitted, query, setQuery, summaries }) {
    const [{ statement, status, identifier, biases, premise }, 
        dispatch] = useReducer(reducer, initialState)


    return (
        <div className={`opacity-100 h-full transition-all duration-700  ${summaries ? "opacity-0" : ""}`}>
      <div className="mx-auto lg:p-8 2xl:max-w-7xl 2x1:h-full">
  <div className="mx-auto 2xl:max-w-7xl 2x1:h-full py-12 items-center relative">
    <div className="relative w-[75rem] mx-auto h-[40rem] flex items-center isolate lg:flex-col overflow-hidden bg-gradientdown ring-1 ring-white/10 rounded-4xl
     px-6 p-10 lg:flex lg:p-20 pb-0 lg:pb-0">
          
          <InputStatement
        status = {status}
        dispatch = {dispatch}/>
        <Bias 
    status = {status}
    dispatch = {dispatch}
    statement = {statement}
    identifier = {identifier}/> 
    <Premise 
    status = {status}
    dispatch = {dispatch}
    biases = {biases}
    statement = {statement}
    identifier = {identifier}/>
    <SuggestQuery 
    dispatch = {dispatch}
    statement = {statement}
    biases = {biases}
    identifier = {identifier}
    premise = {premise}
    />
    <SearchBox
    status = {status}
    query = {query}
    setQuery={setQuery}
    isSubmitted={isSubmitted}
    setIsSubmitted={setIsSubmitted}            
    articles={articles}
    setArticles={setArticles}
    isLoading = {isLoading}
    setIsLoading = {setIsLoading}
    readyToSelect = {readyToSelect}
    setReadyToSelect = {setReadyToSelect}

/>
      
          </div>
        </div>
      </div>
    </div>
    )

    
}





/*


{status === "choose-query" && }
{status === "searchBox" && } */