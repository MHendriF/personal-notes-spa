import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DarkMode } from '../../context/DarkMode';
import Button from '../Elements/Buttons';
import { IconButton } from '@material-tailwind/react';

const Navbar = () => {
    const { isDarkMode, setIsDarkMode } = useContext(DarkMode);

    return (
        <div className={`flex h-20 justify-between items-center px-20 ${isDarkMode && 'bg-gray-800'} ${!isDarkMode && 'bg-blue-600 '}`}>
            <ul className='flex'>
                <li className='mr-6'>
                    <Link to={`/notes`} className='text-white hover:text-blue-800'>
                        Notes
                    </Link>
                </li>
                <li className='mr-6'>
                    <Link to={`/archives`} className='text-white hover:text-blue-800'>
                        Archives
                    </Link>
                </li>
                <li className='mr-6'>
                    <Link to={`/notes/create`} className='text-white hover:text-blue-800'>
                        Create Notes
                    </Link>
                </li>
            </ul>
            <div className='flex flex-wrap'>
                <IconButton variant='text' color='white' size='lg' className='mr-1'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='currentColor'
                        className='w-6 h-6'>
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802'
                        />
                    </svg>
                </IconButton>

                <IconButton variant='text' size='lg' className='mr-1' onClick={() => setIsDarkMode(!isDarkMode)}>
                    {isDarkMode ? (
                        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white' className='w-6 h-6'>
                            <path d='M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z' />
                        </svg>
                    ) : (
                        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='w-6 h-6'>
                            <path
                                fillRule='evenodd'
                                d='M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z'
                                clipRule='evenodd'
                            />
                        </svg>
                    )}
                </IconButton>
                <IconButton variant='text' size='lg' className='mr-1'>
                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white' className='w-6 h-6'>
                        <path
                            fillRule='evenodd'
                            d='M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z'
                            clipRule='evenodd'
                        />
                    </svg>
                </IconButton>
                <IconButton variant='text' size='lg' className='mr-1'>
                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white' className='w-6 h-6'>
                        <path
                            fillRule='evenodd'
                            d='M7.5 3.75A1.5 1.5 0 0 0 6 5.25v13.5a1.5 1.5 0 0 0 1.5 1.5h6a1.5 1.5 0 0 0 1.5-1.5V15a.75.75 0 0 1 1.5 0v3.75a3 3 0 0 1-3 3h-6a3 3 0 0 1-3-3V5.25a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3V9A.75.75 0 0 1 15 9V5.25a1.5 1.5 0 0 0-1.5-1.5h-6Zm10.72 4.72a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 1 1-1.06-1.06l1.72-1.72H9a.75.75 0 0 1 0-1.5h10.94l-1.72-1.72a.75.75 0 0 1 0-1.06Z'
                            clipRule='evenodd'
                        />
                    </svg>
                </IconButton>
            </div>
        </div>
    );
};

export default Navbar;
