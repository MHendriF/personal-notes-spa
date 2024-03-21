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
            <Button
                classname={`rounded ${isDarkMode && 'bg-blue-800 text-white'} ${!isDarkMode && 'bg-gray-400 text-slate-800'}`}
                onClick={() => setIsDarkMode(!isDarkMode)}>
                {isDarkMode ? 'Light' : 'Dark'}
            </Button>
        </div>
    );
};

export default Navbar;
