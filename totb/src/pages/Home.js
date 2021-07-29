import { useState, useEffect, useContext } from 'react'
import MainContainer from '../containers/MainContainer'
import { TextContainer, DetectiveAvatar, DetectiveContainer, DetectiveChoiceContainer, DetectiveChoiceItem } from '../generalComponents/HomeComponents'
import NextPageButton from '../generalComponents/NextPageButton'
import { FrontPageButton } from '../generalComponents/GeneralButton'
import { startPageBlurb } from '../data/lessonData'
import crimeline from './../images/crimeline.png'
// import detective from './../images/detective.png'
import Title from '../generalComponents/Title'
import { SpeechBubbleLeft, SpeechBubbleRight } from './witness/witnessComponents/Questions'
import GameContext from '../context/GameContext'
import detective from '../images/detective.png'
import detective1 from '../images/detective1.png'
import detective2 from '../images/detective2.png'
import detective3 from '../images/detective3.png'
import detective4 from '../images/detective4.png'
import detective5 from '../images/detective5.png'
import detective6 from '../images/detective6.png'



function Home() {

    const { teaserText, academicText } = startPageBlurb
    const [counter, setCounter] = useState(1)
    const [ItemToDisplay, setItemToDisplay] = useState()
    const { detectiveChosen, setDetectiveChosen } = useContext(GameContext)

    const detectiveChoices = [detective, detective1, detective2, detective3, detective4, detective5, detective6]
    const detectiveChoicesAlt = ['yellow man', 'white man', 'brown man', 'black woman', 'black man', 'white woman', 'brown woman']

    function handleDetective(e) {
        setDetectiveChosen(detectiveChoices[e.target.id])
    }

    const allDetectivesDisplay = detectiveChoices.map((item, index) => {
        return <DetectiveChoiceItem key={index} image={item} alt={detectiveChoicesAlt[index]} onclick={handleDetective} id={index} />
    })

    return (
        <>
            <MainContainer>
                <TextContainer>


                    <img src={crimeline} />
                    <DetectiveContainer>
                    <h3>A murder-mystery game for ESL students</h3>

                        <DetectiveAvatar src={detectiveChosen} />

                        <DetectiveChoiceContainer>
                            {allDetectivesDisplay}
                        </DetectiveChoiceContainer>
                        <p> Choose your avatar </p>
                    </DetectiveContainer>
                    <img src={crimeline} />

                    <NextPageButton destination="start" margin='1em 0 0 0'>PLAY</NextPageButton>
                    <p>
                        Death in the City is a murder-mystery game for Intermediate level or above (B1+) learners of English. 
                    </p>
                    <p>
                        While practising your English, you will:
                    </p>
                    <ul>
                        <li>Crack Codes</li>
                        <li>Solve Puzzles</li>
                        <li>Find Evidence</li>
                        <li>Question Witnesses</li>
                        <li>Catch a Killer</li>
                    </ul>
                    <p>This fun game will help you practice your reading, writing and grammar skills as well as test your problem solving abilities and broadening your vocabulary.</p>

                </TextContainer>


            </MainContainer>
        </>
    )
}

export default Home