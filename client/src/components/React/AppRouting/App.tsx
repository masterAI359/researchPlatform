import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom"
import HomeContainer from "../Containers/HomeContainer"
import InvestigateContainer from "../Containers/InvestigateContainer"
import Navigation from "../Navigation/Navigation"
import AboutContainer from "../Containers/AboutContainer"
import { store } from '../../../ReduxToolKit/store'
import { Provider } from 'react-redux'



export default function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Structure />}>
                        <Route index element={<HomeContainer />} />
                        <Route path='/Investigate' element={<InvestigateContainer />} />
                        <Route path='/About' element={<AboutContainer />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </Provider>

    )
}


function Structure() {

    return (
        <>
            <Navigation />
            <Outlet />
        </>
    )
}

