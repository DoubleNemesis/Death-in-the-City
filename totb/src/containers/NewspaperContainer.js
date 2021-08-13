import styled, {keyframes} from 'styled-components'
import paperbgdark from './../images/paperbgdark.png'

const paperIn = keyframes`
0%{width: 0vw; transform: rotate(0deg)}
100%{width: 90vw; transform: rotate(1080deg)}
`


const paperRotate = keyframes`
0%{ width: 90vw; opacity: .3; transform: rotate(0deg)}
100%{ width: 90vw; opacity: 1; transform: rotate(1080deg)}
`
const textIn = keyframes`
0%{opacity: 0}
100%{opacity: 1}
`
const textOut = keyframes`
0%{opacity: 0}
100%{opacity: 1}
`
const animateBorder = keyframes`
100%{box-shadow: 0px 0px 3px 3px firebrick; }
0%{box-shadow: none; }
`

const StyledContainer = styled.div`
width: 0;
animation: ${({paperOpen})=> paperOpen ? paperIn : paperRotate} 2s;
animation-delay: 0s;
animation-fill-mode: forwards;
margin-top: 1.1em;
background-color: transparent;
box-sizing: unset;

@media(min-width: 700px){
    max-width: 80vw;
}
@media(min-width: 1025px){
    max-width: 23vw;
}

img{
    width: 100%;
}
`
const Text = styled.div`
position: absolute;
align-items: center;
justify-content: center;
display: flex;
width: 88.3%;
height: 10%;
left: 5.7%;
bottom: 5.5%;
background-image:url(${paperbgdark});
color: #dfdbcf;
padding: .5rem;
font-size: 1.3rem;
font-weight: 700;
text-decoration: underline;
opacity: 0;
animation: ${({paperOpen})=> paperOpen ? textIn : textOut} 2s, ${animateBorder} 1s infinite alternate;
animation-fill-mode: forwards;
box-shadow: 2px 2px 2px 2px #333;
cursor: pointer;

@media(min-width: 1025px){
    font-size: 1rem;
}

:hover{
    color: red;
    transform: scale(9.5); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
    overflow: hidden;
}

`


function CallToActionContainer({children, ...restProps}){
    return (
        <StyledContainer {...restProps}>
            <Text {...restProps} onClick={restProps.onclick}>{restProps.homeCallToActionTextBtn}</Text>
            {children}
        </StyledContainer>
    )
}

export default CallToActionContainer 