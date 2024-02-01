import { Typography, List, ConfigProvider } from 'antd'

const { Title, Paragraph } = Typography;

const BasicReact = () => {
    return (
        <ConfigProvider
            theme={{
                components:{
                    Typography:{
                        fontSize: 18,
                        colorText: '#0e101c'
                    }
                }
            }}
        >
            <Title className='title'>Основы React</Title>
            <List>
                <List.Item>
                    <Paragraph>
                        React - это библиотека JS для создания UI.
                        Главным преимуществом является компонентный подход, то есть разбитие UI на небольшие независимые компоненты, каждый из которых имеет свою логику и состояние.
                    </Paragraph>
                </List.Item>
                <List.Item>
                    <Paragraph>
                        JSX (JS XML) – синтаксис расширения для JS, которое используется в React для описания структуры UI, он позволяет встраивать JS-код в HTML-подобную разметку.
                    </Paragraph>
                </List.Item>
                <List.Item>
                    <Paragraph>
                        NPM (Node Package Manager) – это менеджер пакетов, который управляет зависимостями (библиотеками) приложения и позволяет устанавливать необходимые. Так же можно создать собственную библиотеку и опубликовать её, NPM это позволяет.
                    </Paragraph>
                </List.Item>
                <List.Item>
                    <Paragraph>
                        WEB-интерфейс – веб-страница или их совокупность, которые предоставляют UI для взаимодействия с сайтом или приложением.
                    </Paragraph>
                </List.Item>
                <List.Item>
                    <Paragraph>
                        UI-интерфейс – то, через что пользователь может взаимодействовать с сайтом или приложением.
                    </Paragraph>
                </List.Item>
                <List.Item>
                    <Paragraph>
                        Библиотека – набор готовых функций и инструментов, которые можно использовать при создании приложения или сайта на наше усмотрение.
                    </Paragraph>
                </List.Item>
                <List.Item>
                    <Paragraph>
                        Фреймворк – это структура и правила, которые сами определяют, как мы должны выстраивать приложение.
                    </Paragraph>
                </List.Item>
                <List.Item>
                    <Paragraph>
                        CRUD – аббревиатура, которая представляет основные http-методы (создание - POST, чтение - GET, обновление - PUT, удаление - DELETE)
                    </Paragraph>
                </List.Item>
            </List>
        </ConfigProvider>
    )
}

export default BasicReact;