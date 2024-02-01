import { List, Button, Typography } from 'antd'


const ListKey = ({ list, setListState }) => {
    const changeEl = (id) => {

        setListState(list.map(el => (el.id === id ? { ...el, title: `!!!${el.title}` } : el)))

    }

    return (
            <List>
                {list.map(item => {
                    return (
                        <>
                            <Typography.Paragraph>
                                {item.title}
                                <Button 
                                style={{
                                    margin: '0 10px'
                                }} 
                                onClick={() => changeEl(item.id)}>
                                    Изменить элемент
                                </Button>
                            </Typography.Paragraph>
                        </>
                    )
                })}
            </List>
    )
}
export default ListKey;