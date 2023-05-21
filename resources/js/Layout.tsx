import { Link } from "@inertiajs/inertia-react";
import React, { useContext, useEffect, useRef, useState } from "react";
import useTranslate from "./Hooks/useTranslate";
import { ContextApi } from "./Contexts/AppContext";
import NavLink from "./Components/NavLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Admin from "./Components/Admin";
import NotAuth from "./Components/NotAuth";
import Auth from "./Components/Auth";
// import { faArrowUp, faClose, faEarth, faNavicon } from '@fortawesome/free-solid-svg-icons';
import { faArrowUp } from "@fortawesome/free-solid-svg-icons/faArrowUp";
import { faClose } from "@fortawesome/free-solid-svg-icons/faClose";
import { faEarth } from "@fortawesome/free-solid-svg-icons/faEarth";
import { faNavicon } from "@fortawesome/free-solid-svg-icons/faNavicon";
import { Button } from "./lib/Antd";
import SemiAuth from "./Components/SemiAuth";

const Logo = () => (
    <Link href="/">
        <img className="w-[50px]" src="/images/logo.png" />
    </Link>
);

const DismissableLayer = ({
    hideNav,
    navState,
}: {
    hideNav: () => void;
    navState: boolean;
}) => (
    <div
        onClick={hideNav}
        className={`fixed top-0 left-0 w-screen ${
            navState ? "h-screen" : "h-0"
        } bg-black opacity-40 z-40`}
    ></div>
);

const Nav = () => {
    const [navState, setNavState] = useState(false);
    const [_, setAppState] = useContext(ContextApi)!;
    const hideNav = () => {
        if (navState) setNavState(false);
    };
    const toggleLanguage = () => {
        hideNav();
        setAppState((state) => ({
            ...state,
            lang: state.lang === "ar" ? "en" : "ar",
        }));
    };
    const t = useTranslate();
    return (
        <nav className="bg-ov-white ">
            <div className="container flex items-center justify-between py-2">
                <Logo />
                <div className="flex gap-4 items-center">
                    <DismissableLayer hideNav={hideNav} navState={navState} />
                    <ul
                        className={`${
                            navState
                                ? "translate-x-0 opacity-100"
                                : t(
                                      "-translate-x-full opacity-0",
                                      "translate-x-full opacity-0"
                                  )
                        }  ${t(
                            "left-0",
                            "right-0"
                        )} flex nav transition-all shadow 2xl:translate-x-0 2xl:opacity-100 2xl:shadow-none 2xl:items-center items-start 2xl:flex gap-6 font-bold`}
                    >
                        <NavLink
                            onClick={hideNav}
                            href="/"
                            name={t("الرئيسية", "Home")}
                        />
                        <NavLink
                            onClick={hideNav}
                            href="/about"
                            name={t("عنا", "About")}
                        />
                        <NavLink
                            onClick={hideNav}
                            href="/assets"
                            name={t("صور وفيديوهات", "Images & Videos")}
                        />
                        <Auth>
                            <NavLink
                                onClick={hideNav}
                                href="/books"
                                name={t("المواد", "Material")}
                            />
                            {/* <NavLink onClick={hideNav} href="/articles" name={t('معلومات عن البيانو', 'Piano Info')} /> */}
                            <NavLink
                                onClick={hideNav}
                                href="/meetings/online"
                                name={t("الجلسات", "Meetings")}
                            />
                            <NavLink
                                onClick={hideNav}
                                href="/quiz"
                                name={t("الامتحانات", "Quiz")}
                            />
                        </Auth>
                        {/* <NavLink onClick={hideNav} href="/images_show" name={t('الصور', 'Images')} /> */}
                        <NavLink
                            onClick={hideNav}
                            href="/about-program"
                            name={t("عن البرنامج", "About Program")}
                        />
                        <NavLink
                            onClick={hideNav}
                            href="/contact"
                            name={t("تواصل معنا", "Contact")}
                        />
                        <NavLink
                            onClick={hideNav}
                            href="/feedback"
                            name={t("انطباعك", "Feedback")}
                        />
                        <Admin>
                            <NavLink
                                onClick={hideNav}
                                href="/dashboard"
                                name={t("لوحة التحكم", "Dashboard")}
                            />
                        </Admin>
                        <SemiAuth>
                            <NavLink
                                onClick={hideNav}
                                href="/logout"
                                name={t("تسجيل الخروج", "Logout")}
                            />
                        </SemiAuth>
                        <NotAuth>
                            <NavLink
                                onClick={hideNav}
                                href="/login"
                                name={t("تسجيل الدخول", "Login")}
                            />
                            <NavLink
                                onClick={hideNav}
                                href="/register"
                                name={t("انشاء حساب", "Register")}
                            />
                        </NotAuth>
                    </ul>
                    <Button
                        key={0}
                        className={`fixed z-[60] top-2 ${t(
                            "left-6",
                            "right-6"
                        )} ${navState || "hidden"}`}
                        onClick={() => setNavState(false)}
                        icon={<FontAwesomeIcon size="2x" icon={faClose} />}
                    />
                    <div id="navbars" className="flex items-center gap-4">
                        <Button
                            onClick={toggleLanguage}
                            icon={<FontAwesomeIcon size="2x" icon={faEarth} />}
                        />
                        <button
                            id="n1avbars"
                            className="2xl:hidden"
                            onClick={() => setNavState(!navState)}
                        >
                            <FontAwesomeIcon icon={faNavicon} size="2x" />
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

const ToTopBtn = ({
    innerRef,
}: {
    innerRef: React.RefObject<HTMLButtonElement>;
}) => (
    <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        ref={innerRef}
        className="btn to-top hidden"
    >
        <FontAwesomeIcon icon={faArrowUp} />
    </button>
);

const Footer = () => (
    <footer className="bg-black text-white p-4 text-center">
        All Copyrights &copy; reserved for Dr. Maha Ahmed Qassem & Eng. Habib
        Gamal {new Date().getFullYear()} v.1.0 last update 2023-05-21
    </footer>
);
export default function Layout(props: { children: JSX.Element }) {
    const toTopBtn = useRef<HTMLButtonElement>(null);
    const t = useTranslate();
    useEffect(() => {
        window.onscroll = () => {
            if (window.scrollY > 0) {
                toTopBtn.current?.classList.remove("hidden");
            }

            if (window.scrollY === 0) {
                toTopBtn.current?.classList.add("hidden");
            }
        };
    }, []);
    return (
        <div className="flex flex-col justify-between min-h-screen">
            <div className={`${t("rtl", "")} App relative overflow-hidden`}>
                <Nav />
                {props.children}
            </div>
            <ToTopBtn innerRef={toTopBtn} />
            <Footer />
        </div>
    );
}
