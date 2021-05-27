import { useState, useEffect, useContext } from 'react'
import PageContainer from '../containers/PageContainer'
import Title from '../generalComponents/Title'
import { history, useHistory } from 'react-router-dom'
import { Question, SpeechBubbleLeft, SpeechBubbleRight } from '../witnessComponents/Questions'
import { Instructions, Conversation, QuestionOptions, WitnessImage, TaskBox, InfoBox } from '../witnessComponents/Layout'
import { TornLetterPiece } from '../trialComponents/tornLetterComponents/TornLetterComponents'
import ProfilePic from '../images/chaymadz.jpg'
import GameContext from '../context/GameContext'
import Draggable from 'react-draggable';




function CodeBox() {


    const {level, setLevel} = useContext(GameContext)

    let history = useHistory()

    function handleChange(e) {

    }

    function handleDoubleClick() {
        console.log('double clk');
    }

    function handleVisitorBookClick(){

    }

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
                    <Draggable>
                    <div>
                    <TornLetterPiece onDoubleClick={handleDoubleClick}/>
                    </div>
                    </Draggable>


                </Conversation>
            </PageContainer>

        </>

    )
}

export default CodeBox