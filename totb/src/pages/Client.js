import PageContainer from '../containers/PageContainer'
import Title from '../generalComponents/Title'
// import GameContext from '../context/GameContext'
import Button from '../generalComponents/Button'
// import { useContext } from 'react'
import {useHistory} from 'react-router-dom'
import { clientData } from '../data/lessonData'

function MrGrey(){
    const {clientTitle, clientText} = clientData
    let history = useHistory()
    function handleClickOffice(){
        history.push('/office')
    }

    return(
        <>
        <Title>{clientTitle}</Title>
            <PageContainer>
                {clientText}
                <Button onclick={handleClickOffice}>Go to office</Button>
                In your office you will find three things:
                <ul>
                    <li>a map - you can use this to navigate the city</li>
                    <li>an ideas board - you can see the suspects you have spoken to and arrange your ideas</li>
                    <li>A notebook - you can view your notes and get other ideas and suggestions</li>
                    </ul>
            </PageContainer>
        </>
    )
}

export default MrGrey