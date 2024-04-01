import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DarkMode } from '../../context/DarkMode';
import LocaleContext from '../../context/LocaleContext';
import PropTypes from 'prop-types';
import { Navbar, Typography, IconButton, Avatar } from '@material-tailwind/react';
import { ArrowRightEndOnRectangleIcon, MoonIcon, LanguageIcon, SunIcon } from '@heroicons/react/24/solid';

export function NavbarContainer({ authUser, logOut, navigateToProfile }) {
    const { isDarkMode, toggleTheme } = useContext(DarkMode);
    const { locale, toggleLocale } = useContext(LocaleContext);

    return (
        <Navbar
            variant='gradient'
            color={`${isDarkMode ? 'gray' : 'blue'}`}
            className={`${isDarkMode ? 'from-gray-800 to-gray-700' : 'from-blue-700 to-blue-600'} mx-auto max-w-screen-3xl  px-4 py-3 rounded-none`}>
            <div className='flex flex-wrap items-center justify-between gap-y-4 px-5 text-white'>
                <Typography as='a' variant='h6' className='mr-4 ml-2 cursor-pointer py-1.5'>
                    <Link to={`/notes`}>{locale === 'id' ? 'Catatan' : 'Notes'}</Link>
                </Typography>
                <Typography as='a' variant='h6' className='mr-4 ml-2 cursor-pointer py-1.5'>
                    <Link to={`/archives`}>{locale === 'id' ? 'Arsip' : 'Archives'}</Link>
                </Typography>
                <Typography as='a' variant='h6' className='mr-4 ml-2 cursor-pointer py-1.5'>
                    <Link to={`/notes/create`}>{locale === 'id' ? 'Buat Catatan' : 'Create Notes'}</Link>
                </Typography>

                <div className='ml-auto flex gap-1 md:mr-4'>
                    <div className='flex items-center gap-2 mr-1 cursor-pointer' onClick={navigateToProfile}>
                        <Avatar src='https://docs.material-tailwind.com/img/face-2.jpg' alt='avatar' size='sm' />
                        <div>
                            <Typography variant='small' color='white'>
                                {authUser.name}
                            </Typography>
                        </div>
                    </div>
                    <IconButton variant='text' color='white' onClick={() => toggleLocale()}>
                        <LanguageIcon className='h-4 w-4' />
                    </IconButton>
                    <IconButton variant='text' color='white' onClick={() => toggleTheme()}>
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

NavbarContainer.propTypes = {
    authUser: PropTypes.object,
    logOut: PropTypes.func.isRequired,
    navigateToProfile: PropTypes.func.isRequired,
};
