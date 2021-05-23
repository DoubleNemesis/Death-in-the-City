import { useState } from 'react'
import Title from '../generalComponents/Title'
import { Board, Messages, DeskTitles, Notes, Map, Desk, PostIt } from '../officeComponents/DeskItems'
import { OfficeLayout, ModalClose, ModalOpen } from '../officeComponents/OfficeComponents'
import styled from 'styled-components'
import { history, useHistory } from 'react-router-dom'

const OfficeItemsContents = styled.div`
color: black;
position: relative;
z-index: 10000;
background-color: white;
width: 100%;
height: 100%;
margin-top: -4.5em;
`

function MapBig() {
    return (
        <OfficeItemsContents>
            Map
        </OfficeItemsContents>
    )
}
function NotesBig() {
    return (
        <OfficeItemsContents>
            Notes
        </OfficeItemsContents>
    )
}
function BoardBig() {
    return (
        <OfficeItemsContents>
            Ideas 123
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
            <Title>Office</Title>
            <OfficeLayout>
                <Desk >
                    <Map animateMap={animateMap} >
                        {!mapData ? 
                        <ModalOpen id="map" onClick={handleDeskItemOpen} >+</ModalOpen> :
                        <ModalClose onClick={handleDeskItemClose} id="map">X</ModalClose>
                        }
                        <DeskTitles>Maps/Diagrams</DeskTitles>
                        {mapData ? <MapBig /> : null}
                    </Map>

                    <Board animateBoard={animateBoard}  >
                        {!boardData ?
                            <ModalOpen onClick={handleDeskItemOpen} id="board" >+</ModalOpen> :
                            <ModalClose onClick={handleDeskItemClose} id="board" >X</ModalClose>
                        }
                        <DeskTitles>Ideas</DeskTitles>
                        {boardData ? <BoardBig /> : null}
                        {!boardData ?
                            <>
                                <PostIt>
                                    <p>The Victim</p>
                                    <p>Lexington Grey</p>
                                </PostIt>
                                <img src="https://images.unsplash.com/photo-1614331589242-a02c24b5f564?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=318&q=80" />
                            </>
                            : null
                        }

                    </Board>

                    <Notes animateNotes={animateNotes} >
                        {!notesData ?
                            <ModalOpen onClick={handleDeskItemOpen} id="notes">+</ModalOpen> :
                            <ModalClose onClick={handleDeskItemClose} id="notes">X</ModalClose>
                        }

                        <DeskTitles >Notes/Messages</DeskTitles>
                        {notesData ? <NotesBig /> : null}
                        <Messages>Call Mr Lexton ASAP!!</Messages>
                        <Messages>View all notes</Messages>

                    </Notes>
                </Desk>
            </OfficeLayout>
        </>
    )
}

export default Office