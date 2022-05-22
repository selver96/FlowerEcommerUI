import React, { useEffect } from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useRouter } from 'next/router'
import MainLayout from '../../layouts/MainLayout';

const index = () => {
    const { error, isAuth } = useTypedSelector(state => state.auth);
    const router = useRouter();
    
    useEffect(() => {
        if (!isAuth) {
            router.push('/login');
        }
    }, [])

    return (
        <MainLayout>
        </MainLayout>
    );
};

export default index;