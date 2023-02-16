import React, { useContext, useEffect, useState } from "react";
import { ContextApi } from "../Contexts/AppContext";
import useTranslate from "../Hooks/useTranslate";
export default function AboutProgram() {
    const t = useTranslate();
    const [{ lang }] = useContext(ContextApi)!;
    return (
        <div className="container lg:text-align-inherit py-8">
            <h1 className="text-4xl border-b-2 border-main w-fit pb-4 font-sans mx-auto mb-4 text-center">
                {t("فكرة البرنامج", "Program idea")}
            </h1>
            <h2 className="text-center text-3xl font-bold font-sans">
                {t("م.م/ مها أحمد قاسم ", "Lect. Maha Ahmed Qassem")}
            </h2>
            <h3 className="text-3xl p-4 leading-tight border-2 rounded border-main bg-gray-50 w-fit pb-4 font-sans mx-auto my-8 text-center">
                {t(
                    `
                البرنامج جزء من متطلبات الحصول على درجة دكتوراة في الفلسفة في التربية النوعية تخصص التربية الموسيقية ( بيانو )
                تحت عنوان
                " برنامج قائم على التعليم المدمج لرفع مستوى أداء الطلاب على آلة البيانو "
                `,
                    "The program is part of the requirements for obtaining a Doctor of Philosophy degree in Specific Education, specializing in Music Education (Piano) under the title “A program based on blended learning to raise the level of students’ performance on the piano.”"
                )}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-1 gap-8 ">
                <div className="block">
                    <h2
                        className={`font-sans text-3xl bg-gray-100 p-2 px-3 w-fit ${
                            lang === "ar" ? "border-r-4" : "border-l-4"
                        } border-main`}
                    >
                        {t("تحت إشراف كلاً من", "Under the supervision of")}
                    </h2>
                    <ul className="m-6 flex flex-col gap-4">
                        <IDCard
                            name={t(
                                "أ.د/ علي حسين النجار",
                                "Prof. Ali Hussein Al-Najjar"
                            )}
                            title={t(
                                "أستاذ الآداء ( بيانو) بقسم التربية الموسيقية  ومدير مركز الفنون الأسبق بكلية التربية النوعية - جامعة عين شمس شارك في الاشراف على العديد من رسائل الماجستير والدكتوراه – له العديد من المؤلفات الموسيقية للآلة البيانو - شارك كمايستو وبيانيست في العديد من الحفلات الموسيقية بدار الأوبرا المصرية  – عضو لجنة المحكمين لفحص الإنتاج العلمي لشغل وظائف الأساتذة والاساتذة المساعيدين -  قطاع التربية الموسيقية  ",
                                "Professor of performance (piano) in the Department of Music Education And former director of the Art Center at the Faculty of Specific Education - Ain Shams University Participated in the supervision of several master's and doctoral dissertations - He has many musical compositions for the piano - As a maesto and pianist participated in many concerts at the Egyptian Opera House - Member of the arbitrators committee to examine scientific production for the positions of professors and assistant professors - Music Education Sector"
                            )}
                            imgSrc="images/dr_ali.jpg"
                        />
                        <IDCard
                            name={t(
                                "أ.د/ أبرار مصطفى إبراهيم",
                                "Prof. Abrar Mustafa Ibrahim"
                            )}
                            title={t(
                                "أستاذ النظريات والتأليف بقسم التربية الموسيقية  وكيل كلية التربية النوعية لشئون التعليم والطلاب  - جامعة أسيوط  شاركت في الاشراف على العديد من رسائل الماجستير والدكتوراه – لها العديد من المؤلفات في مجال النظريات والتأليف عضو اللجنة العليا للانشطة الطلابية - عضو لجنة المحكمين لفخص الإنتاج العلمي لشغل وظائف الأساتذة والاساتذة المساعيدين -  قطاع التربية الموسيقية  ",
                                "Professor of Theories and Composition, Department of Musical Education Vice Dean of the Faculty of Specific Education for Education and Student Affairs - Assiut University Participated in supervising many master's and doctoral dissertations - has many publications in the field of theories and authorship Member of the Higher Committee for Student Activities - Member of the Arbitrators Committee for the examination of scientific production for the positions of professors and assistant professors - Music Education Sector"
                            )}
                            imgSrc="images/dr_abrar.jpg"
                        />
                        <IDCard
                            name={t(
                                "د/ سعد حسن محي الدين",
                                "Dr. Saad Hassan Mohie Eldin"
                            )}
                            title={t(
                                "المدرس بقسم تكنولوجيا التعليم  كلية التربية النوعية -  جامعة أسيوط     نائب مدير وحدة ضمان الجودة بكلية التربية النوعية - المشرف على وحدة التقويم والقياس بكلية التربية النوعية -  عضو لجنة إعداد المقررات الإلكترونية لمرحلة البكالوريوس – الاشراف على العديد من رسائل الماجستير والدكتوراه – له العديد من المؤلفات في مجال تكنولوجيا التعليم والحاسب الالي",
                                "Lecturer in the Department of Educational Technology Faculty of Specific Education - Assiut University Deputy Director of the Quality Assurance Unit at the Faculty of Specific Education - Supervisor of the Evaluation and Measurement Unit at the Faculty of Specific Education - Member of the Committee for Preparing Electronic Courses for the Bachelor's Degree - Supervising many master's and doctoral dissertations - Has many publications in the field of educational technology and computers"
                            )}
                            imgSrc="images/dr_saad.jpg"
                        />
                    </ul>
                </div>

                <div className="block">
                    <h2
                        className={`font-sans text-3xl bg-gray-100 p-2 px-3 w-fit ${
                            lang === "ar" ? "border-r-4" : "border-l-4"
                        } border-main`}
                    >
                        {t(
                            "ويسعدني أن أشكر كلاً من",
                            "I am happy to thank both"
                        )}
                    </h2>
                    <ul className="m-6 flex flex-col gap-4">
                        <IDCard
                            name={t(
                                "أ.م.د/ رويدا صابر أحمد ",
                                "Prof. Dr. Rowaida Saber Ahmed"
                            )}
                            title={t(
                                "أستاذ النظريات والتأليف المساعد بقسم التربية الموسيقية – كلية التربية النوعية-  جامعة أسيوط ",
                                "Assistant Professor of Theory and Composition, Department of Music Education, Faculty of Specific Education, Assiut University"
                            )}
                            highlight={t(
                                "على ماقدمته لي من دعم ومساعدة خلال تنفيذ البرنامج",
                                "For the support and assistance you provided me during the implementation of the program"
                            )}
                        />
                        <IDCard
                            name={t(
                                "م/ فكتور اميل سعيد",
                                "Eng/ Victor Emil Said"
                            )}
                            title={t("Sound Engineering", "Sound Engineering")}
                        />
                        <IDCard
                            name={t(
                                "م/ حبيب جمال حبيب",
                                "Eng/ Habib Gamal Habib"
                            )}
                            title={t("Web Developer", "Web Developer")}
                        />
                        <IDCard
                            name={t(
                                "م/ روبرتو أيمن إيميل",
                                "Eng/ Roberto Ayman Emil"
                            )}
                            title={t(
                                "Graphic Designer, Monterey",
                                "Graphic Designer, Monterey"
                            )}
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

const IDCard = ({
    name,
    title,
    highlight = "",
    imgSrc,
}: {
    name: string;
    title: string;
    highlight?: string;
    imgSrc?: string;
}) => (
    <li className="text-xl shadow-gray-400 font-sans bg-gray-50 p-4 rounded w-fit">
        <div className="flex flex-col lg:flex-row">
            {imgSrc && (
                <img
                    className="w-36 aspect-square object-cover mb-4 lg:mb-0 mx-auto lg:mx-4 rounded"
                    src={imgSrc}
                />
            )}
            <div>
                <h4 className="text-2xl font-bold font-sans mb-2">{name}</h4>
                {title}
                <br />
                <span className="font-bold font-sans">{highlight}</span>
            </div>
        </div>
    </li>
);
