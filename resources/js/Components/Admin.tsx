import { usePage } from '@inertiajs/inertia-react'
import React from 'react'

export default function Admin({ children }: { children: JSX.Element | JSX.Element[] }) {
    const { admin } = usePage().props;
    if (!admin)
        return <></>;
    return (
        <>
            {children}
        </>
    )
}
