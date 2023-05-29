import React, { useEffect, useRef } from "react";
import useTranslate from "./Hooks/useTranslate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons/faArrowUp";
import Nav from "./Components/Nav";

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
    <footer className="bg-[#DADADA] text-[#545454] p-4 text-center">
        All Copyrights &copy; reserved for Dr. Maha Ahmed Qassem & Eng. Habib
        Gamal {new Date().getFullYear()}
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
