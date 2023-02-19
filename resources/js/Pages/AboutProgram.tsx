import React, { useContext } from "react";
import { ContextApi } from "../Contexts/AppContext";
import useTranslate from "../Hooks/useTranslate";
import IDCard from "../Components/IDCard";
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
                    <ul className="m-6 flex flex-col gap-4">
                        <IDCard
                            name={t(
                                "م.م/ مها أحمد قاسم",
                                "Lect. Maha Ahmed Qassem"
                            )}
                            title={t(
                                'مدرس مساعد - قسم التربية الموسيقية - كلية التربية النوعية - جامعة أسيوط - شاركت في تدريب وقيادة الفريق الموسيقي بالكلية - حاصلة على شهادة تدريبية معتمدة من جامعة Babson الأمريكية للمشاركة في مشروع تعزيز ريادة الأعمال  والمشروعات الممول من الوكالة الأمريكية للتنمية الدولية ( Seed ) - شاركت كعضو في لجنة تحكيم البرنامج القومي للحاضنات التكنولوجية المتخصصة "إنطلاق" بحاضنة الشركات همة - شاركت كعضو في لجنة تحكيم برنامج InoEgypt بحاضنة الشركات همة بجامعة أسيوط .',
                                'Assistant Lecturer - Department of Musical Education - Faculty of Specific Education - Assiut University - Participated in training and leading the college\'s musical team - She holds a certified training certificate from the American Babson University to participate in the project to promote entrepreneurship and projects funded by the US Agency for International Development (Seed) - She participated as a member In the arbitration committee of the national program for specialized technology incubators "Intilaq" at the Hemma incubator - I participated as a member of the judging committee of the InoEgypt program at the Hemma corporate incubator at Assiut University.'
                            )}
                        />
                    </ul>
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
                        />
                    </ul>
                </div>

                <div className="block">
                    <h2
                        className={`font-sans text-3xl bg-gray-100 p-2 px-3 w-fit ${
                            lang === "ar" ? "border-r-4" : "border-l-4"
                        } border-main`}
                    >
                        {t("الفريق القائم على عمل البرنامج", "Team Work")}
                    </h2>
                    <ul className="m-6 flex flex-col gap-4">
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
