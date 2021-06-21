import styled from 'styled-components'
import newspaper from './../images/newspaper.jpg'

const StyledContainer = styled.div`
/* min-width: 60%;
width: 60%;
min-height: 60vh;
background-image: url(${newspaper});
background-size: cover;
background-repeat: no-repeat; */
/* border-radius: .3em;
border: 1px solid #333;
background-color: rgba(43, 41, 34, .6);
color: white;
font-family:'Courier New', Courier, monospace;
font-size: 1.5rem;
opacity: 0;
margin: 1em; */
/* animation-name: fadeIn;
animation-delay: 1s;
animation-duration: 3s;
animation-fill-mode: forwards; */
background-color: transparent;

img{
    width: 60vw;
}

@keyframes fadeIn{
    0% {opacity: 0}
    100%{opacity: 1} 
}

`

function CallToActionContainer({children, ...restProps}){

    return (
        <StyledContainer><img src={newspaper}/>{children}</StyledContainer>
    )
}

export default CallToActionContainer