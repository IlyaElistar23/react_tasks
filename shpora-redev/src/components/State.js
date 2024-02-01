import { useState } from "react";
import { Typography, Button, List, ConfigProvider } from 'antd'

const { Text, Paragraph, Title } = Typography;

const State = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const reset = () => {
        setCount(0)
    }

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
                    colorPrimary: '#0e101c'
                }
            }}
        >
            <Title className="title">Состояние компонентов</Title>
            <Paragraph>
                <Paragraph>
                    State – это объект простого JS, позволяющий отслеживать и обновлять данные компонента.
                    В классовых компонентах состояние хранится в свойстве state, которое является объетом, начальное состояние определяется в конструкторе явно.
                </Paragraph>
                <pre>
                    <Text code='true' style={{
                        color: '#bf1650'
                    }}>
                        {`
                    class Counter extends Component { 
                        constructor(props) {
                        super(props); 
                            this.state = { count: 0, }; 
                    }
                    `}
                    </Text>
                </pre>
                <Paragraph>
                    Единственный допустимый способ обновления состояния компонента – через setState(). Менять состояние напрямую через доступ к свойству объекта state нельзя!
                </Paragraph>
                <Paragraph>
                    Есть 2 способа изменить состяние классового компонента:
                </Paragraph>
                <List>
                    <List.Item>
                        <Text code='true' style={{
                            color: '#bf1650'
                        }}>
                            {`this.setState({username:'Ilya'});`}
                        </Text>
                    </List.Item>
                    <List.Item>
                        <Text code='true' style={{
                            color: '#bf1650'
                        }}>
                            {`this.setState(() => ({ username: 'Ilya' }))`}
                        </Text>
                    </List.Item>
                </List>
                <Paragraph>
                    Для создания состояния в функциональных компонентах используется хук useState. Он позволяет объявить переменную состояния и ее инициализацию. Например, можно создать состояние для отслеживания текущего счетчика:
                </Paragraph>
                <Text code='true' style={{
                    color: '#bf1650'
                }}>
                    {`const [count, setCount] = useState(0) `}
                </Text>
                <Paragraph>
                    Простейшим примером использования состояния является счетчик:
                </Paragraph>
                <Text>Счетчик: {count}</Text>
            </Paragraph>
            <Button onClick={increment}>Увеличить</Button>
            <Button onClick={reset}>Сбросить</Button>
        </ConfigProvider>
    )
}

export default State;