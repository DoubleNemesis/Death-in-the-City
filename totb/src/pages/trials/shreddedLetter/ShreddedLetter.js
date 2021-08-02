import { useState, useContext, useEffect } from 'react'
import { List, arrayMove } from 'react-movable';
import { ShreddedLetterPiecesData } from '../../../data/lessonData'
import { EventsContainer, ShreddedPiece } from './shreddedLetterComponents/ShreddedLetterComponents'
import { StyledModal, ToggleContainer, ToggleTaskInfo, QuestionOption } from '../../../generalComponents/InfoModal'
import { SpeechBubbleLeft } from '../../../generalComponents/ConversationComponents'
import NextPageButton from '../../../generalComponents/NextPageButton'
import GameContext from '../../../context/GameContext';
import clientPic from '../../../images/client.jpg'

function ShreddedLetter(props) {
    const { completedChallenges, setCompletedChallenges } = useContext(GameContext)
    const { isShreddedLetterCorrect, setIsShreddedLetterCorrect } = useContext(GameContext)
    
    let { eventsToOrder, instructions } = ShreddedLetterPiecesData
    const { eventsCorrectOrder } = ShreddedLetterPiecesData
    const [message, setMessage] = useState('')
    const [itemsToOrder, setItemsToOrder] = useState(eventsToOrder);
    const [itemsCorrectOrder, setItemsCorrectOrder] = useState(eventsCorrectOrder);
    const [isInstructionsModalDisplayed, setIsInstructionsModalDisplayed] = useState(true)
    const [hasFinished, setHasFinished] = useState(false)
    //const [isShreddedLetterCorrect, setIsShreddedLetterCorrect] = useState(false)

    useEffect(() => {
        if (hasFinished) {
            if (eventsCorrectOrder.toString() === itemsToOrder.toString()) {
                setMessage('Correct')
                setIsShreddedLetterCorrect(true)
                let dummyCompletedChallenges = [...completedChallenges]
                dummyCompletedChallenges.push(props.artefactName)
                setCompletedChallenges(dummyCompletedChallenges)
            }
            else {
                setMessage('Incorrect, try again')
                setHasFinished(false)
            }
        }
    }, [itemsToOrder, hasFinished])

    function handleCheck() {
        setHasFinished(true)
    }

    console.log(isShreddedLetterCorrect);

    return (
        <>
            <SpeechBubbleLeft image={clientPic} minHeight="140">
                {instructions}
            </SpeechBubbleLeft>
            <EventsContainer>
            {!isShreddedLetterCorrect ? 
                <List
                    values={itemsToOrder}
                    onChange={({ oldIndex, newIndex }) => {
                        setItemsToOrder(arrayMove(itemsToOrder, oldIndex, newIndex))
                    }
                    }
                    renderList={({ children, props }) => <ul {...props}>{children}</ul>}
                    renderItem={({ value, props }) => {
                        return <li className="eventOrderClass" {...props} disabled={true}><ShreddedPiece isShreddedLetterCorrect={isShreddedLetterCorrect}>{value}</ShreddedPiece></li>
                    }
                    }
                /> :
                <List
                    values={itemsCorrectOrder}
                    onChange={({ oldIndex, newIndex }) => {
                        setItemsCorrectOrder(arrayMove(itemsCorrectOrder, oldIndex, newIndex))
                    }
                    }
                    renderList={({ children, props }) => <ul {...props}>{children}</ul>}
                    renderItem={({ value, props }) => {
                        return <li className="eventOrderClass correctOrder" {...props} disabled={true}><ShreddedPiece isShreddedLetterCorrect={isShreddedLetterCorrect}>{value}</ShreddedPiece></li>
                    }
                    }
                />}
                <button onClick={handleCheck}>Check</button>
                {message}
                {isShreddedLetterCorrect ? <NextPageButton destination="office">Go to Office</NextPageButton> : null}
            </EventsContainer>
        </>
    );
}

export default ShreddedLetter