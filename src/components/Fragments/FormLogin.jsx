import { useRef } from 'react';
import Button from '../Elements/Buttons';
import InputForm from '../Elements/Inputs/InputForm';
import { useEffect, useState } from 'react';
import { login } from '../../services/auth.service';
import { DarkMode } from '../../context/DarkMode';
import { useContext } from 'react';

const FormLogin = () => {
    const [loginFailed, setLoginFailed] = useState('');
    const { isDarkMode, setIsDarkMode } = useContext(DarkMode);

    const handleLogin = (event) => {
        event.preventDefault();
        // localStorage.setItem('email', event.target.email.value);
        // localStorage.setItem('password', event.target.password.value);
        // window.location.href = '/products';
        const data = {
            username: event.target.username.value,
            password: event.target.password.value,
        };
        login(data, (status, res) => {
            if (status) {
                localStorage.setItem('token', res);
                window.location.href = '/products';
            } else {
                setLoginFailed(res.response.data);
                console.log(res.response.data);
            }
        });
    };

    const usernameRef = useRef(null);
    useEffect(() => {
        usernameRef.current.focus();
    }, []);

    return (
        <form onSubmit={handleLogin}>
            <InputForm
                label='Username'
                name='username'
                type='text'
                placeholder='Username'
                ref={usernameRef}
                color={isDarkMode ? 'white' : 'gray'}></InputForm>
            <InputForm label='Password' name='password' type='password' placeholder='********' color={isDarkMode ? 'white' : 'gray'}></InputForm>
            <Button classname=' w-full' color={'blue'} type='submit'>
                Login
            </Button>
            {loginFailed && <p className='text-red-500 text-sm m-5 text-center'>{loginFailed}</p>}
        </form>
    );
};

export default FormLogin;
