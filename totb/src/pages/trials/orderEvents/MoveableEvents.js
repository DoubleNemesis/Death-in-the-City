import { useState, useContext, useEffect } from 'react'
import { List, arrayMove } from 'react-movable';
import { orderEventsData } from '../../../data/lessonData'
import NextPageButton from '../../../generalComponents/NextPageButton'
import GameContext from '../../../context/GameContext'

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

export default MoveableEvents