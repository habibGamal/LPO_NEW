"use client";
import { Upload, UploadFile, UploadProps } from "antd";
import React, { useState } from "react";
import ImgCrop from "antd-img-crop";
import { PlusOutlined } from "@ant-design/icons";

export default function UploadImage(props: any) {
    const [fileList, setFileList] = useState<UploadFile[]>([]);
    const triggerChange = (changedValue: any) => {
        props.onChange?.({
            fileList,
            ...props.value,
            ...changedValue,
        });
    };
    const uploadProps: UploadProps = {
        onRemove: (file) => {
            const index = fileList.indexOf(file);
            const newFileList = fileList.slice();
            newFileList.splice(index, 1);
            setFileList(newFileList);
        },
        customRequest: ({ file, onSuccess }) => {
            setTimeout(() => {
                if (onSuccess) {
                    onSuccess("ok");
                }
            }, 0);
        },
        maxCount: props.maxCount ?? 1,
        onChange: ({ file, fileList }) => {
            setFileList(fileList);
            triggerChange({ fileList });
        },
        fileList,
        listType: "picture-card",
        onPreview: async (file) => {
            let src = file.url;
            if (!src) {
                src = await new Promise((resolve) => {
                    const reader = new FileReader();
                    reader.readAsDataURL(file.originFileObj as Blob);
                    reader.onload = () => resolve(reader.result as string);
                });
            }
            const image = new Image();
            image.src = src as string;
            const imgWindow = window.open(src);
            if (imgWindow) {
                imgWindow.document.write(image.outerHTML);
            }
        },
    };
    return (
        <ImgCrop>
            <Upload {...uploadProps}>
                <div>
                    <PlusOutlined />
                    <div style={{ marginTop: 8 }}>Upload</div>
                </div>
            </Upload>
        </ImgCrop>
    );
}
