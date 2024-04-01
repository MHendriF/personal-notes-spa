import { useContext, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { asyncAddNote } from '../../redux/states/note/action';
import useInput from '../../hooks/useInput';
import { DarkMode } from '../../context/DarkMode';
import InputForm from '../Elements/Inputs/InputForm';
import TextareaForm from '../Elements/Inputs/TextareaForm';
import ButtonCostum from '../Elements/Buttons';
import LocaleContext from '../../context/LocaleContext';
import { Typography } from '@material-tailwind/react';

const FormAddNote = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [title, setTitle] = useInput('');
    const [body, setBody] = useInput('');
    const { isDarkMode } = useContext(DarkMode);
    const { locale } = useContext(LocaleContext);
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
            <Typography variant='h2' color={`${isDarkMode ? 'white' : 'blue'}`} className='text-center mb-10'>
                {locale === 'id' ? 'Buat Catatan' : 'Create Notes'}
            </Typography>
            <InputForm
                label={locale === 'id' ? 'Judul' : 'Title'}
                name='title'
                type='text'
                value={title}
                onInput={setTitle}
                placeholder={locale === 'id' ? 'Judul' : 'Title'}
                ref={titleRef}
                required={true}
                color={isDarkMode ? 'white' : 'gray'}
            />
            <TextareaForm
                label={locale === 'id' ? 'Deskripsi' : 'Description'}
                name='body'
                value={body}
                onInput={setBody}
                rows={8}
                placeholder=''
                color={isDarkMode ? 'blue-gray' : 'gray'}
            />
            <ButtonCostum classname={`w-full ${!isDarkMode && 'text-white'}`} color={isDarkMode ? 'white' : 'blue'} type='submit'>
                Submit
            </ButtonCostum>
        </form>
    );
};

export default FormAddNote;
