import { useState} from 'react'
import Title from '../generalComponents/Title'
import { Board, Messages, DeskTitles, Notes, Map, Desk, PostIt } from '../officeComponents/DeskItems'
import { OfficeLayout, Modal, ModalClose, OverlayDiv } from '../officeComponents/OfficeComponents'
import styled, { keyframes } from 'styled-components'
import { history, useHistory } from 'react-router-dom'

const Test = styled.div`
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
        <Test>
            Map
        </Test>
    )
}
function NotesBig() {
    return (
        <Test>
            Notes
        </Test>
    )
}
function IdeasBig() {
    return (
        <Test>
            Ideas 123
        </Test>
    )
}



function Office() {
    const [animateMap, setAnimateMap] = useState(false)
    const [animateBoard, setAnimateBoard] = useState(false)
    const [animateNotes, setAnimateNotes] = useState(false)
    const [mapData, setMapData] = useState(false)

    let history = useHistory()

    function handleClick(e) {
        e.preventDefault()
        let itemToDisplayBig = e.target.id
        if (itemToDisplayBig === 'map'){
            setAnimateMap(true)
            setMapData(true)
        }
        else if (itemToDisplayBig === 'board'){
            setAnimateBoard(true)
        }
        else if (itemToDisplayBig === 'notes'){
            setAnimateNotes(true)
        }

    }

    function handleClose(e) {
        e.preventDefault()
        let itemToDisplaySmall = e.target.id
        if (itemToDisplaySmall === 'mapClose'){
            setAnimateMap(!animateMap)
            setMapData(false)
        }
        else if (itemToDisplaySmall === 'boardClose'){
            setAnimateBoard(false)
        }
        else if (itemToDisplaySmall === 'notesClose'){
            setAnimateNotes(!animateNotes)
        }
    }

    return (
        <>
            <Title>Office</Title>
            <OfficeLayout>
                <Desk >
                    <Map animateMap={animateMap}>
                    <OverlayDiv id="map" onClick={handleClick} />
                    <ModalClose onClick={handleClose} id="mapClose">X</ModalClose>
                        <DeskTitles>Maps/Diagrams</DeskTitles>
                        {mapData ? <MapBig/> : null}
                    </Map>

                    <Board animateBoard={animateBoard}>
                    <OverlayDiv id="board" onClick={handleClick} />
                    <ModalClose onClick={handleClose} id="boardClose">X</ModalClose>
                        <DeskTitles>Ideas</DeskTitles>
                        <PostIt>
                            <p>The Victim</p>
                            <p>Lexington Grey</p>
                        </PostIt>
                        <img src="https://images.unsplash.com/photo-1614331589242-a02c24b5f564?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=318&q=80" />
                    </Board>

                    <Notes animateNotes={animateNotes} >  
                    <OverlayDiv id="notes" onClick={handleClick} />
                    <ModalClose onClick={handleClose} id="notesClose">X</ModalClose>
                    <DeskTitles >Notes/Messages</DeskTitles>
                        <Messages>Call Mr Lexton ASAP!!</Messages>
                        <Messages>View all notes</Messages>
                    </Notes>
                </Desk>
            </OfficeLayout>
        </>
    )
}

export default Office