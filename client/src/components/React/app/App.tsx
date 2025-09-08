import { store } from '../../../ReduxToolKit/store'
import { Provider } from 'react-redux'
import AppRouter from '../routing/router/AppRouter'
import { useEffect } from 'react'
import InitSession from '../Session/recovery/InitSession';

export default function App() {

    useEffect(() => {

        window.dispatchEvent(new CustomEvent('reactMounted'))

    }, [])

    return (
        <Provider store={store}>
            <InitSession />
            <AppRouter />
        </Provider>
    )

}