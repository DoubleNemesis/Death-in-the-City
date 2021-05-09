import styled from 'styled-components'

const StyledContainer = styled.div`
border: 1px solid red;
display: flex;
flex-wrap: wrap;
width: 100%;
justify-content: space-around;
`

function Container({children, ...restProps}){
    return (
        <StyledContainer>{children}</StyledContainer>
    )
}

export default Container