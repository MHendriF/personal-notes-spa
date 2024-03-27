import { useRef } from 'react';
import Button from '../Elements/Buttons';
import InputForm from '../Elements/Inputs/InputForm';
import { useEffect, useState } from 'react';
import { login } from '../../services/auth.service';
import { DarkMode } from '../../context/DarkMode';
import { useContext } from 'react';
import useInput from '../../hooks/useInput';

const FormLogin = () => {
    const [email, setEmail] = useInput('');
    const [password, setPassword] = useInput('');
    const [loginFailed, setLoginFailed] = useState('');
    const { isDarkMode } = useContext(DarkMode);

    const emailRef = useRef(null);
    useEffect(() => {
        emailRef.current.focus();
    }, []);

    const handleLogin = (event) => {
        event.preventDefault();

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
            <Button classname=' w-full' color={'blue'} type='submit'>
                Login
            </Button>
            {loginFailed && <p className='text-red-500 text-sm m-5 text-center'>{loginFailed}</p>}
        </form>
    );
};

export default FormLogin;
