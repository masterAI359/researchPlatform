import { store } from '../../../ReduxToolKit/store'
import { Provider } from 'react-redux'
import AppRouter from '../AppRouting/AppRouter'
import { useEffect } from 'react'


export default function App() {

    useEffect(() => {

        window.dispatchEvent(new CustomEvent('reactMounted'))

    }, [])

    return (
        <Provider store={store}>
            <AppRouter />
        </Provider>
    )

}