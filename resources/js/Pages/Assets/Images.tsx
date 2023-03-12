import { Inertia } from '@inertiajs/inertia';
import React from 'react'
import Choice from '../../Components/ChoiceCard';
import useTranslate from '../../Hooks/useTranslate';
import { Assets, AssetsName } from '../../Models/Assets';
import Layout from './Layout';

export default function Images() {
    const t = useTranslate();
    return (
        <Layout>
            <div key={1} className="grid lg:grid-cols-2 gap-8 items-end justify-items-evenly">
                <Choice
                    imgSrc='/images/students.png'
                    title={t('الطلاب', 'Students')}
                    onClick={() => {
                        Inertia.get(Assets.getAssets(AssetsName.studentImages))
                    }}
                    key={1}
                />
                <Choice
                    imgSrc='/images/instructor.png'
                    title={t('جلسات', 'Sessions')}
                    onClick={() => {
                        Inertia.get(Assets.getAssets(AssetsName.authorImages))
                    }}
                    key={2}
                />
            </div>
        </Layout>
    )
}
