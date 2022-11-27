import { usePage } from '@inertiajs/inertia-react';
import React from 'react'

export default function NotAuth({ children }: { children: JSX.Element | JSX.Element[] }) {
    const { auth,semi_auth } = usePage().props;
    if (auth || semi_auth)
        return <></>;
    return (
        <>
            {children}
        </>
    )
}
