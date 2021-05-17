import styled from 'styled-components'

const StyledTitleContainer = styled.div`
display: flex;
justify-content: flex-start;

@media(max-width: 900px){
    padding-top: 2.5em;
}

`


function TitleContainer({children}){

    return(
   <StyledTitleContainer>
    {children}
   </StyledTitleContainer> 
)

}

export default TitleContainer