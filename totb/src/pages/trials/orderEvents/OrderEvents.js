import { useState, useContext, useEffect } from 'react'
import PageContainer from '../../../containers/PageContainer'
import Title from '../../../generalComponents/Title'
import { history, useHistory } from 'react-router-dom'
import { SpeechBubbleLeft } from '../../witness/witnessComponents/Questions'
import { Instructions, Conversation, WitnessImage, TaskBox, InfoBox } from '../../witness/witnessComponents/Layout'
import ProfilePic from '../../../images/janitor.png'
import { orderEventsData } from '../../../data/lessonData'
import { EventsContainer, ParagraphContainer } from './orderEventsComponents/OrderEventsComponents'
import { List, arrayMove } from 'react-movable';
import NextPageButton from '../../../generalComponents/NextPageButton'
import GameContext from '../../../context/GameContext'
import clientPic from '../../../images/client.jpg'
// import MoveableEvents from './MoveableEvents'


// function MoveableEvents(props) {
//     const {completedChallenges, setCompletedChallenges} = useContext(GameContext)
//     let { eventsToOrder } = orderEventsData
//     const { eventsCorrectOrder } = orderEventsData
//     const [message, setMessage] = useState('')
//     const [itemsToOrder, setItemsToOrder] = useState(eventsToOrder);
//     const [hasFinished, setHasFinished] = useState(false)
//     const [isCorrect, setIsCorrect] = useState(false)


    

//     return (
//         <>

//         </>
//     );
// }

function OrderEvents(props) {
    const {completedChallenges, setCompletedChallenges} = useContext(GameContext)
    let { eventsToOrder } = orderEventsData
    const { eventsCorrectOrder } = orderEventsData
    const [message, setMessage] = useState('')
    const [itemsToOrder, setItemsToOrder] = useState(eventsToOrder);
    const [hasFinished, setHasFinished] = useState(false)
    const [isCorrect, setIsCorrect] = useState(false)
    const { orderEventsText, instructions } = orderEventsData

    useEffect(() => {
        if (hasFinished) {
            if (eventsCorrectOrder.toString() === itemsToOrder.toString()) {
                setMessage('Correct')
                setIsCorrect(true)
                let dummyCompletedChallenges = [...completedChallenges]
                dummyCompletedChallenges.push(props.artefactName)
                setCompletedChallenges(dummyCompletedChallenges)
            }
            else {
                setMessage('Incorrect, try again')
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

            <Conversation>
                <SpeechBubbleLeft image={clientPic} >
                    {instructions}
                </SpeechBubbleLeft>
                <ParagraphContainer>
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
            <button onClick={handleCheck}>Check</button>
            {message}
            {isCorrect ? <NextPageButton destination="officebase">Go to Office</NextPageButton> : null}
                </EventsContainer>
            </Conversation>


        </>

    )
}

export default OrderEvents