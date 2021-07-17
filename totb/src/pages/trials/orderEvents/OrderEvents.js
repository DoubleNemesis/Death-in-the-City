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
// import MoveableEvents from './MoveableEvents'


function MoveableEvents() {
    const { items, setItems } = useContext(GameContext)
    let {eventsToOrder} = orderEventsData
    const {eventsCorrectOrder} = orderEventsData
    const [message, setMessage] = useState('')
    const [itemsToOrder, setItemsToOrder] = useState(eventsToOrder); 
    const [hasFinished, setHasFinished] = useState(false)
    const [isCorrect, setIsCorrect] = useState(false)


    useEffect(()=>{
        if(hasFinished){
            if (eventsCorrectOrder.toString() === itemsToOrder.toString()){
                setMessage('Correct')
                setIsCorrect(true) 
                let dummyItems = [...items]
                dummyItems.push('Ordered Statement')
                setItems(dummyItems)
            }
            else {
                setMessage('Incorrect, try again')
                setHasFinished(false)
            }
        }
        // setMessage(eventsCorrectOrder.toString() === items.toString()?'correct':'incorrect');
    },[itemsToOrder, hasFinished])

    function handleCheck(){
        setHasFinished(true)
    }
    
    return (
        <>
        <List
            values={itemsToOrder}
            onChange={({oldIndex, newIndex }) => {
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
        </>
    );
}

function OrderEvents() {
    const {orderEventsText} = orderEventsData
    return (
        <>

                <Conversation>
 
                <ParagraphContainer>
                    {orderEventsText}
                </ParagraphContainer>

                    <EventsContainer>
                    <MoveableEvents />
                    </EventsContainer>
                </Conversation>
 

        </>

    )
}

export default OrderEvents