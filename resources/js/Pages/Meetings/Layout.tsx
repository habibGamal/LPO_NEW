import React from 'react'
import { motion } from 'framer-motion';
import { animateUp } from '../../Animation/Up';
import useTranslate from '../../Hooks/useTranslate';
import SectionTitle from '../../Components/SectionTitle';
export default function Layout({ title, children }: { title?: string, children: JSX.Element }) {
    const t = useTranslate();
    return (
        <section className="min-h-[calc(100vh-53px-57px)]">
            <div className="container lg:py-16 py-4 text-center lg:text-align-inherit">
                <SectionTitle
                    className="mt-16 mb-48"
                    title={title ? title : t('الجلسات', 'Meetings')}
                />
                {children}
            </div>
        </section>
    )
}
