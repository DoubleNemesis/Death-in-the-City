import styled from 'styled-components'
import { history, useHistory } from 'react-router-dom'

const StyledButton = styled.button`
background-color: #141414;
margin: .5em 0;
border: none;
color: whitesmoke;
font-size: .8rem;
padding: .2em .8em;

:hover{
    background-color: orange;
    /* border: 1px solid grey;  */
    color: black;
}
`

function WitnessButton({ children, ...props }) {
    let history = useHistory()

    return (
  
            <StyledButton onClick={()=>history.push(`${props.destination}`)} disabled={props.isDisabled}>{children}</StyledButton>

    )

}

export default WitnessButton 

