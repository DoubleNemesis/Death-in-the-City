import { useState, useContext, useEffect } from 'react'
import { List, arrayMove } from 'react-movable';
import { orderEventsData } from '../../../data/lessonData'
import NextPageButton from '../../../generalComponents/NextPageButton'

function MoveableEvents() {
    let {eventsToOrder} = orderEventsData
    const {eventsCorrectOrder} = orderEventsData
    const [message, setMessage] = useState('')
    const [items, setItems] = useState(eventsToOrder); 
    const [hasFinished, setHasFinished] = useState(false)
    const [isCorrect, setIsCorrect] = useState(false)


    useEffect(()=>{
        if(hasFinished){
            if (eventsCorrectOrder.toString() === items.toString()){
                setMessage('Correct')
                setIsCorrect(true) 
            }
            else {
                setMessage('Incorrect, try again')
                setHasFinished(false)
            }
        }
        // setMessage(eventsCorrectOrder.toString() === items.toString()?'correct':'incorrect');
    },[items, hasFinished])

    function handleCheck(){
        setHasFinished(true)
    }
    
    return (
        <>
        <List
            values={items}
            onChange={({oldIndex, newIndex }) => {
                setItems(arrayMove(items, oldIndex, newIndex))
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