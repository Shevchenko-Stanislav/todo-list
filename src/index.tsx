import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import { App } from './App';
import { Provider } from 'react-redux';
import { store, persistor } from './store/store';
import { ThemeProvider } from './providers/ThemeProvider';
import { Layout } from './components/layout/Layout';
import { PersistGate } from 'redux-persist/integration/react';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <ThemeProvider>
                    <Layout>
                        <App />
                    </Layout>
                </ThemeProvider>
            </PersistGate>
        </Provider>
    </React.StrictMode>
);
