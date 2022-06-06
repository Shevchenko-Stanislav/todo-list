import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';
import { ThemeProvider } from './providers/ThemeProvider';
import { Layout } from './components/layout/Layout';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <ThemeProvider>
            <Layout>
                <App />
            </Layout>
        </ThemeProvider>
    </React.StrictMode>
);
