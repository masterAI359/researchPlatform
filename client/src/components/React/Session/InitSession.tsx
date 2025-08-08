import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserCredentials } from '@/ReduxToolKit/Reducers/Athentication/Authentication';
import { AppDispatch, RootState } from '@/ReduxToolKit/store';
import { fetchSavedArticles } from '@/ReduxToolKit/Reducers/UserContent.ts/UserContentReducer';
import { fetchSavedInvestigations } from '@/ReduxToolKit/Reducers/UserContent.ts/UserInvestigations';

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

                    const result = await res.json()
                    const user = result?.user
                    const id = user?.id

                    if (!id) throw new Error('User ID missing in response')
                    dispatch(fetchUserCredentials(result));
                    dispatch(fetchSavedArticles());
                    dispatch(fetchSavedInvestigations());

                } catch (error: any) {
                    console.warn('Session restore failed:', error?.message || error)
                }
            }

            restoreUser()
        }

    }, []);

    return null;
};
