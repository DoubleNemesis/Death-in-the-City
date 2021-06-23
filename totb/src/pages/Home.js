import { useHistory } from 'react-router-dom'
import { useState } from 'react'
import MainContainer from '../containers/MainContainer'
import NextPageButton from '../generalComponents/NextPageButton'
import { homePageData } from '../data/lessonData'


function Home() {

    const { homeTitle, homeSubtitle, homeCallToActionText, homeCallToActionTextBtn, homeCallToActionTextBtn2 } = homePageData

    return (
        <>
            <MainContainer>

                <NextPageButton destination="start">Get Going!</NextPageButton>

            </MainContainer>
        </>
    )
}

export default Home