import { Inertia } from "@inertiajs/inertia";
import React from "react";
import Choice from "../../Components/ChoiceCard";
import useTranslate from "../../Hooks/useTranslate";
import { Assets, AssetsName } from "../../Models/Assets";
import Layout from "./Layout";

export default function Images() {
    const t = useTranslate();
    return (
        <Layout>
            <div
                key={1}
                className="flex flex-wrap justify-evenly items-stretch gap-36"
            >
                <Choice
                    imgSrc="/images/decore/students.png"
                    title={t("الطلاب", "Students")}
                    desc={t(
                        "اكتشف مجموعة واسعة من موارد الطلاب ، بما في ذلك مواد التدريب والتمارين وموسيقى الأوراق.",
                        "Discover a wide range of student resources, including practice materials, exercises, sheets music."
                    )}
                    btnText={t("استكشف الصور", "Explore Images")}
                    onClick={() => {
                        Inertia.get(Assets.getAssets(AssetsName.studentImages));
                    }}
                    key={1}
                />
                <Choice
                    imgSrc="/images/decore/working-on-computer.png"
                    title={t("جلسات", "Sessions")}
                    desc={t(
                        "استمتع بالوصول إلى موارد حصرية للمدرسين، تشمل مواد تعليمية فريدة.",
                        "Access exclusive resources for instructors, including teaching materials."
                    )}
                    btnText={t("استكشف الصور", "Explore Images")}
                    onClick={() => {
                        Inertia.get(Assets.getAssets(AssetsName.authorImages));
                    }}
                    key={2}
                />
            </div>
        </Layout>
    );
}
