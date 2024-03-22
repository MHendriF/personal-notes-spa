import { Fragment, useEffect, useState, useRef, useContext } from 'react';
import { useSelector } from 'react-redux';
import { DarkMode } from '../context/DarkMode';
import Navbar from '../components/Layouts/Navbar';
import CardNote from '../components/Fragments/CardNote';
import InputForm from '../components/Elements/Inputs/InputForm';

const NotePage = () => {
    const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
    const [query, setQuery] = useState('');
    const [filteredNotes, setFilteredNotes] = useState([]);
    const notes = useSelector((state) => state.notes.data);
    const noteRef = useRef(null);
    const filteredNotesRef = useRef(null);

    useEffect(() => {
        if (notes.length > 0) {
            localStorage.setItem('notes', JSON.stringify(notes));
        }
    }, [notes]);

    useEffect(() => {
        if (query.length > 0) {
            setFilteredNotes(notes.filter((note) => note.title.toLowerCase().includes(query.toLowerCase())));
            noteRef.current.style.display = 'none';
            filteredNotesRef.current.style.display = 'block';
        } else {
            noteRef.current.style.display = 'block';
            filteredNotesRef.current.style.display = 'none';
        }
    }, [query, notes]);

    const handleSearch = (e) => {
        let char = e.target.value;
        setQuery(char);
    };

    return (
        <Fragment>
            <Navbar />
            <div className={`w-full min-h-screen  ${isDarkMode && 'bg-gray-900'}`}>
                <div className='w-full pt-20 px-20'>
                    <InputForm
                        label='Search'
                        name='search'
                        type='text'
                        placeholder='Search notes....'
                        onInput={(e) => console.log(e.target.value)}></InputForm>

                    <div className='relative'>
                        <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
                            <svg
                                className='w-4 h-4 text-gray-500 dark:text-gray-400'
                                aria-hidden='true'
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 20 20'>
                                <path
                                    stroke='currentColor'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth='2'
                                    d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
                                />
                            </svg>
                        </div>
                        <input
                            type='search'
                            id='default-search'
                            className='block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                            placeholder='Search notes...'
                        />
                    </div>
                </div>

                <h1 className='text-3xl font-bold mb-2 pt-10 text-blue-600 ml-20'>Notes</h1>
                <div ref={noteRef}>
                    <div className='flex flex-wrap w-full ml-20 mr-20'>
                        {notes.length > 0 &&
                            notes.map(
                                (note) =>
                                    !note.archived && (
                                        <CardNote key={note.id}>
                                            <CardNote.Header id={note.id} title={note.title} createdAt={note.createdAt}></CardNote.Header>
                                            <CardNote.Body>{note.body}</CardNote.Body>
                                            <CardNote.Footer id={note.id} archived={note.archived}></CardNote.Footer>
                                        </CardNote>
                                    ),
                            )}
                    </div>
                    {notes.filter((note) => !note.archived).length === 0 && (
                        <div
                            className={`w-full flex items-center justify-center pb-20 ${isDarkMode && 'text-white'} ${!isDarkMode && 'text-slate-700'}`}>
                            --- Your Notes is empty ---
                        </div>
                    )}
                </div>
                <div ref={filteredNotesRef}>
                    <div className='flex flex-wrap w-full ml-20 mr-20'>
                        {filteredNotes.length > 0 &&
                            filteredNotes.map(
                                (note) =>
                                    !note.archived && (
                                        <CardNote key={note.id}>
                                            <CardNote.Header id={note.id} title={note.title} createdAt={note.createdAt}></CardNote.Header>
                                            <CardNote.Body>{note.body}</CardNote.Body>
                                            <CardNote.Footer id={note.id} archived={note.archived}></CardNote.Footer>
                                        </CardNote>
                                    ),
                            )}
                    </div>
                    {filteredNotes.filter((note) => !note.archived).length === 0 && (
                        <div
                            className={`w-full flex items-center justify-center pb-20 ${isDarkMode && 'text-white'} ${!isDarkMode && 'text-slate-700'}`}>
                            {`--- Your search results "${query}" is empty ---`}
                        </div>
                    )}
                </div>
            </div>
        </Fragment>
    );
};

export default NotePage;
