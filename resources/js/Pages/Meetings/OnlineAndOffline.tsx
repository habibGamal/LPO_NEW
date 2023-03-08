import { Inertia } from '@inertiajs/inertia';
import React from 'react'
import Choice from '../../Components/ChoiceCard';
import useTranslate from '../../Hooks/useTranslate';
import { Assets, AssetsName } from '../../Models/Assets';
import Layout from './Layout';

export default function OnlineAndOffline() {
    const t = useTranslate();
    return (
        <Layout>
            <div key={1} className="grid lg:grid-cols-2 gap-8 items-end justify-items-evenly">
                <Choice
                    imgSrc='/images/online.png'
                    title={t('اونلاين', 'Online')}
                    onClick={() => {
                        Inertia.get('/meetings/categories/preivous')
                    }}
                    key={1}
                />
                <Choice
                    imgSrc='/images/offline.png'
                    title={t('اوفلاين', 'Offline')}
                    onClick={() => {
                        Inertia.get('/meetings/categories/offline')
                    }}
                    key={2}
                />
            </div>
        </Layout>
    )
}
