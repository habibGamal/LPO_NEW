import { Inertia } from '@inertiajs/inertia';
import React from 'react'
import Choice from '../../Components/ChoiceCard';
import Layout from './Layout';
import useTranslate from '../../Hooks/useTranslate';

export default function VideosAndImages(){
    const t = useTranslate();
    return (
        <Layout>
            <div key={0} className="flex flex-wrap justify-evenly items-stretch gap-36">
                <Choice
                    imgSrc='/images/images.png'
                    title={t('صور','Images')}
                    desc={t('اكتشف صورًا ساحرة لمجتمع البيانو مع الطلاب والمدرسين ولحظات لا تُنسى',"Discover captivating piano community photos with students, instructors, and memorable moments")}
                    onClick={() => {
                        Inertia.get('/assets/images')
                    }}
                    key={2}
                    btnText={t('استكشف الصور','Explore Images')}
                />
                <Choice
                    imgSrc='/images/videos.png'
                    title={t('فيديوهات','Videos')}
                    desc={t("شاهد مقاطع فيديو اجتماعات تعلم البيانو لدينا مع مدرس متخصص يرشدك خلال الدروس والتقنيات والعروض الموسيقية.","Watch our piano learning meeting videos with expert instructor guiding you through lessons, techniques, and performances.")}
                    onClick={() => {
                        Inertia.get('/assets/videos')
                    }}
                    key={1}
                    btnText={t('استكشف الفيديوهات','Explore Videos')}
                />
            </div>
        </Layout>
    )
}

