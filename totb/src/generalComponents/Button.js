import styled from 'styled-components'


const StyledButton = styled.button`
color: white;
background-color: red;
padding: 1.2em 2.2em;
margin: 2em auto;
font-size: 2rem;
border: none;

:hover{
    background-color: orange;
    border: 1px solid grey; 
    color: black;
}

`

function Button({ children, ...props }) {

    return (
  
            <StyledButton onClick={props.onclick}>{children}</StyledButton>

    )

}

export default Button