import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { archiveNote, deleteNote } from '../../redux/slices/noteSlice';
import PropTypes from 'prop-types';
import { showFormattedDate } from '../../utils';
import Button from '../Elements/Buttons';

const CardNote = (props) => {
    const { children } = props;

    return (
        <div className='w-full max-w-xs bg-gray-800 border border-gray-700 rounded-lg shadow mx-2 my-2 flex flex-col justify-between'>{children}</div>
    );
};

const Header = (props) => {
    const { id, title, createdAt } = props;

    return (
        <div className='px-5 py-5 pb-5'>
            <Link to={`/notes/${id}`} className='text-white dark:text-white hover:underline'>
                <h5 className='text-xl font-semibold tracking-tight text-white'>{title.length > 30 ? `${title.substring(0, 29)}...` : title}</h5>
            </Link>
            <p className='text-xs text-white'>{showFormattedDate(createdAt)}</p>
        </div>
    );
};

const Body = (props) => {
    const { children } = props;
    return (
        <div className='px-5 pb-5 h-full'>
            <p className='text-m text-white'>{children.length > 200 ? `${children.substring(0, 200)}...` : children}</p>
        </div>
    );
};

const Footer = (props) => {
    const { id, archived } = props;
    const dispatch = useDispatch();
    const handleDeleteNote = (id) => {
        dispatch(deleteNote(id));
    };

    const handleArchiveNote = (id) => {
        dispatch(archiveNote(id));
    };

    return (
        <div className='flex items-center justify-between px-5 pb-5'>
            <Button onClick={() => handleDeleteNote(id)} classname='bg-red-600 text-white'>
                Delete
            </Button>
            <Button onClick={() => handleArchiveNote(id)} classname='bg-orange-600 text-white'>
                {archived ? 'Unarchive' : 'Archive'}
            </Button>
        </div>
    );
};

CardNote.Header = Header;
CardNote.Body = Body;
CardNote.Footer = Footer;

CardNote.propTypes = {
    children: PropTypes.node.isRequired,
};

Header.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
};

Body.propTypes = {
    children: PropTypes.node.isRequired,
};

Footer.propTypes = {
    id: PropTypes.string.isRequired,
    archived: PropTypes.bool.isRequired,
};

export default CardNote;
