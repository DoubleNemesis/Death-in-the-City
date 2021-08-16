import styled from 'styled-components'
import arrowRight from './../images/arrowRight.png'

const StyledFPButton = styled.button`
color: white;
background-color: ${({ bgColor }) => bgColor || 'transparent'};
padding: .4em .8em;
margin: .5em auto 0 auto;
font-size: ${({ fontSize }) => fontSize || '2rem'};
font-weight: 800;
border: 1px solid transparent; 
font-family: 'Poppins';

:hover{
    box-sizing: border-box;
    background-color: midnightblue;
    border: 1px solid grey; 
    color: white;
}

`
const Arrow = styled.img`
padding-left: .5em;
height: 40px;
`

export const FrontPageButton = ({children, ...props}) => {
    return (
        <StyledFPButton arrow fontSize={props.fontSize} bgColor={props.bgColor}  onClick={props.onclick}>{children}{props.arrow ? <Arrow src={arrowRight}/> : null} </StyledFPButton>
    )
}

const StyledButton = styled.button`
color: white;
background-color: ${({ color }) => color || 'red'};
padding: .8em 1.8em;
margin: 2em auto;
font-size: ${({ fontSize }) => fontSize || 1.5}rem;
border: none;

:hover{
    background-color: orange;
    border: 1px solid grey; 
    color: black;
}
`

function WitnessButton({ children, ...props }) {

    return (
        <StyledButton color={props.color} onClick={props.onclick}>{children}</StyledButton>
    )

}

export default WitnessButton



