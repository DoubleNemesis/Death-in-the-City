import { useState, useContext, useEffect } from 'react'
import { SpeechBubbleLeft } from '../../../generalComponents/ConversationComponents'
import { DivToScrollTo } from '../../../generalComponents/DivToScrollTo'
import { StyledInput, CodeBoxContainer, Safe, StyledFoundArtefact, Container } from './codeBoxComponents/CodeBoxComponents'
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
    const { bubbleText1, bubbleText2, bubbleText3 } = CodeBoxData

    function handleChange(e) {
        const { name, value } = e.target
        if (name === 'first') { setFirst(value.toLowerCase()) }
        if (name === 'second') { setSecond(value.toLowerCase()) }
        if (name === 'third') { setThird(value.toLowerCase()) }
        if (name === 'fourth') { setFourth(value.toLowerCase()) }
        if (name === 'fifth') { setFifth(value.toLowerCase()) }
    }

    useEffect(()=>{
        window.scrollTo(0,0)
      },[])

    useEffect(()=>{
        if(first && second && third && fourth && fifth){
            setCodeBoxIsFull(true)
        }

    },[first, second, third, fourth, fifth])

    function handleCheckCorrectCode() {
        let codeAttempt = [...first, ...second, ...third, ...fourth, ...fifth]
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
        let wits = officeCards.witnesses
        let dummyCollectedWitnesses = [...collectedWitnesses,
        wits[1].name,
        wits[2].name,
        wits[3].name,
        wits[4].name,
        wits[5].name,
        ]
        setCollectedWitnesses(dummyCollectedWitnesses)
        const divToScrollTo = document.getElementById('divToScrollTo')
        if(divToScrollTo){
            divToScrollTo.scrollIntoView()
        }
    }

    return (
        <>
            <Container>
                <DivToScrollTo/>
                <SpeechBubbleLeft image={Janitor} minHeight="475">
                    {bubbleTextToDisplay === 1 ?
                        bubbleText1 :
                        bubbleTextToDisplay === 2 ?
                            bubbleText2 :
                                bubbleText3
                    }
                                    {hasVisitorBook ?
                    <StyledFoundArtefact >
                        You've got the record of visitors! Lexington's dinner party guests will appear in your office.
                        <NextPageButton destination="crimescene">Visit crime scene</NextPageButton>
                    </StyledFoundArtefact>
                    : null}
                    {bubbleTextToDisplay < 3 ? <TextButtonContainer>
                        <TextButton id="1" bgcolor={bubbleTextToDisplay === 1 ? 'red' : null} onClick={handleTextButtonClick}>1</TextButton>
                        <TextButton id="2" bgcolor={bubbleTextToDisplay === 2 ? 'red' : null} onClick={handleTextButtonClick}>2</TextButton>
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
            </Container>
        </>
    )
}

export default CodeBox