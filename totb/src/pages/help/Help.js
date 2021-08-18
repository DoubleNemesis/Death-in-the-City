import { useEffect } from 'react'
import {useHistory} from "react-router-dom";
import { Container, Paper } from './helpComponents/HelpComponents'
import { helpBubbleText, HelpHints, HelpAnswers } from '../../data/lessonData'
import GeneralButton from './../../generalComponents/GeneralButton'
import { SpeechBubbleLeft } from './../../generalComponents/ConversationComponents'
import teacher from '../../images/teacher.png'

function Office() {

    let history = useHistory()

    useEffect(()=>{
        window.scrollTo(0,0)
      },[])

    return (
        <>
            <Container>
                    <SpeechBubbleLeft image={teacher} >
                            {helpBubbleText}
                                    <GeneralButton fontSize="1" onclick={() => history.goBack()}>Go Back</GeneralButton>
                    </SpeechBubbleLeft>
                    <Paper>
                        <HelpHints/>
                    </Paper>
                    <hr/>
                    <Paper>
                        <HelpAnswers/>
                    </Paper>
            </Container>
        </>
    )
}

export default Office