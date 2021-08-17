import { useHistory } from 'react-router-dom'
import { useState } from 'react'
import NewsPaperContainer from './newspaperComponents/NewspaperContainer'
import MainContainer from '../../containers/MainContainer'
import { homePageData } from '../../data/lessonData'
import newspaper from '../../images/newspaper.png'
import newspaperInside from '../../images/newspaperInside.png'
 
function Newspaper(props) {

    const {homeCallToActionText, homeCallToActionTextBtn, homeCallToActionTextBtn2} = homePageData
    const [paperOpen, setPaperOpen] = useState(true)
    const [newspaperToDisplay, setNewspaperToDisplay] = useState(newspaper)
    let history = useHistory()

    function handlePaperClick(){
        if(paperOpen){
            setPaperOpen(false)
            setTimeout(()=>{
                setNewspaperToDisplay(newspaperToDisplay === !newspaper ? newspaper : newspaperInside)
            },200) 
        }
        else {
            history.push('/vocab')
        }
    }

    return (
        <>
            <MainContainer alignItems={props.alignItems}>
                <NewsPaperContainer homeCallToActionTextBtn={paperOpen ? homeCallToActionTextBtn : homeCallToActionTextBtn2} 
                paperOpen={paperOpen} 
                onclick={handlePaperClick}
                >
                    <img src={newspaperToDisplay} alt={homeCallToActionText} />
                    </NewsPaperContainer>
            </MainContainer>
        </>
    )
}

export default Newspaper