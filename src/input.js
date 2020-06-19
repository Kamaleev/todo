import { useState } from 'react';

export default () => {
    const [value, setValue] = useState('');

    return {
        value,
        clear: () => setValue(''),
        focus: () => document.getElementById('send').focus(),
        onChange: event => {
        setValue(event.target.value);
        }
    };
};
