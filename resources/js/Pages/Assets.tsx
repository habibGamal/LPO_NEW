import React, { useState } from 'react'
import { motion } from 'framer-motion';
import useTranslate from '../Hooks/useTranslate';
import Steps from '../Components/Steps';
import { animateUp } from '../Animation/Up';
import useSteps from '../Hooks/useSteps';
import Choice from '../Components/ChoiceCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight, faEdit } from '@fortawesome/free-solid-svg-icons';
import { Button, Divider, Empty, Form, Input, message, Upload, UploadFile, UploadProps } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons'
import { Inertia } from '@inertiajs/inertia';
import { Assets as AssetsModel, AssetsDB, AssetsName, AssetsType } from '../Models/Assets';
const AddAssets = () => {
    const [form] = useForm();
    const uploadProps: UploadProps = {
        beforeUpload: file => {
            return false;
        },
        multiple: false,
        maxCount: 1,
    };
    const submit = (values: any) => {
        console.log(values.content);
        values.content.map((asset: any) => {
            asset.image = asset.image.file;
            return asset;
        })
        Inertia.post(AssetsModel.insert(), {
            ...values,
            name: AssetsName.authorImages,
            assets_type: AssetsType.images
        }, {
            onSuccess: () => {
                form.resetFields();
                message.success('Data uploaded Successfuly')
            }
        });
    }
    return (
        <div className="rounded bg-slate-50 shadow-sm p-4 my-16">
            <span className='mb-4 block'>
                <FontAwesomeIcon icon={faCaretRight} /> Add new image
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
                <Form.List name="content">
                    {(fields, { add, remove }) => (
                        <>
                            {
                                fields.length === 0 &&
                                <Empty description="Add fields as you need" />
                            }
                            {fields.map(({ key, name, ...restField }) => (
                                <div key={key}>
                                    <Form.Item
                                        {...restField}
                                        name={[name, 'image']}
                                    // rules={[required]}
                                    >
                                        <Upload key={key} {...uploadProps} listType="picture-card">
                                            <div>
                                                <PlusOutlined />
                                                <div style={{ marginTop: 8 }}>Upload</div>
                                            </div>
                                        </Upload>
                                    </Form.Item>
                                    <Form.Item
                                        {...restField}
                                        name={[name, 'desc']}
                                    >
                                        <Input placeholder="Description" />
                                    </Form.Item>
                                    <Button className='float-right' onClick={() => remove(name)} danger type='link'><MinusCircleOutlined /> Remove</Button>
                                    <Divider />
                                </div>
                            ))}
                            <Form.Item>
                                <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                    Add field
                                </Button>
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

export default function Assets({ assetsDB }: { assetsDB?: AssetsDB }) {
    const t = useTranslate();
    const [step, nextStep, prevStep] = useSteps();
    // console.log(JSON.parse(assetsDB?.[0].content));
    const assets = assetsDB ? new AssetsModel(assetsDB) : null;
    return (
        <section className="bg-ov-white min-h-[calc(100vh-53px-57px)]">
            <div className="container lg:py-16 py-4 text-center lg:text-align-inherit">
                <motion.h3 {...animateUp} className="text-3xl text-center md:text-4xl lg:text-5xl mb-12 lg:mb-24  font-bold uppercase">
                    {t('شاهد', 'Watch Our')} <br /> <span className="highlight-header"> {t('الفيديوهات و الصور', 'Images & Videos')}</span>
                </motion.h3>
                <Steps index={step} back={prevStep}>
                    {/* step 1 */}
                    <div key={0} className="grid lg:grid-cols-2 gap-8 items-end justify-items-evenly">
                        <Choice
                            imgSrc='/images/videos.png'
                            title='Videos'
                            onClick={() => nextStep()}
                            key={1}
                        />
                        <Choice
                            imgSrc='/images/images.png'
                            title='Images'
                            onClick={() => nextStep()}
                            key={2}
                        />
                    </div>
                    {/* step 2  */}
                    <div key={1} className="grid lg:grid-cols-2 gap-8 items-end justify-items-evenly">
                        <Choice
                            imgSrc='/images/students.png'
                            title='Students'
                            onClick={() => nextStep()}
                            key={1}
                        />
                        <Choice
                            imgSrc='/images/instructor.png'
                            title='Instructor'
                            onClick={() => nextStep()}
                            key={2}
                        />
                    </div>
                    {/* step 3 */}
                    <>
                        <AddAssets />
                        {
                            assets &&
                            assets.content.map(
                                node =>
                                    <div key={node.id} className="rounded max-w-[200px] shadow p-4 bg-gray-100 my-4">
                                        <img className='max-w-full' src={node.path} />
                                        {node.data.desc}
                                        <Button icon={<FontAwesomeIcon icon={faEdit} />} />
                                    </div>
                            )
                        }
                    </>
                </Steps>
            </div>
        </section>
    )
}
