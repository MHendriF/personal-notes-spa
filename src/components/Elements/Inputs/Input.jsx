import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Input = forwardRef((props, ref) => {
    const { type, placeholder, name, value, onInput, required } = props;
    return (
        <input
            id={name}
            type={type}
            className='text-sm border border-gray-500 rounded w-full py-2 px-3 text-slate-900 placeholder: opacity-60'
            placeholder={placeholder}
            onInput={onInput}
            name={name}
            value={value}
            ref={ref}
            required={required}
        />
    );
});

Input.propTypes = {
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onInput: PropTypes.func.isRequired,
    required: PropTypes.bool,
};

export default Input;
