import styled from 'styled-components'
import MainContainer from './MainContainer'

const StyledContainer = styled.div`
display: flex;
width: 80%;
border-radius: .3em;
border: 1px solid #333;
background-color: whitesmoke;
color: black;
font-family:'Courier New', Courier, monospace;
font-size: 1.5rem;
opacity: 0;
margin: 1em;
animation-name: fadeIn;
animation-delay: .1s;
animation-duration: .3s;
animation-fill-mode: forwards;
min-height: 100vh;

@keyframes fadeIn{
    0% {opacity: 0}
    100%{opacity: 1}
}


@media(max-width:900px){
    margin-top: 4em;
    width: 80%;
}

`

function PageContainer({children, ...restProps}){

    return (
        <MainContainer><StyledContainer>{children}</StyledContainer></MainContainer>
    )
}

export default PageContainer