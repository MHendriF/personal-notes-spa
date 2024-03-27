import { useState, useContext, useRef, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { DarkMode } from '../../context/DarkMode';
import Button from '../Elements/Buttons';
import InputForm from '../Elements/Inputs/InputForm';
import TextareaForm from '../Elements/Inputs/TextareaForm';
import { editNote, getNote } from '../../utils/local-data';

const FormEditNote = () => {
    const navigate = useNavigate();
    const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
    const { id } = useParams();
    const [note, setNote] = useState({});
    const [inputTitle, setInputTitle] = useState('');
    const [inputBody, setInputBody] = useState('');

    const titleRef = useRef(null);
    const maxCharLimit = 100;
    const remainingChars = maxCharLimit - inputTitle.length;

    useEffect(() => {
        titleRef.current.focus();
        findNote(id);
    }, []);

    const findNote = (id) => {
        const result = getNote(id);
        setNote(result);
        setInputTitle(result.title);
        setInputBody(result.body);
    };

    const handleUpdateNote = (e) => {
        e.preventDefault();
        editNote({ id, title: e.target.title.value, body: e.target.body.value });
        navigate(`/notes/${id}`);
    };

    const handlerInput = (e) => {
        let char = e.target.value;
        setInputTitle(char.slice(0, 100));
    };

    return (
        <form onSubmit={handleUpdateNote}>
            <p className={`font-bold mt-3 text-end text-xs ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                Remaining characters : {remainingChars}
            </p>
            <InputForm
                label='Title'
                name='title'
                type='text'
                value={inputTitle}
                placeholder='Title'
                ref={titleRef}
                required={true}
                color={isDarkMode ? 'white' : 'gray'}
                onInput={(e) => handlerInput(e)}
            />
            <TextareaForm
                label='Description'
                name='body'
                rows={8}
                placeholder=''
                value={inputBody}
                color={isDarkMode ? 'blue-gray' : 'gray'}
                onInput={(e) => setInputBody(e.target.value)}
            />
            <Button classname='bg-blue-600 w-full text-white' type='submit'>
                Update
            </Button>
        </form>
    );
};

export default FormEditNote;
