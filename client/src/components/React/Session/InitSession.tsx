import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getID } from '@/ReduxToolKit/Reducers/Athentication/Authentication';
import { AppDispatch, RootState } from '@/ReduxToolKit/store';

export default function InitSession() {
    const id = useSelector((state: RootState) => state.auth.user_id);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        window.dispatchEvent(new CustomEvent('reactMounted'));

        localStorage.setItem('tooltipFlags', JSON.stringify({
            readingTooltip: false,
            selectingTooltip: false
        }));

        if (!id) {
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
                    dispatch(getID(id))

                } catch (error: any) {
                    console.warn('Session restore failed:', error?.message || error)
                }
            }

            restoreUser()
        }

    }, []);

    return null;
};
