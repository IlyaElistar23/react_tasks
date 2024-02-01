import { Typography, List, ConfigProvider } from 'antd'

const { Paragraph, Title } = Typography

const StructureApp = () => {

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
            <Title className='title'>Структура проекта</Title>
            <Paragraph>
                Структура проекта на React может различаться в зависимости от предпочтений и специфики проекта.
            </Paragraph>
            <List>
                <List.Item>
                    <Paragraph>
                        1. src - все исходные файлы проекта находятся внутри этой папки. Внутри src обычно имеются следующие подпапки:
                    </Paragraph>
                </List.Item>
                <List.Item>
                    <Paragraph>
                        - components: Каталог для хранения компонентов React, которые создаются для приложения
                        (App.js (главный компонент приложения, который объединяет все остальные компоненты и определяет основную структуру приложения),
                        Todo (тут будут храниться свои компоненты)).
                    </Paragraph>
                </List.Item>
                <List.Item>
                    <Paragraph>
                        - pages: Здесь располагаются компоненты, которые представляют собой отдельные страницы или экраны приложения.
                    </Paragraph>
                </List.Item>
                <List.Item>
                    <Paragraph>
                        - utils: Здесь можно разместить вспомогательные функции, утилиты и другие полезные модули.
                    </Paragraph>
                </List.Item>
                <List.Item>
                    <Paragraph>
                        - redux: Если ты используешь управление состоянием, например, Redux, здесь можно разместить директории и файлы, связанные с состоянием приложения.
                    </Paragraph>
                </List.Item>
                <List.Item>
                    <Paragraph>
                        - routes: В данной папке можно определить файлы, отвечающие за маршрутизацию в приложении.
                    </Paragraph>
                </List.Item>
                <List.Item>
                    <Paragraph>
                        - index.js: Входная точка твоего приложения, где происходит рендеринг корневого компонента React внутри корневого элемента из index.html.
                    </Paragraph>
                </List.Item>
                <List.Item>
                    <Paragraph>
                        2. public - используется для хранения статических ресурсов, таких как HTML-файлы, изображения, шрифты и другие файлы, которые должны быть доступны непосредственно из браузера без обработки React-кодом.
                    </Paragraph>
                </List.Item>
                <List.Item>
                    <Paragraph>
                        - index.html: Это основной HTML-файл приложения, который обычно содержит корневой элемент с идентификатором, в который будет вставлен React-компонент.
                    </Paragraph>
                </List.Item>
                <List.Item>
                    <Paragraph>
                        3. node_modules - является местом, где хранятся все зависимости (библиотеки). Когда устанавливается новая зависимость в проекте с помощью менеджера пакетов, такого как npm или yarn,
                        эти пакеты загружаются и устанавливаются в папку node_modules. Ее не нужно заливать на github и включать в отслеживание git.
                    </Paragraph>
                </List.Item>
                <List.Item>
                    <Paragraph>
                        4. package.json - файл, содержащий информацию о зависимостях твоего проекта, скрипты сборки и другую конфигурацию проекта.
                    </Paragraph>
                </List.Item>
                <List.Item>
                    <Paragraph>
                        5. package-lock.json - файл, создаваемый при установке пакетов с помощью менеджера пакетов npm. Он используется для фиксации версий всех установленных зависимостей в проекте.
                    </Paragraph>
                </List.Item>
                <List.Item>
                    <Paragraph>
                        6. .env - файл, в котором можно задать переменные окружения для конфигурации приложения, такие как ключи API или настройки среды выполнения.
                    </Paragraph>
                </List.Item>
                <List.Item>
                    <Paragraph>
                        7. .gitignore - файл, определяющий, какие файлы и папки должны быть игнорированы Git при коммите и публикации кода.
                    </Paragraph>
                </List.Item>
                <List.Item>
                    <Paragraph>
                        8. README.md - файл с описанием проекта, инструкциями по установке и запуску приложения, а также другой полезной информацией для разработчиков и пользователей.
                    </Paragraph>
                </List.Item>
            </List>
        </ConfigProvider>
    )
}

export default StructureApp;