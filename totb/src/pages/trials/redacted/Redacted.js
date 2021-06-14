import { useState, useContext, useEffect } from 'react'
import PageContainer from '../../../containers/PageContainer'
import Title from '../../../generalComponents/Title'
import { history, useHistory } from 'react-router-dom'
import { SpeechBubbleLeft } from '../../witness/witnessComponents/Questions'
import { Instructions, Conversation, WitnessImage, TaskBox, InfoBox } from '../../witness/witnessComponents/Layout'
import ProfilePic from '../../../images/janitor.png'
import { redactedData, RedactedComp } from '../../../data/lessonData'
import { StatementContainer, RedactedTextComp} from './redactedComponents/RedactedComponents'
import GameContext from '../../../context/GameContext'


function Redacted() {

    const [redactedInputs, setRedactedInputs] = useState({})
    const [message, setMessage] = useState('')
    const { level, setLevel } = useContext(GameContext)
    const { instructions, text, missingWords } = redactedData

    function handleInputChange(e){
        const {name, value} = e.target
        console.log(name, value);
        setRedactedInputs((prev)=>({...prev, [name]:value}))
    }

    function handleCheck(){
        let arrayOfAnswers = []
        setMessage(Object.values(redactedInputs).toString() === missingWords.toString()?'correct':'try again')

    }

 console.log(redactedInputs);
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
                    <StatementContainer>
                        {message}
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
                        <button onClick={handleCheck}>Check</button>
                        </StatementContainer>
                </Conversation>
            </PageContainer>

        </>

    )
}

export default Redacted