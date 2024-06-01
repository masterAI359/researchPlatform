import { useReducer } from "react"
import InputStatement from "./InputStatement"
import Bias  from "./Bias"
import Premise from "./Premise"
import SuggestQuery from "./SuggestQuery"
import SearchBox from "@/components/PromptChallenge/SearchBox"


interface State {
    statement: string,
    status: string,
    identifier: string,
    biases: string,
    premise: string
}

const initialState: State = {

    statement: "",
    status: "prompt",
    identifier: "",
    biases: "",
    premise: ""
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

export default function Prompt() {
    //type error originating from which side of '=' operator? constructing SuggestQuery.tsx file
    const [{ statement, status, identifier, biases, premise}, dispatch] = useReducer(reducer, initialState)

    return (
        <form>
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
        {status === "searchBox" && <SearchBox />}
        </form>
    )
}



