import { useEffect, useContext, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { asyncSetAuthUser } from '../../redux/states/authUser/action';
import useInput from '../../hooks/useInput';
import { DarkMode } from '../../context/DarkMode';
import LocaleContext from '../../context/LocaleContext';
import ButtonCostum from '../Elements/Buttons';
import InputForm from '../Elements/Inputs/InputForm';

const FormLogin = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const emailRef = useRef(null);
    const [email, setEmail] = useInput('');
    const [password, setPassword] = useInput('');
    const { isDarkMode } = useContext(DarkMode);
    const { locale } = useContext(LocaleContext);

    useEffect(() => {
        emailRef.current.focus();
    }, []);

    const handleLogin = (e) => {
        e.preventDefault();
        const data = {
            email: e.target.email.value,
            password: e.target.password.value,
        };
        dispatch(asyncSetAuthUser(data));
        navigate(`/`);
    };

    return (
        <form onSubmit={handleLogin}>
            <InputForm
                label='Email'
                name='email'
                value={email}
                onInput={setEmail}
                type='email'
                placeholder='example@email.com'
                ref={emailRef}
                color={isDarkMode ? 'white' : 'gray'}></InputForm>
            <InputForm
                label='Password'
                name='password'
                value={password}
                onInput={setPassword}
                type='password'
                placeholder='********'
                color={isDarkMode ? 'white' : 'gray'}></InputForm>
            <ButtonCostum classname='w-full' color={'blue'} type='submit'>
                {locale === 'id' ? 'Masuk' : 'Login'}
            </ButtonCostum>
        </form>
    );
};

export default FormLogin;
