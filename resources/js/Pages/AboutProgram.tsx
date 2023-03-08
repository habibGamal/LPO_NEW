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
                    {/* <ul className="m-6 flex flex-col gap-4">
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
                    </ul> */}
                    <h2
                        className={`font-sans text-3xl bg-gray-100 p-2 px-3 w-fit ${
                            lang === "ar" ? "border-r-4" : "border-l-4"
                        } border-main`}
                    >
                        {t("تحت إشراف كلاً من", "Under the supervision of")}
                    </h2>
                    <ul className="m-6 flex flex-col gap-4">
                        <IDCard
                            name={t('أ.د/ علي حسين النجار','Prof. Ali Hussein Al-Najjar')}
                            title={t('أستاذ الأداء ( البيانو ) بقسم التربية الموسيقية – كلية التربية النوعية – جامعة عين شمس','Professor of performance (piano) at the Department of Music Education - Faculty of Specific Education - Ain Shams University')}
                        />
                        <IDCard
                            name={t('أ.د/ أبرار مصطفى إبراهيم','Prof. Abrar Mustafa Ibrahim')}
                            title={t('أستاذ النظريات والتأليف بقسم التربية الموسيقية ووكيل شئون التعليم والطلاب – كلية التربية النوعية جامعة أسيوط','Professor of Theory and Composition, Department of Music Education and Vice Dean for Education and Student Affairs - Faculty of Specific Education, Assiut University')}
                        />
                        <IDCard
                           name={t('د/ سعد حسن محي الدين','Dr. Saad Hassan Mohie Eldin')}
                           title={t('مدرس تكنولوجيا التعليم – بقسم تكنولوجيا التعليم – كلية التربية النوعية – جامعة أسيوط','Instructor of Educational Technology - Department of Educational Technology - Faculty of Specific Education - Assiut University')}
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
