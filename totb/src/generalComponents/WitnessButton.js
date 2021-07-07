import styled from 'styled-components'
import { history, useHistory } from 'react-router-dom'

const StyledButton = styled.button`
background-color: black;
color: white;
font-size: .81rem;
margin: .5em 0;

:hover{
    background-color: orange;
    border: 1px solid grey; 
    color: black;
}
`

function WitnessButton({ children, ...props }) {
    let history = useHistory()

    return (
  
            <StyledButton onClick={()=>history.push(`${props.destination}`)}>{children}</StyledButton>

    )

}

export default WitnessButton 

