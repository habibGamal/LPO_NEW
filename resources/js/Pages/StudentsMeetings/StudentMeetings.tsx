import { Button, Select, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import React from "react";
import { Meeting, MeetingDB } from "../../Models/Meeting";
import useTranslate from "../../Hooks/useTranslate";

interface StudentDB {
    id: number;
    firstName: string;
    secondName: string;
    meetings: string;
}

interface CompositeMeetingStudent {
    studentVideoNumber?: number;
    meeting: Meeting;
}
type StudentMeetings = { meetingId: number; videoNumber: number }[];

class Student {
    id: number;
    firstName: string;
    secondName: string;
    meetings: string;
    constructor(student: StudentDB) {
        this.id = student.id;
        this.firstName = student.firstName;
        this.secondName = student.secondName;
        this.meetings = student.meetings;
    }
    get meetingsArray(): StudentMeetings {
        return JSON.parse(this.meetings);
    }
}
export default function StudentMeetings({
    student,
    meetings,
}: {
    student: StudentDB;
    meetings: MeetingDB[];
}) {
    const studentMeetings = new Student(student).meetingsArray;
    const data = meetings.map(
        (meeting) =>
            ({
                studentVideoNumber: studentMeetings.find(
                    (studentMeeting) => studentMeeting.meetingId === meeting.id
                )?.videoNumber,
                meeting: new Meeting(meeting),
            } as CompositeMeetingStudent)
    );
    const t = useTranslate();

    const columns: ColumnsType<CompositeMeetingStudent> = [
        {
            title: t("الاسم", "Name"),
            dataIndex: ["meeting", "name"],
        },

        {
            title: t("الحالة", "State"),
            dataIndex: ["meeting", "state"],
            render: (state) => {
                if (state === "offline") return <Tag>Offline</Tag>;
                return <Tag color="green">Online</Tag>;
            },
        },
        {
            title: t("التاريخ", "Date"),
            dataIndex: ["meeting", "date"],
        },

        {
            title: t("عرض", "Show"),
            dataIndex: "",
            render: (model: CompositeMeetingStudent) => {
                const embededLink =
                    model.studentVideoNumber !== undefined &&
                    model.studentVideoNumber !== -1
                        ? model.meeting.videos[model.studentVideoNumber]
                        : null;
                return embededLink ? (
                    <Button>
                        <a
                            href={`/show-meeting?embededLink=${embededLink}`}
                            target="_blank"
                        >
                            {t("عرض الجلسة", "Show Meeting")}
                        </a>
                    </Button>
                ) : (
                    <span>{t("لا يوجد", "Not found")}</span>
                );
            },
        },
    ];

    return (
        <div className="container">
            <div className="my-8">
                <h2 className="text-2xl lg:text-4xl my-8 font-sans">
                    {t("جلسات", "Meetings of")} {student.firstName}{" "}
                    {student.secondName}
                </h2>
                <Table
                    className="overflow-x-auto"
                    pagination={false}
                    columns={columns}
                    dataSource={data}
                />
            </div>
        </div>
    );
}
