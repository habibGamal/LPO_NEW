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
                title={t("ادارة الموقع", "Website Management")}
                desc={t(
                    <>
                        إدارة الموقع من أستاذة في تخصص عزف <br />
                        البيانو والموسيقى وتكنولوجيا التعليم
                    </>,
                    <>
                        The management of the site is from <br />a professor
                        specializing in piano, music
                        <br />
                        and educational technology
                    </>
                )}
                imgSlug="about"
            />

            <Journal />

            <SectionTitle
                className="mt-28"
                title={t(
                    "المراجعة والاشراف العلمي للبيانو والموسقى",
                    "Scientific review and supervision of piano and music"
                )}
            />
            <Supervisors />
            <SectionTitle
                className="mt-28"
                title={t(
                    "المراجعة والاشراف التكنولوجي",
                    "Technological review and supervision"
                )}
            />
            <TechSupervisors />

            <SectionTitle
                className="mt-28"
                title={t("فريق متابعة الموقع", "Team Work")}
            />
            <ul className="m-6 flex flex-col gap-4">
                <IDCard
                    title={t("م/ فكتور اميل سعيد", "Eng/ Victor Emil Said")}
                    content={t("Sound Engineering", "Sound Engineering")}
                />
                <IDCard
                    title={t("م/ حبيب جمال حبيب", "Eng/ Habib Gamal Habib")}
                    content={t(
                        "Web Developer - 01021153539",
                        "Web Developer - 01021153539"
                    )}
                />
                <IDCard
                    title={t("م/ روبرتو أيمن إيميل", "Eng/ Roberto Ayman Emil")}
                    content={t(
                        "Graphic Designer, Monterey",
                        "Graphic Designer, Monterey"
                    )}
                />
            </ul>
        </div>
    );
}

