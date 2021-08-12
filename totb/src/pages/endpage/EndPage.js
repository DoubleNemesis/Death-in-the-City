import { useEffect, useState } from 'react'
import PageContainer from '../../containers/PageContainer'
import { MessageContainer } from '../../containers/MessageContainer'
import { FrontPageButton } from '../../generalComponents/GeneralButton'
import * as lessonData from '../../data/lessonData'
import { SpeechBubbleLeft, SpeechBubbleRight } from '../../generalComponents/ConversationComponents'
import clientPic from './../../images/client.jpg'
import policeofficer from './../../images/policeofficer.png'
import DallasPic from './../../images/dallas.jpg'
import { Form } from './endPageComponents/EndPageComponents'
import Confetti from 'react-dom-confetti';

function EndPage() {

    const [chosenOption, setChosenOption] = useState('default')
    const [confetti, setConfetti] = useState(false)
    const [textInputText, setTextInputText] = useState('I think ... did it because...')
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

    useEffect(()=>{
        if (suspectIsCorrect && reasonIsCorrect){
            setConfetti(true)
        }
    },[suspectIsCorrect, reasonIsCorrect ])


    return (
        <>
            <PageContainer>
                <h3>Game Over</h3>
<Confetti active={confetti} config={config} />
                <SpeechBubbleLeft image={clientPic}>{

                    !displayMessage ? bubbleText1 :
                        suspectIsCorrect && reasonIsCorrect ? bubbleText4 :
                            suspectIsCorrect && !reasonIsCorrect ? bubbleText3 :
                                !suspectIsCorrect && reasonIsCorrect ? bubbleText3 :
                                    bubbleText2
                }</SpeechBubbleLeft>
{   !displayMessage ?             <Form>
                    <select value={chosenOption} onChange={handleSelectInput}>
                        <option disabled selected value="default"> -- select a suspect -- </option>
                        <option value={characterNames[1]}>{characterNames[1]}</option>
                        <option value={characterNames[2]}>{characterNames[2]}</option>
                        <option value={characterNames[3]}>{characterNames[3]}</option>
                        <option value={characterNames[4]}>{characterNames[4]}</option>
                        <option value={characterNames[5]}>{characterNames[5]}</option>
                    </select>
                    <textarea onChange={handleTextInput} name="textInput" value={textInputText}  />
                    <FrontPageButton onclick={handleSubmit} bgColor="red">Make Allegation</FrontPageButton>
                </Form> :null}

                {
                    displayMessage ?
                        suspectIsCorrect && reasonIsCorrect ? <MessageContainer bgColor="limegreen">Congratulations! You did it! Excellent!</MessageContainer> :
                            suspectIsCorrect && !reasonIsCorrect ? <MessageContainer bgColor="red">Right person wrong reason. 5/10</MessageContainer> :
                                !suspectIsCorrect && reasonIsCorrect ? <MessageContainer bgColor="red">Wrong person right reason. 5/10</MessageContainer> :
                                    <MessageContainer bgColor="red">Completely Wrong. 0/10</MessageContainer>
                        :
                        null
                }

                {
                    displayMessage ?
                        <>
                            <SpeechBubbleLeft image={DallasPic}>
                                <h3>What Happened</h3>
                                {explanation}
                            </SpeechBubbleLeft>
                            <SpeechBubbleLeft image={policeofficer}>
                                {suspectIsCorrect && reasonIsCorrect ?
                                    police1 :
                                    police2
                                }
                            </SpeechBubbleLeft>
                        </>
                        :
                        null
                }
            </PageContainer>
        </>
    )
}

export default EndPage