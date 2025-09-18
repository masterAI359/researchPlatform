import { useEffect } from "react";
import { Suspense } from "react";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "@/ReduxToolKit/store";
import { useLoaderData, ScrollRestoration } from "react-router-dom";
import type { RootPayload } from "../loaderFunctions/rootLoader";
import Navigation from "../../Shared/Navigation/Navigation";
import { Outlet } from "react-router-dom";
import { populateArticles } from "@/ReduxToolKit/Reducers/UserContent/UserContentReducer";
import { populateResearch } from "@/ReduxToolKit/Reducers/UserContent/UserInvestigations";
import { authenticate } from "@/ReduxToolKit/Reducers/Athentication/Authentication";
import Pageskeleton from "../skeletons/PageSkeleton";

export default function Root() {
    const { user, articles, investigations } = useLoaderData() as RootPayload;
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        if (user) {
            dispatch(authenticate(true));
            if (articles) dispatch(populateArticles(articles));
            if (investigations) dispatch(populateResearch(investigations));
        } else {
            dispatch(authenticate(false));
        }
    }, [user, articles, investigations, dispatch]);

    return (
        <>
            <Navigation
            />
            <Suspense
                fallback={<Pageskeleton />}
            >
                <Outlet />
                <ScrollRestoration />
            </Suspense>
        </>
    );
};