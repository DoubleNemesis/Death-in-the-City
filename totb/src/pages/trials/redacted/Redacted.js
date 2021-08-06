import { useState, useContext, useEffect } from 'react'
import PageContainer from '../../../containers/PageContainer'
import Title from '../../../generalComponents/Title'
import { history, useHistory } from 'react-router-dom'
import { SpeechBubbleLeft } from '../../../generalComponents/ConversationComponents'
import { Instructions, Conversation, WitnessImage, TaskBox, InfoBox } from '../../witness/witnessComponents/Layout'
import ProfilePic from '../../../images/janitor.png'
import { redactedData, RedactedComp } from '../../../data/lessonData'
import { StatementContainer, RedactedTextComp } from './redactedComponents/RedactedComponents'
import GameContext from '../../../context/GameContext'
import NextPageButton from '../../../generalComponents/NextPageButton'
import wendyPic from '../../../images/wendy.jpg'
import {FrontPageButton} from '../../../generalComponents/GeneralButton'
import { MessageContainer } from '../../../containers/MessageContainer'



function Redacted(props) {

    const {completedChallenges, setCompletedChallenges} = useContext(GameContext)
    const {isRedactedCorrect, setIsRedactedCorrect} = useContext(GameContext)
    // const [isRedactedCorrect, setIsRedactedCorrect] = useState(false)
    const [redactedInputs, setRedactedInputs] = useState({})
    const [message, setMessage] = useState('')
    const { instructions, missingWords } = redactedData

    function handleInputChange(e) {
        const { name, value } = e.target
        console.log(name, value);
        setRedactedInputs((prev) => ({ ...prev, [name]: value }))
    }

    function handleCheck() {
        let arrayOfAnswers = []
        if (Object.values(redactedInputs).toString() === missingWords.toString()){
            setMessage( 'Correct!')
            setIsRedactedCorrect(true)
            let dummyCompletedChallenges = [...completedChallenges]
            dummyCompletedChallenges.push(props.artefactName)
            setCompletedChallenges(dummyCompletedChallenges)
        }
        else{
            setMessage('Incorrect, try again!')
            setIsRedactedCorrect(false)
        }
    }

    console.log(redactedInputs);
    return (
        <>

            <Conversation>
                <SpeechBubbleLeft image={wendyPic} >
                    {instructions}
                </SpeechBubbleLeft>
                <StatementContainer>
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
                    <FrontPageButton onclick={handleCheck} fontSize="1rem" bgColor="red">Check</FrontPageButton>
                        <h3>{message}</h3></MessageContainer>
                    {isRedactedCorrect ? <NextPageButton destination="office">Go to Office</NextPageButton> : null}
                </StatementContainer>
            </Conversation>
        </>

    )
}

export default Redacted