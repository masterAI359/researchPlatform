import { createBrowserRouter } from "react-router-dom";
import { rootLoader } from "../loaders/rootLoader";
import Root from "./Root";
import Pageskeleton from "../skeletons/PageSkeleton";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        loader: rootLoader,
        hydrateFallbackElement: <Pageskeleton />,
        children: [
            {
                index: true,
                async lazy() {
                    const mod = await import('@/components/React/routing/routes/Home');
                    return { Component: mod.default }
                }
            },
            {
                path: 'investigate',
                async lazy() {
                    const mod = await import('@/components/React/routing/routes/InvestigateRoute');
                    return { Component: mod.default };
                },

            },
            {
                path: 'about',
                async lazy() {
                    const mod = await import('@/components/React/routing/routes/AboutRoute');
                    return { Component: mod.default }
                }
            },
            {
                path: 'login',
                async lazy() {
                    const mod = await import('@/components/React/session/forms/AuthForms/Login');
                    return { Component: mod.default }
                }
            },
            {
                path: 'signup',
                async lazy() {
                    const mod = await import('@/components/React/session/forms/AuthForms/Signup');
                    return { Component: mod.default };
                },

            },
            {
                path: 'dashboard',
                async lazy() {
                    const mod = await import('@/components/React/routing/routes/Dashboard');
                    return { Component: mod.default }
                }
            },
            {
                path: 'reset-password',
                async lazy() {
                    const mod = await import('@/components/React/session/forms/AuthForms/UpdatePassword');
                    return { Component: mod.default }
                }
            },
            {
                path: 'email-for-reset',
                async lazy() {
                    const mod = await import('@/components/React/session/forms/AuthForms/EmailForReset');
                    return { Component: mod.default }
                }
            },
        ]
    }
]);



