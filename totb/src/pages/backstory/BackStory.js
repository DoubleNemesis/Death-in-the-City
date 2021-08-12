import MainContainer from './../../containers/MainContainer'
import NextPageButton from './../../generalComponents/NextPageButton'
import { backStoryData } from './../../data/lessonData'
import { SpeechBubbleLeft } from '../../generalComponents/ConversationComponents'
import client from '../../images/client.jpg'
import teacher from '../../images/teacher.png'


function Home() {

    const { backStoryText } = backStoryData


    return (
        <>
            <MainContainer>
                <SpeechBubbleLeft image={teacher}>
                    {backStoryText}
                </SpeechBubbleLeft>
                <NextPageButton destination="vocab">Vocabulary Test</NextPageButton>
            </MainContainer>
        </>
    )
}

export default Home