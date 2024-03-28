import { getName } from '../services/auth.service';
import { useEffect, useState } from 'react';

export const useLogin = () => {
    const [name, setName] = useState('');
    useEffect(() => {
        const accessToken = localStorage.getItem('accessToken');
        if (accessToken) {
            setName(getName(accessToken));
        } else {
            window.location.href = '/login';
        }
    }, []);

    return name;
};
