import { Meeting as MeetingModel, MeetingDB } from "../../Models/Meeting"
import { motion } from "framer-motion"
import React from "react";
import { Link } from "@inertiajs/inertia-react";
import useTranslate from "../../Hooks/useTranslate";
import { animateUp } from "../../Animation/Up";
import { Empty } from "antd";
export default function Index({ meetingsDB }: { meetingsDB: MeetingDB[] }) {
    const meetings = meetingsDB.map(meeting => new MeetingModel(meeting));
    const t = useTranslate();
    return (
        <>
            <section className="bg-ov-white min-h-[calc(100vh-53px-57px)]">
                <div className="container lg:py-16 py-4 text-center lg:text-align-inherit">
                    <motion.h3 {...animateUp} className="text-3xl text-center md:text-4xl lg:text-5xl mb-12 lg:mb-24  font-bold uppercase">
                        {t('شاهد', 'Watch Our')} <br /> <span className="highlight-header"> {t('الجلسات', 'Meetings')}</span>
                    </motion.h3>
                    {
                        meetings.length === 0 ?
                            <Empty description={t("لا توجد جلسات هنا","Nothing here yet")} /> :
                            <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4">
                                {meetings.map(
                                    meeting => <Meeting meeting={meeting} />
                                )}
                            </div>
                    }
                </div>
            </section>

        </>
    )
}

const Meeting = ({ meeting }: { meeting: MeetingModel }) => (
    <motion.div {...animateUp} className="meeting relative cursor-pointer border-4 border-second rounded-lg shadow-xl p-4">
        <span className="block absolute top-0 left-12 bg-main p-2 text-white text-xl rounded-b">{meeting.year}</span>
        <h4 className=" text-4xl sm:text-5xl lg:text-6xl  font-normal text-center py-16 border-b-2 border-main">@ {meeting.month} / {meeting.day}</h4>
        <div className="flex flex-wrap gap-4 justify-between m-4 items-center mb-0">
            <span className="text-xl font-bold block">{meeting.name}</span>
            {
                (meeting.state === 'not_started' || meeting.state === 'in_meeting') ?
                    <a target="_blank" href={meeting.link} className="rounded bg-second hover:bg-main hover:text-white text-white shadow font-sans p-2">
                        Join Meeting
                    </a> :
                    <Link href={`/meetings/${meeting.id}`} className="rounded bg-second hover:bg-main hover:text-white text-white shadow font-sans p-2">
                        Show Meeting
                    </Link>
            }
        </div>
    </motion.div>
)
