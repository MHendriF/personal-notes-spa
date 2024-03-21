import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import ErrorPage from './pages/error404.jsx';
import NotePage from './pages/note.jsx';
import store from './redux/store.jsx';
import DarkModeContextProvider from './context/DarkMode.jsx';
import './index.css';
import ArchivePage from './pages/archive.jsx';
import CreateNotePage from './pages/createNote.jsx';
import DetailNotePage from './pages/detailNote.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <NotePage />,
        errorElement: <ErrorPage />,
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
        path: '/archives',
        element: <ArchivePage />,
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <DarkModeContextProvider>
                <RouterProvider router={router} />
            </DarkModeContextProvider>
        </Provider>
    </React.StrictMode>,
);
