import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom"
import { lazy, Suspense } from "react"
import HomeContainer from "../Containers/HomeContainer"
import Navigation from "../Navigation/Navigation"
import RouteLoader from "../Loaders/RouteLoader";
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
                    <Route path='/about' element={<AboutContainer />} />
                    <Route path="/emailForReset" element={<EmailForReset />} />

                    <Route path='/investigate' element={
                        <Suspense fallback={<RouteLoader />}>
                            <InvestigateContainer />
                        </Suspense>}
                    />

                    <Route path='/signup' element={
                        <Suspense fallback={<RouteLoader />}>
                            <Signup />
                        </Suspense>} />

                    <Route path='/login' element={
                        <Suspense fallback={<RouteLoader />}>
                            <Login />
                        </Suspense>} />

                    <Route path='/profile' element={
                        <Suspense fallback={<RouteLoader />}>
                            <Dashboard />
                        </Suspense>} />

                    <Route path="/reset-password" element={
                        <Suspense fallback={<RouteLoader />}>
                            <UpdatePassword />
                        </Suspense>} />

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
    );
};

