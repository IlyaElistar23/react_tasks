import { Typography, ConfigProvider } from 'antd'

const { Title, Paragraph, Text } = Typography;

const Styling = () => {
    return (
        <ConfigProvider
            theme={{
                components: {
                    Typography: {
                        fontSize: 18,
                        colorText: '#0e101c'
                    }
                }
            }}>
            <Title className='title'>Стилизация в React</Title>
            <Paragraph>
                <Paragraph>
                    В мире фронтенд-разработки существует множество инструментов и библиотек, которые помогают создавать стильные и отзывчивые пользовательские интерфейсы.
                    Два из таких инструментов — Tailwind CSS и Styled Components:
                </Paragraph>
                <Title level={3}>Tailwind CSS</Title>
                <Paragraph>
                    Tailwind CSS — это CSS-фреймворк, который предоставляет набор предопределенных классов, позволяющих быстро создавать стили для элементов.
                    Основная идея заключается в том, чтобы не создавать отдельные стили в CSS-файлах, а применять классы непосредственно в HTML-разметке.
                    Это позволяет разработчикам быстро создавать и изменять стили, а также улучшает совместную работу и облегчает рефакторинг.
                </Paragraph>
                <pre>
                    <Text code='true' style={{
                        color: '#bf1650'
                    }}>
                        {`
                const TailwindButton = () => {
                    return (
                      <button className="bg-blue-500 hover:bg-blue-700 font-semibold rounded">
                        Click me (Tailwind)
                      </button>
                    );
                  };
                `}
                    </Text>
                </pre>
                <Title level={3}>Styled Components</Title>
                <Paragraph>
                    Styled Components — это библиотека для стилизации компонентов в React-приложениях. Вместо использования внешних CSS-файлов или инлайн-стилей,
                    Styled Components позволяют определять стили непосредственно внутри JavaScript-кода с использованием синтаксиса шаблонных строк (обратных кавычек).
                </Paragraph>
                <pre>
                    <Text code='true' style={{
                        color: '#bf1650'
                    }}>
                        {`
                const StyledDiv = styled.div'
                background-color: blue;
                color: white;
                padding: 4px;
                ';
              
                const MyComponent = () => {
                    return (
                        <StyledDiv>
                            Это компонент с использованием Styled Components.
                        </StyledDiv>
                    );
                }
                `}
                    </Text>
                </pre>
            </Paragraph>
        </ConfigProvider>
    )
}

export default Styling;