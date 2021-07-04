import { useState, useContext, useRef, useEffect } from 'react'
import styled from 'styled-components'
import { history, useHistory } from 'react-router-dom'
import GameContext from '../../context/GameContext'
import { StyledModal, ToggleContainer, ToggleTaskInfo, QuestionOption } from '../../generalComponents/InfoModal'
import {characterNames} from '../../data/lessonData'

const Container = styled.div`
display: flex;
flex-wrap: wrap;
width: 100%;
background-color: white;
`
const WitnessCard = styled.div`
width: 100px;
height: 100px;
margin: .2em;
background-color: skyblue;
`
const ArtefactCard = styled.div`
width: 100px;
height: 100px;
margin: .2em;
background-color: midnightblue;
`
const ActionCard = styled.div`
width: 100px;
height: 100px;
margin: .2em;
background-color: pink;
`

function OfficeBase() {
    const [isInstructionsModalDisplayed, setIsInstructionsModalDisplayed] = useState(true)

    let numberOfKnownWitnesses = 2
    let witnessesArray = ['witness ? ', 'witness ? ', 'witness ? ', 'witness ? ', 'witness ? ', 'witness ? ', 'witness ? ',]

    //console.log(characterNames['characterNames']);

    for (let i=0; i<numberOfKnownWitnesses; i++){
        witnessesArray[i] = characterNames['characterNames'][i]
    }

    const witnesses = witnessesArray.map((item)=>{
        return (
            <WitnessCard>{item}</WitnessCard>
        )
    })



    //let history = useHistory()
// const witnesses = 




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
            <ArtefactCard />
            <ArtefactCard />
            <ArtefactCard />
            <ArtefactCard />
            <ArtefactCard />
            <ActionCard >Map</ActionCard>
            <ActionCard >Ideas Board</ActionCard>

        </Container>
    )
}

export default OfficeBase