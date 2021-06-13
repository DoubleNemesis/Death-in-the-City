import { useState, useContext, useEffect } from 'react'
import PageContainer from '../../../containers/PageContainer'
import Title from '../../../generalComponents/Title'
import { history, useHistory } from 'react-router-dom'
import { SpeechBubbleLeft } from '../../witness/witnessComponents/Questions'
import { Instructions, Conversation, WitnessImage, TaskBox, InfoBox } from '../../witness/witnessComponents/Layout'
import ProfilePic from '../../../images/janitor.png'
import { ErrorCorrectionData } from '../../../data/lessonData'
import { SentenceDiv, IncorrectSentencesDiv } from './errorCorrectionComponents/ErrorCorrectionComponents'
import GameContext from '../../../context/GameContext'


function ErrorCorrection() {

    const [selectedSentences, setSelectedSentences] = useState([])
    const [sentencesArray, setSentencesArray] = useState([])
    const [incorrectAndCorrectedArray, setIncorrectAndCorrectedArray] = useState([])
    const [isComplete1, setIsComplete1] = useState(false)
    const [isComplete2, setIsComplete2] = useState(false)
    const [correctedSentences, setCorrectedSentences] = useState({})
    const { level, setLevel } = useContext(GameContext)
    const { instructions, sentences, incorrectSentences, incorrectAndCorrected } = ErrorCorrectionData

    useEffect(() => {
        setSentencesArray(sentences)
        setIncorrectAndCorrectedArray(incorrectAndCorrected)
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
                setIsComplete1(true)
            }
            else {
                let copySentencesArray = [...sentencesArray]
                copySentencesArray.forEach(item => item[2] = false)
                setSentencesArray(copySentencesArray)
                setSelectedSentences([])
            }
        }
    }, [selectedSentences])


    function handleChange(e) {
        const sentenceId = e.target.id
        const { name, value } = e.target
        setCorrectedSentences((prev) => ({ ...prev, [name]: value }))
    }

    function handleSubmit(e) {
        if (correctedSentences[e.target.id] === incorrectAndCorrectedArray[e.target.id][2]) {
            let copyIncorrectAndCorrectedArray = [...incorrectAndCorrectedArray]
            copyIncorrectAndCorrectedArray[e.target.id][3] = true;
            setIncorrectAndCorrectedArray(copyIncorrectAndCorrectedArray)
        }
        else {
            console.log(correctedSentences[e.target.id], incorrectAndCorrectedArray[e.target.id][2]);
        }
    }

    useEffect(() => {
        let count = 0
        for (let item in incorrectAndCorrectedArray) {
            if (incorrectAndCorrectedArray[item][3] === false) {
                count++
            }

        }
        setIsComplete2(count === 0 ? true : false)
    }, [incorrectAndCorrectedArray])


    const firstSentenceList = sentences.map((item) => <SentenceDiv id={item[1]} isSelected={item[2]} onClick={handleClick} key={item}>{item[0]}</SentenceDiv>)
    const secondSentenceList = incorrectAndCorrectedArray.map((item) => <IncorrectSentencesDiv
        isCorrect={item[3]}
        id={item[1]}
        key={item}
    >
        {item[0]}
        <input
            id={item[1]}
            name={item[1]}
            value={correctedSentences[item[1]] || ""}
            type="text" onChange={handleChange} />
        <button id={item[1]}
            onClick={handleSubmit}
        >Go!
        </button>
    </IncorrectSentencesDiv>)
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
                    {!isComplete1 ? firstSentenceList : !isComplete2 ? secondSentenceList : <h1>let's go!</h1>}
                </Conversation>
            </PageContainer>

        </>

    )
}

export default ErrorCorrection