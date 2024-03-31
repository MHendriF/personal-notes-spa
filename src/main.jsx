import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store.jsx';
import DarkModeContextProvider from './context/DarkMode.jsx';
import { LocaleProvider } from './context/LocaleContext.jsx';
import ErrorPage from './pages/error404.jsx';
import NotePage from './pages/note.jsx';
import ArchivePage from './pages/archive.jsx';
import CreateNotePage from './pages/createNote.jsx';
import DetailNotePage from './pages/detailNote.jsx';
import EditNotePage from './pages/editNote.jsx';
import LoginPage from './pages/login.jsx';
import RegisterPage from './pages/register.jsx';
import ProfilePage from './pages/profile.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <BrowserRouter>
            <React.StrictMode>
                <DarkModeContextProvider>
                    <LocaleProvider>
                        <App />
                    </LocaleProvider>
                </DarkModeContextProvider>
            </React.StrictMode>
        </BrowserRouter>
    </Provider>,
);
