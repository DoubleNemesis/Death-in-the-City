import { useState, useEffect } from 'react'
import styled from 'styled-components'
import PageContainer from './../../containers/PageContainer'
import Title from '../../generalComponents/Title'
import NextPageButton from '../../generalComponents/NextPageButton'
import { history, useHistory } from 'react-router-dom'
import { Question, SpeechBubbleLeft, SpeechBubbleRight } from './witnessComponents/Questions'
import { Instructions, Conversation, QuestionOptions, WitnessImage, TaskBox, InfoBox } from './witnessComponents/Layout'
//import ProfilePic from '../images/janitor.png'
//import { questionsWit1, questionsWit1_2, witnessConversationArray1 as conversationArray } from '../data/lessonData'

let counter = 0
let fullConversation = []

function WitnessComp(props) {
    console.log(props);
    const [questions, setQuestions] = useState([])
    const [rightWrong, setRightWrong] = useState('Choose the best reply')
    const [conversation, setConversation] = useState([])
    const [questionList, setQuestionList] = useState(props.questionsWit)
    const [isInstructionsModalDisplayed, setIsInstructionsModalDisplayed] = useState(true)
    let history = useHistory()
    let destination = props.trialURL

    useEffect(() => {
        function assignQuestionsList(dat) {
            console.log('i ran');
            let questionsList = dat.map((item, index) => {
                return <QuestionOption key={`question${index}`} onClick={handleClick}><span className={item[1] === 'success' ? 'success question' : 'fail question'}>{item[0]}</span></QuestionOption>
            })
            setQuestions(questionsList)
        }
        assignQuestionsList(questionList)
    }, [questionList])

    useEffect(() => {
        let newConversationArray = props.conversationArray.map((item, index) => {
            return index % 2 === 0 ? <SpeechBubbleLeft key={`speechbubbleleft${index}`} minHeight="125" image={props.personImage}>{item}</SpeechBubbleLeft> : <SpeechBubbleRight key={`speechbubbleright${index}`} minHeight="60">{item}</SpeechBubbleRight>
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
            console.log(counter)
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
                        setRightWrong('Choose the best reply')
                    }
                    else {
                        //NEEDS TO RESET HERE FOR NEXT WITNESS!!!!
                        setRightWrong(<NextPageButton destination={destination}>Let's go!</NextPageButton>)
                    }

                }, 1000)
            }, 1000)
        }
        else {
            e.target.classList.add('wrong')
            setRightWrong('Lose a point and try again!')
            //minus points
        }
    }

    const StyledModal = styled.div`
position: absolute;
background-color: #333;
color: white;
z-index: 1;
display: ${({ display }) => display};
left:5%;
right:5%;
margin-left:auto;
margin-right:auto;
top: 34%;
font-size: 1rem;
border: 1px solid #666;
border-radius: 2px;
padding: 1em;
box-shadow: 4px 4px 3px #666;

h2{
    color: white;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    margin: .6em .5em;
    font-size: 2rem;
}

`

const ToggleContainer = styled.div `
display: flex;
`

    const ToggleTaskInfo = styled.button`
position: relative;
font-size: 1.2rem;
font-weight: 700;
z-index: 2;
color: #333;
margin: 0 auto;
padding: .3em 5em;
text-transform: uppercase;

`

    const QuestionOption = styled.button`
background-color: white;
/* border-bottom: 1px solid #999; */
padding: .5em 1em;
margin: .2em;
border-radius: 2px;
`


    return (
        <>

            <StyledModal display={isInstructionsModalDisplayed ? 'block' : 'none'}>


                <h2>Task: Dialogue</h2>
                <ul>
                    <li> Read the text in the speech bubble.</li>
                    <li> Choose a reply from the list to continue the conversation.</li>
                    <li> Only one question is grammatically correct. </li>
                    <li> If you choose the wrong answer, you lose a point.</li>
                </ul>
                <ToggleContainer>
                <ToggleTaskInfo
                    onClick={() => setIsInstructionsModalDisplayed(!isInstructionsModalDisplayed)}>
                    Start
                </ToggleTaskInfo>
                </ToggleContainer>



            </StyledModal>
            <Conversation>
                {conversation}
            </Conversation>
            <QuestionOptions>
                <InfoBox>
                    {rightWrong}
                </InfoBox>
                {questions}
            </QuestionOptions>
            {/* </PageContainer> */}
        </>

    )
}

export default WitnessComp