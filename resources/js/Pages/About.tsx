import React, { useContext } from "react";
import { motion } from "framer-motion";
import useTranslate from "../Hooks/useTranslate";
import { ContextApi } from "../Contexts/AppContext";
import IDCard from "../Components/IDCard";
import { useMediaQuery } from "../Hooks/useMediaQuery";
import { up } from "../Animation/movements";
import SectionTitle from "../Components/SectionTitle";
import Header from "../Components/Header";
import useModal from "../Hooks/useModal";
import { Modal } from "antd";
export default function About() {
    const t = useTranslate();
    return (
        <div className="container lg:text-align-inherit">
            <Header
                title={t("عنا", "About Us")}
                desc={t(
                    <>
                        اكتشف رحلتك الموسيقية مع <br />
                        منصتنا لتعلم البيانو عبر الإنترنت.
                    </>,
                    <>
                        Unlock Your Musical Journey <br />
                        with Our Online Piano Platform
                    </>
                )}
                imgSlug="about"
            />

            <Journal />

            <SectionTitle
                title={t("تحت إشراف كلاً من", "Under the supervision of")}
            />
            <Supervisors />

            <SectionTitle title={t("محتويات الموقع", "Site contents")} />
            <SiteContents />

            <SectionTitle
                title={t(
                    "نواتج التعلم المستهدفة من الموقع",
                    "Site's Targeted Learning Outcomes"
                )}
            />
            <TargetSections />
        </div>
    );
}

const Journal = () => {
    const t = useTranslate();
    const [modalState, open, close] = useModal();
    return (
        <div className="grid lg:grid-cols-2 items-center rounded-3xl bg-pink-500 my-16">
            <div className="bg-white rounded-3xl">
                <img
                    className="w-full rounded-3xl object-[50%8%] max-h-[300px] object-cover"
                    src="images/dr_maha.jpg"
                />
                <div className="px-10 md:px-16 py-8">
                    <ul className="md:text-xl space-y-2 mb-8 list-disc text-[#505050]">
                        <li>
                            {t(
                                "محاضر مساعد في قسم التعليم الموسيقي بكلية التربية النوعية في جامعة أسيوط.",
                                "Assistant Lecturer at the Department of Musical Education in the Faculty of Specific Education at Assiut University."
                            )}
                        </li>
                        <li>
                            {t(
                                "تم تدريبه وقيادة فريق الموسيقى في الكلية.",
                                "Trained and led the college's musical team."
                            )}
                        </li>
                        <li>
                            {t(
                                "حاصل على شهادة تدريب معتمدة من جامعة بابسون الأمريكية للمشاركة في مشروع...",
                                "Holds a certified training certificate from the American Babson University for participation in the project to..."
                            )}
                        </li>
                    </ul>
                    <button
                        onClick={open}
                        className=" md:py-4 py-2 px-6 text-lg rounded-2xl bg-blueblack-500 hover:bg-blueblack-600 font-medium text-white"
                    >
                        More
                    </button>
                    <Modal
                        title={null}
                        open={modalState.isOpen}
                        onCancel={close}
                        closable={false}
                        footer={null}
                        className="custom-modal"
                    >
                        <img
                            className="w-full rounded-3xl object-[50%8%] max-h-[300px] object-cover"
                            src="images/dr_maha.jpg"
                        />
                        <div className="px-10 px-4 sm:px-16 py-8">
                            <ul className="md:text-lg space-y-2 mb-8 list-disc text-[#505050]">
                                <li>
                                    {t(
                                        "محاضر مساعد في قسم التعليم الموسيقي بكلية التربية النوعية في جامعة أسيوط.",
                                        "Assistant Lecturer at the Department of Musical Education in the Faculty of Specific Education at Assiut University."
                                    )}
                                </li>
                                <li>
                                    {t(
                                        "تم تدريبه وقيادة فريق الموسيقى في الكلية.",
                                        "Trained and led the college's musical team."
                                    )}
                                </li>
                                <li>
                                    {t(
                                        "تحمل شهادة تدريب معتمدة من جامعة بابسون الأمريكية للمشاركة في مشروع تعزيز ريادة الأعمال والمشاريع الممولة من قبل وكالة التنمية الدولية الأمريكية (سيد).",
                                        "Holds a certified training certificate from the American Babson University for participation in the project to promote entrepreneurship and projects funded by the US Agency for International Development (Seed)"
                                    )}
                                </li>

                                <li>
                                    {t(
                                        'شاركت كعضو في لجنة التحكيم في البرنامج الوطني للحاضنات التكنولوجية المتخصصة "إنطلاق" في حاضنة هيما',
                                        'Participated as a member of the arbitration committee in the national program for specialized technology incubators "Intilaq" at the Hemma incubator.'
                                    )}
                                </li>
                                <li>
                                    {t(
                                        "شاركت كعضو في لجنة التحكيم في برنامج إينوميجيبت في حاضنة هيما الشركية في جامعة أسيوط",
                                        "Participated as a member of the judging committee in the InoEgypt program at the Hemma corporate incubator at Assiut University."
                                    )}
                                </li>
                            </ul>
                        </div>
                    </Modal>
                </div>
            </div>
            <div className="p-8 md:p-16">
                <p className="text-lg md:text-2xl 2xl:text-3xl text-[#FFF3F3] leading-relaxed md:!leading-loose">
                    {t(
                        `
                            البرنامج جزء من متطلبات الحصول على درجة دكتوراة في الفلسفة في التربية النوعية تخصص التربية الموسيقية ( بيانو )
                            تحت عنوان
                            " برنامج قائم على التعليم المدمج لرفع مستوى أداء الطلاب على آلة البيانو "
                            `,
                        "The program is part of the requirements for obtaining a Doctor of Philosophy degree in Specific Education, specializing in Music Education (Piano) under the title “A program based on blended learning to raise the level of students’ performance on the piano.”"
                    )}
                </p>
            </div>
        </div>
    );
};

