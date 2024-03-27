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
            <p
                className={`flex items-center gap-1 mb-2 mt-2 text-end font-sans text-sm antialiased font-normal leading-normal ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='w-4 h-4 -mt-px'>
                    <path
                        fillRule='evenodd'
                        d='M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z'
                        clipRule='evenodd'></path>
                </svg>
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
            <Button classname='w-full text-white' color='blue' type='submit'>
                Submit
            </Button>
        </form>
    );
};

export default FormAddNote;
