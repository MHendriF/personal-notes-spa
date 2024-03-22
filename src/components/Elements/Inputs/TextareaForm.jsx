import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Label from './Label';
import Textarea from './Textarea';

const TextareaForm = forwardRef((props, ref) => {
    const { label, name, rows, placeholder, value, onInput } = props;
    return (
        <div className='mb-6'>
            <Label htmlFor={name}>{label}</Label>
            <Textarea name={name} value={value} rows={rows} placeholder={placeholder} ref={ref} onInput={onInput}></Textarea>
        </div>
    );
});

TextareaForm.propTypes = {
    label: PropTypes.string.isRequired,
    rows: PropTypes.number.isRequired,
    placeholder: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onInput: PropTypes.func.isRequired,
};

export default TextareaForm;
