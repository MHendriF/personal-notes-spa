import { useState, useContext, useRef, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { DarkMode } from '../../context/DarkMode';
import Button from '../Elements/Buttons';
import InputForm from '../Elements/Inputs/InputForm';
import TextareaForm from '../Elements/Inputs/TextareaForm';
import { editNote, getNote } from '../../utils/local-data';

const FormEditNote = () => {
    const navigate = useNavigate();
    const { isDarkMode } = useContext(DarkMode);
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const titleRef = useRef(null);
    useEffect(() => {
        titleRef.current.focus();
        findNote(id);
    }, []);

    const findNote = (id) => {
        const result = getNote(id);
        setTitle(result.title);
        setBody(result.body);
    };

    const handleUpdateNote = (event) => {
        event.preventDefault();
        editNote({ id, title: event.target.title.value, body: event.target.body.value });
        navigate(`/notes/${id}`);
    };

    return (
        <form onSubmit={handleUpdateNote}>
            <InputForm
                label='Title'
                name='title'
                type='text'
                value={title}
                onInput={(e) => setTitle(e.target.value)}
                placeholder='Title'
                ref={titleRef}
                required={true}
                color={isDarkMode ? 'white' : 'gray'}
            />
            <TextareaForm
                label='Description'
                name='body'
                value={body}
                onInput={(e) => setBody(e.target.value)}
                rows={8}
                placeholder=''
                color={isDarkMode ? 'blue-gray' : 'gray'}
            />
            <Button classname='w-full text-white' color={'blue'} type='submit'>
                Update
            </Button>
        </form>
    );
};

export default FormEditNote;
