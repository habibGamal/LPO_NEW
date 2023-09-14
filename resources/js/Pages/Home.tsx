import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import React from "react";
import useTranslate from "../Hooks/useTranslate";
import { Inertia } from "@inertiajs/inertia";
import { up } from "../Animation/movements";
import { Facebook, Whatsapp } from "iconsax-react";
import HomeTitle from "../Components/HomeTitle";
import Contact from "./Contact";
const NUMBER_OF_SLIDES = 3;

export default function Home() {
    const [activeSlide, setSlide] = useState(1);
    const isSlideActive = (slideId: number) => activeSlide === slideId;
    useEffect(() => {
        const interval = setInterval(() => {
            setSlide((state) => (state < NUMBER_OF_SLIDES ? state + 1 : 1));
        }, 5000);
        return () => {
            clearInterval(interval);
        };
    }, [setSlide]);
    const t = useTranslate();
    return (
        <>
            <header className="bg-transparent py-16 slider">
                <div className="slides">
                    <img
                        className={`${isSlideActive(1) ? "active" : ""}`}
                        src="images/slider/1.jpg"
                        alt=""
                    />
                    <img
                        className={`${
                            isSlideActive(2) ? "active" : ""
                        } fix-position`}
                        src="images/slider/2.jpg"
                        alt=""
                    />
                    <img
                        className={`${isSlideActive(3) ? "active" : ""}`}
                        src="images/slider/3.jpg"
                        alt=""
                    />
                </div>
                <div className="container relative z-30">
                    <div className="flex items-center justify-center lg:justify-between">
                        <div className="flex flex-col text-center justify-center items-center mx-auto min-h-[550px] ">
                            <motion.p
                                {...up(0)}
                                className="uppercase text-5xl text-white font-bold mb-12 leading-tight lg:text-6xl "
                            >
                                learning <br />{" "}
                                <span className="text-main">piano online</span>
                            </motion.p>
                        </div>
                    </div>
                </div>
            </header>
            {/** zoom */}
            <section className="container px-4 my-32 lg:my-64">
                <div className="grid items-center gap-16 lg:gap-8 lg:justify-items-center relative lg:grid-cols-2 p-8 bg-white rounded-3xl lg:text-align-inherit lg:mx-16 xl:mx-32">
                    <div className="order-2 lg:order-1">
                        <HomeTitle>
                            {t("جلسات زووم", "zoom video")} <br />{" "}
                            {t("", "conferencing")}
                        </HomeTitle>
                        <ul
                            className={`list-disc text-xl 2xl:text-2xl text-blueblack-400 ${t(
                                "mr-8",
                                "ml-8"
                            )}`}
                        >
                            <li>
                                {t(
                                    "تطبيق مثالي لمكالمات الفيديو في مكان العمل.",
                                    "Perfect app for workplace video chats."
                                )}
                            </li>
                            <li>
                                {t(
                                    "فعّال، منظم، وعالي الجودة.",
                                    "Efficient, organized, and high-quality"
                                )}
                            </li>
                            <li>
                                {t(
                                    "جدولة محكمة وتعيين إشعارات.",
                                    "Schedule tightly and set notifications"
                                )}
                            </li>
                            <li>
                                {t(
                                    "متاح على عدة منصات.",
                                    "Accessible on multiple platforms"
                                )}
                            </li>
                        </ul>
                    </div>
                    <div className="order-1 mt-[-20%]">
                        <img
                            className="w-[80%] mx-auto"
                            src="./images/zoom_home.png"
                            alt=""
                        />
                    </div>
                    <img
                        className={`w-1/3 absolute top-0 ${t(
                            "right-0 translate-x-1/3",
                            "left-0 -translate-x-1/3"
                        )} -translate-y-1/4  z-[-1] hidden lg:block`}
                        src="./images/decore/headphones.png"
                        alt=""
                    />
                </div>
            </section>
            {/** quiz samples */}
            <section className="container px-4 my-32 lg:my-64">
                <div className="flex bg-white rounded-3xl flex-col-reverse lg:flex-row items-center lg:gap-8 lg:text-align-inherit lg:mx-16 xl:mx-32">
                    <div className="relative p-8 lg:px-10 2xl:px-16">
                        <HomeTitle>
                            {t("نماذج امتحانات", "Quiz Samples")}
                        </HomeTitle>
                        <p className="text-xl 2xl:text-2xl px-2 text-blueblack-400">
                            {t(
                                "الاختبارات أمر حاسم لتقييم قدرات الطلاب وقياس مستويات إنجازهم. لضمان الفعالية، يجب أن تكون الاختبارات مصممة بشكل جيد وموحدة للحصول على قياسات وتقييمات دقيقة.",
                                "Tests are crucial for assessing students' abilities and measuring their achievement levels. To ensure effectiveness, tests should be well-designed and standardized for accurate measurement and evaluation."
                            )}
                        </p>
                        <img
                            className={`w-[60px] lg:w-[170px] absolute top-12 lg:top-32 ${t(
                                "right-[97%] lg:right-0 translate-x-[115%]",
                                "left-[97%] lg:left-0 -translate-x-[115%]"
                            )}  -translate-y-1/2`}
                            src="./images/decore/checklist.png"
                            alt=""
                        />
                    </div>
                    <div className="rounded-3xl bg-blueblack-500 p-8">
                        <img
                            className="w-full"
                            src="./images/quiz.png"
                            alt=""
                        />
                    </div>
                </div>
            </section>
            <Contact />
            {t(
                <video key="arabic" className="w-full" autoPlay loop muted>
                    <source src="/videos/lpo_arabic.mp4" type="video/mp4" />
                </video>,

                <video key="english" className="w-full" autoPlay loop muted>
                    <source
                        src="/videos/lpo_english.mp4"
                        type="video/mp4"
                    />
                </video>
            )}
        </>
    );
}
