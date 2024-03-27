import { useContext } from 'react';
import { DarkMode } from '../../context/DarkMode';
import Button from '../Elements/Buttons';
import InputForm from '../Elements/Inputs/InputForm';

const FormRegister = () => {
    const { isDarkMode, setIsDarkMode } = useContext(DarkMode);

    return (
        <form action=''>
            <InputForm
                label='Fullname'
                name='fullname'
                type='text'
                placeholder='Insert your name here ....'
                color={isDarkMode ? 'white' : 'gray'}></InputForm>
            <InputForm label='Email' name='email' type='email' placeholder='example@email.com' color={isDarkMode ? 'white' : 'gray'}></InputForm>
            <InputForm label='Password' name='password' type='password' placeholder='********' color={isDarkMode ? 'white' : 'gray'}></InputForm>
            <InputForm
                label='Confirm Password'
                name='password'
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
