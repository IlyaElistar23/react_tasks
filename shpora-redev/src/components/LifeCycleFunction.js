import { Typography, ConfigProvider } from 'antd'

const { Title, Paragraph, Text } = Typography;

const LifeCycleFunction = () => {
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
            <Title className='title'>Жизненный цикл функциональных компонентов</Title>
            <Paragraph>
                <Paragraph>
                    useEffect - это хук в React, предназначенный для работы с методами жизненного цикла в функциональных компонентах.
                </Paragraph>
                <Paragraph>
                    Первый параметр: Функция, которая должна выполниться при монтировании компонента и при каждом обновлении.
                </Paragraph>
                <Paragraph>
                    Второй параметр: Массив зависимостей определяет, на что конкретно должен реагировать useEffect. Если массив пуст, useEffect выполняется только при монтировании и размонтировании. Если в массиве указаны определенные значения, то useEffect будет выполняться только тогда, когда эти значения изменяются.
                </Paragraph>
                <pre>
                    <Text code='true' style={{
                        color: '#bf1650'
                    }}>
                        {`
                Отработает как componentDidMount
                useEffect(() => { console.log("componentDidMount") }, []) 
                
                Отработает как componentDidUpdate
                useEffect(() => { console.log("componentDidUpdate") }, [dependency]) 
                
                Отработает как componentDidMount и componentDidUpdate
                useEffect(() => { console.log("componentDidMount и componentDidUpdate") }) 
                
                Отработает как componentWillUnmount
                useEffect(() => {
                  return () => console.log('componentWillUnmount')
                }, [])
                `}
                    </Text>
                </pre>
            </Paragraph>
        </ConfigProvider>
    )
}

export default LifeCycleFunction;