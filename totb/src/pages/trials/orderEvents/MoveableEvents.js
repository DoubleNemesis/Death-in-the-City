import { useState, useContext, useEffect } from 'react'
import { List, arrayMove } from 'react-movable';
import { orderEventsData } from '../../../data/lessonData'

function MoveableEvents() {
    let {eventsToOrder} = orderEventsData
    const {eventsCorrectOrder} = orderEventsData
    const [message, setMessage] = useState('')
    const [items, setItems] = useState(eventsToOrder);


    useEffect(()=>{
        console.log(items.toString());
        console.log(eventsCorrectOrder.toString());
        console.log(eventsCorrectOrder.toString() === items.toString());
        setMessage(eventsCorrectOrder.toString() === items.toString()?'correct':'incorrect');
    },[items])
    
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
        {message}
        </>
    );
}

export default MoveableEvents