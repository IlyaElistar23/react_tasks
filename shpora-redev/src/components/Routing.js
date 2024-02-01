import { Typography, List, ConfigProvider } from 'antd'

const { Title, Text, Paragraph } = Typography;

const Routing = () => {
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
            <Title className='title'>React Routing</Title>
            <Paragraph>
                <Paragraph>
                    Роутинг в React обеспечивает навигацию и переходы между различными страницами и разделами сайта или приложения.
                    Основная особенность роутинга – возможность осуществлять навигацию без перезагрузки страницы.
                    Т.е. чтобы каждый раз не отправлять запрос на сервер и не загружать новую страницу, роутинг позволяет обновлять данные на странице динамически, только то,
                    что нужно в данный момент.
                </Paragraph>
                <List
                    header={<Title level={3}>Роутинг в React реализовывается с помощью следующих компонентов и хуков:</Title>}
                >
                    <List.Item>
                        <Paragraph>
                            1)	BrowserRouter - компонент, который оборачивает приложение и предоставляет контекст для реализации маршрутизации, т.е. настраивает основной маршрутизатор в приложении
                        </Paragraph>
                    </List.Item>
                    <List.Item>
                        <Paragraph>
                            2)	Routes - компонент-контейнер, в котором определяются все маршруты в приложении, т.е. внутри него группируются все компоненты Route
                        </Paragraph>
                    </List.Item>
                    <pre>
                        <Text code='true' style={{
                        color: '#bf1650'
                    }}>
                            {`
                            <Routes> 
                                <Route path="/" element={<Home />} /> 
                                <Route path="/about" element={<About />} />
                                <Route path="/contact" element={<Contact />} /> 
                            </Routes>
                            `}
                        </Text>
                    </pre>
                    <List.Item>
                        <Paragraph>
                            3)	Route - компонент, который определяет отдельный маршрут внутри Routes каждый Route имеет параметры path и element
                        </Paragraph>
                    </List.Item>
                    <pre>
                        <Text code='true' style={{
                        color: '#bf1650'
                    }}>
                            {`
                            <Routes> 
                                <Route path="/" element={<Home />} /> 
                                <Route path="/about" element={<About />} />
                                <Route path="/contact" element={<Contact />} /> 
                            </Routes>                         
                            `}
                        </Text>
                    </pre>
                    <List.Item>
                        <Paragraph>
                            4)	Link - используется для создания ссылок для навигации между маршрутами в приложении
                        </Paragraph>
                    </List.Item>
                    <pre>
                        <Text code='true' style={{
                        color: '#bf1650'
                    }}>
                            {`
                            <Link to="/">Главная</Link> 
                            <Link to="/about">О нас</Link>
                            <Link to="/contact">Контакты</Link>                            
                            `}
                        </Text>
                    </pre>
                    <List.Item>
                        <Paragraph>
                            5)	NavLink - позволяет создавать активные ссылки (отличие от простого Link в том, что NavLink добавляет класс active к ссылке, когда соответствующий маршрут активен).
                            Это позволяет нам использовать класс как инструмент для стилизации страницы.
                        </Paragraph>
                    </List.Item>
                    <pre>
                        <Text code='true' style={{
                        color: '#bf1650'
                    }}>
                            {`
                            <NavLink to="/" activeClassName="active">Главная</NavLink>
                            <NavLink to="/about" activeClassName="active">О нас</NavLink>
                            <NavLink to="/contact" activeClassName="active">Контакты</NavLink>                            
                            `}
                        </Text>
                    </pre>
                    <List.Item>
                        <Paragraph>
                            6)	Outlet - компонент, который позволяет собрать определенный контент воедино, например:
                            Создаем компонент Layout, который будет ретурнить следующее:
                        </Paragraph>
                    </List.Item>
                    <pre>
                        <Text code='true' style={{
                        color: '#bf1650'
                    }}>
                            {`
                            <header></header>
                            <Outlet/>
                            <footer></footer>                            
                            `}
                        </Text>
                    </pre>
                    <Paragraph>
                        Затем, в главном компоненте App прописываем роуты и оборачиваем в компонент выше роуты на наш контент:
                    </Paragraph>
                    <pre>
                        <Text code='true' style={{
                        color: '#bf1650'
                    }}>
                            {`
                            <Routes>
                                <Route path=’/’ element={<Layout/>}>
                                // Роуты на наш контент
                                </Route>
                            </Routes>
                            `}
                        </Text>
                    </pre>
                    <List.Item>
                        <Paragraph>
                            7)	useNavigate() – это хук, который позволяет перенаправлять пользователя по маршрутам.
                        </Paragraph>
                    </List.Item>
                    <pre>
                        <Text code='true' style={{
                        color: '#bf1650'
                    }}>
                            {`
                            const Home = () => { 
                                const navigate = useNavigate(); 
                                const handleClick = () => { 
                                    navigate('/about');
                                }; 
                                return ( 
                                    <div>
                                        <h1>Домашняя страница</h1>
                                        <button onClick={handleClick}>Перейти к странице О нас</button>
                                    </div> 
                                ); 
                                };
                            `}
                        </Text>
                    </pre>
                    <Paragraph>
                        С помощью navigate можно сделать кнопку возврата назад:
                    </Paragraph>
                    <pre>
                        <Text code='true' style={{
                        color: '#bf1650'
                    }}>
                            {`
                            const navigate = useNavigate()
                            const goBack = () => navigate(-1) 
                            `}
                        </Text>
                    </pre>
                    <Paragraph>
                        Параметр у функции navigate(), которая является результатом вызова хука useNavigate() может быть как числовой (число соответствует тому, на сколько шагов перейти вперед
                        (положительное число) или назад (отрицательное число)), так и абсолютный, то есть фактический URL-адрес куда перейти по выполнении этой функции,
                        функцию можно передать или в кнопку по событию или в Link по событию.
                    </Paragraph>
                    <Paragraph>
                        Еще один вариант применения – это компонент Navigate и его использование для переадресации:
                    </Paragraph>
                    <pre>
                        <Text code='true' style={{
                        color: '#bf1650'
                    }}>
                            {`
                            <Route path=’/about’ element={<AboutPage/>}/>
                            <Route path=’/about-us’ element={<Navigate to=’/about’/>}/>                            
                            `}
                        </Text>
                    </pre>
                    <Paragraph>
                        Функция навигации может принимать в качестве параметра либо число, что означает навигацию назад/вперед по заданному числу шагов,
                        либо строку с точным указанием куда перейти и тогда вторым параметром можно передать функцию NavigateOptions, которая принимает 2 параметра:
                    </Paragraph>
                    <Paragraph>
                        a)	replace – по умолчанию false, то есть движение будет по истории, как в случае с числовым параметром выше, если задать его как true, то движение не будет записано в историю.
                    </Paragraph>
                    <Paragraph>
                        b)	state – некие данные
                    </Paragraph>
                    <Paragraph>
                        С помощью navigate удобно переадресовывать пользователей на основе результата http-запроса.
                    </Paragraph>
                    <List.Item>
                        <Paragraph>
                            8)	useParams() – это хук, который позволяет получать параметры из маршрута.
                        </Paragraph>
                    </List.Item>
                    <pre>
                        <Text code='true' style={{
                        color: '#bf1650'
                    }}>
                            {`
                            const UserProfile = () => { 
                                const params = useParams(); 
                                return ( 
                                    <div> 
                                        <h1>Профиль пользователя: {params.username}</h1>
                                    </div> 
                                ); 
                                };
                            `}
                        </Text>
                    </pre>
                    <Paragraph>
                        В этом примере использование хука позволяет получить некий объект params, в котором предположительно есть параметр :username и он выводится на страницу
                        Данный хук позволяет создавать динамические URL-адреса, например:
                    </Paragraph>
                    <pre>
                        <Text code='true' style={{
                        color: '#bf1650'
                    }}>
                            {`
                            <Route path=’about/:id’ element={<SinglePage/>}>
                            const { id } = useParams()
                            <Link to={'about/{id}/edit'}>Edit post</Link                            
                            `}
                        </Text>
                    </pre>
                    <List.Item>
                        <Paragraph>
                            9)	useLocation() – это хук, который позволяет получать информацию о текущем URL и его параметрах.
                        </Paragraph>
                    </List.Item>
                    <pre>
                        <Text code='true' style={{
                        color: '#bf1650'
                    }}>
                            {`
                            const Page = () => { 
                                const location = useLocation(); 
                                return ( 
                                    <div> 
                                        <h1>Текущий URL: {location.pathname}</h1>
                                    </div> 
                                ); 
                            }; 
                            `}
                        </Text>
                    </pre>
                    <Paragraph>
                        Хук useLocation() возвращает объект Location, который содержит в себе следующие свойства:
                    </Paragraph>
                    <Paragraph>
                        a)	hash – хэш текущего URL-адреса
                    </Paragraph>
                    <Paragraph>
                        b)	key – уникальный ключ страницы
                    </Paragraph>
                    <Paragraph>
                        c)	pathname – путь текущего URL-адреса (например /about)
                    </Paragraph>
                    <Paragraph>
                        d)	search – строка запроса текущего URL-адреса
                    </Paragraph>
                    <Paragraph>
                        e)	state – значение состояния местоположения, созданного с помощью Link state={ } или useNavigate ()
                        Например:
                    </Paragraph>
                    <pre>
                        <Text code='true' style={{
                        color: '#bf1650'
                    }}>
                            {`
                            const navigate = useNavigate()
                            const goBack = () => navigate(‘/about’ , {state: 123})                            
                            `}
                        </Text>
                    </pre>
                    <Paragraph>
                        То есть, при переходе по ссылке /about в state объекта location запишется число 123.
                    </Paragraph>
                </List>
            </Paragraph>
        </ConfigProvider>
    )
}

export default Routing;