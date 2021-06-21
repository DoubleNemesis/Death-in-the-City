import CallToActionContainer from '../containers/CallToActionContainer'
import MainContainer from '../containers/MainContainer'

import SubTitle from '../generalComponents/SubTitle'
import NextPageButton from '../generalComponents/NextPageButton'
import { useHistory } from 'react-router-dom'
import { homePageData } from '../data/lessonData'

function Home() {

    const {homeTitle,  homeSubtitle, homeCallToActionText} = homePageData


    return (
        <>
            <MainContainer>
                <CallToActionContainer>
                    {homeCallToActionText}
                    {/* <NextPageButton destination="backstory">Get Going!</NextPageButton> */}
                </CallToActionContainer>
            </MainContainer>
        </>
    )
}

export default Home