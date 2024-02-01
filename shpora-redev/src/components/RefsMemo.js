import { Typography, Input, Button, List, ConfigProvider } from 'antd'
import { useState, useMemo, useRef } from 'react'

const { Title, Paragraph, Text } = Typography;

const RefsMemo = () => {
    const [count, setCount] = useState(0)

    const handleClick = useMemo(() => {
        console.log(count);
        return count % 2 === 0 ? count : count - 1
    }, [count])

    const reset = () => {
        setCount(0)
    }

    const textInput = useRef(null)
    const focus = () => {
        textInput.current.focus()
    }
    return (
        <ConfigProvider
            theme={{
                components: {
                    Typography: {
                        fontSize: 18,
                        colorText: '#0e101c'
                    },
                },
                token: {
                    colorPrimary: '#0e101c',
                }
            }}
        >
            <Title className='title'>Работа с Refs и useMemo</Title>
            <Paragraph>
                <Title>Refs</Title>
                <Paragraph>
                    Refs предоставляет способ доступа к DOM-узлам или React-элементам, созданным в методе `render()`.
                    Есть несколько хороших примеров использования ссылок:
                </Paragraph>
                <List>
                    <List.Item>
                        <Paragraph>
                            1. Управление фокусом, выделение текста.
                        </Paragraph>
                    </List.Item>
                    <List.Item>
                        <Paragraph>
                            2. Выполнение анимаций.
                        </Paragraph>
                    </List.Item>
                    <List.Item>
                        <Paragraph>
                            3. Интеграция со сторонними библиотеками, взаимодействующие с DOM.
                        </Paragraph>
                    </List.Item>
                </List>
                <Paragraph>
                    Управление фокусом:
                </Paragraph>
                <Input ref={textInput} style={{
                    width: 400
                }} />
                <Button onClick={focus}>Фокус</Button>
                <pre>
                    <Text code='true' style={{
                        color: '#bf1650'
                    }}>
                        {`
                    const Test = () => {
                        const [text, setText] = useState('')
                        const textInput = useRef(null)
                        const valid = () => {
                            textInput.current.focus()
                        }
                        return (
                            <div>
                                <input ref={textInput} value={text} />
                                <button onClick={() => valid()}>
                                    Click to focus
                                </button>
                            </div>
                        )
                    }
                    `}
                    </Text>
                </pre>
                <Paragraph>
                    <Title>React.memo и useMemo</Title>
                    <Paragraph>
                        React.memo — это функция высшего порядка (Higher Order Component) в библиотеке React, которая оптимизирует производительность функциональных компонентов.
                        Она предназначена для предотвращения ненужного повторного рендеринга компонента, когда его пропсы и состояние не изменились.
                    </Paragraph>
                    <Paragraph>
                        По умолчанию, при каждом изменении состояния или пропсов компонент перерисовывается, даже если результирующий визуальный вывод не изменился.
                        Это может быть неэффективно для компонентов, которые не зависят от изменений внешних данных и всегда отображают одинаковый результат.
                    </Paragraph>
                    <Paragraph>
                        React.memo использует механизм мемоизации, чтобы запоминать предыдущий результат рендеринга компонента и сравнивать его с текущими пропсами.
                        Если пропсы не изменились, React.memo предотвращает повторный рендеринг компонента, возвращая сохраненный результат.
                    </Paragraph>
                    <pre>
                        <Text code='true' style={{
                            color: '#bf1650'
                        }}>
                            {`
                        const MyComponent = React.memo((props) => {
                            
                            // Компонент будет перерисовываться только при изменении пропсов

                            return (
                              <div>
                                {props.text}
                              </div>
                            );
                          });
                        `}
                        </Text>
                    </pre>
                    <Paragraph>
                        React.memo также принимает второй необязательный аргумент в виде функции сравнения (compareFunction), которая позволяет контролировать,
                        какие пропсы должны считаться "равными". Если функция сравнения не указана, React.memo будет использовать поверхностное сравнение (shallow comparison) для сравнения пропсов.
                    </Paragraph>
                    <Paragraph>
                        React хук useMemo предназначен для мемоизации вычислений в функциональных компонентах. Он позволяет сохранять результат вычислений и повторно использовать его,
                        если входные значения (зависимости) не изменились. Это может существенно повысить производительность, особенно в случаях, когда сложные вычисления выполняются при каждом рендеринге компонента.
                    </Paragraph>
                    <pre>
                        <Text code='true' style={{
                            color: '#bf1650'
                        }}>
                            {`
                            const handleClick = useMemo(() => {
                                console.log(count);
                                return count % 2 === 0 ? count : count - 1
                            }, [count])
                        `}
                        </Text>
                    </pre>
                    <>
                        <Text>
                            Значение счетчика в функциональном компоненте: {handleClick}
                            <Button onClick={() => setCount(count + 1)}>Увеличить</Button>
                            <Button onClick={reset}>Сбросить</Button>
                        </Text>
                    </>
                </Paragraph>
            </Paragraph>
        </ConfigProvider>
    )
}

export default RefsMemo;