import { useState, useEffect, useContext } from 'react'
import PageContainer from '../containers/PageContainer'
import Title from '../generalComponents/Title'
import { history, useHistory } from 'react-router-dom'
import { Question, SpeechBubbleLeft, SpeechBubbleRight } from '../witnessComponents/Questions'
import { Instructions, Conversation, QuestionOptions, WitnessImage, TaskBox, InfoBox } from '../witnessComponents/Layout'
import { StyledInput, CodeBoxContainer, Safe } from '../trialComponents/codeBoxComponents/CodeBoxComponents'
import Janitor from '../images/janitor.png'
import GameContext from '../context/GameContext'


function CodeBox() {
    const [first, setFirst] = useState('')
    const [second, setSecond] = useState('')
    const [third, setThird] = useState('')
    const [fourth, setFourth] = useState('')
    const [fifth, setFifth] = useState('')
    const [codeAnswer] = useState('m,d,h,t,c')
    const [safeCodeBgColor, setSafeCodeBgColor] = useState('white')
    const [codeIsCorrect, setCodeIsCorrect] = useState(false)

    const {level, setLevel} = useContext(GameContext)

    let history = useHistory()

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
        console.log(codeAttempt.toString() == codeAnswer)
        if (codeAttempt.toString() == codeAnswer) {
            setSafeCodeBgColor('limeGreen')
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

    function handleVisitorBookClick(){
        console.log('notes clicked');
        if(level < 1){
            setLevel(1)
        }

    }

    return (
        <>
            <div className="title">
                <Title>Solve the Puzzle</Title>
            </div>
            <PageContainer>
                <Instructions>
                    <WitnessImage img={Janitor} />
                    {/* https://unsplash.com/@shnautsher */}
                    <TaskBox>
                        Break the code!
                        </TaskBox>
                </Instructions>
                <Conversation>
                    <SpeechBubbleLeft>
                        Ok, I am gonna need your help! The record of who enters and leaves the building is kept locked
                        up in a safe and I don't know the code.
                        But maybe you will be able to work it out. Ready to try?
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

                </Conversation>
            </PageContainer>

        </>

    )
}

export default CodeBox