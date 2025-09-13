import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/ReduxToolKit/store";
import { authenticate } from '@/ReduxToolKit/Reducers/Athentication/Authentication';
import { populateArticles } from '@/ReduxToolKit/Reducers/UserContent/UserContentReducer';
import { populateResearch } from '@/ReduxToolKit/Reducers/UserContent/UserInvestigations';
import { User } from '@supabase/supabase-js';


export function useRestoreSession() {
    const session = useSelector((state: RootState) => state.auth.activeSession);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {

        const flags = localStorage.getItem("tooltipFlags");

        if (!flags) {
            localStorage.setItem('tooltipFlags', JSON.stringify({
                readingTooltip: false,
                selectingTooltip: false
            }));
        };

        const abortController = new AbortController();

        if (session) return;

        (async () => {
            try {
                const res = await fetch('/getCurrentUser', {
                    method: 'POST',
                    credentials: 'include',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    signal: abortController.signal
                });

                if (!res.ok) {
                    if (res.status === 401) throw new Error('No active session')
                    throw new Error(`Unexpected error: ${res.status}`)
                }

                const result: CurrentUser = await res.json();
                const user: User = result?.user;
                const data: UserContent = result?.data;
                const { userArticles, userResearch } = data;

                if (user && data) {
                    dispatch(authenticate(true));
                    dispatch(populateArticles(userArticles));
                    dispatch(populateResearch(userResearch));
                };

            } catch (error: any) {
                if (error.name !== "AbortError") {
                    console.warn('Session restore failed:', error?.message || error);
                };
            };
        })();

        return () => abortController.abort();

    }, [session, dispatch]);
};
