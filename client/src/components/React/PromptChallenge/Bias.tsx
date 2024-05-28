import { useState } from "react";

interface BiasProps {
    dispatch: any,
    statement: string,
    identifier: string,
}

export default function Bias ({ identifier, statement, dispatch }: BiasProps) {
    const [bias, setBias] = useState('')
    
    const handleBias = (e: React.ChangeEvent<HTMLTextAreaElement>) => setBias(e.target.value)

    return (
        <div className="bias-wrapper">

        <div className="previous-input">
            <div className="input-box">
                <span>
                <p className="input-origin"><strong>Origin: </strong> {identifier}</p>
                </span>
                <span>
                    <p className="examined-statement"><strong>Idea: </strong>{statement}</p>
                </span>
            </div>    
        </div> 

            <label htmlFor="user_bias">Being unbiased is an impossible ask for any human being,
            the best we can do is aim to be aware of our biases. If you have any that come to mind on the topic, go ahead and list them now</label><br/>
            <textarea name="user_bias" className="user_bias" onChange = {handleBias}></textarea><br/>

            <button className="next-btn" onClick={() => dispatch({ type: "acknowledge-bias", payload: bias})}>Next</button>
        </div>

    );
    
}
