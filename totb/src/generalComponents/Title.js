import styled from 'styled-components'
import TitleContainer from '../generalComponents/TitleContainer'

const StyledTitle = styled.span`
color: whitesmoke;
font-size: 2rem;
text-align: left;
font-family: 'Bangers', cursive;
color: red;
letter-spacing: 2px;

@media(max-width: 321px){ //iphone 5/SE
font-size: 1.8rem;
}

`

function Title({ children }) {

    return (
        <TitleContainer>
            <StyledTitle>{children}</StyledTitle>
        </TitleContainer>
    )

}

export default Title