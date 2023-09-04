import React from "react";
import useTranslate from "../../Hooks/useTranslate";
type QuesitonProps = {
    title: string;
    timeAndMark: string;
    questionDescription: string;
    question: string;
};
function Question(props: QuesitonProps) {
    return (
        <div className="my-16">
            <h5 className="flex justify-between text-xl font-bold mb-8">
                <span className="text-2xl">{props.title}</span>
                <span> {props.timeAndMark}</span>
            </h5>
            <div className="text-xl m-4">
                <p>- {props.questionDescription}</p>
                <p>{props.question}</p>
            </div>
        </div>
    );
}

export default function PaperExam() {
    const t = useTranslate();
    return (
        <div className="container">
            <h4 className="p-4 text-xl md:text-2xl 2xl:text-3xl font-bold text-center font-ZenMaruGothic mb-6">
                {t("الامتحان 2", "Exam 2")}
            </h4>
            <div className="mx-auto max-w-[600px]">
                <Question
                    title={t("السؤال الأول", "Question 1")}
                    timeAndMark={t("(20 درجة ) – (4 دقائق)", "(20 Marks) – (4 Minutes)")}
                    questionDescription={t("قم بأداء تمرين من كتاب ", "Perform one exercise from the book ")}
                    question="John Thompsons’s Easiest Piano Course Part: 1"
                />
                <Question
                    title={t("السؤال الثاني", "Question 2")}
                    timeAndMark={t("(20 درجة ) – (5 دقائق)", "(20 Marks) – (5 Minutes)")}
                    questionDescription={t("قم بأداء أحد التمارين في النصف الأول من كتاب", "Perform one exercise from the first half of the book ")}
                    question="Alessandro Longo: A Tecnica Pianistic, a. 1"
                />
                <Question
                    title={t("السؤال الثالث", "Question 3")}
                    timeAndMark={t("(20 درجة ) – (6 دقائق)", "(20 Marks) – (6 Minutes)")}
                    questionDescription={t("قم بأداء أحد التمارين في النصف الأول من كتاب", "Perform one exercise from the first half of the book ")}
                    question="Bella Bartok Microcosmos: N. 1"
                />
                <a
                    className="text-xl block text-center m-8 p-4"
                    href="zoomus://zoom.us/join?confno=8529015944&pwd=&uname=Nobody%20-%2051800000000"
                >
                    Zoom Link
                </a>
            </div>
        </div>
    );
}
