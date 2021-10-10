import { useState, useContext, useEffect } from 'react'
import { SpeechBubbleLeft } from '../../../generalComponents/ConversationComponents'
import { redactedData, RedactedComp } from '../../../data/lessonData'
import { StatementContainer, Container } from './redactedComponents/RedactedComponents'
import GameContext from '../../../context/GameContext'
import NextPageButton from '../../../generalComponents/NextPageButton'
import wendyPic from '../../../images/wendy.jpg'
import { FrontPageButton } from '../../../generalComponents/GeneralButton'
import { MessageContainer } from '../../../containers/MessageContainer'
import {TaskMessage} from '../../../generalComponents/TaskMessage'

function Redacted(props) {

    const taskText = `Hit check when finished`
    const taskCorrect = `Correct!`
    const taskIncorrect = `That's incorrect. Try again.`
    const { completedChallenges, setCompletedChallenges } = useContext(GameContext)
    const { isRedactedCorrect, setIsRedactedCorrect } = useContext(GameContext)
    const [redactedInputs, setRedactedInputs] = useState({})
    const [message, setMessage] = useState(<TaskMessage task="true" message={taskText}/>)
    const { instructions, missingWords } = redactedData 

    useEffect(()=>{
        window.scrollTo(0,0)
      },[])

    function handleInputChange(e) {
        const { name, value } = e.target
        setRedactedInputs((prev) => ({ ...prev, [name]: value }))
    }

    function handleCheck() {
        const arrayLength = missingWords.length
        if (
            redactedInputs['name1'] === missingWords[0] &&
            redactedInputs['name2'] === missingWords[1] &&
            redactedInputs['name3'] === missingWords[2] &&
            redactedInputs['name4'] === missingWords[3] &&
            redactedInputs['name5'] === missingWords[4]   
            ) {
            setMessage(<TaskMessage correct="true" message={taskCorrect}/>)
            setIsRedactedCorrect(true)
            let dummyCompletedChallenges = [...completedChallenges]
            dummyCompletedChallenges.push(props.artefactName)
            setCompletedChallenges(dummyCompletedChallenges)
            for(let i=1; i<=arrayLength; i++){
                let word = `name${i}`
                    document.getElementById(word).classList.remove('error')
            }
        }
        else {
            setMessage(<TaskMessage incorrect="true" message={taskIncorrect}/>)
            setIsRedactedCorrect(false)
            for(let i=1; i<=arrayLength; i++){
                let incorrectWord = `name${i}`
                if (redactedInputs[`name${i}`] !== missingWords[i-1]){
                    document.getElementById(incorrectWord).classList.add('error')                }
                else{
                    document.getElementById(incorrectWord).classList.remove('error') 
                }
            }
        }
    }

    return (
        <>
            <Container>
                <StatementContainer bgColor={!isRedactedCorrect ? 'white' : 'limegreen'}>
                    <SpeechBubbleLeft image={wendyPic} >
                        {instructions}
                    </SpeechBubbleLeft>
                    <RedactedComp
                        onchange={handleInputChange}
                        name1="name1"
                        name2="name2"
                        name3="name3"
                        name4="name4"
                        name5="name5"
                        id1="name1"
                        id2="name2"
                        id3="name3"
                        id4="name4"
                        id5="name5"
                        value1={redactedInputs['name1'] || ""}
                        value2={redactedInputs['name2'] || ""}
                        value3={redactedInputs['name3'] || ""}
                        value4={redactedInputs['name4'] || ""}
                        value5={redactedInputs['name5'] || ""}
                    />
                    <MessageContainer>
                        {message}
                        {!isRedactedCorrect ? <FrontPageButton onclick={handleCheck} fontSize="1rem" bgColor="red">Check</FrontPageButton> : null}
                        {isRedactedCorrect ? <NextPageButton destination="sneaky5">Check her bin</NextPageButton> : null}
                    </MessageContainer>
                </StatementContainer>
            </Container>
        </>

    )
}

export default Redacted