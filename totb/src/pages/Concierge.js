import {useState, useEffect} from 'react'
import PageContainer from '../containers/PageContainer'
import Title from '../generalComponents/Title'
import MainContainer from '../containers/MainContainer'
import SubTitle from '../generalComponents/SubTitle'
import Button from '../generalComponents/Button'
import styled from 'styled-components'
import { history, useHistory } from 'react-router-dom'
import { WitnessImage } from '../witnessComponents/WitnessImage'
import { SpeechBubbleRight, SpeechBubbleLeft, Conversation } from '../witnessComponents/SpeechBubble'
import { Question, Instructions } from '../witnessComponents/Questions'
import Janitor from '../images/janitor.png'
import { questionsToni } from '../data/lessonData'

function Concierge() {

    const [questions, setQuestions] = useState([])

    console.log(questionsToni[0][1])

    let history = useHistory()


    useEffect(()=>{
        let questionsList = questionsToni.map((item, index) => {
            return <Question key={index} onClick={handleClick}><span id={item[1] === 'success' ? 'success' : 'fail'}>{item[0]}</span></Question>
        })
        setQuestions(questionsList)
    },[])


    function handleClick(e) {
        console.log(e.target.id)
        if (e.target.id === 'success'){
            e.target.classList.add('success')
            setTimeout(()=>{
                setQuestions([])
            },2000)
            // next questions
            
        }
        else{
            e.target.classList.add('fail')
        }  
    }

    return (
        <>
            <div className="title">
                <Title>Kaplinksy Tower Concierge</Title>
            </div>
            <MainContainer>
                <PageContainer>

                    <Instructions>
                    <WitnessImage img={Janitor} />
                    {/* https://unsplash.com/@shnautsher */}
                        Task: Choose a question to ask Tony Monceto. Only one question is correct. 
                </Instructions>
                    <Conversation>
                        <SpeechBubbleLeft>
                            Hey! I'm Toni Monceto. A friend of Grey is a friend of mine! He told me you were coming. What can I do for you?
                    </SpeechBubbleLeft>
                    {questions}
                    </Conversation>
                </PageContainer>
            </MainContainer>
        </>

    )
}

export default Concierge