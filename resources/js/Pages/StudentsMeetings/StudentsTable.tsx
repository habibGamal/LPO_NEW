import { Inertia } from "@inertiajs/inertia";
import { Link } from "@inertiajs/inertia-react";
import { Button, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import React from "react";
import useTranslate from "../../Hooks/useTranslate";

interface StudentDB {
    id: number;
    firstName: string;
    secondName: string;
    arabic_first_name: string;
    arabic_second_name: string;
    avatar_path: string;
    show_meetings: string;
}

export default function StudentsTable({ students }: { students: StudentDB[] }) {
    const t = useTranslate();
    const columns: ColumnsType<StudentDB> = [
        {
            title: t("الاسم", "Name"),
            dataIndex: "",
            render: (student: StudentDB) => {
                const avatarPath = student.avatar_path? "/storage/" + student.avatar_path.replace("public/", "")
                : "/images/default-avatar.png";
                return <img className="w-16 rounded-full" src={avatarPath} alt="" />;
            },
        },
        {
            title: t("الاسم", "Name"),
            dataIndex: "",
            render: (student: StudentDB) => (
                <span>
                    {t(
                        ` ${student.arabic_first_name} ${student.arabic_second_name}`,
                        `${student.firstName} ${student.secondName}`
                    )}
                </span>
            ),
        },
        {
            title: t("عرض الجلسات", "Show his meetings"),
            dataIndex: "",
            render: (student: StudentDB) => (
                <Button>
                    <Link href={`/student-meetings/${student.id}`}>
                        {t("عرض الجلسات", "Show his meetings")}
                    </Link>
                </Button>
            ),
        },
    ];
    return (
        <div className="container">
            <div className="my-8">
                <h2 className="text-2xl lg:text-4xl my-8 font-sans">
                    {t("جلسات الطلاب", "Students Meetings")}
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
