import { useContext, useRef } from 'react'
import PageContainer from '../../../containers/PageContainer'
import Title from '../../../generalComponents/Title'
//import { history, useHistory } from 'react-router-dom'
import { SpeechBubbleLeft } from '../../witness/witnessComponents/Questions'
import { Instructions, Conversation, WitnessImage, TaskBox } from '../../witness/witnessComponents/Layout'
import { LoveLetterElems, LoveLetterSymbolsContainer, LoveLetterLettersContainer, LoveLetterSpace } from './LoveLetterComponents'
import ProfilePic from '../../../images/chaymadz.jpg'
import GameContext from '../../../context/GameContext'
import Draggable from 'react-draggable';
import { loveLetterData } from '../../../data/lessonData'




function LoveLetter() {
    //const { level, setLevel } = useContext(GameContext)
    //let history = useHistory()
    const nodeRef = useRef(null);
    const { instructions } = loveLetterData


    function handleStop(event) {

        console.log(event)
    }

    function handleDrag(event) {
        console.log(event.target.id)

    }

    const secretMessage = "I am a message";
    const secretMessageArray = secretMessage.toLowerCase().split('');

    //const LoveLetterSymbols = loveLetterData['symbols'].map((item, index) => <LoveLetterElems>{String.fromCharCode(item[0])}</LoveLetterElems>)
    const LoveLetterLetters = loveLetterData['letters'].map((item, index) => <LoveLetterElems>{item[0]}</LoveLetterElems>)
    const LoveLetterCode = secretMessageArray.map((item, index) => {

        return (
            <>
               {typeof loveLetterData['symbols'][loveLetterData['letters'].indexOf(item)] === 'object' ? 
               <LoveLetterElems>{String.fromCharCode(loveLetterData['symbols'][loveLetterData['letters'].indexOf(item)][0])}</LoveLetterElems> :
               <LoveLetterSpace/>
               }
            </>
        )
    })
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
                    <LoveLetterSymbolsContainer>
                    {LoveLetterCode}
                    </LoveLetterSymbolsContainer>

                    <LoveLetterLettersContainer>

                        {LoveLetterLetters}
                    </LoveLetterLettersContainer>
                </Conversation>
            </PageContainer>

        </>

    )
}

export default LoveLetter