import { useState, useContext, useRef, useEffect } from 'react'
import styled from 'styled-components'
import { history, useHistory } from 'react-router-dom'
import GameContext from '../../context/GameContext'


const Container = styled.div`
display: flex;
flex-wrap: wrap;
width: 100%;
background-color: white;
`

const WitnessCard = styled.div`
width: 100px;
height: 100px;
margin: .2em;
background-color: skyblue;
`
const ArtefactCard = styled.div`
width: 100px;
height: 100px;
margin: .2em;
background-color: midnightblue;
`
const ActionCard = styled.div`
width: 100px;
height: 100px;
margin: .2em;
background-color: pink;
`

function OfficeBase() {


    //let history = useHistory()





    return (
        <Container>
            <WitnessCard/>
            <WitnessCard/>
            <WitnessCard/>
            <WitnessCard/>
            <WitnessCard/>
            <ArtefactCard/>
            <ArtefactCard/>
            <ArtefactCard/>
            <ArtefactCard/>
            <ArtefactCard/>
            <ActionCard/>
            <ActionCard/>
  
        </Container>
    )
}

export default OfficeBase