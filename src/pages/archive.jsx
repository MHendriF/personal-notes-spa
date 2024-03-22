import { Fragment, useEffect, useState, useRef, useContext } from 'react';
import { useSelector } from 'react-redux';
import { DarkMode } from '../context/DarkMode';
import Navbar from '../components/Layouts/Navbar';
import CardNote from '../components/Fragments/CardNote';
import InputForm from '../components/Elements/Inputs/InputForm';

const ArchivePage = () => {
    const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
    const [query, setQuery] = useState('');
    const [filteredNotes, setFilteredNotes] = useState([]);
    const notes = useSelector((state) => state.notes.data);
    const noteRef = useRef(null);
    const filteredNotesRef = useRef(null);

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
                </div>
                <h1 className='text-3xl font-bold mb-2 pt-10 text-blue-600 ml-20'>Archive</h1>
                <div className='flex flex-wrap ml-20 mr-20'>
                    {notes.length > 0 &&
                        notes.map(
                            (note) =>
                                note.archived && (
                                    <CardNote key={note.id}>
                                        <CardNote.Header id={note.id} title={note.title} createdAt={note.createdAt}></CardNote.Header>
                                        <CardNote.Body>{note.body}</CardNote.Body>
                                        <CardNote.Footer id={note.id} archived={note.archived}></CardNote.Footer>
                                    </CardNote>
                                ),
                        )}
                </div>

                {notes.filter((note) => note.archived).length === 0 && (
                    <div className={`w-full flex items-center justify-center pb-20 ${isDarkMode && 'text-white'} ${!isDarkMode && 'text-slate-700'}`}>
                        --- Your Archive is empty ---
                    </div>
                )}
            </div>
        </Fragment>
    );
};

export default ArchivePage;
