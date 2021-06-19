import { useState, useEffect } from 'react'
import PageContainer from './../../containers/PageContainer'
import Title from '../../generalComponents/Title'
import NextPageButton from '../../generalComponents/NextPageButton'
import { history, useHistory } from 'react-router-dom'
import { Question, SpeechBubbleLeft, SpeechBubbleRight } from './witnessComponents/Questions'
import { Instructions, Conversation, QuestionOptions, WitnessImage, TaskBox, InfoBox } from './witnessComponents/Layout'
// import ProfilePic from '../images/janitor.png'
//import { questionsWit1, questionsWit1_2, witnessConversationArray1 as conversationArray } from '../data/lessonData'

let counter = 0
let fullConversation = []
function Concierge(props) {
    console.log(props);
    const [questions, setQuestions] = useState([])
    const [rightWrong, setRightWrong] = useState('Choose what to say')
    const [conversation, setConversation] = useState([])
    const [questionList, setQuestionList] = useState(props.questionsWit)
    let history = useHistory()
    let destination = props.trialURL

    useEffect(() => {
        function assignQuestionsList(dat) {
            console.log('i ran');
            let questionsList = dat.map((item, index) => {
                return <Question key={`question${index}`} onClick={handleClick}><span className={item[1] === 'success' ? 'success question' : 'fail question'}>{item[0]}</span></Question>
            })
            setQuestions(questionsList)
        }
        assignQuestionsList(questionList)
    }, [questionList])

    useEffect(() => {
        let newConversationArray = props.conversationArray.map((item, index) => {
            return index % 2 === 0 ? <SpeechBubbleLeft key={`speechbubbleleft${index}`}>{item}</SpeechBubbleLeft> : <SpeechBubbleRight key={`speechbubbleright${index}`}>{item}</SpeechBubbleRight>
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
                    }
                    else {
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

    function handleExit() {
        let destination = props.trialURL
        history.push(`/${destination}`)
        //NEEDS TO RESET HERE FOR NEXT WITNESS!!!!
    }


    return (
        <>
            <div className="title">
                <Title>{props.title}</Title>
            </div>
            <PageContainer>

                <Instructions>
                    <WitnessImage img={props.personImage} />
                    {/* https://unsplash.com/@shnautsher */}
                    <TaskBox>
                        Your Task:
                        <ul>
                            <li>Choose a question from the list on the right. </li>
                            <li>Only one question is grammatically correct. </li>
                            <li>If you choose the wrong one you lose a point.</li>
                        </ul>
                    </TaskBox>
                </Instructions>
                <Conversation>
                    {conversation}
                </Conversation>
                <QuestionOptions>
                    <InfoBox>
                        {rightWrong}
                    </InfoBox>
                    {questions}
                </QuestionOptions>
            </PageContainer>
        </>

    )
}

export default Concierge