const Card = ({
    imgSrc,
    name,
    list,
    completeList,
    delay,
}: {
    imgSrc: string;
    name: string;
    list: string[];
    completeList?: string[];
    delay?: number;
}) => {
    const [modalState, open, close] = useModal();
    const t = useTranslate();
    return (
        <motion.div {...up(delay)} className="rounded-3xl bg-white pb-8 mt-32">
            <img
                className="mx-auto -translate-y-1/2 -mb-8 w-[150px] aspect-square object-cover rounded-full object-top"
                src={imgSrc}
            />
            <h4 className="text-xl sm:text-2xl font-bold text-center font-ZenMaruGothic mb-6">
                {name}
            </h4>
            <ul className="sm:text-lg list-disc space-y-2 text-blueblack-500 pb-8 px-16">
                {list.map((item) => (
                    <li>{item}</li>
                ))}
            </ul>
            <button
                onClick={open}
                className="border-b border-pink-500 hover:border-blueblack-500 text-xl text-pink-500 hover:text-blueblack-500 font-medium mx-auto block"
            >
                {t('المزيد','More')}
            </button>
            <Modal
                title={null}
                open={modalState.isOpen}
                onCancel={close}
                closable={false}
                footer={null}
                className="custom-modal"
            >
                <img
                    className="mx-auto -translate-y-1/2 -mb-8 w-[150px] aspect-square object-cover rounded-full object-top"
                    src={imgSrc}
                />
                <ul className="sm:text-lg list-disc space-y-2 text-blueblack-500 pb-8 px-4 sm:px-16">
                    {completeList &&
                        completeList.map((item) => <li>{item}</li>)}
                </ul>
            </Modal>
        </motion.div>
    );
};
const Section = ({
    imgSrc,
    name,
    list,
    alternate,
    last,
    delay,
}: {
    imgSrc: string;
    name: string;
    list: string[];
    alternate?: boolean;
    last?: boolean;
    delay?: number;
}) => {
    const isDesktop = useMediaQuery("lg");
    return isDesktop ? (
        <motion.div {...up(delay)} className="grid grid-cols-[45%10%45%]">
            <img
                className={`py-8 mx-auto ${alternate && "order-3"}`}
                src={imgSrc}
                alt=""
            />
            <div className={`${alternate && "order-2"}`}>
                <div className="rounded-full mx-auto bg-[#fafafa] border-2 border-pink-500 w-[40px] aspect-square"></div>
                <div className="h-full w-[2px] bg-pink-500 mx-auto"></div>
                {last && (
                    <div className="rounded-full mx-auto bg-pink-500 border-2 border-pink-500 w-[40px] aspect-square"></div>
                )}
            </div>
            <div className={`p-8 ${alternate && "order-1"}`}>
                <h4 className="point-before text-2xl font-medium mb-4">
                    {name}
                </h4>
                <ul className="text-lg list-disc space-y-2 text-blueblack-500 pb-8 px-8">
                    {list.map((item) => (
                        <li>{item}</li>
                    ))}
                </ul>
            </div>
        </motion.div>
    ) : (
        <div className="grid">
            <img className={`py-8 mx-auto`} src={imgSrc} alt="" />
            <div className={`p-6`}>
                <h4 className="point-before text-2xl font-medium mb-4">
                    {name}
                </h4>
                <ul className="sm:text-lg list-disc space-y-2 text-blueblack-500 pb-8 px-4">
                    {list.map((item) => (
                        <li>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

const TargetSections = () => {
    const t = useTranslate();
    return (
        <>
            <Section
                imgSrc="/images/decore/books-and-cuppng.png"
                name={t("المعرفة والفهم", "Knowledge and understanding")}
                list={[
                    t(
                        "أن يتعرف الطالب على الجلسة الصحيحة ووضع اليدين علي الة البيانو",
                        "To familiarize the student with the correct sitting and placement of hands on the piano."
                    ),
                    t(
                        "أن يتعرف الطالب على أساسيات العزف على آلة البيانو وقراءة النوتة الموسيقية",
                        "To familiarize the student with the basics of playing the piano and reading musical notes"
                    ),
                ]}
            />
            <Section
                imgSrc="/images/decore/working-on-computer.png"
                name={t("المهارات الذهنية", "Mental skills")}
                list={[
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
                alternate
            />
            <Section
                imgSrc="/images/decore/studying-with-book-and-laptop.png"
                name={t(
                    "المهارات المهنية والعملية",
                    "Professional and practical skills"
                )}
                list={[
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
            />
            <Section
                imgSrc="/images/decore/headphones-taking-notes.png"
                name={t(
                    "المهارات العامة والقابلة للانتقال",
                    "General and transferable skills"
                )}
                list={[
                    t(
                        "توجيه اهتمامات الطلاب لهواية محببه إليهم مثل العزف على الآلات الموسيقية واستخدامها الاستخدام الأمثل",
                        "Directing students' interests to a hobby they like, such as playing musical instruments and using them optimally"
                    ),
                    t(
                        "تبادل الثقة بالنفس لدي الطلاب من خلال عزف الآلة والتمكن من الأداء الجيد",
                        "Exchanging the students' self-confidence by playing the instrument and being able to perform well"
                    ),
                ]}
                alternate
                last
            />
        </>
    );
};
const Supervisors = () => {
    const t = useTranslate();
    return (
        <div className="grid lg:grid-cols-2 2xl:grid-cols-3 gap-8 my-32">
            <Card
                imgSrc="images/dr_ali.jpg"
                name={t("أ.د/ علي حسين النجار", "Prof. Ali Hussein Al-Najjar")}
                list={[
                    t(
                        "منصب: أستاذ الآداء ( بيانو) بقسم التربية الموسيقية بكلية التربية النوعية، جامعة عين شمس.",
                        "Position: Professor of performance (piano) in the Department of Music Education at the Faculty of Specific Education, Ain Shams University."
                    ),
                    t(
                        "المدير السابق: تولى منصب مدير مركز الفنون الأسبق بكلية التربية النوعية، جامعة عين شمس.",
                        "Former Director: Served as Director of the Art Center at the Faculty of Specific Education, Ain Shams University."
                    ),
                ]}
                completeList={[
                    t(
                        "المنصب: أستاذ في أداء البيانو في قسم تعليم الموسيقى بجامعة عين شمس.",
                        "Position: Professor of Performance (Piano) in the Department of Music Education at Ain Shams University."
                    ),
                    t(
                        "المدير السابق: شغل منصب مدير المركز الفني في كلية التربية الخاصة بجامعة عين شمس.",
                        "Former Director: Served as the Director of the Art Center at the Faculty of Specific Education, Ain Shams University."
                    ),
                    t(
                        "الإشراف: شارك في إشراف عدة رسائل ماجستير ودكتوراه في مجال تعليم الموسيقى.",
                        "Supervision: Participated in the supervision of several master's and doctoral dissertations in the field of music education."
                    ),
                    t(
                        "التأليفات الموسيقية: لديه العديد من القطع الموسيقية المؤلفة خصيصًا للبيانو.",
                        "Musical Compositions: Has composed numerous musical pieces specifically for the piano."
                    ),
                    t(
                        "مشاركة في الحفلات الموسيقية: قدم دور القائد الأول وعازف البيانو في العديد من الحفلات التي أقيمت في دار الأوبرا المصرية.",
                        "Concert Participation: Acted as a maestro and pianist in various concerts held at the Egyptian Opera House."
                    ),
                    t(
                        "عضوية في لجنة المحكمين: عضو في اللجنة المسؤولة عن فحص الإنتاج العلمي لوظائف الأساتذة والمدرسين المساعدين في قطاع تعليم الموسيقى.",
                        "Committee Membership: Member of the arbitrators committee responsible for examining scientific production for the positions of professors and assistant professors in the Music Education Sector."
                    ),
                ]}
                delay={0.2}
            />
            <Card
                imgSrc="images/dr_abrar.jpg"
                name={t(
                    "أ.د/ أبرار مصطفى إبراهيم",
                    "Prof. Abrar Mustafa Ibrahim"
                )}
                list={[
                    t(
                        "منصب: أستاذ النظريات والتأليف بقسم التربية الموسيقية بكلية التربية النوعية، جامعة أسيوط.",
                        "Position: Professor of Theories and Composition in the Department of Music Education at the Faculty of Specific Education, Assiut University."
                    ),
                    t(
                        "المدير السابق: تولى منصب نائب عميد كلية التربية النوعية لشئون التعليم والطلاب، جامعة أسيوط.",
                        "Former Director: Served as Vice Dean of the Faculty of Specific Education for Education and Student Affairs, Assiut University."
                    ),
                ]}
                completeList={[
                    t(
                        "المنصب: أستاذ في النظريات والتأليف في قسم تعليم الموسيقى بجامعة أسيوط.",
                        "Position: Professor of Theories and Composition in the Department of Musical Education at Assiut University."
                    ),
                    t(
                        "نائب العميد: يتولى منصب نائب العميد لشؤون التعليم والطلاب في كلية التربية الخاصة بجامعة أسيوط.",
                        "Vice Dean: Holds the position of Vice Dean of the Faculty of Specific Education for Education and Student Affairs at Assiut University."
                    ),
                    t(
                        "الإشراف: مشاركة فعالة في إشراف العديد من رسائل الماجستير والدكتوراه في مجال تعليم الموسيقى.",
                        "Supervision: Actively involved in supervising numerous master's and doctoral dissertations in the field of music education."
                    ),
                    t(
                        "المنشورات: له العديد من المنشورات في مجال النظريات والتأليف.",
                        "Publications: Has authored multiple publications in the area of theories and composition."
                    ),
                    t(
                        "عضوية في اللجنة العليا للأنشطة الطلابية.",
                        "Committee Membership: Member of the Higher Committee for Student Activities."
                    ),
                    t(
                        "عضوية في لجنة المحكمين المسؤولة عن فحص الإنتاج العلمي لوظائف الأساتذة والمدرسين المساعدين في قطاع تعليم الموسيقى.",
                        "Committee Membership: Member of the Arbitrators Committee responsible for examining scientific production for the positions of professors and assistant professors in the Music Education Sector."
                    ),
                ]}
            />
            <Card
                imgSrc="images/dr_saad.jpg"
                name={t("د/ سعد حسن محي الدين", "Dr. Saad Hassan Mohie Eldin")}
                list={[
                    t(
                        "منصب: مدرس بقسم تكنولوجيا التعليم بكلية التربية النوعية، جامعة أسيوط.",
                        "Position: Lecturer in the Department of Educational Technology at the Faculty of Specific Education, Assiut University."
                    ),
                    t(
                        "المدير السابق: تولى منصب نائب مدير وحدة ضمان الجودة بكلية التربية النوعية، جامعة أسيوط.",
                        "Former Director: Served as Deputy Director of the Quality Assurance Unit at the Faculty of Specific Education, Assiut University."
                    ),
                ]}
                delay={0.4}
                completeList={[
                    t(
                        "المنصب: محاضر في قسم التكنولوجيا التعليمية بكلية التربية الخاصة بجامعة أسيوط.",
                        "Position: Lecturer in the Department of Educational Technology at Assiut University's Faculty of Specific Education.",
                    ),
                    t(
                        "نائب المدير: يشغل منصب نائب مدير وحدة ضمان الجودة في كلية التربية الخاصة.",
                        "Deputy Director: Holds the role of Deputy Director of the Quality Assurance Unit at the Faculty of Specific Education.",
                    ),
                    t(
                        "المشرف: يشرف على وحدة التقويم والقياس في كلية التربية الخاصة.",
                        "Supervisor: Oversees the Evaluation and Measurement Unit at the Faculty of Specific Education.",
                    ),
                    t(
                        "عضوية في لجنة إعداد الدورات الإلكترونية لدرجة البكالوريوس.",
                        "Committee Membership: Member of the Committee for Preparing Electronic Courses for the Bachelor's Degree.",
                    ),
                    t(
                        "الإشراف: مشاركة فعالة في إشراف العديد من رسائل الماجستير والدكتوراه.",
                        "Supervision: Actively involved in supervising numerous master's and doctoral dissertations.",
                    ),
                    t(
                        "المنشورات: له العديد من المنشورات في مجال التكنولوجيا التعليمية والحواسيب.",
                        "Publications: Has authored multiple publications in the field of educational technology and computers.",
                    ),
                ]}
            />
        </div>
    );
};

const SiteContents = () => {
    const t = useTranslate();
    return (
        <div className="grid grid-cols-1 gap-8">
            <SiteContentItem
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
            />
            <SiteContentItem
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
            />
            <SiteContentItem
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
            />
            <SiteContentItem
                title={t("سلالم دو/,صول/ك", "stairs du/,sol/k")}
                s1={t(
                    "اداء السلالم الكبيرة واقاربها الصغار",
                    "Perform large ladders and their smaller relatives"
                )}
                s2={t(
                    "انتقال اثر تعلم شروط الاداء الخاصة بالسلالم المقررة على باقي السلالم الاخرى",
                    "The transfer of the effect of learning the performance conditions of the prescribed scales on the rest of the other scales"
                )}
                s3={t(
                    "تحليل عزفي للسلالم الكبيرة واقاربها",
                    "Instrumental analysis of the major scales and their relatives"
                )}
            />
            <SiteContentItem
                title={t(
                    "تمارين من كتاب Beyer op.101",
                    "Exercises from the book Beyer op.101"
                )}
                s1={t(
                    "اداء تمارين ذات الحان بسيطة",
                    "Perform simple melodic exercises"
                )}
                s2={t(
                    "تحليل التمارين والثقة بالنفس اثناء الاداء",
                    "Analysis of exercises and self-confidence during performance"
                )}
                s3={t(
                    "تطبيق المفاهيم التعبيرية اثناء اداء التمارين ذات الالحان البسيطة",
                    "Apply expressive concepts while performing exercises with simple melodies"
                )}
            />
            <SiteContentItem
                title={t(
                    "مقطوعة شرقية بسيطة تناسب مستوى المتعلم",
                    "A simple oriental piece that suits the learner's level"
                )}
                s1={t("اداء مقطوعة ذات طابع شرقي", "An oriental performance")}
                s2={t(
                    "تنمبة التذوق والاحساس بالذات اثناء العزف و القدرة على تحليل المقطوعات الشرقية",
                    "Develop taste and sense of self while playing and the ability to analyze oriental compositions"
                )}
                s3={t(
                    "الادراك الحسي و السعي للمؤلفات الشرقية البسيطة والقدرة على تميزها",
                    "Sensory perception and pursuit of simple oriental compositions and the ability to distinguish them"
                )}
            />
            <SiteContentItem
                title={t(
                    "مقطوعة غربية بسيطة من اي عصر",
                    "a simple western piece from any era"
                )}
                s1={t("اداء مقطوعة ذات طابع غربي", "Western performance")}
                s2={t(
                    "تنمبة التذوق والاحساس بالذات اثناء العزف و القدرة على تحليل المقطوعات الغربية",
                    "Develop taste and sense of self while playing, and the ability to analyze Western compositions"
                )}
                s3={t(
                    "الادراك الحسي و السعي للمؤلفات الغربية البسيطة والقدرة على تميزها",
                    "Perception and pursuit of simple Western compositions and the ability to distinguish them"
                )}
            />
        </div>
    );
};
const SiteContentItem = ({
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
    delay?: number;
}) => {
    const t = useTranslate();
    return (
        <motion.div {...up(delay)} className="block">
            <h4 className="point-before text-2xl font-medium mb-4">{title}</h4>
            <ul className="text-lg list-disc space-y-2 text-blueblack-500 pb-8 px-8">
                <li>
                    <span className="font-medium">
                        {t("المعارف الرئيسية", "Key knowledge")} :{" "}
                    </span>
                    {s1}
                </li>
                <li>
                    <span className="font-medium">
                        {t("مهارات مهنية", "Professional Skills")} :{" "}
                    </span>
                    {s2}
                </li>
                <li>
                    <span className="font-medium">
                        {t("مهارات عامة", "General skills")} :{" "}
                    </span>
                    {s3}
                </li>
            </ul>
        </motion.div>
    );
};
