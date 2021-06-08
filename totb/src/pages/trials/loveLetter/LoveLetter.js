import {useContext, useRef } from 'react'
import PageContainer from '../../../containers/PageContainer'
import Title from '../../../generalComponents/Title'
//import { history, useHistory } from 'react-router-dom'
import { SpeechBubbleLeft } from '../../witness/witnessComponents/Questions'
import { Instructions, Conversation, WitnessImage, TaskBox } from '../../witness/witnessComponents/Layout'
import { LoveLetterElems } from './LoveLetterComponents'
import ProfilePic from '../../../images/chaymadz.jpg'
import GameContext from '../../../context/GameContext'
import Draggable from 'react-draggable';
import { loveLetterData} from '../../../data/lessonData'




function LoveLetter() {
    //const { level, setLevel } = useContext(GameContext)
    //let history = useHistory()
    const nodeRef = useRef(null);
    const {instructions} = loveLetterData


    function handleStop(event){

        console.log(event) 
    }

    function handleDrag(event){
        console.log(event.target.id)

    }



    // const TornLetterFragments = TornLetterPiecesData.map((item, index)=><Draggable classname="booo" onStart={handleDrag} onStop={handleStop} key={index} nodeRef={nodeRef} ><div ref={nodeRef} ><TornLetterPiece id={index} >{item}</TornLetterPiece></div></Draggable>)

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
                        {instructions}
                    </SpeechBubbleLeft>

                    <LoveLetterElems className="symbol" id="one">%</LoveLetterElems>
                    <LoveLetterElems className="symbol" id="two">£</LoveLetterElems>
                    <LoveLetterElems className="symbol" id="three">£</LoveLetterElems>

                    <LoveLetterElems className="symbol" id="four">$</LoveLetterElems>
                    <LoveLetterElems className="symbol" id="five">%</LoveLetterElems>
                    <LoveLetterElems className="symbol" id="six">&</LoveLetterElems>

                    <LoveLetterElems className="letter" id="a">a</LoveLetterElems>
                    <LoveLetterElems className="letter" id="d">d</LoveLetterElems>
                    <LoveLetterElems className="letter" id="l">l</LoveLetterElems>
                    <LoveLetterElems className="letter" id="y">y</LoveLetterElems>


                </Conversation>
            </PageContainer>

        </>

    )
}

export default LoveLetter