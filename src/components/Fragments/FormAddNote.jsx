import { useState, useContext, useRef, useEffect } from 'react';
import Button from '../Elements/Buttons';
import InputForm from '../Elements/Inputs/InputForm';
import TextareaForm from '../Elements/Inputs/TextareaForm';
import { useDispatch } from 'react-redux';
import { addNote } from '../../redux/slices/noteSlice';
import { DarkMode } from '../../context/DarkMode';
import { useNavigate } from 'react-router-dom';

const FormAddNote = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [inputTitle, setInputTitle] = useState('');
    const [inputBody, setInputBody] = useState('');
    const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
    const titleRef = useRef(null);
    const maxCharLimit = 100;
    const remainingChars = maxCharLimit - inputTitle.length;

    useEffect(() => {
        titleRef.current.focus();
    }, []);

    const handleAddNote = (e) => {
        e.preventDefault();

        const newNote = {
            id: `notes-${+new Date()}`,
            title: e.target.title.value,
            body: e.target.body.value,
            createdAt: Date.now(),
            archived: false,
        };
        dispatch(addNote(newNote));
        navigate(`/notes`);
        clearInput();
    };

    const clearInput = () => {
        setInputTitle('');
        setInputBody('');
    };

    const handlerInput = (e) => {
        let char = e.target.value;
        setInputTitle(char.slice(0, 100));
    };

    return (
        <form onSubmit={handleAddNote}>
            <p className={`font-bold mt-3 text-end text-xs ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                Remaining characters : {remainingChars}
            </p>
            <InputForm
                label='Title'
                name='title'
                type='text'
                value={inputTitle}
                placeholder='Note title here ....'
                ref={titleRef}
                required={true}
                onInput={(e) => handlerInput(e)}
            />
            <TextareaForm
                label='Description'
                name='body'
                rows={8}
                placeholder='Note description here ....'
                value={inputBody}
                onInput={(e) => setInputBody(e.target.value)}
            />
            <Button classname='bg-blue-600 w-full text-white' type='submit'>
                Submit
            </Button>
        </form>
    );
};

export default FormAddNote;
