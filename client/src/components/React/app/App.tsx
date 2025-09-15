import { store } from '@/ReduxToolKit/store';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { router } from '@/components/React/routing/router/Router'
import Root from '../routing/Root/Root';


export default function App() {

    return (
        <Provider store={store}>
            <RouterProvider router={router}>
                <Root />
            </RouterProvider>
        </Provider>
    );
};