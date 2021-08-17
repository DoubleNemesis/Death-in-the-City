import { useEffect, useState } from 'react'
import { MessageContainer } from '../../containers/MessageContainer'
import { FrontPageButton } from '../../generalComponents/GeneralButton'
import * as lessonData from '../../data/lessonData'
import { SpeechBubbleLeft } from '../../generalComponents/ConversationComponents'
import clientPic from './../../images/client.jpg'
import policeofficer from './../../images/policeofficer.png'
import DallasPic from './../../images/dallas.jpg'
import { Form, Container } from './endPageComponents/EndPageComponents'
import Confetti from 'react-dom-confetti';

function EndPage() {

    const [chosenOption, setChosenOption] = useState('default')
    const [confetti, setConfetti] = useState(false)
    const [textInputText, setTextInputText] = useState('...killed Lexington because....')
    const [suspectIsCorrect, setSuspectIsCorrect] = useState(false)
    const [reasonIsCorrect, setReasonIsCorrect] = useState(false)
    const [displayMessage, setDisplayMessage] = useState(false)
    const { characterNames } = lessonData['characterNames'];
    const { bubbleText1, bubbleText2, bubbleText3, bubbleText4, explanation, police1, police2 } = lessonData.endPageData

    const config = {
        angle: "180",
        spread: 360,
        startVelocity: "36",
        elementCount: "200",
        dragFriction: "0.09",
        duration: "30000",
        stagger: "5",
        width: "13px",
        height: "12px",
        perspective: "996px",
        colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
    };

    function handleSelectInput(e) {
        setChosenOption(e.target.value)
    }
    function handleTextInput(e) {
        setTextInputText(e.target.value)
    }
    function handleSubmit(e) {
        e.preventDefault()
        const splitInput = textInputText.toLowerCase().split(' ')
        console.log(splitInput);
        if (chosenOption === characterNames[3]) {
            setSuspectIsCorrect(true)
        }
        if (splitInput.indexOf('mother') > -1 || splitInput.indexOf('mum') > -1) {
            if (splitInput.indexOf('corona') > -1 || splitInput.indexOf('covid') > -1) {
                setReasonIsCorrect(true)
            }
            console.log('success');

        }
        setDisplayMessage(true)
    }

    console.log(suspectIsCorrect);
    console.log(reasonIsCorrect);

    useEffect(() => {
        if (suspectIsCorrect && reasonIsCorrect) {
            setConfetti(true)
        }
    }, [suspectIsCorrect, reasonIsCorrect])


    return (
        <>
            {/* <PageContainer minHeight="0"> */}
                <Confetti active={confetti} config={config} />
                <Container>
                <SpeechBubbleLeft alt="Terence Grey" image={clientPic}>{

                    !displayMessage ? bubbleText1 :
                        suspectIsCorrect && reasonIsCorrect ? bubbleText4 :
                            suspectIsCorrect && !reasonIsCorrect ? bubbleText3 :
                                !suspectIsCorrect && reasonIsCorrect ? bubbleText3 :
                                    bubbleText2
                }</SpeechBubbleLeft>
           
                {!displayMessage ? <Form>
                    <select value={chosenOption} onChange={handleSelectInput}>
                        <option defaultValue> -- select a suspect -- </option>
                        <option value={characterNames[1]}>{characterNames[1]}</option>
                        <option value={characterNames[2]}>{characterNames[2]}</option>
                        <option value={characterNames[3]}>{characterNames[3]}</option>
                        <option value={characterNames[4]}>{characterNames[4]}</option>
                        <option value={characterNames[5]}>{characterNames[5]}</option>
                    </select>
                    <textarea onChange={handleTextInput} name="textInput" value={textInputText} />
                    <FrontPageButton onclick={handleSubmit} bgColor="red">Make Allegation</FrontPageButton>
               </Form> : null}

                {
                    displayMessage ?
                        suspectIsCorrect && reasonIsCorrect ? <MessageContainer bgColor="limegreen" width="50"><h3>Game Over - You Win!!!</h3></MessageContainer> :

                            suspectIsCorrect && !reasonIsCorrect ? <MessageContainer bgColor="red" width="50" color="white"><h3>Game Over 5/10</h3></MessageContainer> :
                        
                            !suspectIsCorrect && reasonIsCorrect ? <MessageContainer bgColor="red" width="50" color="white"><h3>Game Over 5/10</h3></MessageContainer> :
                        
                        <MessageContainer bgColor="red" color="white"><h3>Game Over - you lost.</h3></MessageContainer>                       
                        :
                        null
                        
                }
                </Container>

                {
                    displayMessage ?
                        <>
                            <SpeechBubbleLeft alt="Dallas Franks" image={DallasPic}>
                                <h3>What Happened</h3>
                                {explanation}
                            </SpeechBubbleLeft>
                            <SpeechBubbleLeft alt="Police Officer" image={policeofficer}>
                                {suspectIsCorrect && reasonIsCorrect ?
                                    police1 :
                                    police2
                                }
                            </SpeechBubbleLeft>
                        </>
                        :
                        null
                }
            {/* </PageContainer> */}
        </>
    )
}

export default EndPage