import { store } from '../../../ReduxToolKit/store'
import { Provider } from 'react-redux'
import App from '../AppRouting/App'

export default function AppContainer() {

    return (
        <Provider store={store}>
            <App />
        </Provider>
    )

}