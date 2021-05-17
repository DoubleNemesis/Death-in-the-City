import styled from 'styled-components'

const StyledHeader = styled.div`
position: absolute;
display: flex;
justify-content: flex-end;
right: 0;

a{
    padding: .5em;
    color: white;
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