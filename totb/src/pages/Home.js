import CallToActionContainer from '../containers/CallToActionContainer'
import MainContainer from '../containers/MainContainer'
import Title from '../generalComponents/Title'
import SubTitle from '../generalComponents/SubTitle'
import Button from '../generalComponents/Button'
import { useHistory } from 'react-router-dom'
import { homePageData } from '../data/lessonData'

function Home() {

    const {homeTitle,  homeSubtitle, homeCallToActionText} = homePageData
    let history = useHistory()
    function handleClick() {
        history.push('/backstory')
    }

    return (
        <>
            <Title>{homeTitle}</Title>
            <SubTitle>{homeSubtitle}</SubTitle>
            {/* <MainContainer>
                <CallToActionContainer>
                    {homeCallToActionText}
                    <Button onclick={handleClick}>Get Going!</Button>
                </CallToActionContainer>
            </MainContainer> */}
        </>
    )
}

export default Home