import { useContext } from 'react';
import { DarkMode } from '../../context/DarkMode';
import Button from '../Elements/Buttons';
import InputForm from '../Elements/Inputs/InputForm';
import useInput from '../../hooks/useInput';

const FormRegister = () => {
    const [email, setEmail] = useInput('');
    const [name, setName] = useInput('');
    const [password, setPassword] = useInput('');
    const [confirmPassword, setConfirmPassword] = useInput('');
    const { isDarkMode } = useContext(DarkMode);

    return (
        <form action=''>
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
            <InputForm
                label='Confirm Password'
                name='password'
                value={confirmPassword}
                onInput={setConfirmPassword}
                type='confirmPassword'
                placeholder='********'
                color={isDarkMode ? 'white' : 'gray'}></InputForm>
            <Button classname=' w-full' color={'blue'}>
                Register
            </Button>
        </form>
    );
};

export default FormRegister;
