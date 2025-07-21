import { store } from '../../../ReduxToolKit/store'
import { Provider } from 'react-redux'
import AppRouter from '../AppRouting/Router/AppRouter'
import { useEffect } from 'react'
import InitSession from '../Session/InitSession'
//import '../../../styles/global.css'

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