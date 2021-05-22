import PageContainer from '../containers/PageContainer'
import Title from '../generalComponents/Title'
import MainContainer from '../containers/MainContainer'
import GameContext from '../context/GameContext'
import Button from '../generalComponents/Button'
import { useContext } from 'react'
import {useHistory} from 'react-router-dom'

function MrGrey(){
    const {vocab} = useContext(GameContext)
    let history = useHistory()

    function handleClickTest(){
        history.push('/vocab')
    }
    function handleClickOffice(){
        history.push('/office')
    }


    return(
        <>
        <Title>Mr Grey</Title>
            <PageContainer>
I want you to find out who killed my son. But first, you're going to need to show me you knwo your stuff. Get this test right and we're in business!
                <Button onclick={handleClickTest}>Start Test</Button>
                OK, great! Now I know you speak the lingo, get to work! I'll send what I've got over to your office for you to look at. 
                But if you want my advice, the first thing to do is to speak to Tony Monceto. He's the janitor at Kaplinsky Tower and an old friend of mine.
                Good luck! And remember, if you don't solve the crime you don't get paid! 
                <Button onclick={handleClickOffice}>Go to office</Button>
            </PageContainer>
        </>
    )

}

export default MrGrey