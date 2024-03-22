import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import Label from './Label';

const InputForm = forwardRef((props, ref) => {
    const { label, name, value, type, placeholder, onInput, required } = props;
    return (
        <div className='mb-6'>
            <Label htmlFor={name}>{label}</Label>
            <Input name={name} value={value} type={type} placeholder={placeholder} ref={ref} onInput={onInput} required={required}></Input>
        </div>
    );
});

InputForm.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onInput: PropTypes.func.isRequired,
    required: PropTypes.bool,
};

export default InputForm;
