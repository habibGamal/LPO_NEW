import { Button, Form, Input } from 'antd';
import { LockOutlined } from '@ant-design/icons';
import React from 'react'
import { Inertia } from '@inertiajs/inertia';
import { usePage } from '@inertiajs/inertia-react';

export default function ResetPassword({ token }: { token: any }) {
    console.log(token);

    const { errors } = usePage().props;
    const queries: any = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, query: string) => searchParams.get(query),
    });
    const reset = async (values: any) => {
        Inertia.post('/reset-password', {
            email: queries.email,
            token,
            ...values
        });
    }
    return (
        <div className="container">
            <div className="rounded bg-ov-white shadow-sm p-4 max-w-[400px] mx-auto my-16">
                <h2 className="text-center text-xl mb-8">Reset Your Password</h2>
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{ remember: true }}
                    onFinish={reset}
                >
                    <Form.Item
                        name="password"
                        validateStatus={errors?.password && 'error'}
                        help={errors?.password}
                        rules={[{ required: true, message: 'Please input your Password!' }]}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Enter New Password"
                        />
                    </Form.Item>
                    <Form.Item
                        name="password_confirmation"
                        validateStatus={errors?.password && 'error'}
                        help={errors?.password}
                        rules={[{ required: true, message: 'Please input your Password!' }]}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Confirm New Password"
                        />
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
