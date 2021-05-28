import { useState, useEffect, useContext } from 'react'
import PageContainer from '../containers/PageContainer'
import Title from '../generalComponents/Title'
import { history, useHistory } from 'react-router-dom'
import { Question, SpeechBubbleLeft, SpeechBubbleRight } from '../witnessComponents/Questions'
import { Instructions, Conversation, QuestionOptions, WitnessImage, TaskBox, InfoBox } from '../witnessComponents/Layout'
import { TornLetterPiece, LetterContainer } from '../trialComponents/tornLetterComponents/TornLetterComponents'
import ProfilePic from '../images/chaymadz.jpg'
import GameContext from '../context/GameContext'
import Draggable from 'react-draggable';
import { TornLetterPiecesData} from '../data/lessonData'




function CodeBox() {


    const { level, setLevel } = useContext(GameContext)

    let history = useHistory()

    function handleChange(e) {

    }



    function handleVisitorBookClick() {

    }

    const style1={marginTop: '5%', marginLeft: '0%'}
    const style2={marginTop: '9%', marginLeft: '6%'}
    const style3={marginTop: '0%', marginLeft: '15%'}


    const TornLetterFragments = TornLetterPiecesData.map((item)=><Draggable><div><TornLetterPiece>{item}</TornLetterPiece></div></Draggable>)

    return (
        <>
            <div className="title">
                <Title>Solve the Puzzle</Title>
            </div>
            <PageContainer>
                <Instructions>
                    <WitnessImage img={ProfilePic} />
                    {/* https://unsplash.com/@dammypayne*/}
                    <TaskBox>
                        Break the code!
                        </TaskBox>
                </Instructions>
                <Conversation>
                    <SpeechBubbleLeft>
                        Ok, I am gonna need your help! The record of who enters and leaves the building is kept locked
                        up in a safe and I don't know the code.
                        But maybe you will be able to work it out. Ready to try?
                    </SpeechBubbleLeft>
                    <LetterContainer>
                        {TornLetterFragments}
                        
                        


                        {/* <Draggable><div style={style2}><TornLetterPiece>two</TornLetterPiece></div></Draggable>
                        <Draggable><div style={style1}><TornLetterPiece>three</TornLetterPiece></div></Draggable>
                        <Draggable><div style={style3}><TornLetterPiece>four</TornLetterPiece></div></Draggable>
                        <Draggable><div style={style2}><TornLetterPiece>five</TornLetterPiece></div></Draggable>
                        <Draggable><div style={style3}><TornLetterPiece>six</TornLetterPiece></div></Draggable>
                        <Draggable><div style={style1}><TornLetterPiece>seven</TornLetterPiece></div></Draggable>
                        <Draggable><div style={style2}><TornLetterPiece>eight</TornLetterPiece></div></Draggable>
                        <Draggable><div style={style1}><TornLetterPiece>nine</TornLetterPiece></div></Draggable>
                        <Draggable><div style={style3}><TornLetterPiece>ten</TornLetterPiece></div></Draggable>
                        <Draggable><div style={style2}><TornLetterPiece>eleven</TornLetterPiece></div></Draggable>
                        <Draggable><div style={style1}><TornLetterPiece>twelve</TornLetterPiece></div></Draggable> */}
                    </LetterContainer>


                </Conversation>
            </PageContainer>

        </>

    )
}

export default CodeBox