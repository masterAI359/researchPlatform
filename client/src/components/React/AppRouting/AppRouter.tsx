import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom"
import HomeContainer from "../Containers/HomeContainer"
import InvestigateContainer from "../Containers/InvestigateContainer"
import Navigation from "../Navigation/Navigation"
import AboutContainer from "../Containers/AboutContainer"
import ScrolltoTop from "./ScrollToTop"
import { store } from '../../../ReduxToolKit/store'
import { Provider } from 'react-redux'



export default function AppRouter() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <ScrolltoTop />
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

