import { Inertia } from '@inertiajs/inertia';
import React from 'react'
import Choice from '../../Components/ChoiceCard';
import { Assets, AssetsName } from '../../Models/Assets';
import Layout from './Layout';
import useTranslate from '../../Hooks/useTranslate';

export default function Videos(){
    const t = useTranslate();
    return (
        <Layout>
            <div key={1} className="grid lg:grid-cols-2 gap-8 items-end justify-items-evenly">
                <Choice
                    imgSrc='/images/students.png'
                    title={t('الطلاب', 'Students')}
                    onClick={() => {
                        Inertia.get(Assets.getAssets(AssetsName.studentVideos))
                    }}
                    key={1}
                />
                <Choice
                    imgSrc='/images/instructor.png'
                    title={t('جلسات', 'Sessions')}
                    onClick={() => {
                        Inertia.get(Assets.getAssets(AssetsName.authorVideos))
                    }}
                    key={2}
                />
            </div>
        </Layout>
    )
}
