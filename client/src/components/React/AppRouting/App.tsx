import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomeContainer from "../Containers/HomeContainer"
import InvestigateContainer from "../Containers/InvestigateContainer"



export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomeContainer />} />
                <Route path='/Investigate' element={<InvestigateContainer />} />
            </Routes>
        </BrowserRouter>)
}


