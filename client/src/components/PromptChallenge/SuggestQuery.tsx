import { useState } from "react";

interface SuggestTypes {
    statement: string,
    biases: string,
    identifier: string,
    premise: string,
    dispatch: any
}

export function SuggestQuery({ statement, biases, identifier, premise, dispatch }: SuggestTypes) {

    const [query, setQuery] = useState("");

    const handleQuery = (e: React.ChangeEvent<HTMLInputElement>) => { setQuery(e.target.value); };

    return (
        <>
            <div>
                <div>
                    <span>
                        <p>{statement}</p>
                    </span>
                    <span>
                        <p>{biases}</p>
                    </span>
                    <span>
                        <p>{identifier}</p>
                    </span>
                    <span>
                        <p>{premise}</p>
                    </span>
                </div>
                <div>
                    <span>
                        <p>With your perspective as described and biases in mind, let's take a look into the matter</p>
                    </span>
                    <span>
                        <p>Here we've constructed some potential search queries to inquire about the topic in a neutral fashion</p>
                        <p><strong>Keep in mind,</strong> this is totally optional. You're completley free to write up your own search terms and
                            seek information as you see fit!</p>
                    </span>
                    <div>
                        <header>Suggested search queries</header>
                        <span>
                            <input type="radio" onChange={handleQuery} value = "Option 1"/>
                            <input type="radio" onChange={handleQuery} value = "Option 2"/>
                            <input type="radio" onChange={handleQuery} value = "Option 3"/>
                        </span>
                    </div>
                </div>
                <button className="next-btn" onClick={() => dispatch({ type: "suggest-query", payload: query })}>Next</button>
            </div>
        </>
    );
}
