import { Typography, List, ConfigProvider } from 'antd'

const { Title, Paragraph, Text } = Typography

const ContextComp = () => {
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
            <Title className='title'>Использование Context</Title>
            <Paragraph>
                <Paragraph>
                    Context предоставляет способ передачи данных через дерево компонентов без явной передачи пропсов от родительских компонентов к дочерним.
                    Это особенно полезно, когда необходимо передать данные глубоко в иерархии компонентов, избегая "просачивания" пропсов через несколько промежуточных компонентов.
                    То есть вместо того, чтобы передавать через каждый компонент по дереву пропсы, без явного их использования, мы можем передать сразу в нужный компонент.
                    Обычная передача пропсов через несколько ветвей дерева приводит к усложнению кода, затруднение переиспользования.
                </Paragraph>
                <List
                    header={<Title level={3}>Порядок таков:</Title>}
                >
                    <List.Item>
                        <Paragraph>
                            1)	Создание контекста:
                        </Paragraph>
                    </List.Item>
                    <pre>
                        <Text code='true' style={{
                        color: '#bf1650'
                    }}>
                            {`
                            import React from 'react';

                            const MyContext = React.createContext();
                            
                            export default MyContext;
                            `}
                        </Text>
                    </pre>
                    <List.Item>
                        <Paragraph>
                            2)	Предоставление значения контекста
                            Затем нужно предоставить значение контекста внутри компонента-провайдера, он обертывает дерево компонентов, которым нужен доступ к контексту
                        </Paragraph>
                    </List.Item>
                    <pre>
                        <Text code='true' style={{
                        color: '#bf1650'
                    }}>
                            {`
                            import React from 'react';
                            import MyContext from './MyContext';
                            import ComponentA from './ComponentA';
                            
                            const App = () => {
                              const value = 'Hello, Context!';
                            
                              return (
                                <MyContext.Provider value={value}>
                                  <ComponentA />
                                </MyContext.Provider>
                              );
                            }
                            
                            export default App;
                            `}
                        </Text>
                    </pre>
                    <List.Item>
                        <Paragraph>
                            3)	Использование хука useContext
                            Теперь можно использовать хук внутри функционального компонента, чтобы получить доступ к значению контекста
                        </Paragraph>
                    </List.Item>
                    <pre>
                        <Text code='true' style={{
                        color: '#bf1650'
                    }}>
                            {`
                            import React, { useContext } from 'react';
                            import MyContext from './MyContext';
                            import ComponentB from './ComponentB';
                            
                            function ComponentA() {
                              const value = useContext(MyContext);
                            
                              return (
                                <div>
                                  <h2>Component A</h2>
                                  <p>Received value from Context: {value}</p>
                                  <ComponentB />
                                </div>
                              );
                            }
                            
                            export default ComponentA;
                            `}
                        </Text>
                    </pre>
                    <List.Item>
                        <Paragraph>
                            4)	Подписка на контекст (еще один вариант)
                            Еще один вариант, можно использовать MyContext.Consumer
                        </Paragraph>
                    </List.Item>
                    <pre>
                        <Text code='true' style={{
                        color: '#bf1650'
                    }}>
                            {`
                            import React from 'react';
                            import MyContext from './MyContext';
                            import ComponentB from './ComponentB';
                            
                            function ComponentA() {
                              return (
                                <div>
                                  <h2>Component A</h2>
                                  <MyContext.Consumer>
                                    {(value) => (
                                      <p>Received value from Context: {value}</p>
                                    )}
                                  </MyContext.Consumer>
                                  <ComponentB />
                                </div>
                              );
                            }
                            
                            export default ComponentA;
                            `}
                        </Text>
                    </pre>
                </List>
                <Paragraph>
                    В качестве примера использования контекста может служить переключатель темы на данной странице.
                </Paragraph>
            </Paragraph>
        </ConfigProvider>
    )
}

export default ContextComp;