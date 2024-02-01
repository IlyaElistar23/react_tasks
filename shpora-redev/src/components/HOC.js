import { Typography, List, ConfigProvider } from 'antd'

const { Title, Paragraph, Text } = Typography;

const HighOrderComponents = () => {
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
            <Title className='title'>Компоненты высокого порядка</Title>
            <Paragraph>
                <Paragraph>
                    HOC — это функции высшего порядка, которые принимают компонент и возвращают новый компонент с расширенным функционалом. Они помогают избежать дублирования кода,
                    управлять состоянием, обеспечивают абстракцию поведения и позволяют добавлять функциональность к компонентам без изменения их кода.
                </Paragraph>
                <List>
                    <List.Item>
                        <Paragraph>
                            1. Логическое переиспользование: HOC позволяют выделить общую логику компонентов, такую как обработка аутентификации или получение данных,
                            и применять ее ко множеству компонентов без дублирования кода.
                        </Paragraph>
                    </List.Item>
                    <List.Item>
                        <Paragraph>
                            2. Прокинуть дополнительные props: HOC позволяют добавлять или модифицировать props компонентов.
                            Это удобно, например, для передачи данных из контекста или оборачивания компонентов в дополнительные компоненты высшего порядка.
                        </Paragraph>
                    </List.Item>
                    <List.Item>
                        <Paragraph>
                            3. Обертывание компонентов: HOC могут использоваться для обертывания компонентов дополнительным функциональным слоем, например, для логирования, манипуляции с состоянием и т.д.
                        </Paragraph>
                    </List.Item>
                </List>
                <Paragraph>
                    Простой пример создания такого компонента:
                </Paragraph>
                <pre>
                    <Text code='true' style={{
                        color: '#bf1650'
                    }}>
                        {`
                const withLogger = (WrappedComponent) => {
                    return (props) => {
                      console.log('Component rendered:', WrappedComponent.name);
                      return <WrappedComponent {...props} />;
                    };
                  };
                `}
                    </Text>
                </pre>
            </Paragraph>
        </ConfigProvider>
    )
}

export default HighOrderComponents;