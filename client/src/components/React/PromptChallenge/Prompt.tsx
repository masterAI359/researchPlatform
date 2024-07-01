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

    switch(action.type) {
        case "prompt":
            return {
                ...state,
                identifier: null
            }
        case "declared":
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
        case "suggest-query":
            return {
                ...state,
                premises: action.payload,
                status: "choose-query"
                
            }
        case "search":
            return {
                ...state,
                status: "searchBox"
            }
       

            default:
        return state
    }
    
}

export default function Prompt({ isLoading, setIsLoading, articles, setArticles, readyToSelect, setReadyToSelect }) {
    const [{ statement, status, identifier, biases, premise }, 
        dispatch] = useReducer(reducer, initialState)

    return (
        <>
        {status === "prompt" && <InputStatement
            dispatch = {dispatch}/>}
        {status === "assertion" && <Bias 
            dispatch = {dispatch}
            statement = {statement}
            identifier = {identifier}/> }
       {status === "establish-premises" && identifier !== "agnostic" && <Premise 
            dispatch = {dispatch}
            biases = {biases}
            statement = {statement}
            identifier = {identifier}/>}
        {status === "choose-query" && <SuggestQuery 
            dispatch = {dispatch}
            statement = {statement}
            biases = {biases}
            identifier = {identifier}
            premise = {premise}
            />}
        {status === "searchBox" && <SearchBox
            articles={articles}
            setArticles={setArticles}
            isLoading = {isLoading}
            setIsLoading = {setIsLoading}
            readyToSelect = {readyToSelect}
            setReadyToSelect = {setReadyToSelect}

        />}
        </>
    )

    
}



