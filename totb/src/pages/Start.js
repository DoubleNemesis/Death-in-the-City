import { useHistory } from 'react-router-dom'
import { useState } from 'react'
import CallToActionContainer from '../containers/CallToActionContainer'
import MainContainer from '../containers/MainContainer'

import SubTitle from '../generalComponents/SubTitle'
import NextPageButton from '../generalComponents/NextPageButton'

import { homePageData } from '../data/lessonData'
import newspaper from './../images/newspaper.png'
import newspaperInside from './../images/newspaperInside.png'

// lexi Photo by <a href="https://unsplash.com/@nathanmortn?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">nate</a> on <a href="https://unsplash.com/s/photos/man?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
// skyscraper Photo by <a href="https://unsplash.com/@jtylernix?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Tyler Nix</a> on <a href="https://unsplash.com/s/photos/skyscraper?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
    

function Start() {

    const {homeTitle,  homeSubtitle, homeCallToActionText, homeCallToActionTextBtn, homeCallToActionTextBtn2} = homePageData
    const [paperOpen, setPaperOpen] = useState(true)
    const [newspaperToDisplay, setNewspaperToDisplay] = useState(newspaper)
    let history = useHistory()

    function handlePaperClick(){
        if(paperOpen){
            setPaperOpen(false)
            setTimeout(()=>{
                setNewspaperToDisplay(newspaperToDisplay === !newspaper ? newspaper : newspaperInside)
            },500) 
        }
        else {
            history.push('/mrgrey')
        }

    }
    console.log(paperOpen);

    return (
        <>
            <MainContainer>
                <CallToActionContainer homeCallToActionTextBtn={paperOpen ? homeCallToActionTextBtn : homeCallToActionTextBtn2} 
                paperOpen={paperOpen} 
                onclick={handlePaperClick}
                >
                    {/* {homeCallToActionText} */}
                    {/* <NextPageButton destination="backstory">Get Going!</NextPageButton> */}
                    <img src={newspaperToDisplay}/>
                </CallToActionContainer>
            </MainContainer>
        </>
    )
}

export default Start