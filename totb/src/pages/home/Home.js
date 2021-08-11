import { useState, useEffect, useContext } from 'react'
import MainContainer from './../../containers/MainContainer'
import {
    TextContainer,
    DetectiveAvatar,
    DetectiveContainer,
    DetectiveChoiceContainer,
    DetectiveChoiceItem,
    CrimeTape,
    BlockContainer
} from './homeComponents/HomeComponents'
import NextPageButton from './../../generalComponents/NextPageButton'
import { startPageBlurb } from './../../data/lessonData'
import crimeline from '.././../images/crimeline.jpg'
import GameContext from './../../context/GameContext'
import detective from '../../images/detective.png'
import detective1 from '../../images/detective1.png'
import detective2 from '../../images/detective2.png'
import detective3 from '../../images/detective3.png'
import detective4 from '../../images/detective4.png'
import detective5 from '../../images/detective5.png'
import detective6 from '../../images/detective6.png'


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

                    <BlockContainer maxWidth="45%">
                        <CrimeTape src={crimeline} />
                        <DetectiveContainer>
                            <h3>A murder-mystery game for ESL students</h3>

                            <DetectiveAvatar src={detectiveChosen} />

                            <DetectiveChoiceContainer>
                                {allDetectivesDisplay}
                            </DetectiveChoiceContainer>
                            <p> Choose your avatar </p>
                        </DetectiveContainer>
                        <CrimeTape src={crimeline} />
                    <NextPageButton destination="start" margin='0 0 0 0' width="100%">PLAY</NextPageButton>
                    </BlockContainer>
                    <BlockContainer maxWidth="55%" border="2">
                    <h4><i>Death in the City</i> is a murder-mystery game for Intermediate level or above (B1+) learners of English.</h4>
                    <p>
                        You'll need all your detective skills to solve the mystery of the death of Lexington Grey! As well as practising your English, you will:
                    </p>
                    <ul>
                        <li>Crack Codes</li>
                        <li>Solve Puzzles</li>
                        <li>Find Evidence</li>
                        <li>Question Witnesses</li>
                        <li>Catch a Killer</li>
                    </ul>
                    
                   
                    <p>This fun game will help you practice your reading, writing and grammar skills as well as testing your problem solving 
                        abilities and broadening your vocabulary.</p>
                    <p>To get started, choose your detective Avatar and press PLAY!</p>
                    </BlockContainer>

                </TextContainer>


            </MainContainer>
        </>
    )
}

export default Home