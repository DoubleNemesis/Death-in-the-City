import styled from 'styled-components'

const StyledFooterContainer = styled.div`
width: 100%;
display: flex;
justify-content: center;
flex-direction: row;
align-items: center;
background-color: white;
margin-top: 2em;
border-top: 4px solid black;

span{
    margin: .2em;
    font-size: .9rem;
}
`

function FooterContainer({children}){

    return(
        <StyledFooterContainer>{children}</StyledFooterContainer>
    )

}

export default FooterContainer