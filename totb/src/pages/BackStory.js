import CallToActionContainer from '../containers/CallToActionContainer'
import MainContainer from '../containers/MainContainer'
import Title from '../generalComponents/Title'
import SubTitle from '../generalComponents/SubTitle'
import NextPageButton from '../generalComponents/NextPageButton'
import { useHistory } from 'react-router-dom'
import { backStoryData } from '../data/lessonData'

function Home() {
    let history = useHistory()
    const {backStorySubtitle, backStoryText} = backStoryData

    function handleClick(){
        history.push('/vocab')
    }

    return (
        <>
            <Title>title</Title>
            <SubTitle>{backStorySubtitle}</SubTitle>
            <MainContainer>

            <CallToActionContainer>
            {backStoryText}
               <NextPageButton destination="vocab">Go to the Vocab</NextPageButton>
            </CallToActionContainer>
            </MainContainer>
        </>

    )
}

export default Home