import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { asyncPreloadProcess } from './redux/states/isPreload/action';
import { asyncUnsetAuthUser } from './redux/states/authUser/action';
import LoginPage from './pages/login';
import RegisterPage from './pages/register';
import Loading from './components/Elements/Loadings/Loading';
import NotePage from './pages/note';
import DetailNotePage from './pages/detailNote';
import EditNotePage from './pages/editNote';
import ArchivePage from './pages/archive';
import ProfilePage from './pages/profile';
import ErrorPage from './pages/error404';
import CreateNotePage from './pages/createNote';
import Navbar from './components/Layouts/Navbar';

const App = () => {
    const { authUser = null, isPreload = false } = useSelector((states) => states);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(asyncPreloadProcess());
    }, [dispatch]);

    const onLogOut = () => {
        dispatch(asyncUnsetAuthUser());
    };

    if (isPreload) {
        return null;
    }

    if (authUser === null) {
        return (
            <>
                <Loading />

                <main>
                    <Routes>
                        <Route path='/*' element={<LoginPage />} errorElement={<ErrorPage />} />
                        <Route path='/register' element={<RegisterPage />} />
                    </Routes>
                </main>
            </>
        );
    }

    return (
        <>
            <Loading />
            <div className='app-container'>
                <header>
                    <Navbar authUser={authUser} logOut={onLogOut} />
                </header>
                <main>
                    <Routes>
                        <Route path='/' element={<NotePage />} errorElement={<ErrorPage />} />
                        <Route path='/notes' element={<NotePage />} />
                        <Route path='/notes/create' element={<CreateNotePage />} />
                        <Route path='/notes/:id' element={<DetailNotePage />} />
                        <Route path='/notes/:id/edit' element={<EditNotePage />} />
                        <Route path='/archives' element={<ArchivePage />} />
                        <Route path='/profile' element={<ProfilePage />} />
                    </Routes>
                </main>
            </div>
        </>
    );
};

export default App;
