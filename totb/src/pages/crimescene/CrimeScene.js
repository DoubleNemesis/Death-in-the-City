import { useState } from 'react'
import NextPageButton from '../../generalComponents/NextPageButton'
import { SpeechBubbleLeft } from '../../generalComponents/ConversationComponents'
import { TextButton, TextButtonContainer } from '../../generalComponents/SpeechTextButton'
import { CrimeSceneData, clientData } from '../../data/lessonData'
import Janitor from '../../images/janitor.png'
import kitchen from '../.././images/kitchen.jpg'
import windowView from '../../images/windowView2.jpg'

import PageContainer from '../../containers/PageContainer'
import ImageContainer from '../../containers/ImageContainer'

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
            <SpeechBubbleLeft image={Janitor} minHeight="250">
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
                {bubbleTextToDisplay === 3 ?
                    <NextPageButton destination="/office">
                        Go to office
                    </NextPageButton>
                    : null}
                <ImageContainer image={bubbleTextToDisplay === 1 || bubbleTextToDisplay === 2 ? kitchen : windowView} />


            </PageContainer>

        </>
    )
}

export default CrimeScene