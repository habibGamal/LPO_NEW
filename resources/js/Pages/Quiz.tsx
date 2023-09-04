import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons/faArrowCircleRight'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Inertia } from '@inertiajs/inertia';
import React from 'react';
import useTranslate from '../Hooks/useTranslate';
export default function Quiz() {
    const t = useTranslate();
    return (
        <section className="bg-x-blue lg:py-16 py-4 text-white text-center">
            <div className="container max-w-[780px]">
                <h2 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold uppercase mb-4">{t('نماذج امتحانات', 'Exams')}</h2>
                <p className="mb-8 text-xl">
                    {t(
                        'تعدّ الامتحانات وسيلة من الوسائل المهمّة المستخدمة في قياس وتقويم قدرات الطلاب، ومعرفة ما وصّل إليه مستواهم التحصيلي، ومن ناحية أخرى تساعد في معرفة مدى تحقق الأهداف السلوكية، أوالنواتج التعليميّة المطلوبة، وما يقوم به المعلم من نشاطات تعليمية، كمّا تساعد على رفع المستويات التحصيلية عند الطلاب، لهذا من الضروري أن تتّصف هذه الامتحانات بالكفاءة العالية في عملية القياس والتقويم، ويمكن الوصول لهذه الكفاءة، عن طريق إعداد امتحانات نموذجيّة، وصحيحة.',
                        'Exams are one of the important means used in measuring and evaluating students\' abilities, and knowing what their achievement level has reached. Students, for this it is necessary that these exams be characterized by high efficiency in the process of measurement and evaluation, and this efficiency can be reached, by preparing standard and correct exams.'
                    )}
                </p>
                <img src="/images/quiz.png" alt="" />
                <div className="flex flex-col gap-4 text-left mt-8">
                    <QuizComponent name={t('امتحان 1', 'Exam 1')} onClick={() => Inertia.get('/quiz/pre-exam')} />
                    <QuizComponent name={t('امتحان 2', 'Exam 2')} onClick={() => Inertia.get('/quiz/paper-exam')} />
                </div>
            </div>
        </section>
    )
}

const QuizComponent = ({ name, onClick }: { name: string, onClick: React.MouseEventHandler<HTMLDivElement> }) => {
    return (
        <div onClick={onClick} className="quiz cursor-pointer bg-second p-4 rounded-xl  flex flex-nowrap justify-between items-center">
            <p className="text-xl">{name}</p>
            <FontAwesomeIcon size='2x' icon={faArrowCircleRight} />
        </div>
    )
}
