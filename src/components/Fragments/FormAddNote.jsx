import { useState, useContext, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { DarkMode } from '../../context/DarkMode';
import Button from '../Elements/Buttons';
import InputForm from '../Elements/Inputs/InputForm';
import TextareaForm from '../Elements/Inputs/TextareaForm';
import useInput from '../../hooks/useInput';
import { addNote } from '../../services/note.service';

const FormAddNote = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useInput('');
    const [body, setBody] = useInput('');
    const { isDarkMode } = useContext(DarkMode);
    const titleRef = useRef(null);

    useEffect(() => {
        titleRef.current.focus();
    }, []);

    const handleAddNote = (e) => {
        e.preventDefault();
        const data = {
            title: e.target.title.value,
            body: e.target.body.value,
        };

        addNote(data, (status, res) => {
            if (status) {
                console.log('addNote: ', res);
                navigate(`/notes`);
            } else {
                console.log(res.message);
            }
        });
    };

    return (
        <form onSubmit={handleAddNote}>
            <InputForm
                label='Title'
                name='title'
                type='text'
                value={title}
                onInput={setTitle}
                placeholder='Title'
                ref={titleRef}
                required={true}
                color={isDarkMode ? 'white' : 'gray'}
            />
            <TextareaForm
                label='Description'
                name='body'
                value={body}
                onInput={setBody}
                rows={8}
                placeholder=''
                color={isDarkMode ? 'blue-gray' : 'gray'}
            />
            <Button classname='w-full text-white' color='blue' type='submit'>
                Submit
            </Button>
        </form>
    );
};

export default FormAddNote;
