import { useState, useContext } from 'react'
import PageContainer from '../../../containers/PageContainer'
import Title from '../../../generalComponents/Title'
import { history, useHistory } from 'react-router-dom'
import { SpeechBubbleLeft } from '../../witness/witnessComponents/Questions'
import { Instructions, Conversation, WitnessImage, TaskBox, InfoBox } from '../../witness/witnessComponents/Layout'
import ProfilePic from '../../../images/janitor.png'
import { ErrorCorrectionData } from '../../../data/lessonData'
import { SentenceDiv } from './errorCorrectionComponents/ErrorCorrectionComponents'
import GameContext from '../../../context/GameContext'


function ErrorCorrection() {

    const [ selectedSentences, setSelectedSentences ]  = useState([])

    const { level, setLevel } = useContext(GameContext)
    const { instructions, sentences, correctedSentences } = ErrorCorrectionData

    function handleClick(e) {
        const selectedSentenceId = e.target.id
        const selectedSentence = document.getElementById(selectedSentenceId)
        if(selectedSentence.classList.contains('selected')){
            selectedSentence.classList.remove('selected') 
            let copySelectedSentences = [...selectedSentences]
            const indexOfSelected = copySelectedSentences.indexOf(selectedSentenceId)
            copySelectedSentences.splice(indexOfSelected, 1)
            setSelectedSentences(copySelectedSentences)
        }
        else{
            selectedSentence.classList.add('selected')
            setSelectedSentences((prev) => [selectedSentenceId, ...prev])
            console.log(selectedSentences.length)
        }

    }

    console.log(selectedSentences);

    function handleCheckCorrectCode() {
        console.log('clicked');
    }

    function handleVisitorBookClick() {
        console.log('clicked');
    }

    const sentenceList = sentences.map((item) => <SentenceDiv id={item[1]} isCorrect={item[2]} bgColor="red" onClick={handleClick} key={item}>{item[0]}</SentenceDiv>)

    return (
        <>
            <div className="title">
                <Title>Solve the Puzzle</Title>
            </div>
            <PageContainer>
                <Instructions>
                    <WitnessImage img={ProfilePic} />
                    {/* https://unsplash.com/@shnautsher */}
                    <TaskBox>
                        Break the code!
                        </TaskBox>
                </Instructions>
                <Conversation>
                    <SpeechBubbleLeft>
                        {instructions}
                    </SpeechBubbleLeft>
                    {sentenceList}

                </Conversation>
            </PageContainer>

        </>

    )
}

export default ErrorCorrection