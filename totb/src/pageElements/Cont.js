import styled from 'styled-components'

const StyledHCont = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-end;
font-size: .8rem;
background-color: white;

`


function Cont({children}){
    return(
        <StyledHCont>

        {children}
        <div><input/></div>
        </StyledHCont>
    )
}

export default Cont