import styled, { keyframes } from 'styled-components'

const fadeInSpeed = '3s'

const fadeIn = keyframes`
0% { opacity: 0;}
100% { opacity: 1;}
`
const animateBorder = keyframes`
from { box-shadow: 0px 0px 10px 5px red; }
to { box-shadow: 0px 0px 10px 5px orange; }
`
export const TaskImage = styled.img`
width: 30px;
`

export const WitnessContainer = styled.div`

@media(min-width:1025px){
    display: grid;
    margin-left: 5em;
    grid-template-columns: repeat(1, 1fr 1fr);
    grid-template-rows: auto auto;
    grid-template-areas:
        "inside conversation"
        "questionoptions conversation ";
        font-size: .1rem;
}
border: 1px solid red;
`

export const Instructions = styled.div`
width: 20%;
font-size: 1.2rem;
font-family: Verdana, Geneva, Tahoma, sans-serif;
background-color: white;
padding: .5em;
border-radius: .5em;
display: flex;
flex-direction: column;
min-height: 100%;

li{
    margin-bottom: 10px;
}
`
export const TaskBox = styled.div`
/* margin-top: 1em;
padding: .5em; */
/* border: 1px solid black; */
`
export const InfoBox = styled.div`
grid-area: infobox;
margin-top: 1em;
/* padding: .5em; */
background-color: transparent;
text-align: center;
font-size: 1.2rem;
font-weight: 700;
width: 100%;
/* border: 20px solid green; */

@media(min-width:1025px){
    margin-top: .3em;
    margin-left: 0;
    /* border-radius: 10px; */
    width: 100%;
    padding: 0;
    animation: ${fadeIn} ${fadeInSpeed};
    animation-fill-mode: forwards;
}

`

export const Conversation = styled.div`
grid-area: conversation;
display: flex;
flex-direction: column;
/* background-color: skyblue; */
width: 100%;
/* border: 2px solid blue; */

@media(min-width:1025px){
    animation: ${fadeIn} ${fadeInSpeed};
    animation-fill-mode: forwards;
    animation-delay: 0s;
}

`
export const QuestionOptions = styled.div`
grid-area: questionoptions;
display: flex;
flex-direction: column;
/* background-color: skyblue; */
width: 100%;
padding: 0;
align-items: center;

@media(min-width: 1025px){
    width: auto;
    margin-right: 10em;
    animation: ${fadeIn} ${fadeInSpeed};
    animation-fill-mode: forwards;
    animation-delay: 0s;
}
`

const StyledWitnessImage = styled.img`
width: auto;
max-width: 100px;
`
export const WitnessImage = (props) => <StyledWitnessImage src={props.img}></StyledWitnessImage>


export const StyledArtefact = styled.img`
opacity: 0;
max-width: 80px;
background-color: transparent;
animation: ${fadeIn} 1s .5s forwards, ${animateBorder} 2s ease-in-out infinite alternate ;
box-shadow: 0px 0px 40px 10px red;
`

export const StyledFoundArtefact = styled.div`
opacity: 0;
margin: 5%;
width: auto;
font-size: 1.3rem;
padding: 1em 0 0 0;
text-align: center;
background-color: white;
animation: ${({ isArtefactClicked }) => isArtefactClicked ? fadeIn : null} 1s;
animation-delay: .1s;
animation-fill-mode: forwards;
border-radius: 5px;
z-index: ${({ isArtefactClicked }) => isArtefactClicked ? 10 : 0};
`

export const QuestionOption = styled.button`
background-color: transparent;
/* border-bottom: 1px solid #999; */
font-family: 'Poppins';
font-size: 1.2rem;
border-radius: 2px;
width: 100%;
border: 1px solid transparent;

div{
    width: 100%;
    height: 100%;
    padding: .5em 1em;
    margin: .2em 0;
    background-color: limegreen;
    border-radius: 5px;
    border: 3px solid skyblue;
    :hover{
    background-color: transparent;
    color: white;
}
}

@media(min-width: 1025px){
    font-size: 1.1rem;
}


`
export const TaskMessage = styled.div`
background-color: whitesmoke;
width: 100%;
padding: .5em 2em;
font-weight: 700;

@media(min-width:1025px){
    border: 4px #141414 solid;
  border-radius: 5px;
}
`

const WitnessIntroContainer = styled.div`
display: flex;
width: 100%;
background-color: skyblue;
/* min-height: 200px; */
padding: .5em;
box-sizing: border-box;
align-items: flex-start;
animation: ${fadeIn} 1.5s;
    animation-fill-mode: forwards;
    animation-delay: 0s;

@media(min-width: 1025px){
  margin-right: .5em;
  border: 4px #141414 solid;
  border-radius: 5px;
    /* animation: ${fadeIn} 1s;
    animation-fill-mode: forwards;
    animation-delay: 0s; */
}
`
const WitnessImageBox = styled.img`
width: 30%;
height: auto;
padding: .5em;
margin: 7em;
border-radius: 10px; 

/* @media(min-width: 1025px){
  width: 20%;
  padding: 5em;
} */

`
const WitnessText = styled.div`
padding: .5em;

h3{
    font-size: 1.3rem;
}

p{
  font-size: 1rem;
}

@media(min-width: 700px){
  font-size: 1.2rem;
}
`

export const WitnessIntroBox = (props)=>{
    return(
        <WitnessIntroContainer>
            <WitnessImageBox src={props.personImage}/>
            <WitnessText><h3>Witness Info</h3><p>{props.witnessInfo}</p></WitnessText>
        </WitnessIntroContainer>
    )
}