import { usePage } from '@inertiajs/inertia-react'
import React from 'react'

export default function SemiAuth({ children }: { children: JSX.Element | JSX.Element[] }) {
    const { semi_auth } = usePage().props;
    if (!semi_auth)
        return <></>;
    return (
        <>
            {children}
        </>
    )
}
