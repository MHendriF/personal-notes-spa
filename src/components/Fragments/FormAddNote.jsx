import { useState, useContext, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { DarkMode } from '../../context/DarkMode';
import Button from '../Elements/Buttons';
import InputForm from '../Elements/Inputs/InputForm';
import TextareaForm from '../Elements/Inputs/TextareaForm';
import { addNote } from '../../utils/local-data';

const FormAddNote = () => {
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
        addNote({
            title: e.target.title.value,
            body: e.target.body.value,
        });
        navigate(`/notes`);
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
