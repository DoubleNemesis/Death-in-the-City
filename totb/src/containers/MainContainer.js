import styled from 'styled-components'

const StyledMainContainer = styled.div`
width: 100%;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
/* margin-bottom: 1em; */

@media(min-width:1025px){
    flex-direction: row;
}

`

function MainContainer({children}){

    return(
        <StyledMainContainer>{children}</StyledMainContainer>
    )

}

export default MainContainer