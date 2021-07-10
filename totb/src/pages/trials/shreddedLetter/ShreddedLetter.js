import { useState, useContext, useEffect } from 'react'
import { List, arrayMove } from 'react-movable';
import { ShreddedLetterPiecesData } from '../../../data/lessonData'
import { EventsContainer, ParagraphContainer, ShreddedPiece } from './shreddedLetterComponents/ShreddedLetterComponents'
import {StyledModal, ToggleContainer, ToggleTaskInfo, QuestionOption} from '../../../generalComponents/InfoModal'
import NextPageButton from '../../../generalComponents/NextPageButton'

function ShreddedLetter() {
    let {eventsToOrder} = ShreddedLetterPiecesData
    const {eventsCorrectOrder} = ShreddedLetterPiecesData
    const [message, setMessage] = useState('')
    const [items, setItems] = useState(eventsToOrder);
    const [isInstructionsModalDisplayed, setIsInstructionsModalDisplayed] = useState(true)
    const [hasFinished, setHasFinished] = useState(false)
    const [isCorrect, setIsCorrect] = useState(false)

    useEffect(()=>{
        if (hasFinished){
            if (eventsCorrectOrder.toString() === items.toString()){
                setMessage('Correct')
                setIsCorrect(true) 
            }
            else {
                setMessage('Incorrect, try again')
                setHasFinished(false)
            }
        }
    },[items, hasFinished])

    function handleCheck(){
        setHasFinished(true)
    }
    
    return (
        <>
        <StyledModal display={isInstructionsModalDisplayed ? 'block' : 'none'}>
        <h2>Task: Dialogue</h2>
        <ul>
            <li> Read the text in the speech bubble.</li>
            <li> Choose a reply from the list to continue the conversation.</li>
            <li> Only one question is grammatically correct. </li>
            <li> If you choose the wrong answer, you lose a point.</li>
        </ul>
        <ToggleContainer>
        <ToggleTaskInfo
            onClick={() => {
                setIsInstructionsModalDisplayed(!isInstructionsModalDisplayed)
                }}>
            Start
        </ToggleTaskInfo>
        </ToggleContainer>
    </StyledModal>
        <EventsContainer>
        <List
            values={items}
            onChange={({oldIndex, newIndex }) => {
                setItems(arrayMove(items, oldIndex, newIndex))
            }
            }
            renderList={({ children, props }) => <ul {...props}>{children}</ul>}
            renderItem={({ value, props }) => {
            return <li className="eventOrderClass" {...props} disabled={true}><ShreddedPiece>{value}</ShreddedPiece></li>
        }
        }
        />
        <button onClick={handleCheck}>Check</button>
        {message}
        {isCorrect ? <NextPageButton destination="officebase">Go to Office</NextPageButton> : null}
        </EventsContainer>
        </>
    );
}

export default ShreddedLetter