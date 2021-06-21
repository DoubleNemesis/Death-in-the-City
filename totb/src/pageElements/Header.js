import styled from 'styled-components'

const StyledHeader = styled.div`
position: absolute;
display: flex;
justify-content: flex-end;
right: 0;
bottom: 0;
font-size: .8rem;
background-color: white;
max-width: 80vw;
a{
    padding: .5em;
    color: black;
}

@media(max-width: 1020px){
    margin-top: 95vh;
    position: relative;
}

`


function Header({children}){
    return(
        <StyledHeader>
        {children}
        </StyledHeader>
    )
}

export default Header