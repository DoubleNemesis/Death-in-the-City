import styled from 'styled-components'
import { history, useHistory } from 'react-router-dom'


const StyledButton = styled.button`
color: white;
background-color: red;
padding: 1.2em 2.2em;
margin: .2em auto;
font-size: 2rem;
border: none;

:hover{
    background-color: orange;
    border: 1px solid grey; 
    color: black;
}

`

function NextPageButton({ children, ...props }) {
    let history = useHistory()

    return (
  
            <StyledButton onClick={()=>history.push(`${props.destination}`)}>{children}</StyledButton>

    )

}

export default NextPageButton 