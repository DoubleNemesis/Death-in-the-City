import { useState, useEffect, useContext } from 'react'
import PageContainer from '../../containers/PageContainer'
import Title from '../../generalComponents/Title'
import NextPageButton from '../../generalComponents/NextPageButton'
import Door from '../door/Door'
import { StyledModal, ToggleContainer, ToggleTaskInfo } from '../../generalComponents/InfoModal'
import { history, useHistory } from 'react-router-dom'
import { Question, SpeechBubbleLeft, SpeechBubbleRight } from '../../generalComponents/ConversationComponents'
import Pencil from './../../images/task.png'
import { Instructions, 
    Conversation, 
    QuestionOptions, 
    QuestionOption, 
    InfoBox, 
    StyledArtefact, 
    StyledFoundArtefact, 
    WitnessContainer,
    TaskMessage,
    TaskImage

} from './witnessComponents/Layout'
import GameContext from '../../context/GameContext'
import { Inside, WitnessIntroBox } from '../door/doorComponents/DoorComponents'

let counter = 0
let fullConversation = []
const Task = ()=>{return <TaskMessage><TaskImage src={Pencil}/> Task: Choose the best reply from the options below</TaskMessage>}

function WitnessComp(props) {
    // console.log(props);
    const [questions, setQuestions] = useState([])
    const [rightWrong, setRightWrong] = useState(<Task/>)
    const [conversation, setConversation] = useState([])
    const [questionList, setQuestionList] = useState(props.questionsWit)
    const [isInstructionsModalDisplayed, setIsInstructionsModalDisplayed] = useState(true)
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
                // return <QuestionOption key={`question${index}`} onClick={handleClick} className={item[1] === 'success' ? 'success question' : 'fail question'}>{item[0]}</QuestionOption>
            })
            setQuestions(questionsList)
        }
        assignQuestionsList(questionList)
    }, [questionList])

    useEffect(() => {
        let newConversationArray = props.conversationArray.map((item, index) => {
            return index % 2 === 0 ? <SpeechBubbleLeft key={`speechbubbleleft${index}`} minHeight="170" image={props.personImage}>{item}</SpeechBubbleLeft> : <SpeechBubbleRight key={`speechbubbleright${index}`} minHeight="60" image={detectiveChosen}>{item}</SpeechBubbleRight>
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
            setRightWrong('Correct!')
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
                        setRightWrong(<Task/>)
                        const conversationEnd = document.getElementById('conversationBottom')
                    }
                    else {
                        //NEEDS TO RESET HERE FOR NEXT WITNESS!!!!
                        //popup here found artefact if that is the case? hasArtefact ? <popup/> : null

                        // setRightWrong(
                        //     props.artefactName ?
                        //         <StyledArtefact src={props.artefactImage} onClick={handleArtefactClick} /> :
                        //         <NextPageButton destination={props.trialURL}>{props.exitMessage}</NextPageButton>
                        // )
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
                            setRightWrong(<StyledArtefact src={props.artefactImage} onClick={handleArtefactClick} />)
                            updateCompletedWitnesses(props.title)
                        }
                        // setRightWrong(
                        //     !props.artefactName ?
                        //     <NextPageButton destination={props.trialURL}>{props.exitMessage}</NextPageButton>:
                        //     completededWitnesses.indexOf(props.title) > -1 ?
                        //     <NextPageButton destination='office'>Back to Office</NextPageButton>:
                        //     <StyledArtefact src={props.artefactImage} onClick={handleArtefactClick} />                    
                        // )
                        counter = 0;
                    }
                    setTimeout(() => {
                        const conversationEnd = document.getElementById('conversationBottom')
                        if (conversationEnd) {
                            conversationEnd.scrollIntoView()
                        }
                    }, 1001)
                }, 1000)
            }, 1000)
        }
        else {
            e.target.classList.add('wrong')
            setRightWrong('Try again!')
            //minus points
        }
    }




    return (
        <WitnessContainer>
            {!doorWasOpened ? <Door house={props.house} speechBubbleText={props.speechBubbleText} witnessInfo={props.witnessInfo} personImage={props.personImage} doorImg={props.doorImg} doorTitle={props.doorTitle} setDoorWasOpened={setDoorWasOpened} /> : null}
            {/* <StyledModal display={isInstructionsModalDisplayed ? 'block' : 'none'}>
                <h2>Task: Dialogue</h2>
                <ul>
                    <li> Read the text in the speech bubble.</li>
                    <li> Choose a reply from the list to continue the conversation.</li>
                    <li> Only one answer is grammatically correct. </li>
                </ul>
                <ToggleContainer>
                    <ToggleTaskInfo
                        onClick={() => {
                            setIsInstructionsModalDisplayed(!isInstructionsModalDisplayed)
                        }}>
                        Start
                    </ToggleTaskInfo>
                </ToggleContainer>
            </StyledModal> */}

            <>
                 { doorWasOpened ? <Inside>
                    <WitnessIntroBox personImage={props.personImage} witnessInfo={props.witnessInfo} />
                </Inside> : null}
                {doorWasOpened ?
                    <>
                        <Conversation>
                    <SpeechBubbleRight image={detectiveChosen}>{props.speechBubbleText || `Hi! I'm a private detective investigating the death of Lexington Grey. Can I ask you some questions?`}</SpeechBubbleRight>
                            {conversation}
                        </Conversation>
                        <QuestionOptions>
                            <InfoBox>
                                {isArtefactClicked ?
                                    <StyledFoundArtefact isArtefactClicked={isArtefactClicked}>
                                        You found the "{props.artefactName}"!
                                        <NextPageButton destination={props.binCheck}>Check the bin</NextPageButton>
                                        <NextPageButton destination={props.trialURL}>Do the challenge</NextPageButton>
                                        <NextPageButton destination="office">Back to Office</NextPageButton>
                                    </StyledFoundArtefact>
                                    : rightWrong}
                            </InfoBox>
                            {questions}
                            {/* id to scroll to */}
                            <div id="conversationBottom"></div>
                        </QuestionOptions>
                    </>
                    : null}
                <div id="pageEnd"></div>
            </>
        </WitnessContainer>

    )
}

export default WitnessComp