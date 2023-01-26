import { faCheckCircle } from '@fortawesome/free-solid-svg-icons/faCheckCircle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Inertia } from '@inertiajs/inertia';
import { usePage } from '@inertiajs/inertia-react';
import { Button, DatePicker, Form, Input, InputNumber, Radio, Select } from 'antd';
import React, { useState } from 'react'
import { countriesList } from '../countries-list';
import useTranslate from '../Hooks/useTranslate';
import MessagePage from '../Components/MessagePage';
export default function Register() {
    const { errors } = usePage().props;
    const [regState, setRegState] = useState(false);
    const register = async (values: any) => {
        // console.log(values.birthday.format('YYYY-MM-DD'));

        Inertia.post('/register', {
            ...values,
            birthday: values?.birthday ? values.birthday.format('YYYY-MM-DD') : null,
        }, {
            onSuccess: () => {
                setRegState(true);
            }
        });
    }
    const t = useTranslate();

    return (
        regState ?
            <MessagePage imgSrc='/images/reg_success.png'>
                <h2 className="text-2xl text-center md:text-3xl lg:text-4xl xl:text-5xl mb-4 lg:mb-8  font-bold uppercase">{t('تم التسجيل ', 'Registeration Done ')} <span className="highlight-header"> {t('بنجاح', 'Successfully ')}</span></h2>
                <FontAwesomeIcon size='6x' className='text-green-400 mt-8' icon={faCheckCircle} />
                <span className='block my-8 underline text-xl'>{t('برجاء الذهاب الى بريدك الالكتروني لتأكيد حسابك', 'Go to your email and verfiy your account')}</span>
            </MessagePage>
            :
            <div className="container">
                <div className="rounded bg-slate-100 shadow-sm p-4 max-w-[600px] mx-auto my-16">
                    <h2 className="text-center text-xl mb-8">Register</h2>
                    <Form
                        labelCol={{ span: 6 }}
                        wrapperCol={{ span: 18 }}
                        labelWrap
                        name="normal_login"
                        className="login-form"
                        initialValues={{ remember: true }}
                        onFinish={register}
                        labelAlign="left"
                    >
                        <Form.Item
                            name="email"
                            validateStatus={errors?.email && 'error'}
                            help={errors?.email}
                            label="Email"
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            validateStatus={errors?.password && 'error'}
                            help={errors?.password}
                            label="Password"
                        >
                            <Input
                                type="password"
                            />
                        </Form.Item>
                        <Form.Item
                            name="firstName"
                            validateStatus={errors?.firstName && 'error'}
                            help={errors?.firstName}
                            label="First Name"
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name="secondName"
                            validateStatus={errors?.secondName && 'error'}
                            help={errors?.secondName}
                            label="Second Name"
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name="phone"
                            validateStatus={errors?.phone && 'error'}
                            help={errors?.phone}
                            label="Phone"
                        >
                            <Input type='tel' />
                        </Form.Item>
                        <Form.Item
                            name="birthday"
                            validateStatus={errors?.birthday && 'error'}
                            help={errors?.birthday}
                            label="Birthday"
                        >
                            <DatePicker />
                        </Form.Item>
                        <Form.Item
                            name="gender"
                            validateStatus={errors?.gender && 'error'}
                            help={errors?.gender}
                            label="Gender"
                        >
                            <Radio.Group>
                                <Radio value="male">Male</Radio>
                                <Radio value="female">Female</Radio>
                            </Radio.Group>
                        </Form.Item>
                        <Form.Item
                            name="country"
                            validateStatus={errors?.country && 'error'}
                            help={errors?.country}
                            label="Country"
                            initialValue={'Egypt'}
                        >
                            <Select placeholder="Select Country" >
                                {
                                    countriesList.map(
                                        country =>
                                            <Select.Option value={country}>{country}</Select.Option>
                                    )
                                }
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name="firstLanguage"
                            validateStatus={errors?.firstLanguage && 'error'}
                            help={errors?.firstLanguage}
                            label="First Language"
                            initialValue={'arabic'}
                        >
                            <Select>
                                <Select.Option value="arabic">Arabic</Select.Option>
                                <Select.Option value="english">English</Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name="secondLanguage"
                            validateStatus={errors?.secondLanguage && 'error'}
                            help={errors?.secondLanguage}
                            label="Second Language"
                            initialValue={'english'}
                        >
                            <Select>
                                <Select.Option value="arabic">Arabic</Select.Option>
                                <Select.Option value="english">English</Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name="level"
                            validateStatus={errors?.level && 'error'}
                            help={errors?.level}
                            label="Do you have musical background ?"
                        >
                            <Radio.Group className='mx-4'>
                                <Radio value="beginner">Beginner</Radio>
                                <Radio value="moderate">Moderate</Radio>
                                <Radio value="advanced">Advanced</Radio>
                            </Radio.Group>
                        </Form.Item>
                        <Form.Item className='text-center mb-0' wrapperCol={{ offset: 2 }}>
                            <Button type="primary" htmlType="submit" className="login-form-button mx-auto">
                                Register
                            </Button>
                            <Button type="link" onClick={() => Inertia.get('/login')} className="login-form-button mx-auto">
                                Already have account ? Login
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
    )
}
