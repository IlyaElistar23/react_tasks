import { useState } from 'react'
import { Typography, ConfigProvider, Button, Input } from 'antd'
import { v4 as uuidv4 } from 'uuid'
import ListKey from './ListKey'

const { Title, Text, Paragraph } = Typography

const FragmentKey = () => {

    const list = [
        { id: uuidv4(), title: 'React' },
        { id: uuidv4(), title: 'JavaScript' },
        { id: uuidv4(), title: 'HTML/CSS' }]

    const [listState, setListState] = useState(list)

    const [inputText, setInputText] = useState('')

    const changeList = () => {

        setListState([...listState, { id: uuidv4(), title: inputText }])
        setInputText('')

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
                    colorLink: '#0e101c',
                    colorPrimary: '#0e101c'
                }
            }}>
            <Title className='title'>Работа с Fragment и key</Title>
            <Paragraph>
                <Title>Fragment</Title>
                <Paragraph>
                    С помощью фрагментов можно сгруппировать список дочерних элементов без добавления дополнительных узлов в DOM.
                    Можно использовать React.Fragment или выполнить импорт, чтобы использовать Fragment:
                </Paragraph>
                <pre>
                    <Text code='true' style={{
                        color: '#bf1650'
                    }}>
                        {`
                    import React, { Fragment } from 'react';

                    // Заменяем теги div на Fragment:

                    const ChildComponent = () => <Fragment>
                        <h1>Hello Child Component</h1>
                        <h1>Hello Child Component</h1>
                    </Fragment>
                    `}
                    </Text>
                </pre>
                <Paragraph>
                    Существует сокращенная запись (импортировать не нужно) - недостаток сокращенной записи: нельзя использовать атрибуты, например className или key:
                </Paragraph>
                <pre>
                    <Text code='true' style={{
                        color: '#bf1650'
                    }}>
                        {`
                        import React, { Fragment } from 'react';

                        // так можно

                        const ChildComponent = () => <>
                            <h1>Hello Child Component</h1>
                            <h1>Hello Child Component</h1>
                        </>
                        
                        // так нельзя!!! Будет ошибка
                        
                        const ChildComponent = () => < className="child" >
                            <h1>Hello Child Component</h1>
                            <h1>Hello Child Component</h1>
                        </>
                        `}
                    </Text>
                </pre>
            </Paragraph>
            <Paragraph>
                <Title>key</Title>
                <Paragraph>
                    Ключи помогают React определять, какие элементы были изменены, добавлены или удалены. Их необходимо указывать,
                    чтобы React мог сопоставлять элементы массива с течением времени:
                </Paragraph>
                <pre>
                    <Text code='true' style={{
                        color: '#bf1650'
                    }}>
                        {`
                        const numbers = [1, 2, 3, 4, 5];
                        const listItems = numbers.map((number) => <li key={number}>
                                {number}
                            </li>
                        );
                        `}
                    </Text>
                </pre>
                <Paragraph>
                    Лучший способ выбрать ключ — это использовать строку, которая будет явно отличать элемент списка от его соседей. Например, использовать ID из данных как ключи.
                    Если нет ID, можно воспользоваться библиотеку uuid:
                    Ключи нужно определять непосредственно внутри массивов. Если не указать ключи, в консоли увидим сообщение:
                    Warning: Each child in an array or iterator should have a unique “key” prop.Ключи оптимизируют работу с элементами массивов,
                    уменьшают количество ненужных удалений и созданий элементов.
                </Paragraph>
                <Paragraph>
                    Без key механизм reconciliation сверяет компоненты попарно между текущим и новым VDOM. Из-за этого может происходить большое количество лишних перерисовок интерфейса, что замедляет работу приложения.
                </Paragraph>
                <Paragraph>
                    Хорошим примером работы с кей будет рендер списка элементов, для генерации key будем использовать библиотеку
                    <Button type='text' href='https://www.npmjs.com/package/uuid'>UUID</Button>.
                </Paragraph>
                <Paragraph>
                    Создаем в главное компоненте список, который мы будем рендерить и добавлять в него новые элементы. Также, объявим состояние для поля ввода и для списка:
                </Paragraph>
                <pre>
                    <Text code='true' style={{
                        color: '#bf1650'
                    }}>
                        {`
                        function App() {

                            const list = [
                              { id: uuidv4(), title: 'React' },
                              { id: uuidv4(), title: 'JavaScript' },
                              { id: uuidv4(), title: 'HTML/CSS' }]
                          
                            const [listState, setListState] = useState(list)
                          
                            const [inputText, setInputText] = useState('')

                            const changeList = () => {

                                setListState([...listState, { id: uuidv4(), title: inputText }])
                            
                              }
                              return (
                                <div className='App'>
                                  <header className='App-header'>
                                    <List list={listState} setListState={setListState} />
                                    <input
                                      value={inputText}
                                      onKeyDown={(event) => event.key === 'Enter' && changeList()}
                                      onChange={(event) => setInputText(event.target.value)}
                                    />
                                    <button onClick={() => setListState(list)}>Сбросить</button>
                                  </header>
                            
                                </div>
                              );
                            }
                            
                            export default App;
                        `}
                    </Text>
                </pre>
                <Paragraph>
                    В качестве пропсов мы передали компоненту List состояние списка и функцию для изменения состояния для того, чтобы можно было изменять элементы списка.
                    В самом компоненте List принимаем пропсы и используем их для того, чтобы определить функцию, которая будет выполняться при нажатии кнопки и изменять элемент списка:
                </Paragraph>
                <pre>
                    <Text code='true' style={{
                        color: '#bf1650'
                    }}>
                        {`
                        const List = ({list, setListState}) => {
    
                            const changeEl = (id) => {
                        
                                setListState(list.map(el => (el.id === id? {...el, title: '!!!{el.title}'} : el)))
                                
                            }
                        
                            return <ul>
                                {list.map(item => {
                                    return (
                                    <Fragment>
                                        <li key={item.id}>
                                            {item.title}
                                            <button onClick={() => changeEl(item.id)}>
                                                Изменить элемент
                                            </button>
                                        </li>
                                    </Fragment>)
                                })}
                            </ul>
                        }
                        
                        export default List;
                        `}
                    </Text>
                </pre>
                <Paragraph>
                    Итоговый список будет выглядеть следующим образом:
                </Paragraph>
                <ListKey list={listState} setListState={setListState} />
                <Input
                    style={{
                        width: 400
                    }}
                    value={inputText}
                    onKeyDown={(event) => event.key === 'Enter' && changeList()}
                    onChange={(event) => setInputText(event.target.value)}
                />
                <Button onClick={() => setListState(list)}>Сбросить</Button>
            </Paragraph>
        </ConfigProvider>
    )
}

export default FragmentKey;