const Journal = () => {
    const t = useTranslate();
    const [modalState, open, close] = useModal();
    return (
        <div className="bg-white rounded-3xl max-w-[500px] mx-auto p-4">
            <h4 className="text-xl md:text-2xl 2xl:text-3xl font-medium text-center pt-2 pb-6">
                {t(
                    `إدارة الموقع والتنفيذ التعليمي`,
                    "Site management and educational implementation"
                )}
            </h4>
            <img
                className="w-full rounded-3xl object-[50%8%] max-h-[300px] object-cover"
                src="images/dr_maha.jpg"
            />
            <h4 className="p-4 text-xl md:text-2xl 2xl:text-3xl font-bold text-center font-ZenMaruGothic mb-6">
                {t("م.م/ مها احمد قاسم", "lecturer Maha Ahmed Qassem")}
            </h4>
            <button
                onClick={open}
                className="mx-auto block md:py-4 py-2 px-6 text-lg rounded-2xl bg-blueblack-500 hover:bg-blueblack-600 font-medium text-white"
            >
                More
            </button>
            <Modal
                title={null}
                open={modalState.isOpen}
                onCancel={close}
                footer={null}
                className="custom-modal"
            >
                <img
                    className="w-full rounded-3xl object-[50%8%] max-h-[300px] object-cover"
                    src="images/dr_maha.jpg"
                />
                <div className="px-10 sm:px-16 py-8">
                    <h4 className="text-xl md:text-2xl 2xl:text-3xl font-bold text-center font-ZenMaruGothic mb-6">
                        {t("م.م/ مها احمد قاسم.", "Maha Ahmed Qassem.")}
                    </h4>
                    <ul className="md:text-lg space-y-2 mb-8 list-disc text-[#505050]">
                        <li>
                            {t(
                                "محاضر مساعد في قسم التربية الموسيقية بكلية التربية النوعية في جامعة أسيوط.",
                                "Assistant Lecturer at the Department of Musical Education in the Faculty of Specific Education at Assiut University."
                            )}
                        </li>
                        <li>
                            {t(
                                "عضو اللجنه العليا للانشطة بجامعة أسيوط",
                                "Member of the Supreme Committee for Activities at Assiut University"
                            )}
                        </li>
                        <li>
                            {t(
                                "عضو في وحدة التقويم والقياس بكلية التربية النوعية جامعة أسيوط",
                                "Member of the Evaluation and Measurement Unit at the Faculty of Specific Education, Assiut University"
                            )}
                        </li>
                        <li>
                            {t(
                                "قامت بتدريب وقيادة فريق الموسيقى في الكلية.",
                                "Train and led the college's musical team."
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
                                'شاركت كعضو في لجنة التحكيم في الموقع الوطني للحاضنات التكنولوجية المتخصصة "إنطلاق" في حاضنة همه',
                                'Participated as a member of the arbitration committee in the national program for specialized technology incubators "Intilaq" at the Hemma incubator.'
                            )}
                        </li>
                        <li>
                            {t(
                                "شاركت كعضو في لجنة التحكيم في برنامج ينو ايجيبت في الحاضنة التكنولوجية همه بجامعة أسيوط",
                                "Participated as a member of the judging committee in the InoEgypt program at the Hemma corporate incubator at Assiut University."
                            )}
                        </li>
                    </ul>
                </div>
            </Modal>
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
        <motion.div
            {...up(delay)}
            className="rounded-3xl bg-white pb-8 mt-32 px-8"
        >
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
                {t("المزيد", "More")}
            </button>
            <Modal
                title={null}
                open={modalState.isOpen}
                onCancel={close}
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
const TechSupervisors = () => {
    const t = useTranslate();
    return (
        <div className="flex justify-center gap-8 my-20">
            <Card
                imgSrc="images/dr_saad.jpg"
                name={t("د/ سعد حسن محي الدين", "Dr. Saad Hassan Mohie Eldin")}
                list={[]}
                delay={0.4}
                completeList={[
                    t(
                        "المنصب: محاضر في قسم التكنولوجيا التعليمية بكلية التربية النوعية بجامعة أسيوط.",
                        "Position: Lecturer in the Department of Educational Technology at Assiut University's Faculty of Specific Education."
                    ),
                    t(
                        "نائب المدير: يشغل منصب نائب مدير وحدة ضمان الجودة في كلية التربية النوعية.",
                        "Deputy Director: Holds the role of Deputy Director of the Quality Assurance Unit at the Faculty of Specific Education."
                    ),
                    t(
                        "المشرف: يشرف على وحدة التقويم والقياس في كلية التربية النوعية.",
                        "Supervisor: Oversees the Evaluation and Measurement Unit at the Faculty of Specific Education."
                    ),
                    t(
                        "عضو في لجنة إعداد الدورات الإلكترونية لدرجة البكالوريوس.",
                        "Committee Membership: Member of the Committee for Preparing Electronic Courses for the Bachelor's Degree."
                    ),
                    t(
                        "الإشراف: مشاركة فعالة في إشراف العديد من رسائل الماجستير والدكتوراه.",
                        "Supervision: Actively involved in supervising numerous master's and doctoral dissertations."
                    ),
                    t(
                        "المنشورات: له العديد من المنشورات في مجال التكنولوجيا التعليمية والحواسيب.",
                        "Publications: Has authored multiple publications in the field of educational technology and computers."
                    ),
                ]}
            />
        </div>
    );
};
const Supervisors = () => {
    const t = useTranslate();
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-20">
            <Card
                imgSrc="images/dr_ali.jpg"
                name={t("أ.د/ علي حسين النجار", "Prof. Ali Hussein Al-Najjar")}
                list={[]}
                completeList={[
                    t(
                        "المنصب: أستاذ في أداء البيانو في قسم التربية الموسيقية بجامعة عين شمس.",
                        "Position: Professor of Performance (Piano) in the Department of Music Education at Ain Shams University."
                    ),
                    t(
                        "المنصب السابق: شغل منصب مدير المركز الفني في كلية التربية النوعية بجامعة عين شمس.",
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
                        "عضو في لجنة المحكمين: عضو في اللجنة المسؤولة عن فحص الإنتاج العلمي لوظائف الأساتذة والمدرسين المساعدين في قطاع تعليم الموسيقى.",
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
                list={[]}
                completeList={[
                    t(
                        "المنصب: أستاذ في النظريات والتأليف في قسم التربية الموسيقية بجامعة أسيوط.",
                        "Position: Professor of Theories and Composition in the Department of Musical Education at Assiut University."
                    ),
                    t(
                        "المنصب السابق:تولت منصب نائب العميد لشؤون التعليم والطلاب في كلية التربية النوعية بجامعة أسيوط.",
                        "Vice Dean: Holds the position of Vice Dean of the Faculty of Specific Education for Education and Student Affairs at Assiut University."
                    ),
                    t(
                        "الإشراف: مشاركة فعالة في إشراف العديد من رسائل الماجستير والدكتوراه في مجال تعليم الموسيقى.",
                        "Supervision: Actively involved in supervising numerous master's and doctoral dissertations in the field of music education."
                    ),
                    t(
                        "المنشورات: لها العديد من المنشورات في مجال النظريات والتأليف.",
                        "Publications: Has authored multiple publications in the area of theories and composition."
                    ),
                    t(
                        "عضو في اللجنة العليا للأنشطة الطلابية بجامعة أسيوط.",
                        "Committee Membership: Member of the Higher Committee for Student Activities."
                    ),
                    t(
                        "عضو في لجنة المحكمين المسؤولة عن فحص الإنتاج العلمي لوظائف الأساتذة والمدرسين المساعدين في قطاع تعليم الموسيقى.",
                        "Committee Membership: Member of the Arbitrators Committee responsible for examining scientific production for the positions of professors and assistant professors in the Music Education Sector."
                    ),
                ]}
            />
        </div>
    );
};
