import PageContainer from '../containers/PageContainer'
import Title from '../generalComponents/Title'
import MainContainer from '../containers/MainContainer'
import SubTitle from '../generalComponents/SubTitle'
import Button from '../generalComponents/Button'
import styled from 'styled-components'
import { history, useHistory } from 'react-router-dom'
import { WitnessImage } from '../witnessComponents/WitnessImage'
import { SpeechBubbleRight, SpeechBubbleLeft, Conversation } from '../witnessComponents/SpeechBubble'
import {QuestionsContainer, QuestionsList, Question, Instructions} from '../witnessComponents/Questions'
import Janitor from '../images/janitor.png'
import {questionsToni} from '../data/lessonData'

function Concierge() {

    console.log(questionsToni[0][1])

    let history = useHistory()

    function handleClick(e) {
        const destinationPage = e.target.id
        history.push(destinationPage)
    }

    const questionsList = questionsToni.map((item, index)=>{
        return <Question key={index} correct={item[1]=== true ? 'correct' : null}>{item}</Question>
    })

    return (
        <>
            <div className="title">
                <Title>Kaplinksy Tower Concierge</Title>
            </div>
            <MainContainer>
                <PageContainer>
                    <WitnessImage img={Janitor} />
                    {/* https://unsplash.com/@shnautsher */}
                    <Conversation>
                        <SpeechBubbleLeft>
                            Hey! I'm Toni Monceto. Everyone likes old Toni! How can I help you?
                    </SpeechBubbleLeft>
                        <SpeechBubbleRight>
                            Hey! I'm Toni Monceto. Everyone likes old Toni! How can I help you?
                    </SpeechBubbleRight>
                    </Conversation>
                    {/*
                                       questions
                                       I was wondering if you could help me
                                       I was wondered if you could help me
                                       I am wonder if you can help me
                                       safe
                                       */}
                </PageContainer>
                <QuestionsContainer>
                <QuestionsList>
                    {questionsList}
                </QuestionsList>
                <Instructions>
                    Choose the best question to ask Toni Monceto!
                </Instructions>
                </QuestionsContainer>

            </MainContainer>
        </>

    )
}

export default Concierge