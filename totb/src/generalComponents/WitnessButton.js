import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

const StyledButton = styled.button`
background-color: ${({bgColor}) => bgColor || '#141414'};
margin: .5em 0;
border: none;
color: whitesmoke;
font-size: ${({fontSize}) => fontSize || '.8rem'};
padding: .2em .8em;
border-radius: 3px;

:hover{
    background-color: orange;
    color: black;
}

@media(min-width: 700px){
    font-size: ${({fontSize}) => fontSize || '.7rem'};
}
`

function WitnessButton({ children, ...props }) {
    let history = useHistory()

    return (

        <StyledButton 
        bgColor={props.bgColor}
        fontSize={props.fontSize}
            onClick={() => history.push(`${props.destination}`)}
            disabled={props.isDisabled}>
            {children}
        </StyledButton>

    )

}

export default WitnessButton

