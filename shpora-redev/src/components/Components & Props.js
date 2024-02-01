import { Typography, List, ConfigProvider } from 'antd'

const { Title, Paragraph, Text } = Typography

const ComponentsProps = () => {
    return (
        <ConfigProvider
            theme={{
                components: {
                    Typography: {
                        fontSize: 18,
                        colorText: '#0e101c'
                    }
                }
            }}
        >
            <Title className='title'>Компоненты и пропсы</Title>
            <Paragraph>
                <Paragraph>
                    Компоненты - это небольшие, переиспользуемые элементы пользовательского интерфейса, которые объединены вместе, чтобы создать более крупные приложения.
                    Компоненты позволяют разбить интерфейс на независимые части, про которые легко думать в отдельности.
                </Paragraph>
                <Paragraph>
                    Во многом компоненты ведут себя как обычные функции JavaScript. Они принимают произвольные входные данные (так называемые «пропсы») и возвращают React-элементы, описывающие, что мы хотим увидеть на экране.
                    React компоненты могут быть классовыми или функциональными.
                </Paragraph>
                <Text>Пример классового компонента</Text>
                <pre>
                    <Text code='true' style={{
                        color: '#bf1650'
                    }}>
                        {`
                    class User extends React.component {
                        constructor (name, age) {
                            this.name = name;
                            this.age = age
                        }
                        render () {
                            <div>'{this.name}, {this.age}'</div>  
                        }
                    `}
                    </Text >
                </pre>
                <Paragraph>Пример функционального компонента</Paragraph>
                <Text code='true' style={{
                        color: '#bf1650'
                    }}>
                    {`
                    const User = () => <div>Ilya</div>
                `}
                </Text>
                <Paragraph>
                    Компонента должна себя вести как чистая функция. Чистой называется функция, которая:
                </Paragraph>
                <List>
                    <List.Item>
                        <Paragraph>
                            1. Для одинаковых входных данных всегда возвращает один результат.
                        </Paragraph>
                    </List.Item>
                    <List.Item>
                        <Paragraph>
                            2. Не имеет побочных эффектов (то есть не изменяет внешние состояния).
                        </Paragraph>
                    </List.Item>
                    <List.Item>
                        <Paragraph>
                            3. Не зависит от внешних состояний.
                        </Paragraph>
                    </List.Item>
                </List>
                <Paragraph>
                    Пропсы (сокращение от properties) - это данные, которые передаются в компоненты React для настройки их поведения и внешнего вида. Они позволяют передавать информацию из родительского компонента в дочерний компонент.
                    Дочерний компонент может читать эти `props` и использовать их, например, для вывода данных на экран или для изменения своего поведения.
                    Пропсы передаются в компоненты в виде атрибутов при их использовании в JSX.
                </Paragraph>
                <pre>
                    <Text code='true' style={{
                        color: '#bf1650'
                    }}>
                        {`
                    function App () {
                    return <User list ={[‘Ilya’, ‘Pasha’, ‘Nadya’]}/>
                    }
                `}
                    </Text>
                </pre>
                <Paragraph>
                    В функциональных компонентах пропсы доступны как параметр функции компонента.
                </Paragraph>
                <pre>
                    <Text code='true' style={{
                        color: '#bf1650'
                    }}>
                        {`
                    const Users = ({list}) => {
                        return (
                            <div>{list.split('')}</div>
                        )
                    }
                `}
                    </Text>
                </pre>
                <Paragraph>
                    В классовых компонентах пропсы доступны через this.props. Например, this.props.message.
                </Paragraph>
                <pre>
                    <Text code='true' style={{
                        color: '#bf1650'
                    }}>
                        {`
                    class User extends React.component {
                        constructor () {}
                        render ( 
                            <div>{this.props.list.split(‘’)}<div/>
                        )
                    }
                    `}
                    </Text>
                </pre>
                <Paragraph>
                    Props можно использовать для передачи любых данных, включая строки, числа, массивы, объекты и функции.
                    Пропсы являются неизменяемыми (immutable), их нельзя изменять напрямую.
                </Paragraph>
            </Paragraph>
        </ConfigProvider>
    )
}

export default ComponentsProps;