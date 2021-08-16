import { useState, useContext } from 'react'
import teacher from '../../images/teacher.png'
import NextPageButton from '../../generalComponents/NextPageButton'
import { SpeechBubbleLeft } from '../../generalComponents/ConversationComponents'
import GameContext from '../../context/GameContext' 
import {
    YardContainer,
    ThoughtContainer,
    StyledBinContainer,
    StyledBinArtefact,
    StyledBinLid,
    StyledBin,
    StyledFoundArtefact
} from './sneakyBinPeakComponents/SneakyBinPeakComponents'

function Sneaky(props){
    const {collectedArtefacts, setCollectedArtefacts} =useContext(GameContext)
    const [openBin, setOpenBin] = useState(false)
    const [isArtefactDisplayed, setIsArtefactDisplayed] = useState(false)
    const [isArtefactClicked, setIsArtefactClicked] = useState(false)
    const [thought, setThought] = useState(props.text || `Time to get your hands dirty! (Click the lid to open the bin!)`)

   function handleLidClick(){
        setOpenBin(true)
        setIsArtefactDisplayed(true)
        setThought(
            props.hasArtefact ? 
            `Oh! What's this!! It's a Challenge! Interesting...Click on it and take it with you. You can access it from your office.` :
            `This isn't a Challenge, but it might be useful info. Take it with you just in case...You can view it in your office.`
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
               {!isArtefactClicked ?  <ThoughtContainer><SpeechBubbleLeft image={teacher} minHeight="90" bubbleWidth="40">{thought}</SpeechBubbleLeft></ThoughtContainer> : null}
            <StyledBinContainer>
                
            {openBin ? <StyledBinArtefact src={props.artefactImage} alt={props.artefactImage} isArtefactDisplayed={isArtefactDisplayed} onClick={handleArtefactClick}/> : null}
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