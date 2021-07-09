import { useState } from 'react'
import { history, useHistory } from 'react-router-dom'
import styled, {keyframes} from 'styled-components'
import bin from '../../images/bin.png'
import binlid from '../../images/binlid.png'
import chayYard from '../../images/chayYard.jpg'
import PageContainer from '../../containers/PageContainer'
import Title from '../../generalComponents/Title'
import NextPageButton from '../../generalComponents/NextPageButton'
import { clientData } from '../../data/lessonData'
import { Question, SpeechBubbleLeft, SpeechBubbleRight } from '../witness/witnessComponents/Questions'



const openBinLid = keyframes`
0% { top: -44px; left: 50px; }
100% { top: -450px; left: -80px; }

`
const rotateBin = keyframes`
from { transform: rotateZ(0deg); }
to { transform: rotateZ(90deg); }
`

const YardContainer = styled.div`
display: flex;
flex-direction: column;
width:100%;
height: 100vh;
background-color: blue;
padding-top: 10vh;
background-image: url(${chayYard});
background-size: cover;
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
animation-delay: 2s;
transform-origin: left;
animation-fill-mode: forwards;
-webkit-transform-style: preserve-3d;
    -moz-transform-style: preserve-3d;
    -ms-transform-style: preserve-3d;
    transform-style: preserve-3d;
`
const StyledBinArtefact = styled.div`
display: ${({isArtefactDisplayed})=>isArtefactDisplayed ? 'block' : 'none'};
top: -100px;
left: 50px;
position: absolute;
width: 200px;
min-width: 200px;
height: 50px;
min-height: 50px;
background-color: red;
/* background-image: url(${binlid});
background-size: contain;
background-repeat: no-repeat; */
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
margin-top: 12vh;
`

function Sneaky(props){
    const [openBin, setOpenBin] = useState(false)
    const [isArtefactDisplayed, setIsArtefactDisplayed] = useState(false)
    const [thought, setThought] = useState(`Hmmm....I wonder if there's anthing interesting in there...`)
    let history = useHistory()

   function handleLidClick(){
        setOpenBin(true)
        setIsArtefactDisplayed(true)
        setThought(`Oh! What's this!!`)
    }
console.log(props);

    return(
        <>
            <YardContainer>
            <StyledBinContainer>
            <StyledBinArtefact isArtefactDisplayed={isArtefactDisplayed} onClick={()=>history.push(`${props.destination}`)}/>
            <StyledBinLid openBin={openBin} onClick={handleLidClick}/>
            <StyledBin/>
            </StyledBinContainer>
            <ThoughtContainer><SpeechBubbleRight minHeight="90">{thought}</SpeechBubbleRight></ThoughtContainer>
            </YardContainer>


        </>
    )
}

export default Sneaky