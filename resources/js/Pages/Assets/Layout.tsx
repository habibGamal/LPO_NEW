import React from "react";
import { motion } from "framer-motion";
import { animateUp } from "../../Animation/Up";
import useTranslate from "../../Hooks/useTranslate";
import SectionTitle from "../../Components/SectionTitle";
export default function Layout({ children }: { children: JSX.Element }) {
    const t = useTranslate();
    return (
        <section className=" min-h-[calc(100vh-53px-57px)]">
            <div className="container lg:py-16 py-4 text-center lg:text-align-inherit">
                <SectionTitle
                    className="!m-16"
                    title={t("الفيديوهات و الصور", "Images | Videos")}
                />
                {children}
            </div>
        </section>
    );
}
