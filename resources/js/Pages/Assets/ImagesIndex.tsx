import React, { useEffect, useState } from "react";
import useTranslate from "../../Hooks/useTranslate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons/faCaretRight";
import { faEdit } from "@fortawesome/free-solid-svg-icons/faEdit";
import { faTrash } from "@fortawesome/free-solid-svg-icons/faTrash";
import {
    Button,
    Carousel,
    Divider,
    Empty,
    Form,
    Input,
    message,
    Modal,
    Upload,
    UploadFile,
    UploadProps,
} from "antd";
// import { useForm } from 'antd/lib/form/Form';
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Inertia } from "@inertiajs/inertia";
import {
    Assets as AssetsModel,
    AssetsDB,
    AssetsName,
    ImagesAssets,
    AssetsType,
} from "../../Models/Assets";
import useModal from "../../Hooks/useModal";
import ImagesHandler from "../../Helpers/ImagesHandler";
import Layout from "./Layout";
import AntdImgCrop from "antd-img-crop";
import Admin from "../../Components/Admin";
import imageCompression from "browser-image-compression";
const AddImages = ({ assets }: { assets: AssetsModel }) => {
    const [form] = Form.useForm();
    const uploadSingleProps: UploadProps = {
        customRequest: ({ file, onSuccess }) => {
            setTimeout(() => {
                onSuccess!("ok");
            }, 0);
        },
        multiple: false,
        maxCount: 1,
    };
    const uploadMultiProps: UploadProps = {
        customRequest: ({ file, onSuccess }) => {
            setTimeout(() => {
                onSuccess!("ok");
            }, 0);
        },
        multiple: true,
    };
    const submit = async (values: any) => {
        console.log(values);
        let content: any[] = [];
        if (values.collection?.fileList) {
            const collection: File[] = values.collection.fileList.map(
                (file: any) => file.originFileObj
            );
            const collectionCompressed = await Promise.all(
                collection.map((file: any) =>
                    imageCompression(file, { maxSizeMB: 0.1 })
                )
            );
            content = collectionCompressed.map((file) => ({
                image: new File([file], file.name, { type: file.type }),
                desc: "",
            }));
        }
        if (values.content) content = [...content, ...values.content];
        console.log(content);
        Inertia.post(
            AssetsModel.insertImages(),
            {
                ...values,
                content,
                collection:null,
                name: assets.name,
                assets_type: assets.assetsType,
            },
            {
                onSuccess: () => {
                    form.resetFields();
                    message.success("Data uploaded Successfuly");
                },
            }
        );
    };
    return (
        <div className="rounded bg-slate-50 shadow-sm p-4 my-16">
            <span className="mb-4 block">
                <FontAwesomeIcon icon={faCaretRight} /> Add new image
            </span>
            <Form
                form={form}
                name="add_new_assets"
                className="max-w-[500px] mx-auto"
                initialValues={{ remember: true }}
                onFinish={submit}
                autoComplete="off"
                method="post"
                encType="multipart/form-data"
            >
                <Form.Item name="collection" label="Add a collection">
                    <Upload {...uploadMultiProps} listType="picture-card">
                        <div>
                            <PlusOutlined />
                            <div style={{ marginTop: 8 }}>Upload</div>
                        </div>
                    </Upload>
                </Form.Item>
                <Divider />
                <Form.List name="content">
                    {(fields, { add, remove }) => (
                        <>
                            {fields.length === 0 && (
                                <Empty description="Add fields as you need" />
                            )}
                            {fields.map(({ key, name, ...restField }) => (
                                <div key={key}>
                                    <Form.Item
                                        {...restField}
                                        name={[name, "image"]}
                                    >
                                        <AntdImgCrop
                                            aspect={160 / 347}
                                            onModalOk={(file) =>
                                                form.setFieldValue(
                                                    ["content", name, "image"],
                                                    file
                                                )
                                            }
                                        >
                                            <Upload
                                                key={key}
                                                {...uploadSingleProps}
                                                listType="picture-card"
                                            >
                                                <div>
                                                    <PlusOutlined />
                                                    <div
                                                        style={{ marginTop: 8 }}
                                                    >
                                                        Upload
                                                    </div>
                                                </div>
                                            </Upload>
                                        </AntdImgCrop>
                                    </Form.Item>
                                    <Form.Item
                                        {...restField}
                                        name={[name, "desc"]}
                                    >
                                        <Input placeholder="Description" />
                                    </Form.Item>
                                    <Button
                                        className="float-right"
                                        onClick={() => remove(name)}
                                        danger
                                        type="link"
                                    >
                                        <MinusCircleOutlined /> Remove
                                    </Button>
                                    <Divider />
                                </div>
                            ))}
                            <Form.Item>
                                <Button
                                    type="dashed"
                                    onClick={() => add()}
                                    block
                                    icon={<PlusOutlined />}
                                >
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
    );
};
const EditImage = ({
    node,
    name,
    close,
}: {
    node: ImagesAssets;
    name: AssetsName;
    close: () => void;
}) => {
    const [form] = Form.useForm();
    const [fileList, setFileList] = useState<UploadFile[]>(
        ImagesHandler.getPathsAsUploadFiles([node.rawPath])
    );
    const uploadProps: UploadProps = {
        customRequest: ({ file, onSuccess }) => {
            setTimeout(() => {
                onSuccess!("ok");
            }, 0);
        },
        fileList,
        onChange: ({ fileList }) => setFileList(fileList),
        multiple: false,
        maxCount: 1,
    };
    const submit = (values: any) => {
        values.content.id = node.id;
        Inertia.post(
            AssetsModel.editImages(),
            {
                ...values,
                name: name,
                assets_type: AssetsType.images,
            },
            {
                onSuccess: () => {
                    form.resetFields();
                    message.success("Data uploaded Successfuly");
                    close();
                },
            }
        );
    };
    return (
        <Form
            form={form}
            name="add_new_assets"
            className="max-w-[500px] mx-auto"
            initialValues={{ remember: true }}
            onFinish={submit}
            autoComplete="off"
            method="post"
            encType="multipart/form-data"
        >
            <Form.Item name={["content", "image"]}>
                <AntdImgCrop
                    aspect={160 / 347}
                    onModalOk={(file) =>
                        form.setFieldValue(["content", "image"], file)
                    }
                >
                    <Upload {...uploadProps} listType="picture-card">
                        <div>
                            <PlusOutlined />
                            <div style={{ marginTop: 8 }}>Upload</div>
                        </div>
                    </Upload>
                </AntdImgCrop>
            </Form.Item>
            <Form.Item name={["content", "desc"]} initialValue={node.data.desc}>
                <Input placeholder="Description" />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};
export default function ImagesIndex({ assetsDB }: { assetsDB: AssetsDB }) {
    const t = useTranslate();
    const [{ isOpen, data: modalData }, open, close, setModalData] = useModal<{
        node: ImagesAssets;
        name: AssetsName;
    }>();
    const assets = new AssetsModel(assetsDB);
    const removeImage = (node: ImagesAssets) =>
        Inertia.post(AssetsModel.removeImage(), {
            node_id: node.id,
            name: assets.name,
            assets_type: assets.assetsType,
        });
    return (
        <Layout>
            <>
                <Admin>
                    <AddImages assets={assets} />
                </Admin>
                <Carousel
                    className="rounded shadow p-4 bg-gray-100 my-4"
                    dots={{ className: "text-black" }}
                >
                    {assets.images.map((node) => (
                        <div key={node.id} className="w-full relative">
                            <img
                                className="w-full aspect-video object-cover object-[50%40%]"
                                src={node.path}
                            />
                            <span className="block absolute bottom-8 left-1/2 -translate-x-1/2 px-4 py-2 rounded bg-[#0e0e0e61] text-white">
                                {node.data.desc}
                            </span>
                            <Admin>
                                <div className="absolute bottom-8 left-4 bg-gray-50 rounded px-4 py-2 flex gap-4">
                                    <Button
                                        onClick={() =>
                                            setModalData({
                                                node,
                                                name: assets.name,
                                            })
                                        }
                                        type="dashed"
                                        size="small"
                                        icon={<FontAwesomeIcon icon={faEdit} />}
                                    />
                                    <Button
                                        onClick={() => removeImage(node)}
                                        danger
                                        size="small"
                                        icon={
                                            <FontAwesomeIcon icon={faTrash} />
                                        }
                                    />
                                </div>
                            </Admin>
                        </div>
                    ))}
                </Carousel>

                <Modal
                    title="Edit asset"
                    open={isOpen}
                    onCancel={close}
                    footer={null}
                    destroyOnClose
                >
                    {modalData && (
                        <EditImage
                            node={modalData.node}
                            name={modalData.name}
                            close={close}
                        />
                    )}
                </Modal>
            </>
        </Layout>
    );
}
