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
import ScrolltoTop from "./ScrollToTop"
import SessionManager from "./SessionManager"
import { RootState, store } from '../../../ReduxToolKit/store'
import { Provider, useSelector } from 'react-redux'
import EmailForReset from "../Forms/EmailForReset"
import UpdatePassword from "../Forms/UpdatePassword"
import { AnimatePresence } from "framer-motion"
import SignOutModal from "../Forms/SignOutModal"


export default function AppRouter() {
    const signingOut = useSelector((state: RootState) => state.auth.signOut);

    return (
        <Provider store={store}>
            <BrowserRouter>
               { <ScrolltoTop /> }
                <SessionManager />
                <AnimatePresence>
                    {signingOut && <SignOutModal />}
                </AnimatePresence>
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

