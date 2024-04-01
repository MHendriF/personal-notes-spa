import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './redux/store.jsx';
import { ThemeProvider } from './context/ThemeContext.jsx';
import { LocaleProvider } from './context/LocaleContext.jsx';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <BrowserRouter>
            <React.StrictMode>
                <ThemeProvider>
                    <LocaleProvider>
                        <App />
                    </LocaleProvider>
                </ThemeProvider>
            </React.StrictMode>
        </BrowserRouter>
    </Provider>,
);
