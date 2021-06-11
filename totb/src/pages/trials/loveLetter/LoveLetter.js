import { useContext, useRef, useState } from 'react'
import PageContainer from '../../../containers/PageContainer'
import Title from '../../../generalComponents/Title'
//import { history, useHistory } from 'react-router-dom'
import { SpeechBubbleLeft } from '../../witness/witnessComponents/Questions'
import { Instructions, Conversation, WitnessImage, TaskBox } from '../../witness/witnessComponents/Layout'
import { LoveLetterElems, LoveLetterSymbolsContainer, LoveLetterLettersContainer, LoveLetterSpace, LoveLetterSymbolElems } from './LoveLetterComponents'
import ProfilePic from '../../../images/chaymadz.jpg'
import GameContext from '../../../context/GameContext'
import Draggable from 'react-draggable';
import { loveLetterData } from '../../../data/lessonData'




function LoveLetter() {
    //const { level, setLevel } = useContext(GameContext)
    //let history = useHistory()
    const [selectedLetter, setSelectedLetter] = useState('')    
    const [selectedSymbol, setSelectedSymbol] = useState('')    
    const [usedLetters, setUsedLetters] = useState([])    
    const nodeRef = useRef(null);
    const { instructions } = loveLetterData

    const secretMessage = "I am a message";
    const secretMessageArray = secretMessage.toLowerCase().split('');

    function handleLetterClick(e){
        setSelectedLetter(e.target.id)
    }

    function handleSymbolClick(e){
        let tilesToChange = e.target.classList[2];
        let tilesArray = document.getElementsByClassName(tilesToChange)
        tilesArray = [...tilesArray]
        tilesArray.forEach(element => {
            element.innerText = selectedLetter
        });
        setSelectedLetter('')
        const dummyUsedLetters = [...usedLetters]
        dummyUsedLetters.push(selectedLetter)
        setUsedLetters(dummyUsedLetters)
    }

    const LoveLetterLetters = loveLetterData['letters'].map((item, index) => <LoveLetterElems color={usedLetters.indexOf(item[0]) >-1 ? 'transparent' : item[0] === selectedLetter ? 'red' : 'beige' } onClick={handleLetterClick} id={item[0]}>{item[0]}</LoveLetterElems>)
    const LoveLetterCode = secretMessageArray.map((item, index) => {
    const targetSymbol = typeof loveLetterData['symbols'][loveLetterData['letters'].indexOf(item)] === 'object' ? String.fromCharCode(loveLetterData['symbols'][loveLetterData['letters'].indexOf(item)][1]) : null
    // if (typeof loveLetterData['symbols'][loveLetterData['letters'].indexOf(item)] === 'object'){
    //     console.log( targetSymbol.charCodeAt(0) === parseInt(selectedSymbol))
    //     console.log( targetSymbol.charCodeAt(0), selectedSymbol)
    // }

        return (
            <>
               { targetSymbol ?
               <LoveLetterSymbolElems className={targetSymbol.charCodeAt(0)} onClick={handleSymbolClick} color={targetSymbol.charCodeAt(0) === parseInt(selectedSymbol) ? 'red' : 'beige' }>{targetSymbol}</LoveLetterSymbolElems> :
               <LoveLetterSpace/>
               }
            </>
        )
    })

    return (
        <>
            <div className="title">
                <Title>Solve the Puzzle</Title>
            </div>
            <PageContainer>
                <Instructions>
                    <WitnessImage img={ProfilePic} />
                    {/* https://unsplash.com/@dammypayne*/}
                    <TaskBox>
                        Break the code!
                        </TaskBox>
                </Instructions>
                <Conversation>
                    <SpeechBubbleLeft>
                        {instructions}
                    </SpeechBubbleLeft>
                    <LoveLetterSymbolsContainer>
                    {LoveLetterCode}
                    </LoveLetterSymbolsContainer>

                    <LoveLetterLettersContainer>

                        {LoveLetterLetters}
                    </LoveLetterLettersContainer>
                </Conversation>
            </PageContainer>

        </>

    )
}

export default LoveLetter