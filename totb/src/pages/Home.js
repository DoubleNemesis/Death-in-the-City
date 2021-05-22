import CallToActionContainer from '../containers/CallToActionContainer'
import MainContainer from '../containers/MainContainer'
import Title from '../generalComponents/Title'
import SubTitle from '../generalComponents/SubTitle'
import Button from '../generalComponents/Button'
import {useHistory} from 'react-router-dom'

function Home() {
    let history = useHistory()
    function handleClick(){
        history.push('/office')
    }

    return (
        <>

                <Title>Death in the City</Title>

            <SubTitle>Your mission: solve the crime</SubTitle>
            <MainContainer>
            <CallToActionContainer>
                On the 27th of January 2021 at 3:06am the body of 25-year-old actor Lexington Grey was discovered on the sidewalk at the foot of the exclusive Kaplinsky Tower. The police say it was suicide...
                <Button onclick={handleClick}>Get Going!</Button>
            </CallToActionContainer>
            </MainContainer>
        </>

    )
}

export default Home