import { Typography, List, ConfigProvider } from 'antd'

const { Title, Paragraph, Text } = Typography;

const LifeCycleClass = () => {
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
            <Title className='title'>Жизненный цикл классовых компонентов</Title>
            <Paragraph>
                <List>
                    <List.Item>
                        <Paragraph>
                            1. Mounting (Монтирование):
                        </Paragraph>
                    </List.Item>
                    <Paragraph>
                        - constructor(): Вызывается при создании экземпляра компонента. Используется для инициализации состояния и привязки методов.
                    </Paragraph>
                    <Paragraph>
                        - render(); Отрисовывает компонент и возвращает React элементы.
                    </Paragraph>
                    <Paragraph>
                        - componentDidMount(): Вызывается после рендеринга компонента и его добавления в DOM. Используется для выполнения запросов к серверу, подписки на события и других побочных эффектов.
                    </Paragraph>
                    <List.Item>
                        <Paragraph>
                            2. Updating (Обновление):
                        </Paragraph>
                    </List.Item>
                    <Paragraph>
                        - shouldComponentUpdate(nextProps, nextState): Вызывается перед обновлением компонента. Используется для оптимизации перерисовки компонента путем возврата false, если обновление не требуется.
                    </Paragraph>
                    <pre>
                        <Text code='true' style={{
                        color: '#bf1650'
                    }}>
                            {`
                        shouldComponentUpdate (nextProps, nextState) {
                            return nextProps.name !== this.props.name
                        }`}
                        </Text>
                    </pre>
                    <Paragraph>
                        - render(): Отрисовывает компонент и возвращает React элементы.
                    </Paragraph>
                    <Paragraph>
                        - componentDidUpdate(prevProps, prevState): Вызывается после обновления компонента и его рендеринга. Используется для выполнения дополнительных действий после обновления компонента, например, для выполнения запросов к серверу на основе новых пропсов.
                    </Paragraph>
                    <pre>
                        <Text code='true' style={{
                        color: '#bf1650'
                    }}>
                            {`
                        componentDidUpdate(prevProps, prevState) {
                            if (this.props.userID !== prevProps.userID) {
                                this.fetchData(this.props.userID);
                            }
                        }
                        `}
                        </Text>
                    </pre>
                    <List.Item>
                        <Paragraph>
                            3. Unmounting (Размонтирование):
                        </Paragraph>
                    </List.Item>
                    <Paragraph>
                        - componentWillUnmount(): Вызывается перед удалением компонента из DOM. Используется для выполнения необходимых очисток, отписки от событий и освобождения ресурсов.
                    </Paragraph>
                    <pre>
                        <Text code='true' style={{
                        color: '#bf1650'
                    }}>
                            {`
                        class WillUnmountExample extends React.Component {
                            constructor (props) {
                            super(props)
                                this.state = {
                                    time: 0
                                }
                            }

                        componentDidMount () {
                            this.timerID = setInterval(() => {
                                this.setState(prevState => ({
                                    time: prevState.time + 1
                                }))
                            }, 1000)
                        }

                        componentWillUnmount () {
                            clearInterval(this.timerID)
                            alert('Компонент удален из DOM')
                        }

                        render () {
                            return (
                                <div>
                                    <p>Время: {this.state.time} секунд</p>
                                </div>
                                )
                            }
                        }

                        export default WillUnmountExample
                        `}
                        </Text>
                    </pre>
                    <List.Item>
                        <Paragraph>
                            4. Error Handling (Обработка ошибок):
                        </Paragraph>
                    </List.Item>
                    <Paragraph>
                        - componentDidCatch(error, info): Вызывается при возникновении ошибки в дочерних компонентах. Используется для отлавливания и обработки ошибок.
                    </Paragraph>
                    <pre>
                        <Text code='true' style={{
                        color: '#bf1650'
                    }}>
                            {`
                        import React, { Component } from 'react';

                        class ErrorBoundaryExample extends Component {
                          constructor(props) {
                            super(props);
                            this.state = {
                              hasError: false,
                              error: null,
                              errorInfo: null
                            };
                          }
                        
                          componentDidCatch(error, errorInfo) {
                            this.setState({
                              hasError: true,
                              error: error,
                              errorInfo: errorInfo
                            });
                          }
                        
                          render() {
                            if (this.state.hasError) {
                              return (
                                <div>
                                  <h2>Что-то пошло не так.</h2>
                                  <p>{this.state.error && this.state.error.toString()}</p>
                                  <p>Дополнительная информация: {this.state.errorInfo && this.state.errorInfo.componentStack}</p>
                                </div>
                              );
                            }
                        
                            return this.props.children;
                          }
                        }
                        
                        class App extends Component {
                          render() {
                            return (
                              <div>
                                <h1>Пример использования ErrorBoundary</h1>
                                <ErrorBoundaryExample>
                                  {/* Твой компонент с возможной ошибкой */}
                                  <ComponentWithError />
                                </ErrorBoundaryExample>
                              </div>
                            );
                          }
                        }
                        
                        const ComponentWithError = () => {
                          const [throwError, setThrowError] = useState(false)
                        
                          const handleClick = () => setThrowError(presState => !presState.throwError)
                        
                          if (throwError) {
                            // Имитация ошибки
                            throw new Error('Это ошибка в компоненте ComponentWithError')
                          }
                        
                          return (
                            <div>
                              <h3>Компонент с возможной ошибкой</h3>
                              <button onClick={() => handleClick()}>Генерировать ошибку</button>
                            </div>
                          )
                        }
                        
                        export default App;
                        `}
                        </Text>
                    </pre>
                </List>
            </Paragraph>
        </ConfigProvider>
    )
}

export default LifeCycleClass;