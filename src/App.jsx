import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { asyncPreloadProcess } from './redux/slices/preloadSlice';
import { asyncUnsetAuthUser } from './redux/slices/authSlice';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import LoginPage from './pages/login';
import RegisterPage from './pages/register';
import Loading from './components/Elements/Loadings/Loading';

const App = () => {
    const { authUser = null, isPreload = false } = useSelector((states) => states); // @TODO: get authUser and isPreLoad state from store

    const dispatch = useDispatch(); // @TODO: get dispatch function from store

    useEffect(() => {
        // @TODO: dispatch async action to preload app
        dispatch(asyncPreloadProcess());
    }, [dispatch]);

    const onSignOut = () => {
        // @TODO: dispatch async action to sign out
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
                        <Route path='/*' element={<LoginPage />} />
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
                <main>
                    <Routes>
                        <Route path='/' element={<HomePage />} />
                        <Route path='/talks/:id' element={<DetailPage />} />
                    </Routes>
                </main>
            </div>
        </>
    );
};

export default App;
