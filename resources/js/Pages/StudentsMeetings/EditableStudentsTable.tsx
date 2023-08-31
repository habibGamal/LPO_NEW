import { Inertia } from "@inertiajs/inertia";
import { Link } from "@inertiajs/inertia-react";
import { Button, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import React from "react";

interface StudentDB {
    id: number;
    firstName: string;
    secondName: string;
    show_meetings: string;
}

const toggelShowMeetings = (student: StudentDB) => {
    Inertia.post("/update-student-show-meetings", {
        id: student.id,
        show_meetings: !student.show_meetings,
    });
};

const columns: ColumnsType<StudentDB> = [
    {
        title: "Name",
        dataIndex: "",
        render: (student: StudentDB) => (
            <span>
                {student.firstName} {student.secondName}
            </span>
        ),
    },
    {
        title: "Show his meetings",
        dataIndex: "",
        render: (student: StudentDB) =>
            student.show_meetings ? (
                <Button onClick={() => toggelShowMeetings(student)} danger>
                    Hide his meetings
                </Button>
            ) : (
                <Button
                    onClick={() => toggelShowMeetings(student)}
                    type="primary"
                >
                    Show his meetings
                </Button>
            ),
    },
    {
        title: "Show his meetings",
        dataIndex: "",
        render: (student: StudentDB) => (
            <Button>
                <Link href={`/edit-student-meetings/${student.id}`}>
                    Assign meetings
                </Link>
            </Button>
        ),
    },
];

export default function EditableStudentsTable({
    students,
}: {
    students: StudentDB[];
}) {
    console.log(students);
    return (
        <div className="container">
            <div className="my-8">
                <h2 className="text-2xl lg:text-4xl my-8 font-sans">
                    Editable Students Table
                </h2>
                <Table
                    pagination={false}
                    columns={columns}
                    dataSource={students}
                />
            </div>
        </div>
    );
}
