import { Layout, Menu, Typography, ConfigProvider, Switch, Button, theme, Flex } from 'antd'
import { MenuFoldOutlined, MenuUnfoldOutlined, HomeOutlined } from '@ant-design/icons'
import { useContext, useState } from 'react'
import ThemeContext from './ThemeContext';
import { Link, Outlet, useNavigate } from 'react-router-dom'
import Paragraph from 'antd/es/typography/Paragraph';

const { Sider, Header, Content, Footer } = Layout;
const { Text } = Typography;
const { Item, SubMenu } = Menu;

const CustomLayout = ({ switchTheme }) => {
    const layoutTheme = useContext(ThemeContext)
    const [collapsed, setCollapsed] = useState(false);

    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const navigate = useNavigate()
    return (
        <Layout>
            <Sider
                trigger={null}
                collapsible
                collapsed={collapsed}
            >
                <ConfigProvider
                    theme={{
                        components: {
                            Menu: {
                                itemSelectedColor: layoutTheme.selectedColor,
                                itemSelectedBg: layoutTheme.selectedBg
                            },
                        }
                    }}
                >
                    <Menu
                        mode="inline"
                        style={{
                            height: '100%',
                            background: layoutTheme.menuBg,
                            color: layoutTheme.menuText,
                            paddingTop: 10,
                        }}
                    >
                        <Item>
                            <Text style={{ color: layoutTheme.menuText }}>Меню</Text>
                        </Item>
                        <SubMenu title='Введение'>
                            <Item key='menu-2'>
                                <Text style={{ color: layoutTheme.menuText }}>Что такое React?</Text>
                                <Link to='/basic' />
                            </Item>
                            <Item key='menu-3'>
                                <Text style={{ color: layoutTheme.menuText }}>Структура проекта</Text>
                                <Link to='/structure' />
                            </Item>
                            <Item key='menu-4'>
                                <Text style={{ color: layoutTheme.menuText }}>Virtual DOM</Text>
                                <Link to='/vdom' />
                            </Item>
                        </SubMenu>
                        <SubMenu title='Основной React'>
                            <Item key='menu-5'>
                                <Text style={{ color: layoutTheme.menuText }}>Components & Props</Text>
                                <Link to='/comp-props' />
                            </Item>
                            <Item key='menu-6'>
                                <Text style={{ color: layoutTheme.menuText }}>State</Text>
                                <Link to='/state' />
                            </Item>
                            <SubMenu title='Life Cycle'>
                                <Item key='menu-7'>
                                    <Text style={{ color: layoutTheme.menuText }}>Жизненный цикл классовых компонентов</Text>
                                    <Link to='/lifecycle-class' />
                                </Item>
                                <Item key='menu-8'>
                                    <Text style={{ color: layoutTheme.menuText }}>Жизненный цикл функциональных компонентов</Text>
                                    <Link to='/lifecycle-function' />
                                </Item>
                            </SubMenu>
                            <Item key='menu-9'>
                                <Text style={{ color: layoutTheme.menuText }}>Events</Text>
                                <Link to='/events' />
                            </Item>
                            <Item key='menu-10'>
                                <Text style={{ color: layoutTheme.menuText }}>Refs & Memo</Text>
                                <Link to='/refs-memo' />
                            </Item>
                            <Item key='menu-11'>
                                <Text style={{ color: layoutTheme.menuText }}>Fragment & Key</Text>
                                <Link to='/fragment-key' />
                            </Item>
                            <Item key='menu-12'>
                                <Text style={{ color: layoutTheme.menuText }}>Context</Text>
                                <Link to='/context' />
                            </Item>
                        </SubMenu>
                        <SubMenu title='Дополнительный материал'>
                            <Item key='menu-13'>
                                <Text style={{ color: layoutTheme.menuText }}>React Router</Text>
                                <Link to='/routing' />
                            </Item>
                            <Item key='menu-14'>
                                <Text style={{ color: layoutTheme.menuText }}>Работа с формами</Text>
                                <Link to='/forms' />
                            </Item>
                            <Item key='menu-15'>
                                <Text style={{ color: layoutTheme.menuText }}>Стилизация контента</Text>
                                <Link to='/styling' />
                            </Item>
                            <Item key='menu-16'>
                                <Text style={{ color: layoutTheme.menuText }}>Storage</Text>
                                <Link to='/storage' />
                            </Item>
                            <Item key='menu-17'>
                                <Text style={{ color: layoutTheme.menuText }}>HOC</Text>
                                <Link to='/high-order-components' />
                            </Item>
                        </SubMenu>
                    </Menu>
                </ConfigProvider>
            </Sider>
            <Layout
            >
                <ConfigProvider>
                    <Header
                        style={{
                            padding: 0,
                            background: layoutTheme.headerBg,
                        }}

                    >
                        <Flex
                            justify='space-between'
                            align='center'
                        >
                            <Button
                                type='text'
                                icon={collapsed ? <MenuUnfoldOutlined style={{ color: layoutTheme.iconColor }} /> : <MenuFoldOutlined style={{ color: layoutTheme.iconColor }} />}
                                onClick={() => setCollapsed(!collapsed)}
                                style={{
                                    fontSize: '16px',
                                    width: 64,
                                    height: 64,
                                }}
                            />
                            <Button
                                type='text'
                                icon={<HomeOutlined style={{ color: layoutTheme.iconColor }} />}
                                onClick={() => navigate('/')}
                                style={{
                                    fontSize: '16px',
                                    width: 64,
                                    height: 64,
                                }}
                            />
                            <Switch
                                onClick={switchTheme}
                                defaultChecked
                                style={{
                                    backgroundColor: '#3e4779',
                                    marginRight: 50
                                }}
                            />
                        </Flex>
                    </Header>
                </ConfigProvider>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    <Outlet />
                </Content>
                <Footer
                    style={{
                        textAlign: 'center',
                        color: '#3e4779'
                    }}
                >
                    <Flex
                        justify='space-around'
                        align='center'
                    >
                        <Paragraph>
                            Created by Elistar in 2024
                        </Paragraph>
                        <Button style={{
                            marginBottom: 15, 
                        }} href='https://github.com/IlyaElistar23' type='text'>Ссылка на Git Hub</Button>
                    </Flex>
                </Footer>
            </Layout>
        </Layout >
    )
}

export default CustomLayout;