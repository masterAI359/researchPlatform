import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getID } from '@/ReduxToolKit/Reducers/Athentication/Authentication';
import { AppDispatch, RootState } from '@/ReduxToolKit/store';
import { createClient } from '@supabase/supabase-js';

const supaBaseUrl = import.meta.env.PUBLIC_SUPABASE_URL as string
const supaBaseKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY as string

export const supabase = createClient(supaBaseUrl, supaBaseKey, {
    auth: {
        persistSession: true,
        autoRefreshToken: true,
    }
});


export default function InitSession() {
    const id = useSelector((state: RootState) => state.auth.user_id);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        window.dispatchEvent(new CustomEvent('reactMounted'))

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

    }, [id, dispatch])

    return null
};
