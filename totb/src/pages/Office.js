import { useState, useContext, useRef, useEffect } from 'react'
import Title from '../generalComponents/Title'
import { Board, Messages, DeskTitles, Notes, Map, MapLarge, Desk } from '../officeComponents/DeskItems'
import { MapFeature } from '../officeComponents/MapDestinations'
import { BoardIdea } from '../officeComponents/BoardIdea'
import { NoteItem } from '../officeComponents/NoteItem'
import { OfficeLayout, ModalClose, ModalOpen } from '../officeComponents/OfficeComponents'
import styled from 'styled-components'
import { history, useHistory } from 'react-router-dom'
import { officeTitle, backStorySubtitle, mapFeatureData, BoardIdeaData, NoteItemData } from '../data/lessonData'
import GameContext from '../context/GameContext'
import Draggable from 'react-draggable';

const OfficeItemsContents = styled.div`
color: black;
position: relative;
background-color: white;
width: 100%;
height: 100%;
margin-top: -4.5em;
border: 4px solid orange;


div{
    max-width: 75px;
    cursor: grab;
}
`
function MapOpen() {
    let history = useHistory()
    const { level } = useContext(GameContext)
    const numMapItemsToDisplay = level < 1 ? level : level === 1 ? 6 : 7

    function handleMapClick(e) {
        const destination = `/${e.target.id}`
        history.push(destination)
    }

    return (
        <OfficeItemsContents>
            <MapLarge>
                {mapFeatureData['features'].map((item, index) => {
                    if (index <= numMapItemsToDisplay) {
                        return <MapFeature label={item.label} top={item.top} right={item.right} id={item.id} onclick={handleMapClick} />
                    }
                })}
            </MapLarge>
        </OfficeItemsContents>
    )
}

function BoardOpen() {
    const [positions, setPositions] = useState({})
    const [hasLoaded, setHasLoaded] = useState(false)
    const { level } = useContext(GameContext)
    const nodeRef = useRef(null);
    console.log(positions)

    useEffect(() => {
        const existingSuspectPositions = JSON.parse(localStorage.getItem('positions'))
        setPositions(existingSuspectPositions)
        setHasLoaded(true)
    }, [])

    function handleDrag(e) {
    }

    function handleStop(e, data) {
        let dummyPositions = {...positions}
        const itemId = e.target.id
        dummyPositions[itemId] = {}
        dummyPositions[itemId]['x'] = data.x
        dummyPositions[itemId]['y'] = data.y
        setPositions(dummyPositions)
        //localStorage.setItem(`positions`, JSON.stringify(positions))
        //setPositionsLocalStorage()
    }

    useEffect(()=>{
        console.log('ls', positions)
        localStorage.setItem(`positions`, JSON.stringify(positions))
    },[positions])

function setPositionsLocalStorage(){
    console.log('ls', positions)
    localStorage.setItem(`positions`, JSON.stringify(positions))
}


    return (
   hasLoaded ?      <OfficeItemsContents >
            {BoardIdeaData['idea'].map((item, index) => {
                // if (index <= level) {
                return (
                    <Draggable
                        defaultPosition={positions === null ? {x: 0, y: 0} : !positions[item.id] ? {x: 0, y: 0} : {x: positions[item.id].x, y: positions[item.id].y}}
                        key={item.key}
                        nodeRef={nodeRef}
                        onDrag={handleDrag} onStop={handleStop}>
                        <div ref={nodeRef} >
                            <BoardIdea title={item.title} name={item.name} image={item.image} id={item.id} />
                        </div>
                    </Draggable>
                )
                //    }
            })}
        </OfficeItemsContents> : null
    )
}

function NotesOpen() {
    const { level } = useContext(GameContext)
    return (
        <OfficeItemsContents>
            {NoteItemData['idea'].map((item, index) => {
                if (index <= level) {
                    return <NoteItem key={item.key} text={item.text} />
                }

            })}
        </OfficeItemsContents>
    )
}


function Office() {
    const [animateMap, setAnimateMap] = useState(false)
    const [animateBoard, setAnimateBoard] = useState(false)
    const [animateNotes, setAnimateNotes] = useState(false)
    const [mapData, setMapData] = useState(false)
    const [boardData, setBoardData] = useState(false)
    const [notesData, setNotesData] = useState(false)

    let history = useHistory()

    function handleDeskItemOpen(e) {
        e.preventDefault()
        let itemToDisplayBig = e.target.id
        if (itemToDisplayBig === 'map') {
            setAnimateMap(true)
            setMapData(true)
        }
        else if (itemToDisplayBig === 'board') {
            setAnimateBoard(true)
            setBoardData(true)
        }
        else if (itemToDisplayBig === 'notes') {
            setNotesData(true)
            setAnimateNotes(true)
        }

    }

    function handleDeskItemClose(e) {
        e.preventDefault()
        let itemToDisplaySmall = e.target.id
        if (itemToDisplaySmall === 'map') {
            setAnimateMap(!animateMap)
            setMapData(false)
        }
        else if (itemToDisplaySmall === 'board') {
            setAnimateBoard(false)
            setBoardData(false)
        }
        else if (itemToDisplaySmall === 'notes') {
            setAnimateNotes(false)
            setNotesData(false)
        }
    }

    return (
        <>
            <Title>{officeTitle}</Title>
            <OfficeLayout>
                <Desk >
                    <Map animateMap={animateMap} >
                        {!mapData ?
                            <ModalOpen id="map" onClick={handleDeskItemOpen} >+</ModalOpen> :
                            <ModalClose onClick={handleDeskItemClose} id="map">X</ModalClose>
                        }
                        <DeskTitles>Maps/Diagrams</DeskTitles>
                        {mapData ? <MapOpen /> : null}
                    </Map>

                    <Board animateBoard={animateBoard}  >
                        {!boardData ?
                            <ModalOpen onClick={handleDeskItemOpen} id="board" >+</ModalOpen> :
                            <ModalClose onClick={handleDeskItemClose} id="board" >X</ModalClose>
                        }
                        <DeskTitles>Ideas</DeskTitles>
                        {boardData ? <BoardOpen /> : null}
                        {/* {!boardData ?

                            : null
                        } */}
                    </Board>
                    <Notes animateNotes={animateNotes} >
                        {!notesData ?
                            <ModalOpen onClick={handleDeskItemOpen} id="notes">+</ModalOpen> :
                            <ModalClose onClick={handleDeskItemClose} id="notes">X</ModalClose>
                        }

                        <DeskTitles >Notes/Messages</DeskTitles>
                        {notesData ? <NotesOpen /> : null}
                        {/* {!notesData ?
                            <>
                                <Messages>Call Mr Lexton ASAP!!</Messages>
                                <Messages>View all notes</Messages>
                            </>
                            : null
                        } */}
                    </Notes>
                </Desk>
            </OfficeLayout>
        </>
    )
}

export default Office