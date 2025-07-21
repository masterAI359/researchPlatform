import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom"
import { lazy, Suspense } from "react"
import HomeContainer from "../routes/HomeContainer";
import Navigation from "../../Shared/Navigation/Navigation";
import RouteLoader from "../../Loaders/RouteLoader";
const Dashboard = lazy(() => import('../routes/Dashboard'));
const InvestigateContainer = lazy(() => import('../routes/InvestigateRoute'));
const AboutContainer = lazy(() => import('../routes/AboutRoute'));
const Signup = lazy(() => import('../../Session/forms/AuthForms/Signup'));
const Login = lazy(() => import('../../Session/forms/AuthForms/Login'));
const UpdatePassword = lazy(() => import('../../Session/forms/AuthForms/UpdatePassword'));
const EmailForReset = lazy(() => import('../../Session/forms/AuthForms/EmailForReset'));

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

