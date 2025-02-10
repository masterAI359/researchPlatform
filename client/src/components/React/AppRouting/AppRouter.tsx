import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom"
import HomeContainer from "../Containers/HomeContainer"
import InvestigateContainer from "../Containers/InvestigateContainer"
import Navigation from "../Navigation/Navigation"
import AboutContainer from "../Containers/AboutContainer"
import Signup from "../Forms/Signup"
import Login from "../Forms/Login"
import Profile from "../User/Profile"
import ResetCredentials from "../Forms/ResetCredentials"
import ScrolltoTop from "./ScrollToTop"
import SessionManager from "./SessionManager"
import { store } from '../../../ReduxToolKit/store'
import { Provider } from 'react-redux'



export default function AppRouter() {




    return (
        <Provider store={store}>
            <BrowserRouter>
                <ScrolltoTop />
                <SessionManager />
                <Routes>
                    <Route path='/' element={<Structure />}>
                        <Route index element={<HomeContainer />} />
                        <Route path='/Investigate' element={<InvestigateContainer />} />
                        <Route path='/About' element={<AboutContainer />} />
                        <Route path='/Signup' element={<Signup />} />
                        <Route path='Login' element={<Login />} />
                        <Route path='/Profile' element={<Profile />} />
                        <Route path="/ResetCredentials" element={<ResetCredentials />} />
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

