import { Fragment, useContext, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { asyncArchiveNote, asyncDeleteNote, asyncGetNote, asyncUnarchiveNote } from '../redux/states/note/action';
import { DarkMode } from '../context/DarkMode';
import { showFormattedDate } from '../utils';

import { IconButton, SpeedDial, SpeedDialHandler, SpeedDialContent, SpeedDialAction, Typography } from '@material-tailwind/react';
import { PlusIcon, PencilSquareIcon, ArchiveBoxArrowDownIcon, ArchiveBoxXMarkIcon, TrashIcon } from '@heroicons/react/24/outline';

const DetailNotePage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { isDarkMode } = useContext(DarkMode);
    const { id } = useParams();
    const { note = null } = useSelector((states) => states);

    useEffect(() => {
        dispatch(asyncGetNote(id));
    }, [id, dispatch]);

    if (!note) {
        return null;
    }

    const handleDeleteNote = (id) => {
        dispatch(asyncDeleteNote(id));
        navigate(`/`);
    };

    const handleArchiveNote = (id) => {
        if (note.archived) {
            dispatch(asyncUnarchiveNote(id));
        } else {
            dispatch(asyncArchiveNote(id));
        }
    };

    return (
        <Fragment>
            <div className={`w-full min-h-screen  ${isDarkMode && 'bg-gray-900'}`}>
                <div className='w-full pt-20 px-20'>
                    <div className='p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
                        <a href='#'>
                            <h5 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>{note.title}</h5>
                        </a>
                        <p className='mb-3 text-sm text-gray-700 dark:text-gray-400'>{showFormattedDate(note.createdAt)}</p>
                        <p className='mb-3 font-normal text-gray-800 dark:text-gray-200'>{note.body}</p>
                    </div>
                </div>

                <div className='relative h-80 w-full'>
                    <div className='absolute bottom-0 right-10'>
                        <SpeedDial>
                            <SpeedDialHandler>
                                <IconButton size='lg' className={`${isDarkMode && 'bg-white'} rounded-full`}>
                                    <PlusIcon className='h-5 w-5 transition-transform group-hover:rotate-45' color={`${isDarkMode && 'black'}`} />
                                </IconButton>
                            </SpeedDialHandler>
                            <SpeedDialContent>
                                <SpeedDialAction className='h-16 w-16' onClick={() => navigate(`/notes/${note.id}/edit`)}>
                                    <PencilSquareIcon className='h-5 w-5' />
                                    <Typography color='blue-gray' className='text-xs font-normal'>
                                        Edit
                                    </Typography>
                                </SpeedDialAction>
                                <SpeedDialAction className='h-16 w-16' onClick={() => handleArchiveNote(note.id)}>
                                    {!note.archived ? <ArchiveBoxArrowDownIcon className='h-5 w-5' /> : <ArchiveBoxXMarkIcon className='h-5 w-5' />}
                                    <Typography color='blue-gray' className='text-xs font-normal'>
                                        {!note.archived ? 'Archive' : 'Unarchive'}
                                    </Typography>
                                </SpeedDialAction>

                                <SpeedDialAction className='h-16 w-16' onClick={() => handleDeleteNote(note.id)}>
                                    <TrashIcon className='h-5 w-5' />
                                    <Typography color='blue-gray' className='text-xs font-normal'>
                                        Delete
                                    </Typography>
                                </SpeedDialAction>
                            </SpeedDialContent>
                        </SpeedDial>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default DetailNotePage;
