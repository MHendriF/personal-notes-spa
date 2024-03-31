import { useContext } from 'react';
import { DarkMode } from '../../context/DarkMode';
import Button from '../Elements/Buttons';
import InputForm from '../Elements/Inputs/InputForm';
import useInput from '../../hooks/useInput';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { asyncRegisterUser } from '../../redux/states/users/action';

const FormRegister = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [email, setEmail] = useInput('');
    const [name, setName] = useInput('');
    const [password, setPassword] = useInput('');
    const { isDarkMode } = useContext(DarkMode);

    const handleRegister = (e) => {
        e.preventDefault();
        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value,
        };
        console.log(data);
        dispatch(asyncRegisterUser(data));
        navigate('/');
    };

    return (
        <form onSubmit={handleRegister}>
            <InputForm
                label='Name'
                name='name'
                value={name}
                onInput={setName}
                type='text'
                placeholder='Insert your name here ....'
                color={isDarkMode ? 'white' : 'gray'}></InputForm>
            <InputForm
                label='Email'
                name='email'
                value={email}
                onInput={setEmail}
                type='email'
                placeholder='example@email.com'
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
                Register
            </Button>
        </form>
    );
};

export default FormRegister;
