import { useRef } from 'react';
import Button from '../Elements/Buttons';
import InputForm from '../Elements/Inputs/InputForm';
import { useEffect, useState } from 'react';
import { DarkMode } from '../../context/DarkMode';
import { useContext } from 'react';
import useInput from '../../hooks/useInput';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { asyncSetAuthUser } from '../../redux/states/authUser/action';

const FormLogin = () => {
    const dispatch = useDispatch();
    const emailRef = useRef(null);
    const [email, setEmail] = useInput('');
    const [password, setPassword] = useInput('');
    const { isDarkMode } = useContext(DarkMode);

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
            <Button classname='w-full' color={'blue'} type='submit'>
                Login
            </Button>
        </form>
    );
};

export default FormLogin;
