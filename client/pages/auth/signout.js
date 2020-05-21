import { useEffect } from 'react';
import Router from 'next/router';
import useRequest from '../../hooks/request';

export default () => {
    const { sendRequest } = useRequest({
        url: '/api/users/signout',
        method: 'post',
        onSuccess: () => Router.push('/')
    });

    useEffect(() => {
        sendRequest();
    }, [])

    return <h1>Signing Out...</h1>
}