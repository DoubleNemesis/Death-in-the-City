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
    const { level, setLevel } = useContext(GameContext)
    const { instructions, text, missingWords } = redactedData

    function handleInputChange(e){
        const {name, value} = e.target.id
        setRedactedInputs((prev)=>({...prev, [name]:value}))
    }

 
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
                        <RedactedComp
                        onchange={handleInputChange}
                        name1="name1"
                        value1={redactedInputs['name1'] || ""}
                        />
                        </StatementContainer>
                </Conversation>
            </PageContainer>

        </>

    )
}

export default Redacted