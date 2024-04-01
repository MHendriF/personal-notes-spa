import { useContext, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { asyncAddNote } from '../../redux/states/note/action';
import useInput from '../../hooks/useInput';
import { DarkMode } from '../../context/DarkMode';
import Button from '../Elements/Buttons';
import InputForm from '../Elements/Inputs/InputForm';
import TextareaForm from '../Elements/Inputs/TextareaForm';

const FormAddNote = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
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

        dispatch(asyncAddNote(data));
        navigate(`/notes`);
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
            <Button classname={`w-full ${!isDarkMode && 'text-white'}`} color={isDarkMode ? 'white' : 'blue'} type='submit'>
                Submit
            </Button>
        </form>
    );
};

export default FormAddNote;
