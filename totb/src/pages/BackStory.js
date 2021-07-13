import styled from 'styled-components'
import MainContainer from '../containers/MainContainer'
import PageContainer from '../containers/PageContainer'
import SubTitle from '../generalComponents/SubTitle'
import NextPageButton from '../generalComponents/NextPageButton'
import { useHistory } from 'react-router-dom'
import { backStoryData } from '../data/lessonData'
import { SpeechBubbleLeft } from './witness/witnessComponents/Questions'
import client from '../images/client.jpg'
 


function Home() {
    let history = useHistory()
    const { backStorySubtitle, backStoryText } = backStoryData
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