import { DarkMode } from '../context/DarkMode';
import { useContext } from 'react';
import FormAddNote from '../components/Fragments/FormAddNote';
import { Fragment } from 'react';
import Navbar from '../components/Layouts/Navbar';

const CreateNotePage = () => {
    const { isDarkMode, setIsDarkMode } = useContext(DarkMode);

    return (
        <Fragment>
            <Navbar />
            <div className={`w-full min-h-screen  ${isDarkMode && 'bg-slate-900'}`}>
                <div className='flex items-center justify-center pt-10 pb-10'>
                    <div className='w-full max-w-3xl'>
                        <h1 className='text-3xl font-bold mb-10 text-center text-blue-600'>Create Note</h1>
                        <FormAddNote />
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default CreateNotePage;
