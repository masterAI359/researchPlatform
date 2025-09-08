import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authenticate } from '@/ReduxToolKit/Reducers/Athentication/Authentication';
import { AppDispatch, RootState } from '@/ReduxToolKit/store';
import { populateArticles } from '@/ReduxToolKit/Reducers/UserContent.ts/UserContentReducer';
import { populateResearch } from '@/ReduxToolKit/Reducers/UserContent.ts/UserInvestigations';
import { User } from '@supabase/supabase-js';

interface CurrentUser {
    user: User,
    data: UserContent
};

interface SavedArticleRes {
    articles: SavedArticle[],
    articleMap: Map<string, SavedArticle>
};

interface Investigation {
    idea: string;
    premises: string | null;
    initial_perspective: string | null;
    biases: string | null;
    ending_perspective: string | null;
    new_concepts: any;
    changed_opinion: any;
    takeaway: string | null;
    had_merit: boolean | null;
    user_id: string;
    sources: string[] | null;
    wikipedia_extracts: any;
};

interface UserContent {
    userArticles: SavedArticleRes | null;
    userResearch: Investigation[] | null;
};



export default function InitSession() {
    const activeSession = useSelector((state: RootState) => state.auth.activeSession);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        window.dispatchEvent(new CustomEvent('reactMounted'));

        localStorage.setItem('tooltipFlags', JSON.stringify({
            readingTooltip: false,
            selectingTooltip: false
        }));

        if (!activeSession) {
            const restoreUser = async () => {
                try {
                    const res = await fetch('/getCurrentUser', {
                        method: 'POST',
                        credentials: 'include',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    })

                    if (!res.ok) {
                        if (res.status === 401) throw new Error('No active session')
                        throw new Error(`Unexpected error: ${res.status}`)
                    }

                    const result: CurrentUser = await res.json();
                    const user: User = result.user;
                    const data: UserContent = result.data;
                    const { userArticles, userResearch } = data;
                    if (user && data) {
                        dispatch(authenticate(true));
                        dispatch(populateArticles(userArticles));
                        dispatch(populateResearch(userResearch));
                    }


                } catch (error: any) {
                    console.warn('Session restore failed:', error?.message || error)
                }
            }

            restoreUser()
        }

    }, []);

    return null;
};
