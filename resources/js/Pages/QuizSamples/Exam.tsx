import { FormEvent, useEffect, useState, useRef } from "react";
import React from "react";
import useTranslate from "../../Hooks/useTranslate";
import MultibleChoiceInput from "../../Components/MultibleChoiceInput"
import TrueFalseInput from "../../Components/TrueFalseInput"
import { Inertia } from "@inertiajs/inertia";
import { Popconfirm } from "antd";
import { usePage } from "@inertiajs/inertia-react";
const choiceQuestions = [
    {
        q: "كم عدد انواع البيانو؟",
        a: [
            'نوعان',
            '3 انواع',
            '4 انواع',
        ]
    },
    {
        q: "من اخترع ألة البيانو؟",
        a: [
            'بارتولوميو كريستوفوري',
            'أندريا أماتي',
            'كيرل داميان',
        ]
    },
    {
        q: "متى اخترع البيانو؟ ",
        a: [
            '1800',
            '1700',
            '1750',
        ]
    },
    {
        q: "على أي مفاتيح تكتب نوتة البيانو",
        a: [
            'صول، فا',
            'صول، دو تينور',
            'فا، دو تينور',
        ]
    },
    {
        q: "كم عدد أكتافات البيانو",
        a: [
            'ستة أكتافات',
            'سبعة أكتافات',
            'ثمانية أكتافات',
        ]
    },
    {
        q: "أوتار البيانو التي تكون على شكل مثلث عمودي تكون في",
        a: [
            'بيانو جراند',
            'بيانو ألكتروني',
            'بيانو قائم',
        ]
    },
    {
        q: "تحتوي معظم البيانو الحديث على لوحة مفاتيح مكونة من صف من",
        a: [
            '88 مفتاحاً',
            '77 مفتاحاً',
            '66 مفتاحاً',
        ]
    },
    {
        q: "تصنع المفاتيح للبيانوهات الغالية من ",
        a: [
            'عاج الفيل',
            'خشب الزان',
            'البلاستيك المقوى',
        ]
    }
]
const TFQuestions = [
    'السلم الموسيقي: هو مجموعة من النوتات الموسيقية مرتبة حسب التردد الأساسي أو طبقة الصوت، يتفرع إلى سبع نغمات ',
    'ليس من الضروري أن يتم العزف على البيانو بأطراف الأصابع',
    'إصبع الإبهام بحيث يأخذ الرقم 1 في اليد اليمنى والرقم 5 في اليد اليسرى',
    'يتكون المدرج الموسيقي من خمسة خطوط أفقية وأربعة مسافات ',
    'تعزف اليد اليمنى النوتات الموسيقية المكتوبة على مدرج صول واليد اليسرى النوتات الموسيقية المكتوبة على مدرج فا  ',
    'تكتب نغمة دو الوسطى أعلى مدرج صول وأسفل مدرج فا ',
    'الخط الثاني في مدرج صول يسمى مي',
    'من شروط الجلسة الصحيحة لآلة البيانو الجلوس على حافة مقعد البيانو ومحاذاة الرأس والكتف',
]
const secondsToTimer = (spendedTime: number) => {
    const allowedTime = 20 * 60;
    const remainingTime = allowedTime - spendedTime;
    const minutes = Math.floor(remainingTime / 60)
    const seconds = remainingTime - minutes * 60;
    return [minutes, seconds];
}
export default function Exam({ wrongAns, time }: { wrongAns?: { [key: string]: string }, time: number }) {
    const form = useRef(null);
    const [currentTime, setCurrentTime] = useState(Math.floor(Date.now() / 1000));
    const errors = usePage().props.errors;
    const isExamSubmited = wrongAns ? true : false;
    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(form.current!);
        if (!isExamSubmited) {
            Inertia.post('/quiz/check-exam', formData, { preserveScroll: true });
        }
    }
    const validForm = Object.keys(errors).length > 0;
    const timer = secondsToTimer(currentTime - time);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(t => t + 1)
        }, 1000);
        if (timer[0] === 0 && timer[1] === 0) {
            Inertia.get('/');
        }
        return () => {
            clearInterval(interval);
        }
    }, []);
    return (
        <>
            <div className="fixed rounded-r-full p-4 bg-red-400 text-white left-0 mt-4 font-bold">{timer[0]}:{timer[1]}</div>
            <form ref={form} className="container relative rtl" onSubmit={onSubmit} >
                <h2 className="page-title">Quiz 1</h2>
                <div className="content grid grid-cols-auto lg:grid-cols-2 items-start gap-8">
                    {
                        choiceQuestions.map(({ q, a }, key) => <ChoiceQ key={key} id={`q-${key}`} question={q} choices={a} correction={wrongAns?.[`q-${key}`]} />)
                    }
                    {
                        TFQuestions.map((q, key) => <TFQ key={key} id={`q-${key + choiceQuestions.length}`} question={q} correction={wrongAns?.[`q-${key + choiceQuestions.length}`]} />)
                    }
                    <div>
                        <p className="question">تكلم في نقاط عن تطور اله البيانو ؟</p>
                        <textarea className="bg-slate-50 text-xl" placeholder="اكتب اجابتك هنا..." cols={50} name="assay-q-1" id="assay-q-1"></textarea>
                    </div>
                    <div>
                        <p className="question">اذكر اشكال البيانو ؟</p>
                        <textarea className="bg-slate-50 text-xl" placeholder="اكتب اجابتك هنا..." cols={50} name="assay-q-2" id="assay-q-2"></textarea>
                    </div>
                </div>

                {
                    wrongAns &&
                    <div className="rounded shadow p-4 bg-second  my-8 w-fit mx-auto">
                        <h4 className="text-xl text-white">درجتك : {20 - Object.keys(wrongAns).length}/20 </h4>
                    </div>
                }
                {
                    validForm &&
                    <p className="text-center text-red-600">
                        *برجاء ادخال الاسم والاجابة عن كل الاسئلة
                    </p>
                }
                <button className="block mx-auto my-8 btn">Submit</button>
            </form>
        </>
    )
}

const ChoiceQ = ({ question, id, choices, correction = undefined }: { question: string, id: string, choices: string[], correction?: string }) => {
    return (
        <div>
            <p className={`${correction ? '!border-red-600 border' : ''} question`}>{question}</p>
            <MultibleChoiceInput
                id={id}
                choices={choices}
                correction={correction}
            />
        </div>
    )
}
const TFQ = ({ question, id, correction = undefined }: { question: string, id: string, correction?: string }) => {
    return (
        <div>
            <p className={`${correction ? '!border-red-600 border' : ''} question`}>{question}</p>
            <TrueFalseInput id={id} correction={correction} />
        </div>
    )
}
