import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom"
import HomeContainer from "../Containers/HomeContainer"
import InvestigateContainer from "../Containers/InvestigateContainer"
import Navigation from "../Navigation/Navigation"
import AboutContainer from "../Containers/AboutContainer"
import Signup from "../Forms/Signup"
import Login from "../Forms/Login"
import Profile from "../User/Profile"
import ReadSavedArticle from "../User/DisplayContent/UserArticles/ReadSavedArticles"
import ReviewInvestigation from "../User/DisplayContent/SavedInvestigations.tsx/ReviewInvestigation"
import EmailForReset from "../Forms/EmailForReset"
import UpdatePassword from "../Forms/UpdatePassword"

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
                    <Route path="/updatePassword" element={<UpdatePassword />} />
                    <Route path="/savedArticle" element={<ReadSavedArticle />} />
                    <Route path="/reviewInvestigation" element={<ReviewInvestigation />} />
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

