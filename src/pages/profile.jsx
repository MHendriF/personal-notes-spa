import { useContext, Fragment } from 'react';
import { DarkMode } from '../context/DarkMode';
import Navbar from '../components/Layouts/Navbar';
import { useState } from 'react';
import { useEffect } from 'react';
import { getUserLogged } from '../services/auth.service';
import { Typography } from '@material-tailwind/react';
const ProfilePage = () => {
    const { isDarkMode } = useContext(DarkMode);
    const [user, setUser] = useState({});

    useEffect(() => {
        getUserLogged((status, res) => {
            if (status) {
                console.log('getUserLogged: ', res);
                setUser(res);
                console.log('user: ', user.name);
            } else {
                console.log(res.message);
            }
        });
    }, []);

    return (
        <Fragment>
            <div className={`w-full min-h-screen  ${isDarkMode && 'bg-gray-900'}`}>
                <div className='flex items-center justify-center pt-20'>
                    <div className='w-full max-w-2xl p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
                        <Typography variant='h1' color='blue-gray' className='mb-2'>
                            Profile
                        </Typography>
                        <Typography variant='paragraph' color='gray' className='mb-1'>
                            ID: {user.id}
                        </Typography>
                        <Typography variant='paragraph' color='gray' className='mb-1'>
                            Name: {user.name}
                        </Typography>
                        <Typography variant='paragraph' color='gray' className='mb-1'>
                            Email: {user.email}
                        </Typography>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default ProfilePage;
