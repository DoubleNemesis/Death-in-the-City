import CallToActionContainer from '../containers/CallToActionContainer'
import MainContainer from '../containers/MainContainer'
import Title from '../components/Title'
import SubTitle from '../components/SubTitle'
import Button from '../components/Button'
import {useHistory} from 'react-router-dom'

function Home() {
    let history = useHistory()
    function handleClick(){
        history.push('/office')
    }

    return (
        <>
            <div className="title">
                <Title>Death in the City</Title>
            </div>
            <SubTitle>Your mission: solve the crime</SubTitle>
            <MainContainer>
            <CallToActionContainer>
                On the 27th of January 2021 at 3:06am the body of 25-year-old actor Lexington Grey was discovered on the sidewalk at the foot of the exclusive Kaplinsky Tower. Some say it was suicide. We think it was murder.
                <Button onclick={handleClick}>Get Going!</Button>
            </CallToActionContainer>
            </MainContainer>
        </>

    )
}

export default Home