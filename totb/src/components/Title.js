import styled from 'styled-components'
import TitleContainer from '../components/TitleContainer'

const StyledTitle = styled.h1`
color: whitesmoke;
font-size: 2rem;
`

function Title({ children }) {

    return (
        <TitleContainer>
            <StyledTitle>{children}</StyledTitle>
        </TitleContainer>
    )

}

export default Title