import { Fragment, useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { DarkMode } from '../context/DarkMode';
import Navbar from '../components/Layouts/Navbar';
import CardNote from '../components/Fragments/CardNote';
import { useEffect } from 'react';

const DetailNotePage = () => {
    const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
    const { id } = useParams();
    const notes = useSelector((state) => state.notes.data);
    const [note, setNote] = useState({});

    useEffect(() => {
        console.log('notes: ', notes);
        const note1 = notes.find((note) => note.id === id);
        console.log('note1 results: ', note1);
        const note2 = notes.filter((note) => note.id === id);
        console.log('note2 results: ', note2);
        //setNote(note1);
    }, [id]);

    //console.log('note id: ', id);
    //console.log('note: ', note);
    return (
        <Fragment>
            <Navbar />
            {/* <div className={`w-full min-h-screen  ${isDarkMode && 'bg-slate-900'}`}>
                <div className='w-full pt-20 px-20'>
                    <CardNote key={note.id}>
                        <CardNote.Header id={note.id} title={note.title} createdAt={note.createdAt}></CardNote.Header>
                        <CardNote.Body title={note.title}>{note.body}</CardNote.Body>
                        <CardNote.Footer id={note.id} archived={note.archived}></CardNote.Footer>
                    </CardNote>
                </div>
            </div> */}
        </Fragment>
    );
};

export default DetailNotePage;
