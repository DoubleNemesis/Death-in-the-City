import { useState} from 'react'
import PageContainer from '../containers/PageContainer'
import Title from '../components/Title'
import { Board, Messages, DeskTitles, Notes, Map, Desk, PostIt } from '../officeComponents/DeskItems'
import { OfficeLayout, Modal, ModalClose } from '../officeComponents/OfficeComponents'
import MainContainer from '../containers/MainContainer'
import SubTitle from '../components/SubTitle'
import Button from '../components/Button'
import styled, { keyframes } from 'styled-components'
import { history, useHistory } from 'react-router-dom'

const Test = styled.h1`
color: black;
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

    const [isShownDisplayModal, setIsShownDisplayModal] = useState(false)
    const [boardToDisplay, setBoardToDisplay] = useState(null)
    const [animateMap, setAnimateMap] = useState(false)

    let history = useHistory()

    function handleClick(e) {
        e.preventDefault()
        // let itemToDisplayBig = e.currentTarget.id
        // setIsShownDisplayModal(true)
        // setBoardToDisplay(itemToDisplayBig)
        setAnimateMap(!animateMap)
    }

    function handleClose() {
        // setIsShownDisplayModal(false)
        // setBoardToDisplay(null)
        setAnimateMap(!animateMap)
    }


    return (
        <>
            <Title>Office</Title>
            <OfficeLayout>
                <Modal isShownDisplayModal={isShownDisplayModal}>
                    <ModalClose onClick={handleClose}>X</ModalClose>
                    {boardToDisplay === 'ideasBig' ? <IdeasBig /> : boardToDisplay === 'mapBig' ? <MapBig /> : boardToDisplay === 'notesBig' ? <NotesBig /> : null}
                </Modal>
                <Desk >
                    <Map id="mapBig" onClick={handleClick} animateMap={animateMap}>
                    <ModalClose onClick={handleClose}>X</ModalClose>
                        <DeskTitles>Maps/Diagrams</DeskTitles>
                    </Map>

                    <Board id="ideasBig" onClick={handleClick}>
                        <DeskTitles>Ideas</DeskTitles>
                        <PostIt>
                            <p>The Victim</p>
                            <p>Lexington Grey</p>
                        </PostIt>
                        <img src="https://images.unsplash.com/photo-1614331589242-a02c24b5f564?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=318&q=80" />
                    </Board>

                    <Notes id="notesBig" onClick={handleClick}>
                        <DeskTitles>Notes/Messages</DeskTitles>
                        <Messages><a href="">Call Mr Lexton ASAP!!</a></Messages>
                        <Messages><a href="">View all notes</a></Messages>
                    </Notes>
                </Desk>
            </OfficeLayout>

        </>

    )
}

export default Office