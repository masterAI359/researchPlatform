import { act, useReducer } from "react";
import InputStatement from "./Step1";
import Bias  from "./Step2";
import Premise from "./Step3";
import SearchBox from "./SearchBox";
import { State } from "@/env";
import motion from "framer-motion";

const initialState: State = {

    statement: null,
    status: "prompt",
    identifier: null,
    biases: null,
    premise: null,
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
                status: action.type
            }
        case "assertion":
            return {
                ...state,
                statement: action.payload.userInput,
                status: action.type,
                identifier: action.payload.origin
            }
        case "acknowledge-bias":
            
            return {
                ...state,
                biases: action.payload,
                status: "establish-premises",
                
            }
        case "search":
            console.log(action.payload)
            return {
                ...state,
                premise: action.payload,
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

        console.log({ CurrentStatus: status})
        //TODO: Place a back button as well as next button, using arrows, otherwise the user can't go back and must start over completely if they weren't ready to move on
        // May need to store user input with useState as opposed to useReducer, as right now i can't allow the user to backtrack to change any inputs 

    return (
    <div className="opacity-100 xl:max-w-7xl w-full h-fit py-20 mx-auto transition-all duration-700 pointer-events-auto">
    <div className="relative sm:mx-auto w-7xl mx-auto h-[43rem] items-center xl:px-40 lg:flex-col overflow-hidden bg-ebony ring-1 ring-white/10 rounded-4xl
      px-10 lg:flex lg:p-20 pb-0 lg:pb-0">
          
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
    <SearchBox
        status = {status}
        setQuery={setQuery}
        setIsSubmitted={setIsSubmitted}            
        isLoading = {isLoading}
        statement = {statement}
        identifier = {identifier}
        premise = {premise}
       />
      
          </div>
        </div>
    )
}





