import { Button, List, Typography, ConfigProvider } from 'antd'

const { Title, Paragraph, Text } = Typography;

const Storage = () => {
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
            <Title className='title'>Работа со Storage</Title>
            <Paragraph>
                <Title level={3}>Local Storage</Title>
                <Paragraph>
                    Local Storage - это механизм, который позволяет веб-приложениям сохранять данные локально в браузере.
                    Это означает, что данные будут сохранены после закрытия браузера и перезагрузки страницы.
                </Paragraph>
                <Paragraph>
                    LocalStorage может быть использован для хранения различных типов данных, таких как строки, числа, булевы значения и объекты.
                    Он может быть полезен для хранения пользовательских настроек (например темная тема на сайте), предпочтений пользователя и других данных,
                    которые могут быть использованы для персонализации пользовательского опыта.
                </Paragraph>
                <pre>
                    <Text code='true' style={{
                        color: '#bf1650'
                    }}>
                        {`
                    localStorage.setItem('myData', 'Hello, World!');
                    `}
                    </Text>
                </pre>
                <Paragraph>
                    Чтобы получить данные из LocalStorage, можно использовать метод getItem() объекта localStorage.
                    Например, чтобы получить значение, которое мы только что записали, можно использовать следующий код:
                </Paragraph>
                <pre>
                    <Text code='true' style={{
                        color: '#bf1650'
                    }}>
                        {`
                    const myData = localStorage.getItem('myData');
                    console.log(myData); // Выводится "Hello, World!"
                    `}
                    </Text>
                </pre>
                <Title level={3}>Cookies</Title>
                <Paragraph>
                    Cookies - это небольшие текстовые файлы, которые веб-сайты отправляют и хранят на компьютере пользователя через его веб-браузер.
                    Они представляют собой удобный механизм для хранения небольших данных, связанных с пользователем и веб-сайтом.
                    В контексте React приложений, cookies могут быть использованы для сохранения состояния приложения и обеспечения персонализации.
                </Paragraph>
                <Title level={4}>Отличие от Local Storage:</Title>
                <List>
                    <List.Item>
                        <Paragraph>
                            1. Емкость данных: Cookies могут содержать до 4KB данных, в то время как Local Storage позволяет хранить около 5MB данных.
                        </Paragraph>
                    </List.Item>
                    <List.Item>
                        <Paragraph>
                            2. Срок хранения: Cookies имеют срок хранения, который можно указать, в то время как данные в Local Storage хранятся неограниченное время, пока их явно не удалить.
                        </Paragraph>
                    </List.Item>
                    <List.Item>
                        <Paragraph>
                            3. Cookies автоматически включаются в заголовки каждого HTTP-запроса к определенному домену, что делает их более подходящими для некоторых сценариев,
                            таких как авторизация. Local Storage данные не автоматически передаются с каждым запросом.
                        </Paragraph>
                    </List.Item>
                </List>
                <Title level={4}>Установка Cookie:</Title>
                <pre>
                    <Text code='true' style={{
                        color: '#bf1650'
                    }}>
                        {`
                        // Установка cookie на определенное количество дней

                        document.cookie = "user_id=123; expires=Fri, 31 Dec 2023 23:59:59 GMT; path=/";
                        `}
                    </Text>
                </pre>
                <Title level={4}>Получение Cookie:</Title>
                <pre>
                    <Text code='true' style={{
                        color: '#bf1650'
                    }}>
                        {`
                        // Получение всех cookie в виде строки

                        const allCookies = document.cookie;
                        
                        // Разбивка строки на отдельные cookie

                        const cookiesArray = allCookies.split("; ");
                        const cookies = {};
                        cookiesArray.forEach(cookie => {
                          const [name, value] = cookie.split("=");
                          cookies[name] = value;
                        });
                        `}
                    </Text>
                </pre>
                <Title level={4}>Удаление Cookie:</Title>
                <pre>
                    <Text code='true' style={{
                        color: '#bf1650'
                    }}>
                        {`
                        // Удаление cookie путем установки срока действия в прошлое
                        
                        document.cookie = "user_id=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
                        `}
                    </Text>
                </pre>
                <Title level={3}>Sesion Storage</Title>
                <Paragraph>
                    Session Storage - это еще один механизм хранения данных в браузере, который работает так же, как и LocalStorage. Однако Session Storage имеет ряд отличий от LocalStorage.
                    Session Storage сохраняет данные только на время сеанса браузера. Это означает, что данные будут удалены после закрытия браузера или вкладки.
                    Это может быть полезно для хранения временных данных, таких как формы, которые не нужно сохранять после закрытия браузера.
                    Кроме того, Session Storage имеет более ограниченный объем хранения данных, чем LocalStorage.
                    Это означает, что он может быть полезен для хранения небольших объемов данных, которые нужно сохранить только на время сеанса браузера. Синтаксис такой же, как у LocalStorage:
                </Paragraph>
                <pre>
                    <Text code='true' style={{
                        color: '#bf1650'
                    }}>
                        {`
                        sessionStorage.setItem('myData', 'Hello, World!');
                        const myData = sessionStorage.getItem('myData');
                        console.log(myData); // Выводится "Hello, World!"
                        `}
                    </Text>
                </pre>
                <Title level={3}>Local Forage</Title>
                <Paragraph>
                    localForage - это JavaScript-библиотека, предоставляющая удобный асинхронный интерфейс для работы с локальными хранилищами в браузерах.
                    Эта библиотека позволяет сохранять данные в браузере пользователя, используя различные хранилища, такие как IndexedDB, WebSQL и localStorage,
                    в зависимости от поддержки браузера. Ниже ссылка на документацию к библиотеке:
                </Paragraph>
                <Button href='https://www.npmjs.com/package/cookie'>Local Forage</Button>
            </Paragraph>
        </ConfigProvider>
    )
}

export default Storage;