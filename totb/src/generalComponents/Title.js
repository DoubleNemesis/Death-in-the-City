import styled from 'styled-components'
import TitleContainer from '../generalComponents/TitleContainer'

const StyledTitle = styled.h1`
color: whitesmoke;
font-size: 3em;
text-align: left;
`

function Title({ children }) {

    return (
        <TitleContainer>
            <StyledTitle>{children}</StyledTitle>
        </TitleContainer>
    )

}

export default Title