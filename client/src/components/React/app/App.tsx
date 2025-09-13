import { store } from '@/ReduxToolKit/store';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { router } from '@/components/React/routing/router/Router'
import AppRouter from '@/components/React/routing/router/AppRouter';
import Root from '../routing/router/Root';
import { useEffect } from 'react';
import InitSession from '@/components/React/session/recovery/InitSession';


export default function App() {

    // useEffect(() => {
    //     window.dispatchEvent(new CustomEvent('reactMounted'))
    // }, []);

    return (
        <Provider store={store}>
            <RouterProvider router={router}>
                <Root />
            </RouterProvider>
        </Provider>
    );
};

// <InitSession />
//            <AppRouter />