import { useContext } from 'react'
import MainContainer from './../../containers/MainContainer'
import {
    TextContainer,
    DetectiveAvatar,
    DetectiveContainer,
    DetectiveChoiceContainer,
    DetectiveChoiceItem,
    CrimeTape,
    BlockContainer,
    Bullet
} from './homeComponents/HomeComponents'
import NextPageButton from './../../generalComponents/NextPageButton'
import crimeline from '.././../images/crimeline.jpg'
import GameContext from './../../context/GameContext'
import detective from '../../images/detective.png'
import detective1 from '../../images/detective1.png'
import detective2 from '../../images/detective2.png'
import detective3 from '../../images/detective3.png'
import detective4 from '../../images/detective4.png'
import detective5 from '../../images/detective5.png'
import detective6 from '../../images/detective6.png'
import skull from '../../images/skull.png'
import questionmark from '../../images/questionmark.png'
import magnify from '../../images/magnify.png'
import witness from '../../images/witness.png'
import symbol from '../../images/symbol.png'
import teacher from '../../images/teacher.png'


function Home() {

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
                        <CrimeTape src={crimeline} alt="Jcrime tape - do not cross" />
                        <DetectiveContainer>
                            <h3>A murder-mystery game for ESL students</h3>
                            <DetectiveAvatar alt="detective avatar" src={detectiveChosen} />
                            <DetectiveChoiceContainer>
                                {allDetectivesDisplay}
                            </DetectiveChoiceContainer>
                            <h5> Choose your avatar </h5>
                        </DetectiveContainer>
                        <CrimeTape alt="Jcrime tape - do not cross" src={crimeline} />
                    <NextPageButton destination="backstory" margin='0 0 0 0' width="100%" borderRadius="0">PLAY</NextPageButton>
                    </BlockContainer>
                    <BlockContainer maxWidth="55%" border="2">
                    <h4><i>Death in the City</i> is a murder-mystery game for Intermediate level or above (B1+) learners of English.</h4>
                    <p>
                        You'll need all your detective skills to solve the mystery of the death of Lexington Grey! As well as practising your English, you will:
                    </p>
                    <ul>
                        <li><Bullet alt="bullet point emoji" src={symbol}/>Crack Codes</li>
                        <li><Bullet alt="bullet point emoji" src={questionmark}/>Solve Puzzles</li>
                        <li><Bullet alt="bullet point emoji" src={magnify}/>Find Evidence</li>
                        <li><Bullet alt="bullet point emoji" src={witness}/>Question Witnesses</li>
                        <li><Bullet alt="bullet point emoji" src={skull}/>Catch a Killer</li>
                    </ul>
                    
                   
                    <p>This fun game will help you practice your reading, writing and grammar skills as well as testing your problem solving 
                        abilities and broadening your vocabulary.</p>
                        <h4>How to Play</h4>
                        <ul>
                        <li><Bullet alt="detective avatar" src={detective}/>Just choose your detective avatar and press PLAY!</li>
                        <li><Bullet alt="teacher avatar" src={teacher}/>A teacher will guide you and instruct you at each step.</li>
                    </ul>
                        <h4>Good Luck, Detective!</h4>
                    </BlockContainer>

                </TextContainer>


            </MainContainer>
        </>
    )
}

export default Home