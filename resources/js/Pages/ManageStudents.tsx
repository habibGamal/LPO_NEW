import { Button, Descriptions, Switch, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import React, { useState } from 'react';
import { Student, StudentDB } from '../Models/Student';
import { CopyOutlined } from '@ant-design/icons'
import { Inertia } from '@inertiajs/inertia';

interface DataType extends StudentDB {
    // key: React.Key;
    name: string;
    age: number;
    address: string;
}

const columns: ColumnsType<Student> = [
    {
        title: 'Name',
        dataIndex: '',
        render: (student: Student) => <span>{student.firstName} {student.secondName}</span>,
    },
    {
        title: 'Email',
        dataIndex: 'email',
        render: (email: string) =>
            <div className="flex items-center justify-between">
                <span>{email}</span>
                <Button onClick={() => navigator.clipboard.writeText(email)} icon={<CopyOutlined />} />
            </div>
    },
    {
        title: 'Phone',
        dataIndex: 'phone',
    },
    {
        title: 'Country',
        dataIndex: 'country',
    },
    {
        title: 'Level',
        dataIndex: 'level',
        render: (level: string) => {
            const color: any = {
                beginner: 'warning',
                moderate: 'primary',
                advanced: 'success'
            }
            return <Tag color={color[level]}>{level}</Tag>
        }
    },
    {
        title: 'Score',
        dataIndex: 'score',
        render: (score: number|null) => score !== null?score:'-'
    },
    {
        title: 'Activated',
        dataIndex: '',
        render: (student: Student) => {
            return student.active === 1 ? <Button onClick={() => student.deactivate()} danger>Deactive</Button> : <Button type='primary' onClick={() => student.activate()}>Active</Button>
        }
    },
];


export default function ManageStudents({ studentsDB }: { studentsDB: StudentDB[] }) {
    const [selected, setSelected] = useState<Student[]>([]);
    console.log(selected);
    return (
        <div className="container">
            <div className="my-8">
                <h2 className="text-2xl lg:text-4xl my-8 font-sans">Control Users</h2>
                {
                    selected.length > 0 &&
                    <div className="flex flex-row-reverse gap-4 mb-4">
                        <Button onClick={() => {
                            Inertia.post('/deactivate-users', { users: (selected.filter(s => s.active === 1)).map(s => s.userId) })
                        }} danger>Deactive all selected</Button>
                        <Button type='primary' onClick={() => {
                            Inertia.post('/activate-users', { users: (selected.filter(s => s.active === 0)).map(s => s.userId) })
                        }}>Active all selected</Button>
                    </div>
                }
                <Table
                    rowSelection={{
                        type: 'checkbox',
                        onChange: (selectedRowKeys: React.Key[], selectedRows: Student[]) => {
                            // console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
                            setSelected(selectedRows);
                        },
                        getCheckboxProps: (record: Student) => ({
                            // id: record.userId,
                        }),
                    }}
                    expandable={{
                        expandedRowRender: record =>
                            <Descriptions column={2} title="Student Info">
                                <Descriptions.Item label="First language" className='font-bold'>{record.firstLanguage}</Descriptions.Item>
                                <Descriptions.Item label="Gender" className='font-bold'>{record.gender}</Descriptions.Item>
                                <Descriptions.Item label="Second language" className='font-bold'>{record.secondLanguage}</Descriptions.Item>
                                <Descriptions.Item label="Birthday" className='font-bold'>{record.birthday}</Descriptions.Item>
                            </Descriptions>,
                        rowExpandable: record => true,
                    }}

                    pagination={false}
                    columns={columns}
                    dataSource={studentsDB.map(student => new Student(student))}
                />
            </div>
        </div>
    )
}
