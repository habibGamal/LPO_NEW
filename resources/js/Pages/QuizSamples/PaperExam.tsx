import React from "react";
import useTranslate from "../../Hooks/useTranslate";

export default function PaperExam() {
    const t = useTranslate();
    return (
        <div className="flex flex-col justify-center p-4">
            <h4 className="p-4 text-xl md:text-2xl 2xl:text-3xl font-bold text-center font-ZenMaruGothic mb-6">
                {t("الامتحان الثاني", "Second Exam")}
            </h4>
            <img className="rounded-xl max-w-[700px] mx-auto" src="/images/paper_exam.jpeg" alt="" />
            <a className="text-center p-4" href="zoomus://zoom.us/join?confno=8529015944&pwd=&uname=Nobody%20-%2051800000000">Zoom Link</a>
        </div>
    );
}
