import styled from 'styled-components'

const StyledFooterContainer = styled.div`
width: 100%;
display: flex;
justify-content: space-around;
flex-direction: row;
align-items: center;
background-color: black;
border-top: 4px solid black;
color: white;
padding: 1em 0;
/* position: sticky;
bottom: 0px; */

a{
    color: white;
    font-size: .8rem;
    color: #999;
}

`

function FooterContainer({children}){

    return(
        <StyledFooterContainer>{children}</StyledFooterContainer>
    )

}

export default FooterContainer