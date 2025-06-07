import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getID, clearAuthSlice } from '@/ReduxToolKit/Reducers/Athentication/Authentication'

export default function InitSession() {
    const dispatch = useDispatch()

    useEffect(() => {
        window.dispatchEvent(new CustomEvent('reactMounted'))

        const restoreUser = async () => {
            try {
                const res = await fetch('/getCurrentUser', {
                    method: 'POST',
                    credentials: 'include',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })

                if (!res.ok) throw new Error('No active session')

                const result = await res.json()
                const user = result?.user
                const id = user?.id
                dispatch(getID(id))
            } catch {
                dispatch(clearAuthSlice())
            }
        }

        restoreUser()
    }, [])

    return null
}
