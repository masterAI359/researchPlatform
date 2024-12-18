import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom"
import HomeContainer from "../Containers/HomeContainer"
import InvestigateContainer from "../Containers/InvestigateContainer"
import Navigation from "../Navigation/Navigation"
import AboutContainer from "../Containers/AboutContainer"


export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Structure />}>
                    <Route index element={<HomeContainer />} />
                    <Route path='/Investigate' element={<InvestigateContainer />} />
                    <Route path='/About' element={<AboutContainer />} />
                </Route>
            </Routes>
        </BrowserRouter>)
}


function Structure() {

    return (
        <>
            <Navigation />
            <Outlet />
        </>
    )
}

