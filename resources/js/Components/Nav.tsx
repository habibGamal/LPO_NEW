import { CloseSquare, HambergerMenu, Login, Translate } from "iconsax-react";
import React, { useContext, useState } from "react";
import NotAuth from "./NotAuth";
import SemiAuth from "./SemiAuth";
import Admin from "./Admin";
import Auth from "./Auth";
import NavLink from "./NavLink";
import { useMediaQuery } from "../Hooks/useMediaQuery";
import useTranslate from "../Hooks/useTranslate";
import { ContextApi } from "../Contexts/AppContext";
import { Link } from "@inertiajs/inertia-react";

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
    const closeSideNav = () => {
        if (navState) setNavState(false);
    };
    const openSideNav = () => {
        if (!navState) setNavState(true);
    };
    const toggleLanguage = () => {
        closeSideNav();
        setAppState((state) => ({
            ...state,
            lang: state.lang === "ar" ? "en" : "ar",
        }));
    };
    const t = useTranslate();

    const largeScreen = useMediaQuery("2xl");

    const navClassName = `${
        navState
            ? "translate-x-0 opacity-100"
            : t("-translate-x-full opacity-0", "translate-x-full opacity-0")
    } ${t("left-0", "right-0")}  nav`;

    // refactoring this component to be more readable

    const NavLinkAction = ({
        href,
        content,
        divider,
    }: {
        href: string;
        content: string;
        divider?: boolean;
    }) => (
        <NavLink
            divider={divider}
            onClick={closeSideNav}
            href={href}
            content={content}
        />
    );

    const PrimaryLinks = () => (
        <>
            <NavLinkAction divider href="/" content={t("الرئيسية", "Home")} />
            <NavLinkAction
                divider
                href="/program-management"
                content={t("ادارة الموقع", "Website Management")}
            />
            <NavLinkAction
                divider
                href="/about-program"
                content={t("عن الموقع واهدافه", "About Program")}
            />
            <NavLinkAction
                divider
                href="/assets"
                content={t("صور وفيديوهات", "Images & Videos")}
            />
            <NavLinkAction
                divider
                href="/contact"
                content={t("تواصل معنا", "Contact")}
            />
        </>
    );

    const DesktopLinks = () => (
        <ul className="flex items-center gap-8">
            <NavLinkAction href="/" content={t("الرئيسية", "Home")} />
            <NavLinkAction
                href="/program-management"
                content={t("ادارة الموقع", "Website Management")}
            />
            <NavLinkAction
                href="/about-program"
                content={t("عن الموقع واهدافه", "About Website and Goals")}
            />
            <NavLinkAction
                href="/assets"
                content={t("صور وفيديوهات", "Images & Videos")}
            />
            <NavLinkAction
                href="/contact"
                content={t("تواصل معنا", "Contact")}
            />
        </ul>
    );

    const Buttons = () => (
        <div className="flex items-center gap-4 text-pink-700">
            <button
                onClick={toggleLanguage}
                className="hover:text-pink-500 transition-colors"
            >
                <Translate />
            </button>
            <NotAuth>
                <Link
                    className="text-lg font-tajawal hover:text-second"
                    onClick={closeSideNav}
                    href="/login"
                >
                    <Login size={28} />
                </Link>
            </NotAuth>
            <button
                onClick={() => setNavState(!navState)}
                className="hover:text-pink-500 transition-colors"
            >
                <HambergerMenu size={36} />
            </button>
        </div>
    );

    const CloseSideNav = () => (
        <button
            onClick={closeSideNav}
            className={`fixed z-[60] top-4 ${t("left-8", "right-8")} ${
                navState || "hidden"
            }`}
        >
            <CloseSquare size={36} />
        </button>
    );

    return (
        <nav className="bg-white py-2">
            <div className="container flex items-center justify-between py-2">
                <Logo />
                <DismissableLayer hideNav={closeSideNav} navState={navState} />
                {largeScreen && <DesktopLinks />}
                <ul className={navClassName}>
                    {!largeScreen && <PrimaryLinks />}

                    <Auth>
                        <NavLinkAction
                            divider
                            href="/books"
                            content={t("الطرق العزفية", "Methods")}
                        />
                        {/* <NavLink onClick={hideNav} href="/articles" name={t('معلومات عن البيانو', 'Piano Info')} /> */}
                        <NavLinkAction
                            divider
                            href="/meetings/online"
                            content={t("الجلسات", "Meetings")}
                        />
                        <NavLinkAction
                            divider
                            href="/quiz"
                            content={t("الامتحانات", "Quiz")}
                        />
                    </Auth>
                    {/* <NavLink onClick={hideNav} href="/images_show" name={t('الصور', 'Images')} /> */}

                    <Admin>
                        <NavLinkAction
                            divider
                            href="/dashboard"
                            content={t("لوحة التحكم", "Dashboard")}
                        />
                    </Admin>

                    <NavLinkAction
                        divider
                        href="/feedback"
                        content={t("تقييم الدارس", "Feedback")}
                    />
                    <SemiAuth>
                        <NavLinkAction
                            divider
                            href="/logout"
                            content={t("تسجيل الخروج", "Logout")}
                        />
                    </SemiAuth>
                    <NotAuth>
                        <NavLinkAction
                            divider
                            href="/register"
                            content={t("انشاء حساب", "Register")}
                        />
                    </NotAuth>
                </ul>
                <CloseSideNav />
                <Buttons />
            </div>
        </nav>
    );
};

export default Nav;
