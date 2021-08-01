import { useState, useContext, useEffect } from 'react'
import PageContainer from '../../../containers/PageContainer'
import Title from '../../../generalComponents/Title'
import { history, useHistory } from 'react-router-dom'
import { SpeechBubbleLeft } from '../../../generalComponents/ConversationComponents'
import { Instructions, Conversation, WitnessImage, TaskBox, InfoBox } from '../../witness/witnessComponents/Layout'
import { StyledInput, CodeBoxContainer, Safe, StyledFoundArtefact } from './codeBoxComponents/CodeBoxComponents'
import Janitor from '../../../images/janitor.png'
import GameContext from '../../../context/GameContext'
import NextPageButton from '../../../generalComponents/NextPageButton'
import { TextButton, TextButtonContainer } from '../../../generalComponents/SpeechTextButton'


import { CodeBoxData } from '../../../data/lessonData'
import { officeCards } from '../../../data/lessonData'



function CodeBox() {
    const [bubbleTextToDisplay, setBubbleTextToDisplay] = useState(1)
    const [first, setFirst] = useState('')
    const [second, setSecond] = useState('')
    const [third, setThird] = useState('')
    const [fourth, setFourth] = useState('')
    const [fifth, setFifth] = useState('')
    const [codeAnswer] = useState('m,d,h,t,c')
    const [safeCodeBgColor, setSafeCodeBgColor] = useState('white')
    const [codeIsCorrect, setCodeIsCorrect] = useState(false)
    const [codeBoxIsFull, setCodeBoxIsFull] = useState(false)


    const { hasVisitorBook, setHasVisitorBook } = useContext(GameContext)
    const { collectedWitnesses, setCollectedWitnesses } = useContext(GameContext)
    const { bubbleText1, bubbleText2, bubbleText3, bubbleText4 } = CodeBoxData

    function handleChange(e) {
        const { name, value } = e.target
        if (name === 'first') { setFirst(value.toLowerCase()) }
        if (name === 'second') { setSecond(value.toLowerCase()) }
        if (name === 'third') { setThird(value.toLowerCase()) }
        if (name === 'fourth') { setFourth(value.toLowerCase()) }
        if (name === 'fifth') { setFifth(value.toLowerCase()) }
    }

    useEffect(()=>{
        if(first && second && third && fourth && fifth){
            console.log('true');
            setCodeBoxIsFull(true)
        }

    },[first, second, third, fourth, fifth])

    function handleCheckCorrectCode() {
        let codeAttempt = [...first, ...second, ...third, ...fourth, ...fifth]
        console.log(codeAttempt.toString() === codeAnswer)
        if (codeAttempt.toString() === codeAnswer) {
            setSafeCodeBgColor('limeGreen')
            setBubbleTextToDisplay(4)
            setCodeIsCorrect(true)
        }
        else {
            setSafeCodeBgColor('red')
            setCodeBoxIsFull(false)
            setTimeout(() => {
                setSafeCodeBgColor('white')
                setFirst('')
                setSecond('')
                setThird('')
                setFourth('')
                setFifth('')
            }, 2000)
        }
    }

    function handleTextButtonClick(e) {
        setBubbleTextToDisplay(parseInt(e.target.id))
    }

    function handleVisitorBookClick() {
        setHasVisitorBook(true)
        //const dummyCollectedWitnesses = [...collectedWitnesses]
        let wits = officeCards.witnesses
        let dummyCollectedWitnesses = [...collectedWitnesses,
        wits[1].name,
        wits[2].name,
        wits[3].name,
        wits[4].name,
        wits[5].name,
        ]
        setCollectedWitnesses(dummyCollectedWitnesses)
    }

    return (
        <>

            <Conversation>
                <SpeechBubbleLeft image={Janitor}>
                    {bubbleTextToDisplay === 1 ?
                        bubbleText1 :
                        bubbleTextToDisplay === 2 ?
                            bubbleText2 :
                            bubbleTextToDisplay === 3 ?
                                bubbleText3 : bubbleText4}
                    {bubbleTextToDisplay < 4 ? <TextButtonContainer>
                        <TextButton id="1" bgcolor={bubbleTextToDisplay === 1 ? 'red' : null} onClick={handleTextButtonClick}>1</TextButton>
                        <TextButton id="2" bgcolor={bubbleTextToDisplay === 2 ? 'red' : null} onClick={handleTextButtonClick}>2</TextButton>
                        <TextButton id="3" bgcolor={bubbleTextToDisplay === 3 ? 'red' : null} onClick={handleTextButtonClick}>3</TextButton>
                    </TextButtonContainer> : null}

                </SpeechBubbleLeft>
                <CodeBoxContainer>

                    <Safe codeIsCorrect={codeIsCorrect} codeBoxIsFull={codeBoxIsFull} handleCheckCorrectCode={handleCheckCorrectCode} handleVisitorBookClick={handleVisitorBookClick}>
                        <div>
                            <StyledInput safeCodeBgColor={safeCodeBgColor} type="text" name="first" value={first} onChange={handleChange} />
                            <StyledInput safeCodeBgColor={safeCodeBgColor} type="text" name="second" value={second} onChange={handleChange} />
                            <StyledInput safeCodeBgColor={safeCodeBgColor} type="text" name="third" value={third} onChange={handleChange} />
                            <StyledInput safeCodeBgColor={safeCodeBgColor} type="text" name="fourth" value={fourth} onChange={handleChange} />
                            <StyledInput safeCodeBgColor={safeCodeBgColor} type="text" name="fifth" value={fifth} onChange={handleChange} />
                        </div>
                    </Safe>
                </CodeBoxContainer>
                {hasVisitorBook ?
                    <StyledFoundArtefact >
                        You've got the record of visitors! Lexington's dinner party guests will appear in your office.
                        <NextPageButton destination="crimescene">Go to crime scene</NextPageButton>
                    </StyledFoundArtefact>
                    : null}
                {/* {codeIsCorrect ? <NextPageButton destination="crimescene">Go to crime scene</NextPageButton> : null} */}
            </Conversation>

        </>

    )
}

export default CodeBox