import { Fragment, useEffect, useState, useContext } from 'react';
import { DarkMode } from '../context/DarkMode';
import Navbar from '../components/Layouts/Navbar';
import CardNote from '../components/Fragments/CardNote';
import InputForm from '../components/Elements/Inputs/InputForm';
import { getActiveNotes, searchNotes } from '../utils/local-data';

const NotePage = () => {
    const { isDarkMode } = useContext(DarkMode);
    const [query, setQuery] = useState('');
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        setNotes(getActiveNotes);
    }, []);

    useEffect(() => {
        setNotes(searchNotes(query));
    }, [query]);

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
                        value={query}
                        placeholder='Search by title....'
                        onInput={(e) => handleSearch(e)}
                        required={false}
                        color={isDarkMode ? 'white' : 'gray'}
                    />
                </div>

                <h1 className='text-3xl font-bold mb-2 pt-10 text-blue-600 ml-20'>Notes</h1>
                <div className='flex flex-wrap w-full ml-20 mr-20'>
                    {notes.length > 0 &&
                        notes.map((note) => (
                            <CardNote key={note.id}>
                                <CardNote.Header id={note.id} title={note.title} createdAt={`${note.createdAt}`}></CardNote.Header>
                                <CardNote.Body>{note.body}</CardNote.Body>
                            </CardNote>
                        ))}
                </div>
                {notes.length === 0 && (
                    <div className={`w-full flex items-center justify-center pb-20 ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>
                        {`${query.length > 0 ? `--- Your search results "${query}" is empty ---` : `--- Your Notes is empty ---`}`}
                    </div>
                )}
            </div>
        </Fragment>
    );
};

export default NotePage;
