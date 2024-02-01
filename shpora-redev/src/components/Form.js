import { Typography, List, Button, ConfigProvider } from "antd";

const { Title, Paragraph } = Typography

const FormComp = () => {
    return (
        <ConfigProvider
            theme={{
                components: {
                    Typography: {
                        fontSize: 18,
                        colorText: '#0e101c'
                    }
                },
                token: {
                    colorLink: '#0e101c',
                    colorPrimary: '#0e101c'
                }
            }}
        >
            <Title className="title">Работа с формами</Title>
            <Paragraph>
                <Paragraph>
                    В React существует несколько способов использования форм в приложении, в зависимости от потребностей и предпочтений разработчика.
                    Ниже перечислены основные варианты использования форм в React приложении:
                </Paragraph>
                <List>
                    <List.Item>
                        <Paragraph>
                            1. Управляемые компоненты форм:
                            В этом подходе значения полей формы хранятся в состоянии компонента. Каждое поле формы связано с состоянием и обновляется через callback-функцию.
                        </Paragraph>
                    </List.Item>
                    <List.Item>
                        <Paragraph>
                            2. Неуправляемые компоненты форм:
                            В этом подходе значения полей формы хранятся непосредственно в DOM, а не в состоянии компонента.
                        </Paragraph>
                    </List.Item>
                    <List.Item>
                        <Paragraph>
                            3. Ref-подход:
                            В этом случае значения полей формы считываются через ref, которые позволяют получить доступ к DOM-элементам.
                            Этот подход может быть удобен, когда тебе нужно быстро получить значения полей без явного сохранения их в состояние компонента.
                        </Paragraph>
                    </List.Item>
                    <List.Item>
                        <Paragraph>
                            4. Библиотеки управления формами:
                            Существуют библиотеки, такие как React Hook Form и Formik , которые предоставляют более высокоуровневые решения для работы с формами.
                            Они упрощают управление состоянием, валидацией, обработкой отправки и другими аспектами работы с формами.
                        </Paragraph>
                    </List.Item>
                </List>
                <Paragraph>
                    Установка с помощью npm происводится следующим образом: npm install react-hook-form. Основые хуки для работы с формами:
                </Paragraph>
                <List
                    header={<Title level={3}>1. React Hook Form</Title>}
                >
                    <List.Item>
                        <Paragraph>
                            a)	useForm() – хук, который возвращает следующие методы:
                        </Paragraph>
                    </List.Item>
                    <List.Item>
                        <Paragraph>
                            b)	useController() – хук, который возвращает компонент Controller.
                        </Paragraph>
                    </List.Item>
                    <List.Item>
                        <Paragraph>
                            c)	useFormContext() - позволяет получить доступ к контексту формы. useFormContext предназначен для использования в глубоко вложенных структурах,
                            где было бы неудобно передавать контекст в качестве пропса.
                        </Paragraph>
                    </List.Item>
                    <List.Item>
                        <Paragraph>
                            d)	useWatch() - хук, который работает аналогично с watch API, но он предотвращает повторный рендеринг на уровне пользовательских хуков и потенциально происводит
                            к повышению производительности приложения
                        </Paragraph>
                    </List.Item>
                    <List.Item>
                        <Paragraph>
                            e)	useFormState() - этот хук позволяет подписаться на каждое состояние формы и исключить повторный рендеринг на уровне кастомного хука
                        </Paragraph>
                    </List.Item>
                    <List.Item>
                        <Paragraph>
                            f)	useFieldArray() - пользовательский хук для работы с массивами полей (динамические формы)
                        </Paragraph>
                    </List.Item>
                </List>
                <Paragraph>
                    Более подробное описание смотреть в документации к библиотеке по ссылке:
                </Paragraph>
                <Button href="https://react-hook-form.com/docs">React Hook Form</Button>
                <List
                    header={<Title level={3}>Formik</Title>}
                >
                    <List.Item>
                        <Paragraph>
                            1) connect()— это компонент высшего порядка (HOC), который позволяет подключить что угодно к контексту Formik.
                            Он используется внутри для создания Field и Form, но его можно использовать для создания новых компонентов по мере необходимости.
                        </Paragraph>
                    </List.Item>
                    <List.Item>
                        <Paragraph>
                            2) ErrorMessage — это компонент, который отображает сообщение об ошибке данного поля, если это поле было посещено (т. е. touched[name] === true) (и есть error сообщение).
                        </Paragraph>
                    </List.Item>
                    <List.Item>
                        <Paragraph>
                            3) FastField предназначен для оптимизации производительности (более производительный Field)
                        </Paragraph>
                    </List.Item>
                    <List.Item>
                        <Paragraph>
                            4) Field автоматически подключит входы к Formik. Он использует name атрибут для сопоставления с состоянием Formik. Field по умолчанию будет использоваться элемент HTML input.
                        </Paragraph>
                    </List.Item>
                    <List.Item>
                        <Paragraph>
                            5) FieldArray — это компонент, который помогает выполнять общие манипуляции с массивами/списками. Вы передаете ему name свойство с путем к ключу, values содержащему соответствующий массив.
                        </Paragraph>
                    </List.Item>
                    <List.Item>
                        <Paragraph>
                            6) Form — это небольшой враппер HTML-form элемента, который автоматически подключается к Formik handleSubmitи handleReset.
                        </Paragraph>
                    </List.Item>
                    <List.Item>
                        <Paragraph>
                            7) Formik— это компонент, который помогает создавать формы. Он использует шаблон рендеринга, ставший популярным благодаря таким библиотекам, как React Motion и React Router.
                        </Paragraph>
                    </List.Item>
                    <List.Item>
                        <Paragraph>
                            8) useField— это специальный хук React, который автоматически поможет подключить входные данные к Formik.
                        </Paragraph>
                    </List.Item>
                    <List.Item>
                        <Paragraph>
                            9) useFormik()— это специальный хук React, который напрямую возвращает всё состояние Formik.
                        </Paragraph>
                    </List.Item>
                    <List.Item>
                        <Paragraph>
                            10) useFormikContext()— это специальный хук React, который будет возвращать все состояние Formik через React Context
                        </Paragraph>
                    </List.Item>
                    <Paragraph>
                        Больше подробностей по ссылке в документации:
                    </Paragraph>
                </List>
                <Button href="https://formik.org/docs/overview">Formik</Button>
            </Paragraph>
        </ConfigProvider>
    )
}

export default FormComp;