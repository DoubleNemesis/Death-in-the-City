import styled from 'styled-components'

const StyledFPButton = styled.button`
color: white;
background-color: ${({ bgColor }) => bgColor || 'transparent'};
padding: .4em .8em;
margin: .5em auto 2em auto;
font-size: ${({ fontSize }) => fontSize || '2rem'};
font-weight: 800;
border: none;

:hover{
    background-color: blue;
    border: 1px solid grey; 
    color: black;
}

`

export const FrontPageButton = ({children, ...props}) => {
    return (
        <StyledFPButton fontSize={props.fontSize} bgColor={props.bgColor}  onClick={props.onclick}>{children}</StyledFPButton>
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



