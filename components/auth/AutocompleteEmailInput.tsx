import { useState, useRef } from 'react';
import { Autocomplete, Loader } from '@mantine/core';

export default function AutocompleteEmailInput() {
    const timeoutRef = useRef<number>(-1);
    const [value, setValue] = useState('');
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<string[]>([]);

    const handleChange = (val: string) => {
        window.clearTimeout(timeoutRef.current);
        setValue(val);
        setData([]);

        if (val.trim().length === 0 || val.includes('@')) {
            setLoading(false);
        } else {
            setLoading(true);
            timeoutRef.current = window.setTimeout(() => {
                setLoading(false);
                setData(['cst@rub.edu.bt'].map((provider) => `${val}@${provider}`));
            }, 1000);
        }
    };
    return (
        <Autocomplete
            value={value}
            data={data}
            m={30}
            onChange={handleChange}
            rightSection={loading ? <Loader size={16} /> : null}
            placeholder="Your email"
        />
    );
}
