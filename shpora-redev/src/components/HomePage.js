import { Typography, ConfigProvider, Image, Flex } from 'antd'
import logo from './logo.svg';

const { Title, Paragraph } = Typography

const HomePage = () => {
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
            <Flex
                vertical
                justify='center'
                align='center'
            >
                <Title className='title'>Шпора React</Title>
                <Image src={logo} className='React-logo' width={1000}/>
            </Flex>
        </ConfigProvider>
    )
}

export default HomePage;