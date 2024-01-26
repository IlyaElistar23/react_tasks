import { useForm, Controller } from 'react-hook-form'
import { Input, Button, Radio, Typography, ConfigProvider } from 'antd'

const RegistrationForm = () => {
    const {
        handleSubmit,
        control,
        formState: {
            errors,
        },
        reset,
        getValues
    } = useForm({
        mode: 'onBlur'
    })

    const onSubmit = (data) => {
        delete data.submitPassword
        alert(JSON.stringify(data))
        reset()
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <ConfigProvider
                theme={{
                    token: {
                        colorText: 'rgba(255, 255, 255)'
                    }
                }}
                >
                    <Typography.Title className='title'>Форма регистрации</Typography.Title> 
                </ConfigProvider>

            </div>
            <div>
                <Typography.Text className='label' strong>Имя:</Typography.Text>
                <Controller
                    name='userName'
                    control={control}
                    rules={{
                        required: 'Поле обязательно для заполнения'
                    }}
                    render={({ field }) => <Input {...field} placeholder='Имя пользователя' />}
                />
                <Typography.Text className='infoText' strong>{errors.userName?.message}</Typography.Text>
            </div>
            <div>
                <Typography.Text className='label' strong>Email:</Typography.Text>
                <Controller
                    name='email'
                    control={control}
                    rules={{
                        required: 'Поле обязательно для заполнения',
                        pattern: {
                            value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
                            message: 'Некорректный формат E-mail'
                        },

                    }}
                    render={({ field }) => <Input {...field} placeholder='Введите ваш E-mail' />}
                />
                <Typography.Text className='infoText' strong>{errors.email?.message}</Typography.Text>
            </div>
            <div>
                <Typography.Text className='label' strong>Пароль:</Typography.Text>
                <Controller
                    name='password'
                    control={control}
                    rules={{
                        required: 'Поле обязательно для заполнения',
                        minLength: 6,
                        validate: value => value.split('').some(symbol => symbol === symbol.toUpperCase() || 'Пароль должен сожержать хотя бы 6 символов и как минимум одну заглавную букву')
                    }}
                    render={({ field }) => <Input {...field} placeholder='Введите надежный пароль' />}
                />
                <Typography.Text className='infoText' strong>{errors.password?.message}</Typography.Text>
            </div>
            <div>
                <Typography.Text className='label' strong>Подтверждение пароля:</Typography.Text>
                <Controller
                    name='submitPassword'
                    control={control}
                    rules={{
                        required: 'Поле обязательно для заполнения',
                        validate: value => value === getValues('password') || 'Пароли не совпадают'
                    }}
                    render={({ field }) => <Input {...field} placeholder='Подтвердите пароль' />}
                />
                <Typography.Text className='infoText' strong>{errors.submitPassword?.message}</Typography.Text>
            </div>
            <div>
                <Typography.Text className='label' strong>Дата рождения:</Typography.Text>
                <Controller
                    name='birthdate'
                    control={control}
                    rules={{
                        required: 'Поле обязательно для заполнения',
                        validate: value => value.split('/').length !== 1 || 'Некорректный формат даты'
                    }}
                    render={({ field }) => <Input {...field} placeholder='XX/XX/XXXX' />}
                />
                <Typography.Text className='infoText' strong>{errors.birthdate?.message}</Typography.Text>
            </div>
            <div>
                <Typography.Text className='label' strong>Пол:</Typography.Text>
                <Controller
                    name='gender'
                    control={control}
                    rules={{
                        required: 'Поле обязательно для заполнения'
                    }}
                    render={({ field }) => (
                        <Radio.Group {...field}>
                            <Radio className='radio' value='male'>Мужской</Radio>
                            <Radio className='radio' value='female'>Женский</Radio>
                        </Radio.Group>
                    )}
                />
                <Typography.Text className='infoText' strong>{errors.gender?.message}</Typography.Text>
            </div>
            <div>
                <Typography.Text className='label' strong>Номер телефона:</Typography.Text>
                <Controller
                    name='telNumber'
                    control={control}
                    rules={{
                        required: 'Поле обязательно для заполнения'
                    }}
                    render={({ field }) => <Input {...field} placeholder='+375XXXXXXXXX' />}
                />
                <Typography.Text className='infoText' strong>{errors.telNumber?.message}</Typography.Text>
            </div>
            <ConfigProvider 
                theme={{
                    token: {
                        colorText: 'rgba(255, 255, 255)',
                        colorPrimaryHover: 'rgba(255, 255, 255)',
                        padding: 20,
                    }
                }}
            >
                <Button type='default' size='large' htmlType='submit' className=''>Зарегистрироваться</Button>
            </ConfigProvider>

        </form>
    )
}

export default RegistrationForm;