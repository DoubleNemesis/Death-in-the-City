import { useState, useContext } from 'react'
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

const OfficeItemsContents = styled.div`
color: black;
position: relative;
background-color: white;
width: 100%;
height: 100%;
margin-top: -4.5em;
`
function MapOpen() {
    let history = useHistory()
    const {level} = useContext(GameContext)
    const numMapItemsToDisplay = level < 1 ? level : level === 1 ? 6 : 7

    function handleMapClick(e) {
        console.log(e.target.id);
        const destination = `/${e.target.id}`
        history.push(destination)
    }

    return (
        <OfficeItemsContents>
            <MapLarge>
                {mapFeatureData['features'].map((item, index) => {
                    if(index <= numMapItemsToDisplay){
                        return <MapFeature label={item.label} top={item.top} right={item.right} id={item.id} onclick={handleMapClick} />
                    }
               })}
            </MapLarge>
        </OfficeItemsContents>
    )
}

function BoardOpen() {
    const {level} = useContext(GameContext)
    return (
        <OfficeItemsContents>
            {BoardIdeaData['idea'].map((item, index)=>{
                if (index<=level){
                    return <BoardIdea key={item.key} title={item.title} name={item.name} image={item.image}/>
                }

            })}
        </OfficeItemsContents>
    )
}

function NotesOpen() {
    const {level} = useContext(GameContext)
    return (
        <OfficeItemsContents>
                        {NoteItemData['idea'].map((item, index)=>{
                if (index<=level){
                    return <NoteItem key={item.key} text={item.text}/>
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