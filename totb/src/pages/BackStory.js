import CallToActionContainer from '../containers/CallToActionContainer'
import MainContainer from '../containers/MainContainer'
import Title from '../generalComponents/Title'
import SubTitle from '../generalComponents/SubTitle'
import Button from '../generalComponents/Button'
import {useHistory} from 'react-router-dom'

function Home() {
    let history = useHistory()
    function handleClick(){
        history.push('/vocab')
    }

    return (
        <>

                <Title>Death in the City</Title>

            <SubTitle>Here's the backstory</SubTitle>
            <MainContainer>
            <CallToActionContainer>
               <Button onclick={handleClick}>Go to the Vocab</Button>
            </CallToActionContainer>
            </MainContainer>
        </>

    )
}

export default Home