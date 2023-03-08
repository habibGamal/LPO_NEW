import React from 'react'
import useTranslate from '../../Hooks/useTranslate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons/faCaretRight'
import { faEdit } from '@fortawesome/free-solid-svg-icons/faEdit'
import { faTrash } from '@fortawesome/free-solid-svg-icons/faTrash'
import { Button, Divider, Empty, Form, Input, message, Modal, Tabs } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons'
import { Inertia } from '@inertiajs/inertia';
import { Assets as AssetsModel, AssetsDB, AssetsName, AssetsType, VideosAssets } from '../../Models/Assets';
import useModal from '../../Hooks/useModal';
import Layout from './Layout';
import Admin from '../../Components/Admin';
import { usePage } from '@inertiajs/inertia-react';
import VideosScreen from '../../Components/VideosScreen';
const AddGroupOfVideos = ({ assets }: { assets: AssetsModel }) => {
    const [form] = Form.useForm();
    const { errors } = usePage().props;
    const submit = (values: any) => {
        Inertia.post(AssetsModel.insertVideos(), {
            ...values,
            name: assets.name,
            assets_type: assets.assetsType
        }, {
            onSuccess: () => {
                form.resetFields();
                message.success('Data uploaded Successfuly')
            }
        });
    }
    console.log(errors);

    return (
        <div className="rounded bg-slate-50 shadow-sm p-4 my-16">
            <span className='mb-4 block'>
                <FontAwesomeIcon icon={faCaretRight} /> Add new group video
            </span>
            <Form
                form={form}
                name='add_new_assets'
                className="max-w-[500px] mx-auto"
                initialValues={{ remember: true }}
                onFinish={submit}
                autoComplete="off"
                method='post'
                encType='multipart/form-data'
            >
                <Form.Item
                    name="group_name"
                    rules={[
                        { required: true, message: "Please insert the name of the group" }
                    ]}
                >
                    <Input placeholder='Group Name' />
                </Form.Item>
                <Form.Item
                    name="playlist_id"
                    validateStatus={errors?.playlist_id && 'error'}
                    help={errors?.playlist_id}
                >
                    <Input placeholder='Playlist id' />
                </Form.Item>
                <Divider />
                <Form.List
                    name="videos"
                >
                    {(fields, { add, remove }, { errors }) => (
                        <>
                            {fields.map((field, index) => (
                                <Form.Item
                                    label={`Video no ${index + 1}`}
                                    required={true}
                                    key={field.key}
                                >
                                    <Form.Item
                                        {...field}
                                        validateTrigger={['onChange', 'onBlur']}
                                        rules={[
                                            {
                                                required: true,
                                                whitespace: true,
                                                message: "Please input embed code here",
                                            },
                                        ]}
                                        noStyle
                                    >
                                        <Input.TextArea placeholder="Embed code" style={{ width: '80%' }} />
                                    </Form.Item>
                                    <MinusCircleOutlined
                                        className="dynamic-delete-button mx-2"
                                        onClick={() => remove(field.name)}
                                    />
                                </Form.Item>
                            ))}
                            <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
                                <Button
                                    type="dashed"
                                    onClick={() => add()}
                                    icon={<PlusOutlined />}
                                >
                                    Add video
                                </Button>
                                <Form.ErrorList errors={errors} />
                            </Form.Item>
                        </>
                    )}
                </Form.List>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>

            </Form>
        </div>
    )
}
const EditVideos = ({ group, name, close }: { group: VideosAssets, name: AssetsName, close: () => void }) => {
    const [form] = Form.useForm();
    const { errors } = usePage().props;
    const submit = (values: any) => {
        Inertia.post(AssetsModel.editVideos(), {
            ...values,
            group_id: group.id,
            name: name,
            assets_type: AssetsType.videos
        }, {
            onSuccess: () => {
                form.resetFields();
                message.success('Data uploaded Successfuly')
                close();
            }
        });
    }
    return (
        <Form
            form={form}
            name='edit_videos'
            className="max-w-[500px] mx-auto"
            initialValues={{ remember: true }}
            onFinish={submit}
            autoComplete="off"
            method='post'
            encType='multipart/form-data'
        >
            <Form.Item
                name="group_name"
                initialValue={group.name}
                rules={[
                    { required: true, message: "Please insert the name of the group" }
                ]}
            >
                <Input placeholder='Group Name' />
            </Form.Item>
            <Form.Item
                name="playlist_id"
                validateStatus={errors?.playlist_id && 'error'}
                help={errors?.playlist_id}
            >
                <Input placeholder='Playlist id' />
            </Form.Item>
            <Divider />
            <Form.List
                name="videos"
                initialValue={group.videos}
            >
                {(fields, { add, remove }, { errors }) => (
                    <>
                        {fields.map((field, index) => (
                            <Form.Item
                                label={`Video no ${index + 1}`}
                                required={true}
                                key={field.key}
                            >
                                <Form.Item
                                    {...field}
                                    validateTrigger={['onChange', 'onBlur']}
                                    rules={[
                                        {
                                            required: true,
                                            whitespace: true,
                                            message: "Please input embed code here",
                                        },
                                    ]}
                                    noStyle
                                >
                                    <Input.TextArea placeholder="Embed code" style={{ width: '80%' }} />
                                </Form.Item>
                                <MinusCircleOutlined
                                    className="dynamic-delete-button mx-2"
                                    onClick={() => remove(field.name)}
                                />
                            </Form.Item>
                        ))}
                        <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
                            <Button
                                type="dashed"
                                onClick={() => add()}
                                icon={<PlusOutlined />}
                            >
                                Add video
                            </Button>
                            <Form.ErrorList errors={errors} />
                        </Form.Item>
                    </>
                )}
            </Form.List>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Submit Changes
                </Button>
            </Form.Item>

        </Form>
    )
}
export default function VideosIndex({ assetsDB }: { assetsDB: AssetsDB }) {
    const t = useTranslate();
    const [{ isOpen, data: modalData }, open, close, setModalData] = useModal<{ group: VideosAssets, name: AssetsName }>();
    const assets = new AssetsModel(assetsDB);
    const deleteVideoGroup = (group: VideosAssets) => Inertia.post(AssetsModel.removeVideos(), { group_id: group.id, name: assets.name, assets_type: assets.assetsType })
    return (
        <Layout>
            <>
                <Admin>
                    <AddGroupOfVideos assets={assets} />
                </Admin>
                {
                    assets.videos.length === 0 ?
                        <Empty description="No data yet" /> :
                        <Tabs
                            defaultActiveKey="1"
                            tabPosition={'top'}
                            className="bg-slate-50 rounded p-4"
                            items={assets.videos.map((group, i) => {
                                return {
                                    label:
                                        <div className='flex gap-4'>
                                            <p>{group.name}</p>
                                            <Admin>
                                                <Button onClick={() => setModalData({ group, name: assets.name })} size='small' type='dashed' icon={<FontAwesomeIcon className='text-gray-600' icon={faEdit} />} />
                                                <Button onClick={() => deleteVideoGroup(group)} size='small' danger icon={<FontAwesomeIcon icon={faTrash} />} />
                                            </Admin>
                                        </div>,
                                    key: group.id,
                                    disabled: i === 28,
                                    children:
                                        <>
                                            {/* {
                                                group.videos.map(
                                                    (video, i) =>
                                                        <div key={i} className="rounded shadow p-4 bg-gray-100 my-4">
                                                            <div key={i} className="meeting-iframe" dangerouslySetInnerHTML={{ __html: video }} />
                                                        </div>
                                                )
                                            } */}
                                            <VideosScreen videos={group.videos.map((link,index)=>({link,name:'video '+(index +1)}))} />
                                        </>,
                                };
                            })}
                        />
                }
                <Modal title="Edit Videos" open={isOpen} onCancel={close} footer={null} destroyOnClose>
                    {
                        modalData &&
                        <EditVideos group={modalData.group} name={modalData.name} close={close} />
                    }
                </Modal>
            </>
        </Layout>
    )
}
