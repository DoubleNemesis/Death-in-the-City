import { useState, useContext, useRef, useEffect } from 'react'
import styled from 'styled-components'
import { history, useHistory } from 'react-router-dom'
import GameContext from '../../context/GameContext'
import { StyledModal, ToggleContainer, ToggleTaskInfo, QuestionOption } from '../../generalComponents/InfoModal'
import {officeCards} from '../../data/lessonData'
import NextPageButton from './../../generalComponents/NextPageButton'
import WitnessButton from './../../generalComponents/WitnessButton'


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
border: 1px solid whitesmoke;
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
width: 120px;
height: 100px;
margin: .2em;
background-color: midnightblue;
justify-content: center;
align-items: center;
color: white;
border: 1px solid whitesmoke;
border-radius: 5px;
`
const ActionCard = styled.div`
width: 100px;
height: 100px;
margin: .2em;
background-color: pink;
`


function OfficeBase() {
    const [isInstructionsModalDisplayed, setIsInstructionsModalDisplayed] = useState(true)



    const witnesses = officeCards.witnesses.map((item)=>{
        console.log(item.image);
        const destination = `/witness${item.id}`
        return (
            <WitnessCard><CardImageContainer><CardImage src={item.image}/></CardImageContainer><WitnessButton destination={destination}>{item.name}</WitnessButton></WitnessCard>
        )
    })

    let numberOfKnownArtefacts = 2
    let artefactArray = ['?', '?', '?', '?', '?', '?', '?']

    for (let i=0; i<numberOfKnownArtefacts; i++){
        artefactArray[i] = officeCards['artefacts'][i]['name']
    }

    const artefacts = artefactArray.map((item)=>{
        return (
            <ArtefactCard>{item}</ArtefactCard>
        )
    })


    return (

        <Container>
            <StyledModal display={isInstructionsModalDisplayed ? 'block' : 'none'}>
                <h2>Your Office</h2>
                <ul>
                    <li> See the witnesses you have interviewed.</li>
                    <li> Reexamine artefacts you have found.</li>
                    <li> View the map and find your way to witnesses.</li>
                    <li> View your ideas board and make notes.</li>
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