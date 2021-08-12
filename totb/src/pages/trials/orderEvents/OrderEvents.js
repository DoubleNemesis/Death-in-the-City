import { useState, useContext, useEffect } from 'react'
import PageContainer from '../../../containers/PageContainer'
import Title from '../../../generalComponents/Title'
import { history, useHistory } from 'react-router-dom'
import { SpeechBubbleLeft } from '../../../generalComponents/ConversationComponents'
import { MessageContainer } from '../../../containers/MessageContainer'
// import { Instructions, Conversation, WitnessImage, TaskBox, InfoBox } from '../../witness/witnessComponents/Layout'
import ProfilePic from '../../../images/janitor.png'
import { orderEventsData } from '../../../data/lessonData'
import { EventsContainer, ParagraphContainer, Container } from './orderEventsComponents/OrderEventsComponents'
import { List, arrayMove } from 'react-movable';
import NextPageButton from '../../../generalComponents/NextPageButton'
import GameContext from '../../../context/GameContext'
import teacher from '../../../images/teacher.png'
import { FrontPageButton } from '../../../generalComponents/GeneralButton'
import { TaskMessage } from '../../../generalComponents/TaskMessage'




function OrderEvents(props) {
    const taskText = `Hit check when finished`
    const taskCorrect = `Correct!`
    const taskIncorrect = `That's incorrect. Try again.`
    const { completedChallenges, setCompletedChallenges } = useContext(GameContext)
    const { isOrderEventsCorrect, setIsOrderEventsCorrect } = useContext(GameContext)
    // const [isOrderEventsCorrect, setIsOrderEventsCorrect] = useState(false)
    let { eventsToOrder } = orderEventsData
    const { eventsCorrectOrder } = orderEventsData
    const [message, setMessage] = useState(<TaskMessage task="true" message={taskText} />)
    const [itemsToOrder, setItemsToOrder] = useState(eventsToOrder);
    const [hasFinished, setHasFinished] = useState(false)
    const { orderEventsText, instructions } = orderEventsData

    useEffect(() => {
        if (hasFinished) {
            if (eventsCorrectOrder.toString() === itemsToOrder.toString()) {
                setMessage(<TaskMessage correct="true" message={taskCorrect} />)
                setIsOrderEventsCorrect(true)
                let dummyCompletedChallenges = [...completedChallenges]
                dummyCompletedChallenges.push(props.artefactName)
                setCompletedChallenges(dummyCompletedChallenges)
            }
            else {
                setMessage(<TaskMessage incorrect="true" message={taskIncorrect} />)
                setHasFinished(false)
            }
        }
        // setMessage(eventsCorrectOrder.toString() === items.toString()?'correct':'incorrect');
    }, [itemsToOrder, hasFinished])

    function handleCheck() {
        setHasFinished(true)
    }

    return (
        <>
            <Container>

                <ParagraphContainer>
                    <SpeechBubbleLeft image={teacher} >
                        {instructions}
                    </SpeechBubbleLeft>
                    {orderEventsText}
                </ParagraphContainer>

                <EventsContainer>
                    <List
                        values={itemsToOrder}
                        onChange={({ oldIndex, newIndex }) => {
                            setItemsToOrder(arrayMove(itemsToOrder, oldIndex, newIndex))
                        }
                        }
                        renderList={({ children, props }) => <ul {...props}>{children}</ul>}
                        renderItem={({ value, props }) => {
                            return <li className="eventOrderClass" {...props} disabled={true}>{value}</li>
                        }
                        }
                    />

                    <MessageContainer>
                        {message}
                        <FrontPageButton onclick={handleCheck} bgColor="red">Check</FrontPageButton>
                        {isOrderEventsCorrect ? <NextPageButton destination="office">Go to Office</NextPageButton> : null}
                    </MessageContainer>
                </EventsContainer>
            </Container>


        </>

    )
}

export default OrderEvents