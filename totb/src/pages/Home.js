import CallToActionContainer from '../containers/CallToActionContainer'
import MainContainer from '../containers/MainContainer'
import Title from '../generalComponents/Title'
import SubTitle from '../generalComponents/SubTitle'
import NextPageButton from '../generalComponents/NextPageButton'
import { useHistory } from 'react-router-dom'
import { homePageData } from '../data/lessonData'

function Home() {

    const {homeTitle,  homeSubtitle, homeCallToActionText} = homePageData


    return (
        <>
            <Title>{homeTitle}</Title>
            <SubTitle>{homeSubtitle}</SubTitle>
            {/* <MainContainer>
                <CallToActionContainer>
                    {homeCallToActionText}
                    <NextPageButton destination="backstory">Get Going!</NextPageButton>
                </CallToActionContainer>
            </MainContainer> */}
        </>
    )
}

export default Home