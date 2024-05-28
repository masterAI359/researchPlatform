import { useState } from "react";

interface PremiseProps {
    biases: string,
    statement: string,
    identifier: string,
    dispatch: any,
}


export default function Premise({biases, statement, identifier, dispatch}: PremiseProps) {

    const [premise, setPremise] = useState("")

    const handlePremise = (e: React.ChangeEvent<HTMLTextAreaElement>) => setPremise(e.target.value) 
        
    console.log(typeof statement)
    
    return (
        <>
            <div className="premise-container">
                <span>
                    <p>{statement}</p>
                    <p>{biases}</p>
                    <p>{identifier}</p>
                </span>
                <div className="write_premise">
                    <header>With your biases in mind, and where this idea comes from, write down what informs the opinion on the topic</header>
                    <textarea
                    onChange={() => handlePremise}></textarea>
                </div>
                <button className="next-btn" onClick={() => dispatch({ type: "suggest-query", payload: premise})}>Next</button>
            </div>
        </>
    );
}
