import { useRef } from 'react'
import PageContainer from '../../../containers/PageContainer'
import Title from '../../../generalComponents/Title'
import { SpeechBubbleLeft } from '../../witness/witnessComponents/Questions'
import { Instructions, Conversation, WitnessImage, TaskBox } from '../../witness/witnessComponents/Layout'
import { TornLetterPiece, LetterContainer } from './tornLetterComponents/TornLetterComponents'
import ProfilePic from '../../../images/chaymadz.jpg'
import GameContext from '../../../context/GameContext'
import Draggable from 'react-draggable';
import { TornLetterPiecesData} from '../../../data/lessonData'

function CodeBox() {
    const nodeRef = useRef(null);

    function handleStop(event){
        console.log(event) 
    }

    function handleDrag(event){
        console.log(event.target.id)
    }

    const TornLetterFragments = TornLetterPiecesData.map((item, index)=><Draggable classname="booo" onStart={handleDrag} onStop={handleStop} key={index} nodeRef={nodeRef} ><div ref={nodeRef} ><TornLetterPiece id={index} >{item}</TornLetterPiece></div></Draggable>)
    return (
        <>
            <div className="title">
                <Title>Solve the Puzzle</Title>
            </div>
            <PageContainer>
                <Instructions>
                    <WitnessImage img={ProfilePic} />
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
                    <LetterContainer className="letcont">
                        {TornLetterFragments}
                    </LetterContainer>
                </Conversation>
            </PageContainer>

        </>

    )
}

export default CodeBox