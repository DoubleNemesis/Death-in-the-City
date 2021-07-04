import { useState } from 'react'
import NextPageButton from '../generalComponents/NextPageButton'
import { SpeechBubbleLeft } from './witness/witnessComponents/Questions'
import { TextButton, TextButtonContainer } from '../generalComponents/SpeechTextButton'
import { CrimeSceneData } from '../data/lessonData'
import Janitor from '../images/janitor.png'
import { clientData } from '../data/lessonData'

function CrimeScene() {
    const { clientTitle, clientText } = clientData
    const { bubbleText1, bubbleText2, bubbleText3, bubbleText4 } = CrimeSceneData
    const [bubbleTextToDisplay, setBubbleTextToDisplay] = useState(1)

    function handleTextButtonClick(e) {
        setBubbleTextToDisplay(parseInt(e.target.id))
    }

    return (
        <>
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
            <NextPageButton destination="/officeBase">
                Go to office
            </NextPageButton>
            {/* {images} */}

        </>
    )
}

export default CrimeScene