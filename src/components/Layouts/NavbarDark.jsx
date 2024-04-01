import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { DarkMode } from '../../context/DarkMode';
import PropTypes from 'prop-types';
import { Avatar } from '@material-tailwind/react';

import { Navbar, Typography, IconButton } from '@material-tailwind/react';
import { ArrowRightEndOnRectangleIcon, MoonIcon, LanguageIcon, SunIcon } from '@heroicons/react/24/solid';

export function NavbarDark({ authUser, logOut }) {
    const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
    const navigate = useNavigate();

    return (
        <Navbar
            variant='gradient'
            color={`${isDarkMode ? 'gray' : 'blue'}`}
            className={`${isDarkMode ? 'from-gray-800 to-gray-700' : 'from-blue-700 to-blue-600'} mx-auto max-w-screen-3xl  px-4 py-3 rounded-none`}>
            <div className='flex flex-wrap items-center justify-between gap-y-4 px-5 text-white'>
                <Typography as='a' variant='h6' className='mr-4 ml-2 cursor-pointer py-1.5'>
                    <Link to={`/notes`}>Notes</Link>
                </Typography>
                <Typography as='a' variant='h6' className='mr-4 ml-2 cursor-pointer py-1.5'>
                    <Link to={`/archives`}>Archives</Link>
                </Typography>
                <Typography as='a' variant='h6' className='mr-4 ml-2 cursor-pointer py-1.5'>
                    <Link to={`/notes/create`}>Create Notes</Link>
                </Typography>

                <div className='ml-auto flex gap-1 md:mr-4'>
                    <div className='flex items-center gap-2 mr-1 cursor-pointer' onClick={() => navigate('/profile')}>
                        <Avatar src='https://docs.material-tailwind.com/img/face-2.jpg' alt='avatar' size='sm' />
                        <div>
                            <Typography variant='small' color='white'>
                                {authUser.name}
                            </Typography>
                        </div>
                    </div>
                    <IconButton variant='text' color='white'>
                        <LanguageIcon className='h-4 w-4' />
                    </IconButton>
                    <IconButton variant='text' color='white' onClick={() => setIsDarkMode(!isDarkMode)}>
                        {isDarkMode ? <SunIcon className='h-4 w-4' /> : <MoonIcon className='h-4 w-4' />}
                    </IconButton>
                    <IconButton variant='text' color='white' onClick={logOut}>
                        <ArrowRightEndOnRectangleIcon className='h-4 w-4' />
                    </IconButton>
                </div>
            </div>
        </Navbar>
    );
}

NavbarDark.propTypes = {
    authUser: PropTypes.object,
    logOut: PropTypes.func,
};
