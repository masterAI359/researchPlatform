import { useState } from "react";

interface BiasProps {
    dispatch: any,
    statement: string,
    identifier: string,
}

export function Bias ({ identifier, statement, dispatch }: BiasProps) {
    console.log({ statement, identifier});
    console.log(typeof statement)


    const [bias, setBias] = useState('')

    console.log({ statement, identifier, bias});
    
    const handleBias = (e: React.ChangeEvent<HTMLTextAreaElement>) => setBias(e.target.value)

    return (
        <div className="bias-wrapper">

        <span className="previous-input">
            <div className="input-box">
                <span>
                <p className="input-origin"><strong>Origin: </strong> {identifier}</p>
                </span>
                <span>
                    <p className="examined-statement"><strong>Idea: </strong>{statement}</p>
                </span>
            </div>    
        </span> 
            <label htmlFor="user_bias">Being unbiased is an impossible ask for any human being,
            the best we can do is aim to be aware of our biases. If you have any that come to mind on the topic, go ahead and list them now</label><br/>
            <textarea name="user_bias" className="user_bias" onChange = {handleBias}></textarea><br/>

            <button className="next-btn" onClick={() => dispatch({ type: "acknowledge-bias", payload: bias})}>Next</button>
        </div>

    );
    
}
