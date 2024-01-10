import styled from 'styled-components'
import { useContext } from 'react'
import ThemeContext from './ThemeContext'

const StyledContent = styled.p`
    background-color: '${(theme) => theme.body}';
    color: '${(theme) => theme.text}';
`

const Content = () => {
    const theme = useContext(ThemeContext)
    return (
        <StyledContent theme={theme}>
            Hello World!
        </StyledContent>
    )
}

export default Content;