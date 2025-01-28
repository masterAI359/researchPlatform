import { store } from '../../../ReduxToolKit/store'
import { Provider } from 'react-redux'
import AppRouter from '../AppRouting/AppRouter'

export default function App() {

    return (
        <Provider store={store}>
            <AppRouter />
        </Provider>
    )

}