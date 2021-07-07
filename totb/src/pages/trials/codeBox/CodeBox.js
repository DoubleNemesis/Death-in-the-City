import { useState, useContext } from 'react'
import PageContainer from '../../../containers/PageContainer'
import Title from '../../../generalComponents/Title'
import { history, useHistory } from 'react-router-dom'
import { SpeechBubbleLeft} from '../../witness/witnessComponents/Questions'
import { Instructions, Conversation, WitnessImage, TaskBox, InfoBox } from '../../witness/witnessComponents/Layout'
import { StyledInput, CodeBoxContainer, Safe} from './codeBoxComponents/CodeBoxComponents'
import Janitor from '../../../images/janitor.png'
import GameContext from '../../../context/GameContext'
import NextPageButton from '../../../generalComponents/NextPageButton'
import { TextButton, TextButtonContainer } from '../../../generalComponents/SpeechTextButton'


import {CodeBoxData} from '../../../data/lessonData'


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

    const {level, setLevel} = useContext(GameContext)
    const {bubbleText1, bubbleText2, bubbleText3, bubbleText4} = CodeBoxData


    //make beds, mistakes, dinner
    //do homework, shopping, nothing
    //have a good time, a drink, a shower
    //take a break your time away
    //catch a cold a ball a train

    function handleChange(e) {
        const { name, value } = e.target
        if (name === 'first') { setFirst(value) }
        if (name === 'second') { setSecond(value) }
        if (name === 'third') { setThird(value) }
        if (name === 'fourth') { setFourth(value) }
        if (name === 'fifth') { setFifth(value) }
    }

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
            setTimeout(() => { setSafeCodeBgColor('white') 
            setFirst('')
            setSecond('')
            setThird('')
            setFourth('')
            setFifth('')
        }, 2000)
        }
    }

    function handleTextButtonClick(e){
        setBubbleTextToDisplay(parseInt(e.target.id))
    }

    function handleVisitorBookClick(){
        
        if(level < 1){
            setLevel(1)
        }
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
                        <TextButtonContainer>
                        <TextButton id="1" bgcolor={bubbleTextToDisplay === 1 ? 'red' : null} onClick={handleTextButtonClick}>1</TextButton>
                        <TextButton id="2" bgcolor={bubbleTextToDisplay === 2 ? 'red' : null} onClick={handleTextButtonClick}>2</TextButton>
                        <TextButton id="3" bgcolor={bubbleTextToDisplay === 3 ? 'red' : null} onClick={handleTextButtonClick}>3</TextButton>
                        </TextButtonContainer>

                    </SpeechBubbleLeft>
                    <CodeBoxContainer>

                        <Safe codeIsCorrect={codeIsCorrect} handleCheckCorrectCode={handleCheckCorrectCode} handleVisitorBookClick={handleVisitorBookClick}>
                            <div>
                                <StyledInput safeCodeBgColor={safeCodeBgColor} type="text" name="first" value={first} onChange={handleChange} />
                                <StyledInput safeCodeBgColor={safeCodeBgColor} type="text" name="second" value={second} onChange={handleChange} />
                                <StyledInput safeCodeBgColor={safeCodeBgColor} type="text" name="third" value={third} onChange={handleChange} />
                                <StyledInput safeCodeBgColor={safeCodeBgColor} type="text" name="fourth" value={fourth} onChange={handleChange} />
                                <StyledInput safeCodeBgColor={safeCodeBgColor} type="text" name="fifth" value={fifth} onChange={handleChange} />
                            </div>
                        </Safe>
                    </CodeBoxContainer>
                    {codeIsCorrect ? <NextPageButton destination="crimescene">Go to crime scene</NextPageButton> : null}
                </Conversation>

        </>

    )
}

export default CodeBox