import { useState, useContext, useEffect } from 'react'
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

    const [selectedSentences, setSelectedSentences] = useState([])
    const [sentencesArray, setSentencesArray] = useState([])
    const [isComplete, setIsComplete] = useState(false)
    const [correctedSentences, setCorrectedSentences] = useState({})
    const { level, setLevel } = useContext(GameContext)
    const { instructions, sentences, incorrectSentences, incorrectAndCorrected } = ErrorCorrectionData

    useEffect(() => {
        setSentencesArray(sentences)
    }, [sentencesArray])

    function handleClick(e) {
        const selectedSentenceId = e.target.id
        const selectedSentence = document.getElementById(selectedSentenceId)
        // if (selectedSentence.classList.contains('selected')) {
        //selectedSentence.classList.remove('selected')
        if (sentencesArray[selectedSentenceId][2] === true) {
            let copySentencesArray = [...sentencesArray]
            copySentencesArray[selectedSentenceId][2] = false
            setSentencesArray(copySentencesArray)
            let copySelectedSentences = [...selectedSentences]
            const indexOfSelected = copySelectedSentences.indexOf(selectedSentenceId)
            copySelectedSentences.splice(indexOfSelected, 1)
            setSelectedSentences(copySelectedSentences)

        }
        else {
            //selectedSentence.classList.add('selected')
            let copySentencesArray = [...sentencesArray]
            copySentencesArray[selectedSentenceId][2] = true
            setSentencesArray(copySentencesArray)
            setSelectedSentences((prev) => [selectedSentenceId, ...prev])

        }
    }

    useEffect(() => {
        if (selectedSentences.length >= 3) {
            if (selectedSentences.sort().toString() === incorrectSentences[0].sort().toString()) {
                //render next step
                setIsComplete(true)
            }
            else {
                let copySentencesArray = [...sentencesArray]
                copySentencesArray.forEach(item => item[2] = false)
                setSentencesArray(copySentencesArray)
                setSelectedSentences([])
            }
        }
    }, [selectedSentences])

    function handleChange(e){
console.log('clicked');
    }
    function handleInput(e){
const sentenceId = e.target.id
const {name, value} = e.target
        setCorrectedSentences((prev)=>{
            
            

        })

    }

    const firstSentenceList = sentences.map((item) => <SentenceDiv id={item[1]} isSelected={item[2]} onClick={handleClick} key={item}>{item[0]}</SentenceDiv>)
    const secondSentenceList = incorrectAndCorrected.map((item) => <SentenceDiv id={item[1]} key={item}>{item[0]}<input type="text" onChange={handleChange}/><button onClick={handleInput}>Go!</button></SentenceDiv>)

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
                    {!isComplete ? firstSentenceList : secondSentenceList}
                </Conversation>
            </PageContainer>

        </>

    )
}

export default ErrorCorrection