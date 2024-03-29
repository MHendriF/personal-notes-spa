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

const router = createBrowserRouter([
    {
        path: '/',
        element: <NotePage />,
        errorElement: <ErrorPage />,
    },
    {
        path: '/login',
        element: <LoginPage />,
    },
    {
        path: '/register',
        element: <RegisterPage />,
    },
    {
        path: '/profile',
        element: <ProfilePage />,
    },
    {
        path: '/notes',
        element: <NotePage />,
    },
    {
        path: '/notes/create',
        element: <CreateNotePage />,
    },
    {
        path: '/notes/:id',
        element: <DetailNotePage />,
    },
    {
        path: '/notes/:id/edit',
        element: <EditNotePage />,
    },
    {
        path: '/archives',
        element: <ArchivePage />,
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <React.StrictMode>
            <DarkModeContextProvider>
                <LocaleProvider>
                    <RouterProvider router={router} />
                </LocaleProvider>
            </DarkModeContextProvider>
        </React.StrictMode>
    </Provider>,
);
