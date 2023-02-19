import React, { useContext } from "react";
import { motion } from "framer-motion";
import useTranslate from "../Hooks/useTranslate";
import { ContextApi } from "../Contexts/AppContext";
import IDCard from "../Components/IDCard";

export default function About() {
    const t = useTranslate();
    const [{ lang }] = useContext(ContextApi)!;
    return (
        <div className="container lg:text-align-inherit">

            <div className="flex justify-center my-8">
                <div className="rounded-full w-48 aspect-square overflow-hidden border-2 border-solid border-white outline-3 outline-gray-200 outline">
                    <img
                        className="w-full"
                        src="./images/personal_photo.png"
                        alt=""
                    />
                </div>
            </div>
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
                            imgSrc="images/dr_maha.jpg"
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
            </div>
            <motion.h1
                initial={{ x: 350, opacity: 0 }}
                transition={{ duration: 1.3, delay: 0, type: "spring" }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="text-4xl font-bold font-sans m-4 mb-16 text-center"
            >
                {t(
                    "نواتج التعلم المستهدفة من الموقع",
                    "Targeted learning outcomes from the site"
                )}
            </motion.h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
                <Block
                    title={t("المعرفة والفهم", "knowledge and understanding")}
                    sentences={[
                        t(
                            "أن يتعرف الطالب على الجلسة الصحيحة ووضع اليدين علي الة البيانو",
                            "To familiarize the student with the correct sitting and placement of hands on the piano."
                        ),
                        t(
                            "أن يتعرف الطالب على أساسيات العزف على آلة البيانو وقراءة النوتة الموسيقية",
                            "To familiarize the student with the basics of playing the piano and reading musical notes"
                        ),
                    ]}
                    delay={0}
                />
                <Block
                    title={t("المهارات الذهنية", "mental skills")}
                    sentences={[
                        t(
                            "القدرة على التأزر العضلي والتحكم في كلتا اليدين",
                            "The ability to coordinate and control muscles in both hands"
                        ),
                        t(
                            "القدرة على قرائة النغمات في المدرج الكبير في مفتاحين",
                            "Ability to read tones in the grandstand in two keys"
                        ),
                        t(
                            "القدرة على التأزر بين القراءة والعزف من خلال القراءة الوهلية",
                            "The ability to synergize between reading and playing through imaginative reading"
                        ),
                        t(
                            "القدرة على التذكر (الفوتوغرافي - التحليلي - السمعى)",
                            "Ability to remember (Photographic - Analytical - Auditory)"
                        ),
                    ]}
                    delay={0.2}
                />
                <Block
                    title={t(
                        "المهارات المهنية والعملية",
                        "Professional and practical skills"
                    )}
                    sentences={[
                        t(
                            "القدرة على تقوية الأصابع الخمس لليدين وليونتها وخاصة الإبهام والأداء بشكل سليم",
                            "The ability to strengthen the five fingers of the hands and their flexibility, especially the thumb, and to perform properly"
                        ),
                        t(
                            "القدرة على أداء السلالم والأربيجات في حدود الأوكتاف الواحد في السلالم الكبيرة والصغيرة",
                            "The ability to perform stairs and arpeggios within one octave on large and small stairs"
                        ),
                        t(
                            "القدرة على الأداء السليم للمقطوعات الموسيقية المقررة",
                            "The ability to properly perform the prescribed musical compositions"
                        ),
                    ]}
                    delay={0.4}
                />
                <Block
                    title={t(
                        "المهارات العامة والقابلة للانتقال",
                        "General and transferable skills"
                    )}
                    sentences={[
                        t(
                            "توجيه اهتمامات الطلاب لهواية محببه إليهم مثل العزف على الآلات الموسيقية واستخدامها الاستخدام الأمثل",
                            "Directing students' interests to a hobby they like, such as playing musical instruments and using them optimally"
                        ),
                        t(
                            "تبادل الثقة بالنفس لدي الطلاب من خلال عزف الآلة والتمكن من الأداء الجيد",
                            "Exchanging the students' self-confidence by playing the instrument and being able to perform well"
                        ),
                    ]}
                    delay={0.6}
                />
            </div>
            <motion.h1
                initial={{ x: 350, opacity: 0 }}
                transition={{ duration: 1.3, delay: 0.4, type: "spring" }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="text-4xl font-bold font-sans m-4 mb-16 text-center"
            >
                {t("محتويات الموقع", "Site contents")}
            </motion.h1>
            <div className="grid grid-cols-1 gap-8 ">
                <TableItem
                    title={t(
                        "تمارين تمهيدية للاصابع علي لوحة المفاتيح والجلسة الصحيحة من كتاب john Thomson",
                        "Introductory exercises for the fingers on the keyboard and the correct session from the book by John Thomson"
                    )}
                    s1={t(
                        "الأسلوب الصحيح للجلسة الصحيحية ووضع اليدين علي الة البيانو",
                        "The correct technique of the correct sitting and placing the hands on the piano"
                    )}
                    s2={t(
                        "انتقال اثر التعلم للجلسة الصحيحة ووضع اليدين للمواد التي يستخدم فيها عزف البيانو",
                        "transferring the effect of learning to the correct sitting and placing hands for the materials in which playing the piano is used"
                    )}
                    s3={t(
                        "تصحيح الجلسة الخاطئة ووضع اليدين الخاطئ",
                        "correcting the wrong sitting and the wrong position of the hands"
                    )}
                    delay={0.2}
                />
                <TableItem
                    title={t(
                        "تمارين من كتاب Longo Book One A",
                        "Exercises from Longo Book One A"
                    )}
                    s1={t(
                        "اكساب المرونة العضلية للاصابع الخمس",
                        "Gaining muscle flexibility for the five fingers"
                    )}
                    s2={t(
                        "انتقال اثر التعلم الي المواد الموسيقية الاخري",
                        "transferring the impact of learning to other musical subjects"
                    )}
                    s3={t(
                        "تطبيق المرونة العضلية في باقي بنود مقرر البيانو",
                        "applying muscle flexibility in the rest of the piano course items"
                    )}
                    delay={0.4}
                />
                <TableItem
                    title={t(
                        "تمارين من كتاب Bartok Vol 1",
                        "Exercises from the book Bartok Vol 1"
                    )}
                    s1={t(
                        "اكساب المرونة العضلية عن طريق اداء تمارين بسيطة",
                        "Gaining muscle flexibility by performing simple exercises"
                    )}
                    s2={t(
                        "اكتساب المرونة والتحكم في الاداء",
                        "Gaining flexibility and performance control"
                    )}
                    s3={t(
                        "السيطرة علي الاداء العضلي والنغمي",
                        "control of muscle and tonal performance"
                    )}
                    delay={0.6}
                />
            </div>
        </div>
    );
}

const Block = ({
    title,
    sentences,
    delay,
}: {
    title: string;
    sentences: string[];
    delay: number;
}) => {
    const [{ lang }] = useContext(ContextApi)!;
    return (
        <div className="block">
            <motion.h2
                initial={{ y: 100, opacity: 0 }}
                transition={{ duration: 1.3, delay: delay, type: "spring" }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className={`font-sans text-3xl font-bold bg-gray-100 p-2 px-3 w-fit border-main ${
                    lang === "ar" ? "border-r-4" : "border-l-4"
                }`}
            >
                {title}
            </motion.h2>
            <motion.ol
                className="list-decimal m-6"
                initial={{ y: 100, opacity: 0 }}
                transition={{
                    duration: 1.3,
                    delay: delay + 0.1,
                    type: "spring",
                }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
            >
                {sentences.map((sentence, i) => (
                    <li key={i}>{sentence}</li>
                ))}
            </motion.ol>
        </div>
    );
};

const TableItem = ({
    title,
    s1,
    s2,
    s3,
    delay,
}: {
    title: string;
    s1: string;
    s2: string;
    s3: string;
    delay: number;
}) => {
    const [{ lang }, setAppState] = useContext(ContextApi)!;
    const t = useTranslate();
    return (
        <div className="block">
            <motion.h2
                initial={{ y: 100, opacity: 0 }}
                transition={{ duration: 1.3, delay: delay, type: "spring" }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className={`font-sans text-3xl font-bold bg-gray-100 p-2 px-3 w-fit border-main ${
                    lang === "ar" ? "border-r-4" : "border-l-4"
                }`}
            >
                {title}
            </motion.h2>
            <motion.ol
                className="list-decimal m-6"
                initial={{ y: 100, opacity: 0 }}
                transition={{
                    duration: 1.3,
                    delay: delay + 0.1,
                    type: "spring",
                }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
            >
                <li>
                    <span className="font-bold">
                        {t("المعارف الرئيسية", "Key knowledge")} :{" "}
                    </span>
                    {s1}
                </li>
                <li>
                    <span className="font-bold">
                        {t("مهارات مهنية", "Professional Skills")} :{" "}
                    </span>
                    {s2}
                </li>
                <li>
                    <span className="font-bold">
                        {t("مهارات عامة", "General skills")} :{" "}
                    </span>
                    {s3}
                </li>
            </motion.ol>
        </div>
    );
};
