import { faCheckCircle } from "@fortawesome/free-solid-svg-icons/faCheckCircle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Inertia } from "@inertiajs/inertia";
import { usePage } from "@inertiajs/inertia-react";
import {
    Button,
    DatePicker,
    Form,
    Input,
    InputNumber,
    Radio,
    Select,
} from "antd";
import React, { useState } from "react";
import { countriesList } from "../countries-list";
import useTranslate from "../Hooks/useTranslate";
import MessagePage from "../Components/MessagePage";
import UploadImage from "../Components/UploadImage";
export default function Register() {
    const { errors } = usePage().props;
    const [regState, setRegState] = useState(false);
    const register = async (values: any) => {
        Inertia.post(
            "/register",
            {
                ...values,
                avatar: values.avatar?.fileList[0]?.originFileObj,
                birthday: values?.birthday
                    ? values.birthday.format("YYYY-MM-DD")
                    : null,
            },
            {
                onSuccess: () => {
                    setRegState(true);
                },
            }
        );
    };
    const t = useTranslate();

    return regState ? (
        <MessagePage imgSrc="/images/reg_success.png">
            <h2 className="text-2xl text-center md:text-3xl lg:text-4xl xl:text-5xl mb-4 lg:mb-8  font-bold uppercase">
                {t("تم التسجيل ", "Registeration Done ")}{" "}
                <span className="highlight-header">
                    {" "}
                    {t("بنجاح", "Successfully ")}
                </span>
            </h2>
            <FontAwesomeIcon
                size="6x"
                className="text-green-400 mt-8"
                icon={faCheckCircle}
            />
            <span className="block my-8 underline text-xl">
                {t(
                    "برجاء الذهاب الى بريدك الالكتروني لتأكيد حسابك",
                    "Go to your email and verfiy your account"
                )}
            </span>
        </MessagePage>
    ) : (
        <div className="container">
            <div className="rounded bg-slate-100 shadow-sm p-4 max-w-[600px] mx-auto my-16">
                <h2 className="text-center text-xl mb-8">
                    {t("تسجيل", "Register")}
                </h2>
                <Form
                    // labelCol={{ span: 6 }}
                    // wrapperCol={{ span: 18 }}
                    layout="vertical"
                    name="normal_login"
                    className="login-form"
                    initialValues={{ remember: true }}
                    onFinish={register}
                    labelAlign="left"
                >
                    <Form.Item
                        name="avatar"
                        validateStatus={errors?.avatar && "error"}
                        help={errors?.avatar}
                        label={t("صورة شخصية", "Profile Picture")}
                        rules={[
                            {
                                required: true,
                                message: t(
                                    "برجاء اختيار صورة شخصية",
                                    "Please select your Profile Picture"
                                ),
                            },
                        ]}
                    >
                        <UploadImage />
                    </Form.Item>
                    <Form.Item
                        name="email"
                        validateStatus={errors?.email && "error"}
                        help={errors?.email}
                        label={t("البريد الالكتروني", "Email")}
                        rules={[
                            { type: "email" },
                            {
                                required: true,
                                message: t(
                                    "برجاء ادخال البريد الالكتروني",
                                    "Please input your Email!"
                                ),
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        validateStatus={errors?.password && "error"}
                        help={errors?.password}
                        label={t("كلمة المرور", "Password")}
                        rules={[
                            {
                                required: true,
                                message: t(
                                    "برجاء ادخال كلمة المرور",
                                    "Please input your Password!"
                                ),
                            },
                        ]}
                    >
                        <Input type="password" />
                    </Form.Item>
                    <Form.Item
                        name="firstName"
                        validateStatus={errors?.firstName && "error"}
                        help={errors?.firstName}
                        label={t("الاسم الاول باللغة الانجليزية", "First Name in English")}
                        rules={[
                            {
                                required: true,
                                message: t(
                                    "برجاء ادخال الاسم الاول",
                                    "Please input your First Name!"
                                ),
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="secondName"
                        validateStatus={errors?.secondName && "error"}
                        help={errors?.secondName}
                        label={t("الاسم الثاني باللغة الانجليزية", "Second Name in English")}
                        rules={[
                            {
                                required: true,
                                message: t(
                                    "برجاء ادخال الاسم الثاني",
                                    "Please input your Second Name!"
                                ),
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="arabic_first_name"
                        validateStatus={errors?.arabic_first_name && "error"}
                        help={errors?.arabic_first_name}
                        label={t("الاسم الاول باللغة العربية", "First Name in Arabic")}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="arabic_second_name"
                        validateStatus={errors?.arabic_second_name && "error"}
                        help={errors?.arabic_second_name}
                        label={t("الاسم الثاني باللغة العربية", "Second Name in Arabic")}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="phone"
                        validateStatus={errors?.phone && "error"}
                        help={errors?.phone}
                        label={t("رقم الهاتف", "Phone Number")}
                        rules={[
                            {
                                required: true,
                                message: t(
                                    "برجاء ادخال رقم الهاتف",
                                    "Please input your Phone Number!"
                                ),
                            },
                        ]}
                    >
                        <Input type="tel" />
                    </Form.Item>
                    <Form.Item
                        name="birthday"
                        validateStatus={errors?.birthday && "error"}
                        help={errors?.birthday}
                        label={t("تاريخ الميلاد", "Birthday")}
                        rules={[
                            {
                                required: true,
                                message: t(
                                    "برجاء ادخال تاريخ الميلاد",
                                    "Please input your Birthday!"
                                ),
                            },
                        ]}
                    >
                        <DatePicker />
                    </Form.Item>
                    <Form.Item
                        name="gender"
                        validateStatus={errors?.gender && "error"}
                        help={errors?.gender}
                        label={t("الجنس", "Gender")}
                        rules={[
                            {
                                required: true,
                                message: t(
                                    "هذا الحقل مطلوب",
                                    "Please input your Gender"
                                ),
                            },
                        ]}
                    >
                        <Radio.Group>
                            <Radio value="male">{t("ذكر", "Male")}</Radio>
                            <Radio value="female">{t("انثى", "Female")}</Radio>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item
                        name="country"
                        validateStatus={errors?.country && "error"}
                        help={errors?.country}
                        label={t("الدولة", "Country")}
                        initialValue={"Egypt"}
                        rules={[
                            {
                                required: true,
                                message: t(
                                    "برجاء اختيار الدولة",
                                    "Please select your Country!"
                                ),
                            },
                        ]}
                    >
                        <Select placeholder="Select Country">
                            {countriesList.map((country) => (
                                <Select.Option value={country}>
                                    {country}
                                </Select.Option>
                            ))}
                        </Select>
                    </Form.Item>
                    <Form.Item
                        name="address"
                        validateStatus={errors?.address && "error"}
                        help={errors?.address}
                        label={t("العنوان", "Address")}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="city"
                        validateStatus={errors?.city && "error"}
                        help={errors?.city}
                        label={t("المدينة", "City")}
                        rules={[
                            {
                                required: true,
                                message: t(
                                    "برجاء ادخال المدينة",
                                    "Please input your City!"
                                ),
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="zip_code"
                        validateStatus={errors?.zip_code && "error"}
                        help={errors?.zip_code}
                        label={t("الرمز البريدي", "Zip Code")}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="firstLanguage"
                        validateStatus={errors?.firstLanguage && "error"}
                        help={errors?.firstLanguage}
                        label={t("اللغة الام", "First Language")}
                        initialValue={"arabic"}
                        rules={[
                            {
                                required: true,
                                message: t(
                                    "برجاء اختيار اللغة الام",
                                    "Please select your First Language!"
                                ),
                            },
                        ]}
                    >
                        <Select>
                            <Select.Option value="arabic">Arabic</Select.Option>
                            <Select.Option value="english">
                                English
                            </Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        name="secondLanguage"
                        validateStatus={errors?.secondLanguage && "error"}
                        help={errors?.secondLanguage}
                        label={t("اللغة الثانية", "Second Language")}
                        initialValue={"english"}
                    >
                        <Select>
                            <Select.Option value="arabic">Arabic</Select.Option>
                            <Select.Option value="english">
                                English
                            </Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        name="level"
                        validateStatus={errors?.level && "error"}
                        help={errors?.level}
                        label={t(
                            "هل لديك خلفية موسيقية",
                            "Do you have musical background ?"
                        )}
                        rules={[
                            {
                                required: true,
                                message: t(
                                    "برجاء اختيار مستواك",
                                    "Please select your level!"
                                ),
                            },
                        ]}
                    >
                        <Radio.Group className="mx-4">
                            <Radio value="beginner">
                                {t("مبتدئ", "Beginner")}
                            </Radio>
                            <Radio value="moderate">
                                {t("متوسط", "Moderate")}
                            </Radio>
                            <Radio value="advanced">
                                {t("متقدم", "Advanced")}
                            </Radio>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item
                        className="text-center mb-0"
                        wrapperCol={{ offset: 2 }}
                    >
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="login-form-button mx-auto"
                        >
                            {t("تسجيل", "Regist")}
                        </Button>
                        <Button
                            type="link"
                            onClick={() => Inertia.get("/login")}
                            className="login-form-button mx-auto"
                        >
                            {t(
                                "لديك حساب بالفعل ؟ سجل دخول",
                                "Already have account ? Login"
                            )}
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
}
