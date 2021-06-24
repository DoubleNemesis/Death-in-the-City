import styled from 'styled-components'
import MainContainer from '../containers/MainContainer'
import PageContainer from '../containers/PageContainer'
import SubTitle from '../generalComponents/SubTitle'
import NextPageButton from '../generalComponents/NextPageButton'
import { useHistory } from 'react-router-dom'
import { backStoryData } from '../data/lessonData'
import {SpeechBubbleLeft} from './witness/witnessComponents/Questions'
import chaymadz from '../images/chaymadz.jpg'

const SpeakerImage = styled.img`
width: 45%;
float: left;
margin: 0 .8em;

`

function Home() {
    let history = useHistory()
    const {backStorySubtitle, backStoryText} = backStoryData

    function handleClick(){
        history.push('/vocab')
    }

    return (
        <>

            <MainContainer>
            {/* <SubTitle>{backStorySubtitle}</SubTitle> */}
            <SpeechBubbleLeft image={chaymadz}>
            <SpeakerImage src={chaymadz}/>
            {backStoryText}
            </SpeechBubbleLeft>

           
{/* 
            <CallToActionContainer>
            
               <NextPageButton destination="vocab">Go to the Vocab</NextPageButton>
            </CallToActionContainer> */}
            </MainContainer>
        </>

    )
}

export default Home