import styled from 'styled-components'
import { history, useHistory } from 'react-router-dom'

const StyledButton = styled.button`
color: white;
background-color: ${({color})=> color || 'red'};
padding: .8em 1.8em;
margin: 2em auto;
font-size: ${({fontSize})=> fontSize || 1.5}rem;
border: none;

:hover{
    background-color: orange;
    border: 1px solid grey; 
    color: black;
}
`

function WitnessButton({ children, ...props }) {

    return (
  
            <StyledButton onClick={props.onclick}>{children}</StyledButton>

    )

}

export default WitnessButton 

