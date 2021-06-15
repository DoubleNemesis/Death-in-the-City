import { useState, useContext, useEffect } from 'react'
import { List, arrayMove } from 'react-movable';
import { orderEventsData } from '../../../data/lessonData'

function Simple() {
    let {eventsToOrder} = orderEventsData
    const {eventsCorrectOrder} = orderEventsData
    const [message1, setMessage1] = useState('')
    const [items, setItems] = useState([
        'this is the 1 event',
        'this is the 2 event',
        'this is the 3 event',
        'this is the 4 event',
        'this is the 5 event',
        'this is the 6 event',
    ]);


    useEffect(()=>{
        console.log(items.toString());
        console.log(eventsCorrectOrder.toString());
        console.log(eventsCorrectOrder.toString() === items.toString());
        setMessage1(eventsCorrectOrder.toString() === items.toString()?'correct':'incorrect');
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
        {message1}
        </>
    );
}

export default Simple