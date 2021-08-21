import styled from 'styled-components'

const StyledMainContainer = styled.div`
width: 100%;
display: flex;
justify-content: center;
flex-direction: column;
align-items: ${({ alignItems }) => alignItems || 'flex-start'}; 
margin-bottom: 2em;
`

function MainContainer({ children, ...restProps }) {

    return (
        <StyledMainContainer alignItems={restProps.alignItems}>{children}</StyledMainContainer>
    )

}

export default MainContainer