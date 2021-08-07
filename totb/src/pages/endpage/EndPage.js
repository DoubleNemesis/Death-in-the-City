import { useState } from 'react'
import PageContainer from '../../containers/PageContainer'
import { MessageContainer } from '../../containers/MessageContainer'
import { FrontPageButton } from '../../generalComponents/GeneralButton'
import * as lessonData from '../../data/lessonData'
import { SpeechBubbleLeft, SpeechBubbleRight } from '../../generalComponents/ConversationComponents'
import clientPic from './../../images/client.jpg'
import policeofficer from './../../images/policeofficer.png'
import DallasPic from './../../images/dallas.jpg'
import { Form } from './endPageComponents/EndPageComponents'

function EndPage() {

    const [chosenOption, setChosenOption] = useState('default')
    const [textInputText, setTextInputText] = useState('I think ... did it because...')
    const [suspectIsCorrect, setSuspectIsCorrect] = useState(false)
    const [reasonIsCorrect, setReasonIsCorrect] = useState(false)
    const [displayMessage, setDisplayMessage] = useState(false)
    const { characterNames } = lessonData['characterNames'];
    const { bubbleText1, bubbleText2, bubbleText3, bubbleText4, explanation, police1, police2 } = lessonData.endPageData

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


    return (
        <>
            <PageContainer>
                <SpeechBubbleLeft image={clientPic}>{

                    !displayMessage ? bubbleText1 :
                        suspectIsCorrect && reasonIsCorrect ? bubbleText4 :
                            suspectIsCorrect && !reasonIsCorrect ? bubbleText3 :
                                !suspectIsCorrect && reasonIsCorrect ? bubbleText3 :
                                    bubbleText2
                }</SpeechBubbleLeft>
                <Form>
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
                </Form>

                {
                    displayMessage ?
                        suspectIsCorrect && reasonIsCorrect ? <MessageContainer bgColor="limegreen">You did it!</MessageContainer> :
                            suspectIsCorrect && !reasonIsCorrect ? <MessageContainer bgColor="skyblue">Right person wrong reason!</MessageContainer> :
                                !suspectIsCorrect && reasonIsCorrect ? <MessageContainer bgColor="skyblue">Wrong person right reason!</MessageContainer> :
                                    <MessageContainer bgColor="red">Completely Wrong</MessageContainer>
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