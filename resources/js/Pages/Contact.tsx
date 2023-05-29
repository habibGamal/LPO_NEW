import React from "react";
import useTranslate from "../Hooks/useTranslate";
import { Facebook, Whatsapp } from "iconsax-react";
import HomeTitle from "../Components/HomeTitle";
export default function Contact() {
    const t = useTranslate();
    return (
        <section className="container px-4 mt-56 mb-16">
                <div className="grid lg:max-h-[400px] gap-8 2xl:p-12 lg:gap-0 lg:grid-cols-2 justify-items-center items-center p-8 lg:mx-16 xl:mx-32 bg-pink-500 rounded-3xl lg:text-align-inherit">
                    <div className=" mt-[-30%]">
                        <img
                            className="mx-auto max-w-[220px] w-[40vw] lg:w-[20vw] mb-4"
                            src="./images/decore/elastic-mobile-profile.png"
                            alt=""
                        />
                    </div>
                    <div className="text-white">
                        <HomeTitle className="!text-white">{t("تواصل معنا", "Contact Us")}</HomeTitle>
                        <ul className={`list-disc  sm:text-xl  mx-8 sm:mx-16`}>
                            <li>
                                <strong> {t("رقم الهاتف", "Phone")}</strong> :
                                01098069075
                            </li>
                            <li>
                                <strong>
                                    {t("البريد الالكتروني", "Email")}
                                </strong>{" "}
                                : maha.ahmed55.890@gmail.com
                            </li>
                        </ul>
                        <div className="flex gap-4 text-[#E0E9F5] p-4 mx-4 sm:mx-8">
                            <a
                                href="https://web.facebook.com/profile.php?id=100010135451853"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <Facebook variant="Bulk" size={56} />
                            </a>
                            <a
                                href="https://wa.me/201098069075"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <Whatsapp variant="Bulk" size={56} />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
    )
}
