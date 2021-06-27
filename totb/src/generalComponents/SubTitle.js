import styled from 'styled-components'
import TitleContainer from '../generalComponents/TitleContainer'

const StyledSubTitle = styled.h2`
color: whitesmoke;
font-size: 1rem;
`

function SubTitle({ children }) {

    return (
        <TitleContainer>
            <StyledSubTitle>{children}</StyledSubTitle>
        </TitleContainer>
    )

}

export default SubTitle