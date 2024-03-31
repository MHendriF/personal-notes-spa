import { useContext, Fragment } from 'react';
import { DarkMode } from '../context/DarkMode';
import FormEditNote from '../components/Fragments/FormEditNote';
import { Typography } from '@material-tailwind/react';

const EditNotePage = () => {
    const { isDarkMode } = useContext(DarkMode);

    return (
        <Fragment>
            <div className={`w-full min-h-screen  ${isDarkMode && 'bg-gray-900'}`}>
                <div className='flex items-center justify-center pt-10 pb-10'>
                    <div className='w-full max-w-3xl'>
                        <Typography variant='h2' color={`${isDarkMode ? 'white' : 'blue'}`} className='text-center mb-10'>
                            Edit Notes
                        </Typography>
                        <FormEditNote />
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default EditNotePage;
