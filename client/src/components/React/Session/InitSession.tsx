import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getID, clearAuthSlice } from '@/ReduxToolKit/Reducers/Athentication/Authentication'
import { RootState } from '@/ReduxToolKit/store'

export default function InitSession() {
    const id = useSelector((state: RootState) => state.auth.user_id);
    const dispatch = useDispatch()

    useEffect(() => {
        window.dispatchEvent(new CustomEvent('reactMounted'));

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
                        if (res.status === 401) throw new Error('No active session');
                    } else {
                        throw new Error(`Unexpected error: ${res.status}`);
                    };

                    const result = await res.json();
                    const user = result?.user;
                    const id = user?.id;
                    dispatch(getID(id));
                } catch (error) {
                    console.warn('Session restore failed:', error.message ? error.message : error);
                    dispatch(clearAuthSlice());
                }
            };

            restoreUser()
        }

    }, []);

    return null
}
