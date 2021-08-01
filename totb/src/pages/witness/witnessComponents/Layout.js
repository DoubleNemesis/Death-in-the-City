import styled, {keyframes}  from 'styled-components'

const fadeIn = keyframes`
0% { opacity: 0;}
100% { opacity: 1;}
`
const animateBorder = keyframes`
from { box-shadow: 0px 0px 10px 5px red; }
to { box-shadow: 0px 0px 10px 5px orange; }
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
margin-top: 1em;
padding: .5em;
background-color: white;
text-align: center;
font-size: 1.2rem;
font-weight: 700;
width: 100%;
`

export const Conversation = styled.div`
display: flex;
flex-direction: column;
/* background-color: skyblue; */
width: 100%;

`
export const QuestionOptions = styled.div`
display: flex;
flex-direction: column;
/* background-color: skyblue; */
width: 100%;
padding: 0;
align-items: center;
`

const StyledWitnessImage = styled.img`
width: auto;
max-width: 100px;
`
export const WitnessImage = (props)=><StyledWitnessImage src={props.img}></StyledWitnessImage>


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
animation: ${({isArtefactClicked})=>isArtefactClicked ? fadeIn : null} 1s;
animation-delay: .1s;
animation-fill-mode: forwards;
border-radius: 5px;
z-index: ${({isArtefactClicked})=>isArtefactClicked ? 10 : 0};
`

export const QuestionOption = styled.button`
background-color: yellow;
/* border-bottom: 1px solid #999; */
font-family: 'Poppins';
font-size: 1.2rem;
border-radius: 2px;
width: 100%;
div{

    width: 100%;
    height: 100%;
    padding: .5em 1em;
margin: .2em;
background-color: yellow;

}
`