import styled from 'styled-components'
import Flex from './Flex'
import { useState } from 'react'
import Line from './Line'

const StyledConsole = styled.textarea`
    width: 100%;
    height: 70vh;
    background: black;
    font-size: 24px;
    border: none;
    resize: none;
    color: ${props => props.color || props.theme.colors.primary};
    &:focus {
        outline: none;
    }
`

const Console = ({color, ...props}) => {
    const [lines, setLines] = useState(['C://users/Elistar>'])

    const onKeyPress = (event) => {
        if (event.charCode === 13) {
            setLines([...lines, 'C://users/Elistar>'])
        }
    }
    return (
        <Flex>
            <Flex direction={'column'} margin='0px 10px'>
                {lines.map(line => 
                <Line>{line}</Line>
                )}
            </Flex>
            <StyledConsole onKeyPress={onKeyPress} {...props}/>
        </Flex>
    )
}

export default Console;