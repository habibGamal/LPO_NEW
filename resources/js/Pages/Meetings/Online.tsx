import { Inertia } from '@inertiajs/inertia';
import React from 'react'
import Choice from '../../Components/ChoiceCard';
import useTranslate from '../../Hooks/useTranslate';
import Layout from './Layout';

export default function Online() {
    const t = useTranslate();
    return (
        <Layout>
            <div key={1} className="grid xl:grid-cols-2 2xl:grid-cols-3 gap-36 items-end justify-items-center">
                <Choice
                    imgSrc='/images/activity.png'
                    title={t('انشطة', 'Activity')}
                    desc={
                        t("استكشف رحلتك الموسيقية مع الاجتماعات القادمة!", "Unlock Your Musical Journey with Upcoming Meetings!")
                    }
                    btnText={t("استكشف", "Explore")}
                    onClick={() => {
                        Inertia.get('/meetings/categories/activity')
                    }}
                    key={1}
                />
                <Choice
                    imgSrc='/images/previous.png'
                    title={t('السابق', 'Previous')}
                    desc={
                        t("استعيد لحظات موسيقية ساحرة!", "Revisit Captivating Moments of Music!")
                    }
                    btnText={t("استكشف", "Explore")}
                    onClick={() => {
                        // Inertia.get('/meetings/online-or-offline')
                        Inertia.get('/students-table')
                    }}
                    key={2}
                />
                {/* <Choice
                    imgSrc='/images/previous.png'
                    title={t('السابق قديم', 'OLD Previous')}
                    desc={
                        t("استعيد لحظات موسيقية ساحرة!", "Revisit Captivating Moments of Music!")
                    }
                    btnText={t("استكشف", "Explore")}
                    onClick={() => {
                        Inertia.get('/meetings/online-or-offline')
                    }}
                    key={4}
                /> */}
                <Choice
                    imgSrc='/images/history.png'
                    title={t('السجل', 'History')}
                    desc={
                        t("تتبع تقدمك الموسيقي عبر الزمن!", "Track Your Musical Progress Through Time!")
                    }
                    btnText={t("استكشف", "Explore")}
                    onClick={() => {
                        Inertia.get('/meetings/categories/history')
                    }}
                    key={3}
                />
            </div>
        </Layout>
    )
}
