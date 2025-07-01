import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom"
import HomeContainer from "../Containers/HomeContainer"
import InvestigateContainer from "../Containers/InvestigateContainer"
import Navigation from "../Navigation/Navigation"
import AboutContainer from "../Containers/AboutContainer"
import Signup from "../Forms/AuthForms/Signup"
import Login from "../Forms/AuthForms/Login"
import Profile from "../User/Profile"
import EmailForReset from "../Forms/AuthForms/EmailForReset"
import UpdatePassword from "../Forms/AuthForms/UpdatePassword"

export default function AppRouter() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Structure />}>
                    <Route index element={<HomeContainer />} />
                    <Route path='/investigate' element={<InvestigateContainer />} />
                    <Route path='/about' element={<AboutContainer />} />
                    <Route path='/signup' element={<Signup />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/profile' element={<Profile />} />
                    <Route path="/emailForReset" element={<EmailForReset />} />
                    <Route path="/reset-password" element={<UpdatePassword />} />
                </Route>
            </Routes>
        </BrowserRouter>

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

