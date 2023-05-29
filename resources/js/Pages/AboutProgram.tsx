import React, { useContext } from "react";
import { ContextApi } from "../Contexts/AppContext";
import useTranslate from "../Hooks/useTranslate";
import IDCard from "../Components/IDCard";
import SectionTitle from "../Components/SectionTitle";
export default function AboutProgram() {
    const t = useTranslate();
    const [{ lang }] = useContext(ContextApi)!;
    return (
        <div className="container lg:text-align-inherit py-8">
            <div className="relative my-16">
                <div className="absolute grid place-items-center inset-0">
                    <div className="text-center md:mb-16">
                        <h3 className="text-2xl md:text-3xl lg:text-4xl mb-2 md:mb-4 font-medium capitalize text-white">
                            {t("عن البرنامج", "About the program")}
                        </h3>
                        <h2 className=" md:text-lg lg:text-2xl mb-4 font-medium capitalize text-[#E0E9F5]">
                            {t(
                                <>
                                    اكتشف رحلتك الموسيقية مع <br />
                                    منصتنا لتعلم البيانو عبر الإنترنت.
                                </>,
                                <>
                                    Unlock Your Musical Journey <br /> with Our
                                    Online Piano Platform
                                </>
                            )}
                        </h2>
                    </div>
                </div>
                <img className="hidden md:block" src="/images/about_bg.png" />
                <img
                    className="hidden sm:block md:hidden"
                    src="/images/about_bg_small.png"
                />
                <img
                    className="block sm:hidden"
                    src="/images/about_bg_xsmall.png"
                />
            </div>

            <div className="grid lg:grid-cols-2 items-center rounded-3xl bg-pink-500 my-16">
                <img
                    className="w-full rounded-3xl object-[50%8%] max-h-[620px] object-cover"
                    src="images/dr_maha.jpg"
                />

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

            <SectionTitle
                className="mt-24"
                title={t("تحت إشراف كلاً من", "Under the supervision of")}
            />
            <ul className="m-6 flex flex-col gap-4">
                <IDCard
                    title={t(
                        "أ.د/ علي حسين النجار",
                        "Prof. Ali Hussein Al-Najjar"
                    )}
                    content={t(
                        "أستاذ الأداء ( البيانو ) بقسم التربية الموسيقية – كلية التربية النوعية – جامعة عين شمس",
                        "Professor of performance (piano) at the Department of Music Education - Faculty of Specific Education - Ain Shams University"
                    )}
                />
                <IDCard
                    title={t(
                        "أ.د/ أبرار مصطفى إبراهيم",
                        "Prof. Abrar Mustafa Ibrahim"
                    )}
                    content={t(
                        "أستاذ النظريات والتأليف بقسم التربية الموسيقية ووكيل شئون التعليم والطلاب – كلية التربية النوعية جامعة أسيوط",
                        "Professor of Theory and Composition, Department of Music Education and Vice Dean for Education and Student Affairs - Faculty of Specific Education, Assiut University"
                    )}
                />
                <IDCard
                    title={t(
                        "د/ سعد حسن محي الدين",
                        "Dr. Saad Hassan Mohie Eldin"
                    )}
                    content={t(
                        "مدرس تكنولوجيا التعليم – بقسم تكنولوجيا التعليم – كلية التربية النوعية – جامعة أسيوط",
                        "Instructor of Educational Technology - Department of Educational Technology - Faculty of Specific Education - Assiut University"
                    )}
                />
            </ul>

            <SectionTitle
                className="mt-24"
                title={t("الفريق القائم على عمل البرنامج", "Team Work")}
            />
            <ul className="m-6 flex flex-col gap-4">
                <IDCard
                    title={t("م/ فكتور اميل سعيد", "Eng/ Victor Emil Said")}
                    content={t("Sound Engineering", "Sound Engineering")}
                />
                <IDCard
                    title={t("م/ حبيب جمال حبيب", "Eng/ Habib Gamal Habib")}
                    content={t("Web Developer - 01021153539", "Web Developer - 01021153539")}
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
