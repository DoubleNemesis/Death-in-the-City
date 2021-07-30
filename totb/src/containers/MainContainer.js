import styled from 'styled-components'

const StyledMainContainer = styled.div`
width: 100%;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
/* margin-bottom: 1em; */
`

function MainContainer({children}){

    return(
        <StyledMainContainer>{children}</StyledMainContainer>
    )

}

export default MainContainer