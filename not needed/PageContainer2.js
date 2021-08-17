import styled from 'styled-components'
import MainContainer from './MainContainer'

const StyledContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 90%;
border-radius: .3em;
border: 10px solid #333;
background-color: transparent; 
color: black;
font-size: 1.5rem;
opacity: 0;
margin: 1em;
animation-name: fadeIn;
animation-delay: .1s;
animation-duration: .3s;
animation-fill-mode: forwards;
min-height: ${({ minHeight }) => minHeight || '100'}vh;
@keyframes fadeIn{
    0% {opacity: 0}
    100%{opacity: 1}
}


@media(max-width:900px){
    margin-top: 1em;
    width: 100%;
    min-height: unset;
    flex-direction: column;
    border-radius: unset;
    border: unset;
}
@media(min-width:1025px){
    flex-direction: column;
    border: unset;
    border: 10px solid red;
margin-top: 0;
}

`

function PageContainer({ children, ...restProps }) {

    return (
        <MainContainer ><StyledContainer minHeight={restProps.minHeight}>{children}</StyledContainer></MainContainer>
    )
}

export default PageContainer