import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom"
import { lazy, Suspense } from "react"
import HomeContainer from "../Containers/HomeContainer"
import Navigation from "../Navigation/Navigation"
const Dashboard = lazy(() => import('../Dashboard/Dashboard'));
const InvestigateContainer = lazy(() => import('../Containers/InvestigateContainer'));
const AboutContainer = lazy(() => import('../Containers/AboutContainer'));
const Signup = lazy(() => import('../Forms/AuthForms/Signup'));
const Login = lazy(() => import('../Forms/AuthForms/Login'));
const UpdatePassword = lazy(() => import('../Forms/AuthForms/UpdatePassword'));
const EmailForReset = lazy(() => import('../Forms/AuthForms/EmailForReset'));

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
                    <Route path='/profile' element={<Dashboard />} />
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
            <Suspense>
                <Outlet />
            </Suspense>
        </>
    )
}

