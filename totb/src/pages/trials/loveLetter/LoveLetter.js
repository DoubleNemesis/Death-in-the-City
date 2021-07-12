import { useContext, useEffect, useRef, useState } from 'react'
import PageContainer from '../../../containers/PageContainer'
import Title from '../../../generalComponents/Title'
//import { history, useHistory } from 'react-router-dom'
import { SpeechBubbleLeft } from '../../witness/witnessComponents/Questions'
import { Instructions, Conversation, WitnessImage, TaskBox } from '../../witness/witnessComponents/Layout'
import { LoveLetterMainContainer, LoveLetterElems, LoveLetterSymbolsContainer, LoveLetterLettersContainer, LoveLetterSpace, LoveLetterSymbolElems } from './LoveLetterComponents'
import {StyledModal, ToggleContainer, ToggleTaskInfo, QuestionOption} from '../../../generalComponents/InfoModal'
import ProfilePic from '../../../images/chaymadz.jpg'
import GameContext from '../../../context/GameContext'
import Draggable from 'react-draggable';
import { loveLetterData } from '../../../data/lessonData'
import NextPageButton from '../../../generalComponents/NextPageButton'




function LoveLetter() {
    //const { level, setLevel } = useContext(GameContext)
    //let history = useHistory()
    const [selectedLetter, setSelectedLetter] = useState('')
    const [selectedSymbol, setSelectedSymbol] = useState('')
    const [usedLetters, setUsedLetters] = useState([])
    const [successMessage, setSuccessMessage] = useState('')
    const [isInstructionsModalDisplayed, setIsInstructionsModalDisplayed] = useState(true)

    const nodeRef = useRef(null);
    const { instructions, loveLetterCode } = loveLetterData
    const secretMessage = loveLetterCode[0]
    const secretMessageArray = secretMessage.toLowerCase().split('');


    function handleLetterClick(e) { 
        setSelectedLetter(e.target.id)
        
        //make letter unclickable
    }

    function handleSymbolClick(e) {
        if (selectedLetter) {
            const maxCharCodeLetter = 122
            console.log(e.target.innerText.charCodeAt(0) <= maxCharCodeLetter);
            const tileToRemove = (e.target.innerText)
            let tilesToChange = e.target.classList[2];
            let tilesArray = document.getElementsByClassName(tilesToChange)
            tilesArray = [...tilesArray]
            tilesArray.forEach(element => {
                element.innerText = selectedLetter
            });
            setSelectedLetter('')
            const dummyUsedLetters = [...usedLetters]
            const indexLetterToDelete = dummyUsedLetters.indexOf(tileToRemove)
            if (indexLetterToDelete > -1) { dummyUsedLetters.splice(indexLetterToDelete, 1) }
            dummyUsedLetters.push(selectedLetter)
            setUsedLetters(dummyUsedLetters)
            let decodedMessageArray = document.getElementsByClassName('symbolsClass')
            decodedMessageArray = [...decodedMessageArray]
            let decodedMessage = []
            decodedMessageArray.forEach(item=>{decodedMessage.push(item.innerText)})
            decodedMessage = decodedMessage.join('')
            const originalMessageNoSpace = secretMessageArray.join('').replace(/\s+/g, '')
            setSuccessMessage(decodedMessage === originalMessageNoSpace ? 'Good' : null)
        }
    }

    useEffect(()=>{
        console.log(usedLetters);
        usedLetters.map((item=>{
            document.getElementById(item).classList.add('unClickable')
        }))
        
    },[usedLetters])


    const LoveLetterLetters = loveLetterData['letters'].map((item, index) => <LoveLetterElems color={usedLetters.indexOf(item[0]) > -1 ? 'transparent' : item[0] === selectedLetter ? 'red' : 'beige'} onClick={handleLetterClick} id={item[0]}>{item[0]}</LoveLetterElems>)
    const LoveLetterCode = secretMessageArray.map((item, index) => {
        const targetSymbol = typeof loveLetterData['symbols'][loveLetterData['letters'].indexOf(item)] === 'object' ? String.fromCharCode(loveLetterData['symbols'][loveLetterData['letters'].indexOf(item)][1]) : null
        const symbolTiles = 'symbolTiles' 

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
                    onClick={() => {
                        setIsInstructionsModalDisplayed(!isInstructionsModalDisplayed)
                        }}>
                    Start
                </ToggleTaskInfo>
                </ToggleContainer>
            </StyledModal>
                { targetSymbol ?
                    <LoveLetterSymbolElems className={`${targetSymbol.charCodeAt(0)} symbolsClass`} onClick={handleSymbolClick} color={targetSymbol.charCodeAt(0) === parseInt(selectedSymbol) ? 'red' : 'beige'}>{targetSymbol}</LoveLetterSymbolElems> :
                    <LoveLetterSpace />
                }
            </>
        )
    })

    return (
        <>

                <Conversation>
                    <LoveLetterMainContainer>
                    <LoveLetterSymbolsContainer>
                        {LoveLetterCode}
                        
                    </LoveLetterSymbolsContainer>
                    {successMessage}
                    <LoveLetterLettersContainer>

                        {LoveLetterLetters}
                        
                    </LoveLetterLettersContainer>
                    </LoveLetterMainContainer>
                </Conversation>

        </>

    )
}

export default LoveLetter