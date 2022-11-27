import React from 'react'
import { motion } from 'framer-motion';
import { animateUp } from '../../Animation/Up';
import useTranslate from '../../Hooks/useTranslate';
export default function Layout({ title, children }: { title?: string, children: JSX.Element }) {
    const t = useTranslate();
    return (
        <section className="bg-ov-white min-h-[calc(100vh-53px-57px)]">
            <div className="container lg:py-16 py-4 text-center lg:text-align-inherit">
                <motion.h3 {...animateUp} className="text-3xl text-center md:text-4xl lg:text-5xl mb-12 lg:mb-24  font-bold uppercase">
                    <span className="highlight-header"> {title ? title : t('الجلسات', 'Meetings')}</span>
                </motion.h3>
                {children}
            </div>
        </section>
    )
}
