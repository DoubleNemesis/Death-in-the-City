import { useState, useContext, useEffect } from 'react'
import { List, arrayMove } from 'react-movable';
import { ShreddedLetterPiecesData } from '../../../data/lessonData'
import { EventsContainer, ShreddedPiece } from './shreddedLetterComponents/ShreddedLetterComponents'
import { StyledModal, ToggleContainer, ToggleTaskInfo, QuestionOption } from '../../../generalComponents/InfoModal'
import { SpeechBubbleLeft } from '../../../generalComponents/ConversationComponents'
import NextPageButton from '../../../generalComponents/NextPageButton'
import { FrontPageButton } from '../../../generalComponents/GeneralButton'
import { MessageContainer } from '../../../containers/MessageContainer'
import GameContext from '../../../context/GameContext'
import teacher from '../../../images/teacher.png'
import { TaskMessage } from '../../../generalComponents/TaskMessage'



function ShreddedLetter(props) {
    const taskText = `Hit check when finished`
    const taskCorrect = `Correct!`
    const taskIncorrect = `That's incorrect. Try again.`
    const { completedChallenges, setCompletedChallenges } = useContext(GameContext)
    const { isShreddedLetterCorrect, setIsShreddedLetterCorrect } = useContext(GameContext)

    let { eventsToOrder, instructions } = ShreddedLetterPiecesData
    const { eventsCorrectOrder } = ShreddedLetterPiecesData
    const [message, setMessage] = useState(<TaskMessage task="true" message={taskText} />)
    const [itemsToOrder, setItemsToOrder] = useState(eventsToOrder);
    const [itemsCorrectOrder, setItemsCorrectOrder] = useState(eventsCorrectOrder);
    const [isInstructionsModalDisplayed, setIsInstructionsModalDisplayed] = useState(true)
    const [hasFinished, setHasFinished] = useState(false)
    //const [isShreddedLetterCorrect, setIsShreddedLetterCorrect] = useState(false)

    useEffect(() => {
        if (hasFinished) {
            if (eventsCorrectOrder.toString() === itemsToOrder.toString()) {
                setMessage(<TaskMessage correct="true" message={taskCorrect} />)
                setIsShreddedLetterCorrect(true)
                let dummyCompletedChallenges = [...completedChallenges]
                dummyCompletedChallenges.push(props.artefactName)
                setCompletedChallenges(dummyCompletedChallenges)
            }
            else {
                setMessage(<TaskMessage incorrect="true" message={taskIncorrect} />)
                setHasFinished(false)
            }
        }
    }, [itemsToOrder, hasFinished])

    function handleCheck() {
        setHasFinished(true)
    }

    console.log(hasFinished)

    console.log(isShreddedLetterCorrect);

    return (
        <>
            <SpeechBubbleLeft image={teacher} minHeight="140">
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
                <MessageContainer bgColor="white">
                    {message ? message : null}
                    {isShreddedLetterCorrect ? <NextPageButton destination="office" margin=".5em auto">Go to Office</NextPageButton> : <FrontPageButton onclick={handleCheck} fontSize="1rem" bgColor="red">Check</FrontPageButton>}
                </MessageContainer>
            </EventsContainer>
        </>
    );
}

export default ShreddedLetter