import { useState, useEffect } from 'react'
import MainContainer from '../containers/MainContainer'
import { TextContainer, HomeItem } from '../containers/TextContainer'
import NextPageButton from '../generalComponents/NextPageButton'
import { startPageBlurb } from '../data/lessonData'
import newyork1 from './../images/newyork1logo.jpg'
import crimeline from './../images/crimeline.png'
import { SpeechBubbleLeft, SpeechBubbleRight } from './witness/witnessComponents/Questions'


function Home() {

    const { teaserText, academicText } = startPageBlurb
    const [counter, setCounter] = useState(0)
    const [ItemToDisplay, setItemToDisplay] = useState()



    const itemsToDisplay = [, 'Question Witnesses', 'Catch a Killer']
    const itemsToDisplay2 = [`Break Codes`, `Find Evidence`, `Question Witnesses`, `Catch a Killer`]

    console.log(counter);

    return (
        <>
            <MainContainer>
                <TextContainer>


                    <img src={crimeline} />
                    <img src={newyork1} />
                    <img src={crimeline} />
                    <div className="modalContainer">
                        <SpeechBubbleLeft textColor="midnightblue" minHeight="20" bubbleWidth="70" bgcolor="white">911, What's your emergency?</SpeechBubbleLeft>
                        <SpeechBubbleRight textColor="midnightblue" bgcolor="skyblue">There's a body here on the street! I think he fell from a skyscraper! You gotta send someone quick!</SpeechBubbleRight>
                    </div>
                    <div className="bulletContainer">
                    </div>
                    <NextPageButton destination="start">PLAY</NextPageButton>
                    <p>
                        Death in the City is a language-based detective game for learners of English who are B1 level (Intermediate) or above.
                    </p>
                    <ul>
                    <li>Break Codes</li>
                    <li>Solve Puzzles</li>
                    <li>Find Evidence</li>
                    <li>Question Witnesses</li>
                    <li>Catch a Killer</li>
                    </ul>
                    <p>This game will help you practice your reading and grammar skills.</p>

                </TextContainer>


            </MainContainer>
        </>
    )
}

export default Home