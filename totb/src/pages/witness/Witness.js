import { useState, useEffect, useContext } from 'react'
import NextPageButton from '../../generalComponents/NextPageButton'
import { TaskMessage, SuccessEmoji } from '../../generalComponents/TaskMessage'
import House from '../house/House'
import { SpeechBubbleLeft, SpeechBubbleRight } from '../../generalComponents/ConversationComponents'
import {
    Conversation,
    QuestionOptions,
    QuestionOption,
    InfoBox,
    StyledArtefact,
    StyledFoundArtefact,
    WitnessContainer,
    WitnessIntroBox,
    EndDiv

} from './witnessComponents/Layout'
import GameContext from '../../context/GameContext'
import { Inside } from '../door/doorComponents/DoorComponents'

let counter = 0
let fullConversation = []
const taskText = `Task: Read the conversation and choose the best reply from these options`
const taskCorrect = `Correct! Choose the next reply.`
const taskIncorrect = `That's incorrect. Try again.`

function WitnessComp(props) {
    const [questions, setQuestions] = useState([])
    const [rightWrong, setRightWrong] = useState(<TaskMessage task="true" message={taskText} />)
    const [conversation, setConversation] = useState([])
    const [questionList, setQuestionList] = useState(props.questionsWit)
    const [doorWasOpened, setDoorWasOpened] = useState(false)
    const [isArtefactClicked, setIsArtefactClicked] = useState(false)
    const { collectedArtefacts, setCollectedArtefacts, completedWitnesses, setCompletedWitnesses, detectiveChosen } = useContext(GameContext)

    function handleArtefactClick() {
        setIsArtefactClicked(true)
        let dummyCollectedArtefacts = [...collectedArtefacts]
        dummyCollectedArtefacts.push(props.artefactName)
        setCollectedArtefacts(dummyCollectedArtefacts)
    }

    useEffect(() => {
        function assignQuestionsList(dat) {
            let questionsList = dat.map((item, index) => {
                return <QuestionOption key={`question${index}`} onClick={handleClick}><div className={item[1] === 'success' ? 'success question' : 'fail question'}>{item[0]}</div></QuestionOption>
            })
            setQuestions(questionsList)
        }
        assignQuestionsList(questionList)
    }, [questionList])

    useEffect(() => {
        let newConversationArray = props.conversationArray.map((item, index) => {
            return index % 2 === 0 ? <SpeechBubbleLeft key={`speechbubbleleft${index}`} minHeight="170" image={props.personImage} margin=".4">{item}</SpeechBubbleLeft> : <SpeechBubbleRight key={`speechbubbleright${index}`} margin=".4" minHeight="60" image={detectiveChosen}>{item}</SpeechBubbleRight>
        })
        fullConversation = newConversationArray
    }, [])

    useEffect(() => {
        displayConversation(counter)
    }, [])

    function displayConversation(count) {
        setConversation((prev) => [...prev, fullConversation[count]])
    }

    function handleClick(e) {
        if (e.target.classList.contains('success')) {
            counter = counter + 1
            setRightWrong(<TaskMessage correct="true" message={taskCorrect} />)
            e.target.classList.add('correct')
            let listToHide = document.querySelectorAll('.question');
            setTimeout(() => {
                listToHide.forEach((item) => { item.parentNode.style.display = 'none' })
                displayConversation(counter)
                setTimeout(() => {
                    counter = counter + 1
                    displayConversation(counter)
                    setQuestionList(props.questionsWit2)
                    if (counter <= 2) {
                        listToHide.forEach((item) => { item.parentNode.style.display = 'inline' })
                        setRightWrong(<TaskMessage task="true" message={taskText} />)
                    }
                    else {
                        function updateCompletedWitnesses(witnessName) {
                            let dummyCompletedWitnesses = [...completedWitnesses]
                            dummyCompletedWitnesses = [witnessName, ...dummyCompletedWitnesses]
                            setCompletedWitnesses(dummyCompletedWitnesses)
                        }
                        if (completedWitnesses.indexOf(props.title) > -1) {
                            setRightWrong(<NextPageButton destination='office'>Back to Office</NextPageButton>)
                        }
                        else if (!props.artefactName) {
                            setRightWrong(<NextPageButton destination={props.trialURL}>{props.exitMessage}</NextPageButton>)
                            updateCompletedWitnesses(props.title)
                        }
                        else {
                            setRightWrong(<StyledArtefact src={props.artefactImage} alt="artefact" onClick={handleArtefactClick} />)
                            updateCompletedWitnesses(props.title)
                        }
                        counter = 0;
                    }
                    setTimeout(() => {
                        const conversationEnd = document.getElementById('conversationBottom')
                        if (conversationEnd) {
                            conversationEnd.scrollIntoView()
                        }
                    }, 1001)
                }, 500)
            }, 500)
        }
        else {
            setRightWrong(<TaskMessage incorrect="true" message={taskIncorrect} />)
        }
    }

    return (

        <>
            {!doorWasOpened ?
                <>
                    <House
                        house={props.house}
                        houseMessage={props.houseMessage}
                        witnessInfo={props.witnessInfo}
                        personImage={props.personImage}
                        mapImage={props.mapImage}
                        coords={props.coords}
                        setDoorWasOpened={setDoorWasOpened} />
                </>
                : null}

            <WitnessContainer>
                <>
                    {doorWasOpened ? <Inside>
                        <WitnessIntroBox personImage={props.personImage} witnessInfo={props.witnessInfo} />
                    </Inside> : null}
                    {doorWasOpened ?
                        <>
                            <Conversation>
                                <SpeechBubbleRight margin=".4" image={detectiveChosen}>{props.speechBubbleText || `Hi! I'm a private detective investigating the death of Lexington Grey. Can I ask you some questions?`}</SpeechBubbleRight>
                                {conversation}
                            </Conversation>
                            <QuestionOptions>
                                <InfoBox>
                                    {isArtefactClicked ?
                                        <StyledFoundArtefact isArtefactClicked={isArtefactClicked}>
                                            <SuccessEmoji width="80" borderColor="gold" message={`You found the "${props.artefactName}"!`} />
                                            <NextPageButton destination={props.trialURL} margin=".5em auto">Do the challenge</NextPageButton>      
                                        </StyledFoundArtefact>
                                        : rightWrong}
                                </InfoBox>
                                {questions}
                                {/* id to scroll to */}
                                <EndDiv id="conversationBottom">here</EndDiv>
                            </QuestionOptions>
                        </>
                        : null}
                </>
            </WitnessContainer>
        </>
    )
}

export default WitnessComp