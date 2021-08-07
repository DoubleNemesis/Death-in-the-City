import styled from 'styled-components'
import MainContainer from './MainContainer'

const StyledContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 90%;
border-radius: .3em;
border: 10px solid #333;
background-color: transparent; //was whitesmoke
color: black;
/* font-family:'Courier New', Courier, monospace; */
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
    margin-top: 1em;
    width: 100%;
    min-height: unset;
    flex-direction: column;
    border-radius: unset;
    border: unset;
}

`

function PageContainer({children, ...restProps}){

    return (
        <MainContainer><StyledContainer>{children}</StyledContainer></MainContainer>
    )
}

export default PageContainer