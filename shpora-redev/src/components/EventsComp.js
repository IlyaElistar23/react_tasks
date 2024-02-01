import { Typography, List, ConfigProvider } from 'antd'

const { Title, Paragraph, Text } = Typography;

const EventsComp = () => {
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
      <Title className='title'>Events и как с ними работать</Title>
      <Paragraph>
        <Paragraph>
          В React события (events) являются важной частью взаимодействия с пользователем. Они позволяют обрабатывать действия пользователя, такие как клики, наведение, отправка формы и другие.
        </Paragraph>
        <List
          header={<Title level={3}>5 наиболее часто используемых событий:</Title>}
        >
          <List.Item>
            <Paragraph>
              1. onClick (Клик):
            </Paragraph>
          </List.Item>
          <Paragraph>
            Событие onClick возникает при клике на элементе. Это одно из наиболее распространенных событий в React.
          </Paragraph>
          <pre>
            <Text code='true' style={{
              color: '#bf1650'
            }}>
              {`
                        const handleClick = () => {
                            return 'Привет'
                          }
                          
                          const MyComponent = () => {
                            return (
                              <button onClick={handleClick}>Press</button>
                            );
                          }
                        `}
            </Text>
          </pre>
          <List.Item>
            <Paragraph>
              2. onChange (Изменение)
            </Paragraph></List.Item>
          <Paragraph>
            Событие onChange возникает при изменении значения элемента формы, такого как текстовое поле (input), флажок (checkbox) или выбор элемента списка (radio).
            В React, параметр event в callback-функции представляет объект события, который генерируется при изменении значения элемента формы или компонента. event.target.value содержит текущее значение input элемента.
          </Paragraph>
          <pre>
            <Text code='true' style={{
              color: '#bf1650'
            }}>
              {`
                        const [value, setValue] = useState('')
                        const handleChange = (event) => {
                            setValue(event.target.value);
                          }
                          
                          const MyComponent = () => {
                            return (
                              <input type="text" onChange={handleChange} value={value}/>
                            );
                          }
                        `}
            </Text>
          </pre>
          <List.Item>
            <Paragraph>
              3. onSubmit (Отправка формы):
            </Paragraph>
          </List.Item>
          <Paragraph>
            Событие onSubmit возникает при отправке формы. Оно позволяет выполнить действия, связанные с отправкой данных формы на сервер.
          </Paragraph>
          <pre>
            <Text code='true' style={{
              color: '#bf1650'
            }}>
              {`
                          const handleSubmit = (event) => {
                            event.preventDefault();
                            console.log('Форма отправлена!');
                          }
                          
                          const MyComponent = () => {
                            return (
                              <form onSubmit={handleSubmit}>
                                {/* Поля формы */}
                                <button type="submit">Отправить</button>
                              </form>
                            );
                          `}
            </Text>
          </pre>
          <List.Item>
            <Paragraph>
              4. onMouseOver (Наведение курсора)
              :</Paragraph>
          </List.Item>
          <Paragraph>
            Событие onMouseOver возникает, когда курсор наводится на элемент. Оно может использоваться для отображения дополнительной информации или изменения состояния компонента при наведении.
          </Paragraph>
          <pre>
            <Text code='true' style={{
              color: '#bf1650'
            }}>
              {`
                        const handleMouseOver = () => {
                            console.log('Курсор наведен!');
                          }
                          
                          const MyComponent = () => {
                            return (
                              <div onMouseOver={handleMouseOver}>Наведите курсор на меня</div>
                            );
                          }
                        `}
            </Text>
          </pre>
          <List.Item>
            <Paragraph>
              5. onKeyDown (Нажатие клавиши):
            </Paragraph>
          </List.Item>
          <Paragraph>
            Событие onKeyDown возникает при нажатии клавиши на клавиатуре. Оно позволяет реагировать на определенные комбинации клавиш или выполнять действия на основе нажатых клавиш.
          </Paragraph>
          <pre>
            <Text code='true' style={{
              color: '#bf1650'
            }}>
              {`
                        const handleKeyDown = (event) => {
                            console.log('Нажата клавиша:', event.key);
                          }
                          
                          const MyComponent = () => {
                            return (
                              <input type="text" onKeyDown={handleKeyDown} />
                            );
                          }
                        `}
            </Text>
          </pre>
        </List>
      </Paragraph>
    </ConfigProvider>
  )
}

export default EventsComp;