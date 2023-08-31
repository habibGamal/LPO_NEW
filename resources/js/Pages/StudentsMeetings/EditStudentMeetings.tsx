import { Inertia } from "@inertiajs/inertia";
import { Button, Select, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import React from "react";
import { Meeting, MeetingDB } from "../../Models/Meeting";

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

export default function EditStudentMeetings({
    student,
    meetings,
}: {
    student: StudentDB;
    meetings: MeetingDB[];
}) {
    const studentMeetings = new Student(student).meetingsArray;
    console.log(meetings);
    const data = meetings.map(
        (meeting) =>
            ({
                studentVideoNumber: studentMeetings.find(
                    (studentMeeting) => studentMeeting.meetingId === meeting.id
                )?.videoNumber,
                meeting: new Meeting(meeting),
            } as CompositeMeetingStudent)
    );
    const [statefullData, setStatefullData] = React.useState(data);
    const columns: ColumnsType<CompositeMeetingStudent> = [
        {
            title: "Name",
            dataIndex: ["meeting", "name"],
        },

        {
            title: "State",
            dataIndex: ["meeting", "state"],
            render: (state) => {
                if (state === "offline") return <Tag>Offline</Tag>;
                return <Tag color="green">Online</Tag>;
            },
        },
        {
            title: "Date",
            dataIndex: ["meeting", "date"],
        },
        {
            title: "Video Number",
            dataIndex: "",
            render: (model: CompositeMeetingStudent) => {
                const options = model.meeting.videos.map((_, i) => ({
                    value: i,
                    label: i + 1,
                }));
                const onChange = (value: number) => {
                    setStatefullData(
                        statefullData.map((composite) => {
                            if (composite.meeting.id === model.meeting.id) {
                                composite.studentVideoNumber = value;
                            }
                            return composite;
                        })
                    );
                };
                return (
                    <Select
                        defaultValue={model.studentVideoNumber}
                        style={{ width: 120 }}
                        onChange={onChange}
                        options={[
                            { value: -1, label: "Not Assigned" },
                            ...options,
                        ]}
                    />
                );
            },
        },
        {
            title: "Show Video",
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
                            Show Video
                        </a>
                    </Button>
                ) : (
                    <span>Not Assigned</span>
                );
            },
        },
    ];
    const save = () => {
        Inertia.post("/update-student-meetings", {
            id: student.id,
            meetings: JSON.stringify(
                statefullData.map((composite) => ({
                    meetingId: composite.meeting.id,
                    videoNumber:
                        composite.studentVideoNumber == undefined
                            ? null
                            : composite.studentVideoNumber,
                }))
            ),
        });
    };
    return (
        <div className="container">
            <div className="my-8">
                <h2 className="text-2xl lg:text-4xl my-8 font-sans">
                    Meetings of {student.firstName} {student.secondName}
                </h2>
                <Button onClick={save} className="float-right" type="primary">
                    Save
                </Button>
                <Table
                    pagination={false}
                    columns={columns}
                    dataSource={statefullData}
                />
            </div>
        </div>
    );
}
