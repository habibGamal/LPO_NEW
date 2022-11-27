import { Inertia } from '@inertiajs/inertia';
import React from 'react'
import Choice from '../../Components/ChoiceCard';
import { Assets, AssetsName } from '../../Models/Assets';
import Layout from './Layout';

export default function Videos(){
    return (
        <Layout>
            <div key={1} className="grid lg:grid-cols-2 gap-8 items-end justify-items-evenly">
                <Choice
                    imgSrc='/images/students.png'
                    title='Students'
                    onClick={() => {
                        Inertia.get(Assets.getAssets(AssetsName.studentVideos))
                    }}
                    key={1}
                />
                <Choice
                    imgSrc='/images/instructor.png'
                    title='Instructor'
                    onClick={() => {
                        Inertia.get(Assets.getAssets(AssetsName.authorVideos))
                    }}
                    key={2}
                />
            </div>
        </Layout>
    )
}
