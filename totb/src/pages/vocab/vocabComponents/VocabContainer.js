import styled from 'styled-components'

const StyledContainer = styled.div`
display: flex;
flex-wrap: wrap;
width: 80%;
justify-content: center;
align-items: center;
margin: 0 auto;
border-radius: .3em;
margin-top: 2em;

@media(max-width:900px){
    width: 95%
}

`

function Container({children, ...restProps}){
    return (
        <StyledContainer>{children}</StyledContainer>
    )
}

export default Container