import styled from 'styled-components'
import TitleContainer from '../generalComponents/TitleContainer'

const StyledTitle = styled.span`
color: whitesmoke;
font-size: 2.3rem;
text-align: left;
font-family: 'Bangers', cursive;
color: red;
letter-spacing: 2px;
`

function Title({ children }) {

    return (
        <TitleContainer>
            <StyledTitle>{children}</StyledTitle>
        </TitleContainer>
    )

}

export default Title