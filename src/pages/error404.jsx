import { Typography } from '@material-tailwind/react';
import { Button } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';
import { DarkMode } from '../context/DarkMode';
import { useContext } from 'react';

const ErrorPage = () => {
    const navigate = useNavigate();
    const { isDarkMode } = useContext(DarkMode);

    return (
        <div className={`grid place-items-center w-full min-h-screen px-6 lg:px-8  ${isDarkMode && 'bg-gray-900'}`}>
            <div className='text-center'>
                <Typography variant='small' color={isDarkMode ? 'white' : 'blue'} className='mb-2'>
                    404
                </Typography>
                <Typography variant='h1' color={isDarkMode ? 'white' : 'blue-gray'} className='mb-4'>
                    Page Not Found
                </Typography>
                <Button size='md' color={isDarkMode ? 'white' : 'blue'} type='button' onClick={() => navigate(`/`)}>
                    Go back home
                </Button>
            </div>
        </div>
    );
};

export default ErrorPage;
