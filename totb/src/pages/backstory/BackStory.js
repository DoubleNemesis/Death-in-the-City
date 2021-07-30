import MainContainer from './../../containers/MainContainer'
import NextPageButton from './../../generalComponents/NextPageButton'
import { useHistory } from 'react-router-dom'
import { backStoryData } from './../../data/lessonData'
import { SpeechBubbleLeft } from '../../generalComponents/ConversationComponents'
import client from '../../images/client.jpg'


function Home() {
    let history = useHistory()
    const { backStoryText } = backStoryData
    function handleClick() {
        history.push('/vocab')
    }

    return (
        <>
            <MainContainer>
                <SpeechBubbleLeft image={client}>
                    {backStoryText}
                </SpeechBubbleLeft>
                <NextPageButton destination="vocab">Vocabulary Test</NextPageButton>
            </MainContainer>
        </>
    )
}

export default Home