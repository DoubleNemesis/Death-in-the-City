import { useState } from 'react'
import NextPageButton from '../generalComponents/NextPageButton'
import { SpeechBubbleLeft } from './witness/witnessComponents/Questions'
import { TextButton, TextButtonContainer } from '../generalComponents/SpeechTextButton'
import { CrimeSceneData } from '../data/lessonData'
import Janitor from '../images/janitor.png'
import kitchen from '../images/kitchen.jpg'
import windowView from '../images/windowView.jpg'
import { clientData } from '../data/lessonData'
import PageContainer from '../containers/PageContainer'
import ImageContainer from '../containers/ImageContainer'

function CrimeScene() {
    const { clientTitle, clientText } = clientData
    const { bubbleText1, bubbleText2, bubbleText3, bubbleText4 } = CrimeSceneData
    const [bubbleTextToDisplay, setBubbleTextToDisplay] = useState(1)

    function handleTextButtonClick(e) {
        setBubbleTextToDisplay(parseInt(e.target.id))
    }
// image change on click, nextpage button at end only
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
            <PageContainer>
                <ImageContainer image={kitchen}/>
            <NextPageButton destination="/officebase">
                Go to office
            </NextPageButton>
            </PageContainer>

        </>
    )
}

export default CrimeScene