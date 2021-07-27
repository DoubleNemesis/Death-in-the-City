import { useState } from 'react'
import CallToActionContainer from '../containers/CallToActionContainer'
import MainContainer from '../containers/MainContainer'

import SubTitle from '../generalComponents/SubTitle'
import NextPageButton from '../generalComponents/NextPageButton'

// import { homePageData } from '../data/lessonData'
import { officeCards } from '../data/lessonData'



function FoundArtefacts() {

    const {artefacts} = officeCards
    const [paperOpen, setPaperOpen] = useState(true)


    return (
        <>
            <MainContainer>

            </MainContainer>
        </>
    )
}

export default FoundArtefacts