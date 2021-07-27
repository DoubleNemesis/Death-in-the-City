import { useState } from 'react'
import MainContainer from '../containers/MainContainer'
import TextContainer from '../containers/TextContainer'
import NextPageButton from '../generalComponents/NextPageButton'
import { startPageBlurb } from '../data/lessonData'


function Home() {

    const { teaserText, academicText } = startPageBlurb

    return (
        <>
            <MainContainer>
                <TextContainer>
                {teaserText}
                </TextContainer>
                <TextContainer>
                    {academicText}
                </TextContainer>
                <NextPageButton destination="start">Get Going!</NextPageButton>

            </MainContainer>
        </>
    )
}

export default Home