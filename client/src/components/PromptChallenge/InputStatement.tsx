import { useState } from "react"
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
//import axios from "@/services/axios-client.tsx";

export default function InputStatement ({ dispatch }: any) {
    const [isExpressed, setIsExpressed] = useState('')
    const [origin, setOrigin] = useState('')
    console.log(typeof "Test")
    // useEffect(() => {
    //     // Function to fetch data from the server
    //     const fetchData = async () => {
    //       try {
    //         // Sending a GET request to the specified URL
    //         const response = await axios.get('/users/all')
    //         const data = await response; // Parse JSON response into native JavaScript objects
    //         console.log(data); // Log the data
    //       } catch (error) {
    //         console.error('There was a problem with the fetch operation:', error);
    //       }
    //     };
    //
    //     fetchData(); // Call the fetchData function
    //   }, []); //

   
    //interface SyntheticEvent<T> {
    //    target: EventTarget & T;
    //}
    
    const handleStatement = (e: React.ChangeEvent<HTMLInputElement>) => {setIsExpressed(e.target.value)}
    const assignOrigin = (e: React.ChangeEvent<HTMLInputElement>) => {setOrigin(e.target.value)}
    return (
        <div className="input_statement">
            <div className="prompt_container">
                <label className="prompt">What is a statement, idea or public 
                perception you believe, or have heard, that you would like to challenge?</label>
            </div>
            <div className="user_idea">
                <>
                    <input type = "text" className="idea_input" name = "idea_input" onChange={handleStatement}/>
                   
                    <div className="identifier" id = "identifier">
                        <label htmlFor="identifier">This statement is something:</label>

                        <span className="radio-wrapper">
                            <input type = "radio" name = "perspective" value = "My Opinion" onChange={assignOrigin}/>
                            <label htmlFor = "belief">I believe</label>
                            </span>
                        <span className="radio-wrapper">
                            <input type = "radio" name = "perspective" value = "Heard Elsewhere" onChange={assignOrigin}/>
                            <label htmlFor = "outside-opinion">Others Have said</label>
                        </span>
                        <span className="radio-wrapper">
                            <input type = "radio" name = "perspective" value = "Inquiry" onChange={assignOrigin}/>
                            <label htmlFor = "curiosity">I want to investigate</label>
                        </span>
                    </div>
                    <button type = "submit" className="idea_submit_btn"
                     onClick={() => dispatch({ type: "declared", payload:{userInput: isExpressed, origin: origin }})}>
                    Next</button>
                </>
            </div>
        </div>
    )
}