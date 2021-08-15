import styled from 'styled-components'

const StyledMainContainer = styled.div`
width: 100%;
display: flex;
justify-content: center;
flex-direction: column;
align-items: flex-start; //may need to change this!
/* margin-bottom: 1em; */
/* border: 1px solid red; */
margin-bottom: 2em;
/* overflow: hidden; */
`

function MainContainer({children}){

    return(
        <StyledMainContainer>{children}</StyledMainContainer>
    )

}

export default MainContainer