import styled, {keyframes} from 'styled-components'
import bin from '../../../images/bin.png'
import binlid from '../../../images/binlid.png'

const openBinLid = keyframes`
0% { top: -44px; left: 50px; }
100% { top: -650px; left: -80px; }
`
const fadeIn = keyframes`
0% { opacity: 0;}
100% { opacity: 1;}
`
const animateBorder = keyframes`
from { box-shadow: 0px 0px 10px 5px red; }
to { box-shadow: 0px 0px 10px 5px orange; }
`

export const YardContainer = styled.div`
display: flex;
flex-direction: column;
width:100%;
height: 95vh;
background-color: blue;
padding-top: 10vh;
background-image: url(${({yardImage})=>yardImage});
background-size: cover;
position: relative;

@media(min-width: 1025px){
background-position: center;
}
`

export const StyledBin = styled.div`
position: absolute;
top: 0px;
width: 200px;
min-width: 200px;
height: 240px;
min-height: 240px;
background-image: url(${bin});
background-size: contain;
background-repeat: no-repeat;


-webkit-transform-style: preserve-3d;
    -moz-transform-style: preserve-3d;
    -ms-transform-style: preserve-3d;
    transform-style: preserve-3d;
transform-origin: bottom right;
`

export const StyledBinLid = styled.div`
top: -50px;
left: 50px;
position: absolute;
width: 200px;
min-width: 200px;
height: 50px;
min-height: 50px;
background-image: url(${binlid});
background-size: contain;
background-repeat: no-repeat;
animation: ${({openBin}) => openBin ? openBinLid : null} 4s;
animation-delay: 0s;
transform-origin: left;
animation-fill-mode: forwards;
-webkit-transform-style: preserve-3d;
    -moz-transform-style: preserve-3d;
    -ms-transform-style: preserve-3d;
    transform-style: preserve-3d;
`
export const StyledBinArtefact = styled.img`
opacity: 0;
top: -120px;
left: 120px;
position: absolute;
max-width: 80px;
background-color: transparent;
animation: ${({isArtefactDisplayed})=>isArtefactDisplayed ? fadeIn : null} 1s .5s forwards, ${({isArtefactDisplayed})=>isArtefactDisplayed ? animateBorder : null} 2s ease-in-out infinite alternate ;
box-shadow: 0px 0px 40px 10px red;
`
export const StyledFoundArtefact = styled.div`
opacity: 0;
top: 100px;
left: 0;
right: 0;
margin: auto;
width: 80%;
font-size: 1.3rem;
position: absolute;
padding: 1em .4em;
text-align: center;
color: white;
background: linear-gradient(#666, #2E2523, #666);
animation: ${({isArtefactClicked})=>isArtefactClicked ? fadeIn : null} 1s;
animation-delay: .1s;
animation-fill-mode: forwards;
border-radius: 5px;
z-index: ${({isArtefactClicked})=>isArtefactClicked ? 10 : 0};
border: 4px solid #333;
font-family: 'Poppins';

@media(min-width:700px){
    display: flex;
    flex-direction: column;
}

@media(min-width:1025px){
    width: 40%;
}
`
export const StyledBinContainer = styled.div`
width: 300px;
position: relative;
margin: 50vh auto 20vh auto;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: transparent;

@media(min-width:700px){
    margin: 50vh auto 20vh auto;
}
`

export const ThoughtContainer = styled.div`
position: absolute;
width: 100%;
margin-top: 0vh;

@media(min-width: 1025px){
    width: 50%;  
}
`