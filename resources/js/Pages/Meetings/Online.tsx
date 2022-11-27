import { Inertia } from '@inertiajs/inertia';
import React from 'react'
import Choice from '../../Components/ChoiceCard';
import useTranslate from '../../Hooks/useTranslate';
import { Assets, AssetsName } from '../../Models/Assets';
import Layout from './Layout';

export default function Online() {
    const t = useTranslate();
    return (
        <Layout>
            <div key={1} className="grid lg:grid-cols-3 gap-8 items-end justify-items-evenly">
                <Choice
                    imgSrc='/images/activity.png'
                    title={t('انشطة', 'Activity')}
                    onClick={() => {
                        Inertia.get('/meetings/categories/activity')
                    }}
                    key={1}
                />
                <Choice
                    imgSrc='/images/previous.png'
                    title={t('السابق', 'Previous')}
                    onClick={() => {
                        Inertia.get('/meetings/categories/preivous')
                    }}
                    key={2}
                />
                <Choice
                    imgSrc='/images/history.png'
                    title={t('السجل', 'History')}
                    onClick={() => {
                        Inertia.get('/meetings/categories/history')
                    }}
                    key={3}
                />
            </div>
        </Layout>
    )
}
