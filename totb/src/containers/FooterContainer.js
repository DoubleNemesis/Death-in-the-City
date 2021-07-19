import styled from 'styled-components'

const StyledFooterContainer = styled.div`
width: 100%;
display: flex;
justify-content: center;
flex-direction: row;
align-items: center;
background-color: black;
border-top: 4px solid black;
color: white;
/* position: sticky;
bottom: 0px; */

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