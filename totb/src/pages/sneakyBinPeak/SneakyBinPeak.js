import { useState, useContext } from 'react'
import { history, useHistory } from 'react-router-dom'
import styled, {keyframes} from 'styled-components'
import bin from '../../images/bin.png'
import binlid from '../../images/binlid.png'
// import chayYard from '../../images/chayYard.jpg'
import PageContainer from '../../containers/PageContainer'
import Title from '../../generalComponents/Title'
import NextPageButton from '../../generalComponents/NextPageButton'
import { clientData } from '../../data/lessonData'
import { Question, SpeechBubbleLeft, SpeechBubbleRight } from '../../generalComponents/ConversationComponents'
import GameContext from '../../context/GameContext' 
import { InfoBox } from '../witness/witnessComponents/Layout'


const openBinLid = keyframes`
0% { top: -44px; left: 50px; }
100% { top: -650px; left: -80px; }
`
const fadeIn = keyframes`
0% { opacity: 0;}
100% { opacity: 1;}
`
const rotateBin = keyframes`
from { transform: rotateZ(0deg); }
to { transform: rotateZ(90deg); }
`
const animateBorder = keyframes`
from { box-shadow: 0px 0px 10px 5px red; }
to { box-shadow: 0px 0px 10px 5px orange; }
`

const YardContainer = styled.div`
display: flex;
flex-direction: column;
width:100%;
height: 100vh;
background-color: blue;
padding-top: 10vh;
background-image: url(${({yardImage})=>yardImage});
background-size: cover;
position: relative;
`

const StyledBin = styled.div`
position: absolute;
top: 0px;
width: 200px;
min-width: 200px;
height: 240px;
min-height: 240px;
background-image: url(${bin});
background-size: contain;
background-repeat: no-repeat;

@media(min-width: 1000px){
    animation: ${rotateBin} 2s;
animation-delay: 2s;
animation-fill-mode: forwards;
}


-webkit-transform-style: preserve-3d;
    -moz-transform-style: preserve-3d;
    -ms-transform-style: preserve-3d;
    transform-style: preserve-3d;
transform-origin: bottom right;
`

const StyledBinLid = styled.div`
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
const StyledBinArtefact = styled.img`
opacity: 0;
top: -120px;
left: 120px;
position: absolute;
max-width: 80px;
background-color: transparent;
animation: ${({isArtefactDisplayed})=>isArtefactDisplayed ? fadeIn : null} 1s .5s forwards, ${({isArtefactDisplayed})=>isArtefactDisplayed ? animateBorder : null} 2s ease-in-out infinite alternate ;
box-shadow: 0px 0px 40px 10px red;
`
const StyledFoundArtefact = styled.div`
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
`


const StyledBinContainer = styled.div`
width: 300px;
position: relative;
margin: 30vh auto 20vh auto;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: transparent;
`

const ThoughtContainer = styled.div`
width: 100%;
margin-top: 0vh;
`

function Sneaky(props){
    const {collectedArtefacts, setCollectedArtefacts} =useContext(GameContext)
    const [openBin, setOpenBin] = useState(false)
    const [isArtefactDisplayed, setIsArtefactDisplayed] = useState(false)
    const [isArtefactClicked, setIsArtefactClicked] = useState(false)
    const [thought, setThought] = useState(`Time to get my hands dirty! (Click the lid to open the bin!)`)
    let history = useHistory()

   function handleLidClick(){
        setOpenBin(true)
        setIsArtefactDisplayed(true)
        setThought(
            props.hasArtefact ? 
            `Oh! What's this!! It's a Challenge! This looks very interesting indeed...I'll click on it and take it with me...` :
            `This isn't a Challenge, but might be useful info. I'll take it.`
            )
    }

    function handleArtefactClick(){
        setIsArtefactClicked(true)
        let dummycollectedArtefacts = [...collectedArtefacts]
        dummycollectedArtefacts.push(props.artefactName)
        setCollectedArtefacts(dummycollectedArtefacts)
    }

    return(
        <>
            <YardContainer yardImage={props.yardImage}>
                <ThoughtContainer><SpeechBubbleRight minHeight="90">{thought}</SpeechBubbleRight></ThoughtContainer>
            <StyledBinContainer>
                
            {openBin ? <StyledBinArtefact src={props.artefactImage} isArtefactDisplayed={isArtefactDisplayed} onClick={handleArtefactClick}/> : null}
            <StyledBinLid openBin={openBin} onClick={handleLidClick}/>
            <StyledBin/>
            </StyledBinContainer>
            {isArtefactClicked ? <StyledFoundArtefact isArtefactClicked={isArtefactClicked}> 
                You found the "{props.artefactName}"!
                <NextPageButton destination="office">Back to Office</NextPageButton>
                </StyledFoundArtefact>
                 : null}
            </YardContainer>


        </>
    )
}

export default Sneaky