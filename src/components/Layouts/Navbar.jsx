import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DarkMode } from '../../context/DarkMode';
import Button from '../Elements/Buttons';

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
            </ul>
            <div className='flex flex-wrap'>
                <Link
                    to={`/notes/create`}
                    href='#'
                    className={`font-semibold rounded-lg text-sm px-5 py-2.5 mr-2 focus:ring-4 focus:outline-none ${isDarkMode && 'bg-blue-700 hover:bg-blue-800  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 text-white'} ${!isDarkMode && 'bg-gray-400 hover:bg-gray-500 dark:bg-gray-300 dark:hover:bg-gray-400 dark:focus:ring-gray-500 text-slate-800'}`}>
                    + Create Notes
                </Link>

                <Button
                    classname={`rounded focus:ring-4 focus:outline-none ${isDarkMode && 'bg-blue-700 hover:bg-blue-800  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 text-white'} ${!isDarkMode && 'bg-gray-400 hover:bg-gray-500 dark:bg-gray-300 dark:hover:bg-gray-400 dark:focus:ring-gray-500 text-slate-800'}`}
                    onClick={() => setIsDarkMode(!isDarkMode)}>
                    {isDarkMode ? 'Light' : 'Dark'}
                </Button>
            </div>
        </div>
    );
};

export default Navbar;
