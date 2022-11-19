import { Button, Form, Input } from 'antd';
import {  UserOutlined } from '@ant-design/icons';
import React from 'react'
import { Inertia } from '@inertiajs/inertia';
import { usePage } from '@inertiajs/inertia-react';

export default function ForgetPassword() {
    const { errors } = usePage().props;
    const reset = async (values: any) => {
        Inertia.post('/forgot-password', values);
    }
    return (
        <div className="container">
            <div className="rounded bg-ov-white shadow-sm p-4 max-w-[400px] mx-auto my-16">
                <h2 className="text-center text-xl mb-8">Forget Password</h2>
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{ remember: true }}
                    onFinish={reset}
                >
                    <Form.Item
                        name="email"
                        validateStatus={errors?.email && 'error'}
                        help={errors?.email}
                        rules={[{ required: true, message: 'Please input your Email!' }]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
                    </Form.Item>
                    <Form.Item className='text-center mb-0'>
                        <Button type="primary" htmlType="submit" className="login-form-button mx-auto">
                            Reset Password
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}
