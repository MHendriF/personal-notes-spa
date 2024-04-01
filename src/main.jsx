import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './redux/store.jsx';
import DarkModeContextProvider from './context/DarkMode.jsx';
import { LocaleProvider } from './context/LocaleContext.jsx';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <BrowserRouter>
            <React.StrictMode>
                <DarkModeContextProvider>
                    <LocaleProvider value={localStorage.getItem('locale') || 'id'}>
                        <App />
                    </LocaleProvider>
                </DarkModeContextProvider>
            </React.StrictMode>
        </BrowserRouter>
    </Provider>,
);
