import { Fragment, useEffect, useState, useContext } from 'react';
import { DarkMode } from '../context/DarkMode';
import CardNote from '../components/Fragments/CardNote';
import InputForm from '../components/Elements/Inputs/InputForm';
import { useSelector, useDispatch } from 'react-redux';
import { asyncGetActiveNotes, asyncSearchActiveNotes } from '../redux/states/notes/action';

const NotePage = () => {
    const dispatch = useDispatch();
    const { isDarkMode } = useContext(DarkMode);
    const [keyword, setKeyword] = useState('');
    const { notes = [] } = useSelector((states) => states);

    useEffect(() => {
        dispatch(asyncGetActiveNotes());
    }, [dispatch]);

    useEffect(() => {
        dispatch(asyncSearchActiveNotes(keyword));
    }, [keyword]);

    const handleSearch = (e) => {
        let char = e.target.value;
        console.log(char);
        setKeyword(char);
    };

    return (
        <Fragment>
            <div className={`w-full min-h-screen  ${isDarkMode && 'bg-gray-900'}`}>
                <div className='w-full pt-20 px-20'>
                    <InputForm
                        label='Search'
                        name='search'
                        type='text'
                        value={keyword}
                        placeholder='Search by title....'
                        onInput={(e) => handleSearch(e)}
                        required={false}
                        color={isDarkMode ? 'white' : 'gray'}
                    />
                </div>

                <h1 className='text-3xl font-bold mb-2 pt-10 text-blue-600 ml-20'>Notes</h1>
                <div className='flex flex-wrap w-full mx-20'>
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
                        {`${keyword.length > 0 ? `--- Your search results "${keyword}" is empty ---` : `--- Your Notes is empty ---`}`}
                    </div>
                )}
            </div>
        </Fragment>
    );
};

export default NotePage;
