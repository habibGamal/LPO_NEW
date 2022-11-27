import { Empty, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import React from 'react';
import useTranslate from '../../Hooks/useTranslate';
import { MeetingDB } from '../../Models/Meeting';
import Layout from './Layout';

interface DataType {
    key: React.Key;
    name: string;
    state: string;
    date: string;
}

const columns: ColumnsType<DataType> = [
    {
        title: 'Name',
        dataIndex: 'name',
    },
    {
        title: 'State',
        dataIndex: 'state',
        render: (name) => <Tag>{name}</Tag>
    },
    {
        title: 'Date',
        dataIndex: 'date',
    },
];


export default function History({ meetingsDB }: { meetingsDB: MeetingDB[] }) {
    const t = useTranslate();
    return (
        <Layout title={t('سجل الجلسات', 'Meetings history')}>
            {
                meetingsDB.length === 0 ?
                    <Empty description={t('لا توجد جلسات','No Meetings yet')} /> :
                    <Table
                        pagination={false}
                        columns={columns}
                        dataSource={meetingsDB.map(({ id, name, state, date }) => ({ key: id, name, state, date }))}
                    />
            }
        </Layout>
    )
}
