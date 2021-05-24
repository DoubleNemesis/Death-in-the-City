import { useState, useEffect } from 'react'
import PageContainer from '../containers/PageContainer'
import Title from '../generalComponents/Title'
import MainContainer from '../containers/MainContainer'
import Button from '../generalComponents/Button'
import { history, useHistory } from 'react-router-dom'
import { Question, SpeechBubbleLeft, SpeechBubbleRight } from '../witnessComponents/Questions'
import { Instructions, Conversation, QuestionOptions, WitnessImage, TaskBox, InfoBox } from '../witnessComponents/Layout'
import Janitor from '../images/janitor.png'
import { questionsWit1, questionsWit1_2, conversationArray } from '../data/lessonData'

let counter = 0
let fullConversation = []
function Concierge() {

    const [questions, setQuestions] = useState([])
    const [rightWrong, setRightWrong] = useState('Choose what to say')
    const [conversation, setConversation] = useState([])
    const [questionList, setQuestionList] = useState(questionsWit1)
    let history = useHistory()

    useEffect(() => {
        function assignQuestionsList(dat) {
            console.log('i ran');
            let questionsList = dat.map((item, index) => {
                return <Question key={index} onClick={handleClick}><span className={item[1] === 'success' ? 'success question' : 'fail question'}>{item[0]}</span></Question>
            })
            setQuestions(questionsList)
        }
        assignQuestionsList(questionList)
    }, [questionList])

    useEffect(() => {
        let newConversationArray = conversationArray.map((item, index) => {
            if (index % 2 === 0) {
                return <SpeechBubbleLeft key={index}>{item}</SpeechBubbleLeft>
            }
            else {
                return <SpeechBubbleRight key={index}>{item}</SpeechBubbleRight>
            }
        })
        fullConversation = newConversationArray
    }, [])


    useEffect(() => {
        displayConversation(counter)
    }, [])

    function displayConversation(count) {
        for (let i = count; i <= count; i = i + 1) {
            setConversation((prev) => [...prev, fullConversation[i]])
        }
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
                    setQuestionList(questionsWit1_2)
                    if (counter <= 2) {
                        listToHide.forEach((item) => { item.parentNode.style.display = 'inline' })
                    }
                    else {
                        setRightWrong(<Button onclick={handleExit}>Let's go!</Button>)
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

    function handleExit(){
        history.push('/trial1')
    }

    return (
        <>
            <div className="title">
                <Title>Kaplinksy Tower Concierge</Title>
            </div>
                <PageContainer>

                    <Instructions>
                        <WitnessImage img={Janitor} />
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