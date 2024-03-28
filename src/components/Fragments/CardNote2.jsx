import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { showFormattedDate } from '../../utils';
import { Card, CardBody, CardHeader } from '@material-tailwind/react';
import { Typography } from '@material-tailwind/react';

const CardNote2 = (props) => {
    const { children } = props;

    return <Card className='mt-6 max-w-xs mb-4'>{children}</Card>;
};

const Header = (props) => {
    const { id, title, createdAt } = props;

    return <CardHeader color='blue-gray' className='relative h-56'></CardHeader>;
};

const Body = (props) => {
    const { children } = props;
    return (
        <CardBody>
            <Typography variant='h5' color='blue-gray' className='mb-2'>
                UI/UX Review Check
            </Typography>
            <Typography>
                The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to &quot;Naviglio&quot; where you can enjoy the main
                night life in Barcelona.
            </Typography>
        </CardBody>
    );
};

CardNote2.Header = Header;
CardNote2.Body = Body;

CardNote2.propTypes = {
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

export default CardNote2;
