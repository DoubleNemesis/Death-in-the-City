import styled from 'styled-components'
import TitleContainer from './TitleContainer'

const StyledTitle = styled.span`
color: whitesmoke;
font-size: 1.8rem;
text-align: left;
font-family: 'Bangers', cursive;
color: red;
letter-spacing: 2px;

@media(max-width: 321px){ //iphone 5/SE
font-size: 1.4rem;
}
`
const StyledImage = styled.img`
width: 40px;
margin-right: .3em;
`

function Title({ children, ...props }) {

    return (
        <TitleContainer>
            <StyledTitle>{props.image ? <StyledImage src={props.image}/> : null}{children}</StyledTitle>
        </TitleContainer>
    )

}

export default Title