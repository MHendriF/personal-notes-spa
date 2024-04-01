import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { asyncPreloadProcess } from './redux/states/isPreload/action';
import { asyncUnsetAuthUser } from './redux/states/authUser/action';
import LoginPage from './pages/login';
import RegisterPage from './pages/register';
import Loading from './components/Elements/Loadings/Loading';
import NotePage from './pages/note';
import DetailNotePage from './pages/detailNote';
import ArchivePage from './pages/archive';
import ProfilePage from './pages/profile';
import ErrorPage from './pages/error404';
import CreateNotePage from './pages/createNote';
import { NavbarContainer } from './components/Layouts/NavbarContainer';

const App = () => {
    const { authUser = null, isPreload = false } = useSelector((states) => states);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(asyncPreloadProcess());
    }, [dispatch]);

    const onLogOut = () => {
        dispatch(asyncUnsetAuthUser());
        navigate(`/`);
    };

    const onNavigateToProfile = () => {
        navigate(`/profile`);
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
                        <Route path='*' element={<ErrorPage />} />
                        <Route path='/' element={<LoginPage />} />
                        <Route path='/register' element={<RegisterPage />} />
                    </Routes>
                </main>
            </>
        );
    }

    return (
        <>
            <Loading />
            <div>
                <header>
                    <NavbarContainer authUser={authUser} logOut={onLogOut} navigateToProfile={onNavigateToProfile} />
                </header>
                <main>
                    <Routes>
                        <Route path='*' element={<ErrorPage />} />
                        <Route path='/' element={<NotePage />} />
                        <Route path='/notes' element={<NotePage />} />
                        <Route path='/notes/create' element={<CreateNotePage />} />
                        <Route path='/notes/:id' element={<DetailNotePage />} />
                        <Route path='/archives' element={<ArchivePage />} />
                        <Route path='/profile' element={<ProfilePage />} />
                    </Routes>
                </main>
            </div>
        </>
    );
};

export default App;
