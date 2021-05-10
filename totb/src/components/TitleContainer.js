import styled from 'styled-components'

const StyledTitleContainer = styled.div`
display: flex;
justify-content: center;
`


function TitleContainer({children}){

    return(
   <StyledTitleContainer>
    {children}
   </StyledTitleContainer> 
)

}

export default TitleContainer