import { Meeting as MeetingModel, MeetingDB } from "../../Models/Meeting"
import { motion } from "framer-motion"
import React from "react";
import { Link } from "@inertiajs/inertia-react";
import useTranslate from "../../Hooks/useTranslate";
import Steps from "../../Components/Steps";
import useSteps from "../../Hooks/useSteps";
import Choice from "../../Components/ChoiceCard";
import { animateUp } from "../../Animation/Up";
export default function Index({ meetingsDB }: { meetingsDB: MeetingDB[] }) {
    const meetings = meetingsDB.map(meeting => new MeetingModel(meeting));
    const t = useTranslate();
    const [step, nextStep, prevStep] = useSteps()
    return (
        <>
            <section className="bg-ov-white min-h-[calc(100vh-53px-57px)]">
                <div className="container lg:py-16 py-4 text-center lg:text-align-inherit">
                    <motion.h3 {...animateUp} className="text-3xl text-center md:text-4xl lg:text-5xl mb-12 lg:mb-24  font-bold uppercase">
                        {t('شاهد', 'Watch Our')} <br /> <span className="highlight-header"> {t('الجلسات', 'Meetings')}</span>
                    </motion.h3>
                    <Steps index={step} back={prevStep}>
                        <div key={0} className="grid lg:grid-cols-2 gap-8 items-end justify-items-evenly">
                            <Choice
                                imgSrc='/images/videos.png'
                                title='Online'
                                onClick={() => nextStep()}
                            />
                            <Choice
                                imgSrc='/images/images.png'
                                title='Offline'
                                onClick={() => nextStep()}
                            />
                        </div>
                        <section className="container my-8 grid grid-cols-auto md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {
                                meetings.map(meeting => <Meeting key={meeting.id} meeting={meeting} />)
                            }
                        </section>
                    </Steps>
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
                meeting.state !== 'ended' &&
                <a target="_blank" href={meeting.link} className="rounded bg-second hover:bg-main hover:text-white text-white shadow font-sans p-2">Join Meeting</a>
            }
            {
                meeting.state === 'ended' &&
                <Link href={`/meetings/${meeting.id}`} className="rounded bg-second hover:bg-main hover:text-white text-white shadow font-sans p-2">
                    Show Meeting
                </Link>
            }
        </div>
    </motion.div>
)
