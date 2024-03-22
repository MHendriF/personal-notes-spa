import { useState, useContext, useRef, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { updateNote } from '../../redux/slices/noteSlice';
import { DarkMode } from '../../context/DarkMode';
import Button from '../Elements/Buttons';
import InputForm from '../Elements/Inputs/InputForm';
import TextareaForm from '../Elements/Inputs/TextareaForm';

const FormEditNote = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { id } = useParams();
    const notes = useSelector((state) => state.notes.data);

    const [note, setNote] = useState({});
    const [inputTitle, setInputTitle] = useState('');
    const [inputBody, setInputBody] = useState('');
    const { isDarkMode, setIsDarkMode } = useContext(DarkMode);

    const titleRef = useRef(null);
    const maxCharLimit = 100;
    const remainingChars = maxCharLimit - inputTitle.length;

    const handleUpdateNote = (e) => {
        e.preventDefault();

        const updatedNote = {
            id: note.id,
            title: e.target.title.value,
            body: e.target.body.value,
        };
        dispatch(updateNote(updatedNote));
        navigate(`/notes/${id}`);
    };

    const handlerInput = (e) => {
        let char = e.target.value;
        setInputTitle(char.slice(0, 100));
    };

    const findNote = (id) => {
        const result = notes.find((note) => note.id === id);
        setNote(result);
        setInputTitle(result.title);
        setInputBody(result.body);
    };

    useEffect(() => {
        titleRef.current.focus();
        findNote(id);
    }, []);

    return (
        <form onSubmit={handleUpdateNote}>
            <p className={`font-medium mt-3 text-end text-xs ${isDarkMode && 'text-white'} ${!isDarkMode && 'text-slate-700'}`}>
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
                onInput={(e) => handlerInput(e)}></InputForm>
            <TextareaForm
                label='Description'
                name='body'
                rows='8'
                placeholder='Note description here ....'
                value={inputBody}
                onInput={(e) => setInputBody(e.target.value)}></TextareaForm>
            <Button classname='bg-blue-600 w-full text-white' type='submit'>
                Update
            </Button>
        </form>
    );
};

export default FormEditNote;
