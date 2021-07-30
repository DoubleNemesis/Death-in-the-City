import { useState, useContext, useRef, useEffect } from 'react'
import styled from 'styled-components'
import { history, useHistory } from 'react-router-dom'
import GameContext from '../../context/GameContext'
import { StyledModal, ToggleContainer, ToggleTaskInfo, QuestionOption } from '../../generalComponents/InfoModal'
import { officeCards } from '../../data/lessonData'
import GeneralButton from './../../generalComponents/GeneralButton'
import WitnessButton from './../../generalComponents/WitnessButton'
import scroll from './../../images/scroll.png'

const Container = styled.div`
display: flex;
flex-wrap: wrap;
width: 100%;
justify-content: center;
`
const WitnessCard = styled.div`
width: 120px;
height: auto;
margin: .2em;
background-color: skyblue;
text-align: center;
border-radius: 5px;
border: 3px solid ${({borderColor})=>borderColor};
opacity: ${({opacity})=>opacity};
`
const CardImageContainer = styled.div`
max-height: 100px;
overflow: hidden;
`
const CardImage = styled.img`
width: 100%;
border-radius: 5px;
`
const ArtefactCard = styled.div`
display: flex;
flex-direction: column;
width: 120px;
height: 100px;
margin: .2em;
background-color: ${({bgColor})=>bgColor};
justify-content: center;
align-items: center;
color: white;
border: 3px solid ${({borderColor})=>borderColor};
border-radius: 5px;
position: relative;
`
const ActionCard = styled.div`
width: 100px;
height: 100px;
margin: .2em;
background-color: pink;
`
const Tick = styled.div`
position: absolute;
left: 0;
right: 0;
margin-left: auto;
margin-right: auto;
width: 10px;
min-width: 100%;
max-width: 100%;
height: 10px;
min-height: 100%;
background-color: transparent;
border-radius: 20px;
/* transform: rotateZ(-45deg); */
border: 3px solid limegreen;
`
function OfficeBase() {
   
    const {
        isInstructionsModalDisplayed, 
        setIsInstructionsModalDisplayed,
        hasVisitorBook, 
        items,
        collectedArtefacts,
        setCollectedArtefacts,
        setCompletedChallenges,
        collectedWitnesses,
        completedChallenges,
        completedWitnesses
    } = useContext(GameContext)
   
    const [isArtefactModalDisplayed, setIsArtefactModalDisplayed] = useState(false)
    const [artefactImageToDisplay, setArtefactImageToDisplay] = useState('')
    const [isReadyGuess, setIsReadyGuess] = useState(false)
   
    let history = useHistory()

    console.log(completedWitnesses);

    useEffect(()=>{
        if(completedChallenges.length === 5){
            setIsReadyGuess(true)
        }
    },[completedChallenges])

    const witnesses = officeCards.witnesses.map((item, index) => {
        if (collectedWitnesses.indexOf(item.name) > -1){
            const destination = `/witness${item.id}`
            const isKnown = completedWitnesses.indexOf(item.name.toString()) > -1
            return (
                <WitnessCard key={`index${index}`}borderColor={isKnown ? 'limeGreen' : 'whitesmoke'} opacity={isKnown ? '0.5' : '1'}><CardImageContainer><CardImage src={item.image} /></CardImageContainer><WitnessButton destination={destination} isDisabled={false}>{item.name}</WitnessButton></WitnessCard>
            )
        }
        else {
            return (
                <WitnessCard borderColor="whitesmoke" key={`index${index}`}><CardImageContainer><CardImage src={item.altImage} /></CardImageContainer>{item.altName ? <WitnessButton isDisabled={true}>{item.altName}</WitnessButton>: null}</WitnessCard>
            )
        }
    })


    function handleArtefactImageClick(image){
        setArtefactImageToDisplay(image)
        setIsArtefactModalDisplayed(true)
    }

    const artefacts = officeCards.artefacts.map((item, index) => {
        if (collectedArtefacts.indexOf(item.name) > -1){
            return (
                completedChallenges.indexOf(item.name) > -1 ?
                <ArtefactCard borderColor="limegreen" bgColor="black" key={`index${index}`}><img height="50px" src={item.image} /><WitnessButton destination={item.destination}>{item.name}</WitnessButton></ArtefactCard>:
                item.id < 6 ? 
                <ArtefactCard borderColor="whitesmoke" bgColor="#333" key={`index${index}`}><img height="50px" src={item.image} /><WitnessButton destination={item.destination}>{item.name}</WitnessButton></ArtefactCard>:
                <ArtefactCard borderColor="whitesmoke" bgColor="#333" key={`index${index}`}><img height="50px" src={item.image} onClick={()=>handleArtefactImageClick(item.image)} />{item.name}</ArtefactCard>
            )
        }
        else{
            return (
                <ArtefactCard borderColor="whitesmoke" bgColor="#333" key={`index${index}`}><img height="75px" src={scroll} /></ArtefactCard>
            )
        }

    })

    function handleGuessClick(){
    completedChallenges.length >= 5 ? 
    history.push(`endpage`) :
    alert('You have to finish all 5 challenges before you can make a guess!')
    }



    return (
<>
        <Container>
            <StyledModal display={isInstructionsModalDisplayed ? 'block' : 'none'}>
                <h2>The Office</h2>
                <ul>
                    <li> New witnesses/evidence/challenges will appear here as they become available.</li>
                    <li> Click on a witness to interview them.</li>
                    <li> Click on an artefact to examine it.</li>
                    <li> Click on a challenge to complete it.</li>
                </ul>
                <ToggleContainer>
                    <ToggleTaskInfo
                        onClick={() => setIsInstructionsModalDisplayed(!isInstructionsModalDisplayed)}>
                        Start
                    </ToggleTaskInfo>
                </ToggleContainer>
            </StyledModal>
            <StyledModal display={isArtefactModalDisplayed ? 'block' : 'none'}>
                   <div> <img src={artefactImageToDisplay}/></div>
                <ToggleContainer>
                    <ToggleTaskInfo
                        onClick={() => setIsArtefactModalDisplayed(!isArtefactModalDisplayed)}>
                        Close
                    </ToggleTaskInfo>
                </ToggleContainer>
            </StyledModal>
            {witnesses}
            {artefacts}
        </Container>
        <Container>
           { isReadyGuess ?  <GeneralButton onclick={handleGuessClick}>Take a guess</GeneralButton> : null}
        </Container>
            </>
    )
}

export default OfficeBase