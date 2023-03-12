import { Inertia } from '@inertiajs/inertia';
import React from 'react'
import Choice from '../../Components/ChoiceCard';
import Layout from './Layout';

export default function VideosAndImages(){
    return (
        <Layout>
            <div key={0} className="grid lg:grid-cols-2 gap-8 items-end justify-items-evenly">
                <Choice
                    imgSrc='/images/images.png'
                    title='Images'
                    onClick={() => {
                        Inertia.get('/assets/images')
                    }}
                    key={2}
                />
                <Choice
                    imgSrc='/images/videos.png'
                    title='Videos'
                    onClick={() => {
                        Inertia.get('/assets/videos')
                    }}
                    key={1}
                />
            </div>
        </Layout>
    )
}

