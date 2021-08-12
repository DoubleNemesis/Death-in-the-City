import { useState, useContext, useEffect } from 'react'
import PageContainer from '../../../containers/PageContainer'
import Title from '../../../generalComponents/Title'
import { history, useHistory } from 'react-router-dom'
import { SpeechBubbleLeft } from '../../../generalComponents/ConversationComponents'
// import { Instructions, Conversation, WitnessImage, TaskBox, InfoBox } from '../../witness/witnessComponents/Layout'
import ProfilePic from '../../../images/janitor.png'
import { redactedData, RedactedComp } from '../../../data/lessonData'
import { StatementContainer, RedactedTextComp, Container } from './redactedComponents/RedactedComponents'
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
    // const [isRedactedCorrect, setIsRedactedCorrect] = useState(false)
    const [redactedInputs, setRedactedInputs] = useState({})
    const [message, setMessage] = useState(<TaskMessage task="true" message={taskText}/>)
    const { instructions, missingWords } = redactedData

    function handleInputChange(e) {
        const { name, value } = e.target
        console.log(name, value);
        setRedactedInputs((prev) => ({ ...prev, [name]: value }))
    }

    function handleCheck() {
        let arrayOfAnswers = []
        if (Object.values(redactedInputs).toString() === missingWords.toString()) {
            setMessage(<TaskMessage correct="true" message={taskCorrect}/>)
            setIsRedactedCorrect(true)
            let dummyCompletedChallenges = [...completedChallenges]
            dummyCompletedChallenges.push(props.artefactName)
            setCompletedChallenges(dummyCompletedChallenges)
        }
        else {
            setMessage(<TaskMessage incorrect="true" message={taskIncorrect}/>)
            setIsRedactedCorrect(false)
        }
    }

    console.log(redactedInputs);
    return (
        <>

            <Container>

                <StatementContainer>
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
                        value1={redactedInputs['name1'] || ""}
                        value2={redactedInputs['name2'] || ""}
                        value3={redactedInputs['name3'] || ""}
                        value4={redactedInputs['name4'] || ""}
                        value5={redactedInputs['name5'] || ""}
                    />
                    {/* <button onClick={handleCheck}>Check</button> {message} */}
                    <MessageContainer>
                        {message}
                        {!isRedactedCorrect ? <FrontPageButton onclick={handleCheck} fontSize="1rem" bgColor="red">Check</FrontPageButton> : null}
                        {isRedactedCorrect ? <NextPageButton destination="office">Go to Office</NextPageButton> : null}
                    </MessageContainer>
                </StatementContainer>
            </Container>
        </>

    )
}

export default Redacted