import { Field, Form, Formik, useFormikContext } from 'formik'
import { Typography, Button, ConfigProvider, Radio, Input } from 'antd'

const validateEmail = (value) => {
    const correctMail = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/
    if (!value) {
        return 'Поле обязательно для заполнения'
    } else if (!correctMail.test(value)) {
        return 'Некорректный E-mail'
    }
}

const requireToFill = (value) => {
    if (!value) {
        return 'Поле обязательно для заполнения'
    }
}

const validatePassword = (value) => {
    const checkUpperCase = value.split('').some(letter => letter === letter.toUpperCase())
    if (!value) {
        return 'Поле обязательно для заполнения'
    } else if (value.length < 6) {
        return 'Пароль должен состоять минимум из 6 символов'
    } else if (!checkUpperCase) {
        return 'Пароль должен содержать хотя бы одну заглавную букву'
    }
}

const SubmitPassword = () => {
    const { values } = useFormikContext()
    if (values.password !== values.checkPassword) {
        return <Typography.Text className='infoText'>Проверьте правильность заполнения поля подтверждения пароля</Typography.Text>
    } else {
        return null
    }
}

const RegistrationForm = () => {
    return (
        <div className='App-header'>
            <ConfigProvider
                theme={{
                    token: {
                        colorText: 'rgba(255, 255, 255)',
                    }
                }}
            >
                <Typography.Title className='title' >Форма регистрации</Typography.Title>
            </ConfigProvider>

            <Formik
                initialValues={{
                    userName: '',
                    email: '',
                    password: '',
                    checkPassword: '',
                    birthdate: '',
                    gender: '',
                    telNumber: ''
                }}
                onSubmit={(values, { resetForm }) => {
                    delete values.checkPassword
                    alert(JSON.stringify(values))
                    resetForm()
                }}
            >
                {({ errors, touched }) => (
                    <Form>
                        <Typography.Text className='label' strong>
                            Имя пользователя:
                            <Field name='userName' validate={requireToFill} placeholder='Имя пользователя' />
                            {errors.userName && touched.userName && <Typography.Text className='infoText' strong>{errors.userName}</Typography.Text>}
                        </Typography.Text>
                        <Typography.Text className='label' strong>
                            E-mail:
                            <Field name='email' validate={validateEmail} placeholder='example@example.com' />
                            {errors.email && touched.email && <Typography.Text className='infoText' strong>{errors.email}</Typography.Text>}
                        </Typography.Text>
                        <Typography.Text className='label' strong>
                            Пароль:
                            <Field name='password' validate={validatePassword} placeholder='Example: xxXxxx' />
                            {errors.password && touched.password && <Typography.Text className='infoText' strong>{errors.password}</Typography.Text>}
                        </Typography.Text>
                        <Typography.Text className='label' strong>
                            Подтверждение пароля:
                            <Field name='checkPassword' placeholder='Повторите набранный выше пароль' />
                            {touched.checkPassword && <SubmitPassword />}
                        </Typography.Text>
                        <Typography.Text className='label' strong>
                            Дата рождения:
                            <Field name='birthdate' validate={requireToFill} placeholder='XX/XX/XXXX' />
                            {errors.birthdate && touched.birthdate && <Typography.Text className='infoText' strong>{errors.birthdate}</Typography.Text>}
                        </Typography.Text>
                        <Typography.Text className='label' strong>Пол:</Typography.Text>
                        <Radio.Group className='radio'>
                            <Typography.Text className='label' strong>
                                Мужской:
                                <Field className='radio1' type='radio' name='gender' value='male' validate={requireToFill}/>
                            </Typography.Text>
                            <Typography.Text className='label' strong>
                                Женский:
                                <Field className='radio2' type='radio' name='gender' value='female' validate={requireToFill}/>
                            </Typography.Text>
                        </Radio.Group>
                            {errors.gender && touched.gender && <Typography.Text className='infoText' strong>{errors.gender}</Typography.Text>}
                        <Typography.Text className='label' strong>
                            Номер телефона:
                            <Field name='telNumber' validate={requireToFill} placeholder='+375(XX)XXX-XX-XX' />
                            {errors.telNumber && touched.telNumber && <Typography.Text className='infoText' strong>{errors.telNumber}</Typography.Text>}
                        </Typography.Text>
                        <ConfigProvider
                            theme={{
                                token: {
                                    colorText: 'rgba(255, 255, 255)',
                                    colorPrimaryHover: 'rgba(255, 255, 255)',
                                    padding: 20,
                                }
                            }}
                        >
                            <Button type='default' size='large' htmlType='submit'>Зарегистрироваться</Button>
                        </ConfigProvider>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default RegistrationForm;