import { Inertia } from "@inertiajs/inertia";
import React from "react";
import Choice from "../../Components/ChoiceCard";
import useTranslate from "../../Hooks/useTranslate";
import Layout from "./Layout";

export default function OnlineAndOffline() {
    const t = useTranslate();
    return (
        <Layout>
            <div
                key={1}
                className="grid lg:grid-cols-2 gap-36 items-strech justify-items-center"
            >
                <Choice
                    imgSrc="/images/online.png"
                    title={t("اونلاين", "Online")}
                    desc={t(
                        "القسم المخصص للاجتماعات عبر الإنترنت في منصتك مصمم لتسهيل دروس البيانو الافتراضية والجلسات التفاعلية بين المدرسين والطلاب.",
                        "The Online Meetings section of your platform is designed to facilitate virtual piano lessons and interactive sessions between instructors and students "
                    )}
                    btnText={t("استكشف", "Explore")}
                    onClick={() => {
                        Inertia.get("/meetings/categories/preivous");
                    }}
                    key={1}
                />
                <Choice
                    imgSrc="/images/offline.png"
                    title={t("اوفلاين", "Offline")}
                    desc={t(
                        "القسم المخصص للاجتماعات والأنشطة الخاصة بتعلم البيانو في الواقع",
                        "The Offline Meetings section is dedicated to facilitating in-person meetings and activities related to piano learning"
                    )}
                    btnText={t("استكشف", "Explore")}
                    onClick={() => {
                        Inertia.get("/meetings/categories/offline");
                    }}
                    key={2}
                />
            </div>
        </Layout>
    );
}
