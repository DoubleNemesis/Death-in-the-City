import styled from 'styled-components'
import { history, useHistory } from 'react-router-dom'
import arrowRight from './../images/arrowRight.png'


const StyledButton = styled.button`
color: white;
background-color: ${({ color }) => color || 'red'};
padding: .8em 1.8em;
margin: ${({ margin }) => margin || '2em auto'};
font-size: ${({ fontSize }) => fontSize || 1.5}rem;
border: none;
font-family: 'Poppins';
width: ${({ width }) => width || 'unset'};
border-radius: ${({ borderRadius }) => borderRadius || '5'}px;

:hover{
    background-color: orange;
    /* border: 1px solid grey;  */
    color: black;
}
:active{
    background-color: pink;
    border: 1px solid grey; 
    color: black;
}
`
const Arrow = styled.img`
padding-left: .5em;
height: 40px;
`

function NextPageButton({ children, ...props }) {
    let history = useHistory()

    return (

        <StyledButton
            onClick={() => history.push(`${props.destination}`)}
            margin={props.margin} width={props.width}
            borderRadius={props.borderRadius}>
            {children}
            <Arrow src={arrowRight} />
        </StyledButton>

    )

}

export default NextPageButton