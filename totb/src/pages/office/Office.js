import { useState, useContext, useRef, useEffect } from 'react'
import styled from 'styled-components'
import { history, useHistory } from 'react-router-dom'
import GameContext from '../../context/GameContext'
import { StyledModal, ToggleContainer, ToggleTaskInfo, QuestionOption } from '../../generalComponents/InfoModal'
import { officeCards } from '../../data/lessonData'
import NextPageButton from './../../generalComponents/NextPageButton'
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
border: 3px solid whitesmoke;
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
background-color: #333;
justify-content: center;
align-items: center;
color: white;
border: 3px solid whitesmoke;
border-radius: 5px;
`
const ActionCard = styled.div`
width: 100px;
height: 100px;
margin: .2em;
background-color: pink;
`
const Tick = styled.div`
width: 10px;
min-width: 10px;
height: 10px;
min-height: 10px;
margin: .2em;
background-color: limegreen;
`
function OfficeBase() {
    const {
        isInstructionsModalDisplayed, 
        setIsInstructionsModalDisplayed,
        hasVisitorBook, 
        items,
        collectedArtefacts,
        collectedWitnesses,
        completedChallenges,
    } = useContext(GameContext)


    const witnesses = officeCards.witnesses.map((item) => {
        if (collectedWitnesses.indexOf(item.name) > -1){
            const destination = `/witness${item.id}`
            return (
                <WitnessCard><CardImageContainer><CardImage src={item.image} /></CardImageContainer><WitnessButton destination={destination} isDisabled={false}>{item.name}</WitnessButton></WitnessCard>
            )
        }
        else {
            return (
                <WitnessCard><CardImageContainer><CardImage src={item.altImage} /></CardImageContainer>{item.altName ? <WitnessButton isDisabled={true}>{item.altName}</WitnessButton>: null}</WitnessCard>
            )
        }
    })


    console.log(completedChallenges);

    const artefacts = officeCards.artefacts.map((item) => {
        if (collectedArtefacts.indexOf(item.name) > -1){
            return (
                <ArtefactCard><img height="50px" src={item.image} />{completedChallenges.indexOf(item.name) > -1 ? <Tick/>:null}<WitnessButton destination={item.destination}>{item.name}</WitnessButton></ArtefactCard>
            )
        }
        else{
            return (
                <ArtefactCard><img height="75px" src={scroll} /></ArtefactCard>
            )
        }

    })



    return (

        <Container>
            <StyledModal display={isInstructionsModalDisplayed ? 'block' : 'none'}>
                <h2>The Office</h2>
                <ul>
                    <li> Click on a witness to interview them.</li>
                    <li> New witnesses will appear as they become available.</li>
                    <li> Any artefacts you find will appear here too.</li>
                    <li> Click on an artefact to re-examine it.</li>
                </ul>
                <ToggleContainer>
                    <ToggleTaskInfo
                        onClick={() => setIsInstructionsModalDisplayed(!isInstructionsModalDisplayed)}>
                        Start
                    </ToggleTaskInfo>
                </ToggleContainer>
            </StyledModal>
            {witnesses}
            {artefacts}
            {/* <ActionCard >Map</ActionCard>
            <ActionCard >Ideas Board</ActionCard> */}

        </Container>
    )
}

export default OfficeBase