import PropTypes from 'prop-types';

const Button = (props) => {
    const { children, classname, onClick = () => {}, type = 'button' } = props;
    return (
        <button className={`h-10 px-6 font-semibold rounded-md ${classname}`} type={type} onClick={onClick}>
            {children}
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    classname: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    type: PropTypes.string,
};

export default Button;
