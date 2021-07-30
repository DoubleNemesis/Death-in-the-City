import styled from 'styled-components'
import { SpeechBubbleLeft, SpeechBubbleRight } from '../../../generalComponents/ConversationComponents'
import { TextButton, TextButtonContainer } from '../../../generalComponents/SpeechTextButton'

export const SuccessMessageComp = (props)=>{
    return(
        <SpeechBubbleRight>
            {props.message}
            <TextButtonContainer>
                <TextButton onClick={props.onclick}>Click</TextButton>
            </TextButtonContainer>
        </SpeechBubbleRight>
    )
}

export const LoveLetterMainContainer = styled.div`
display:flex;
flex-direction: column;
background-color: white;
align-items: center;
`

export const LoveLetterSymbolsContainer = styled.div`
display: flex;
flex-wrap: wrap;
width: 325px;
border: 1px solid red;
margin-top: 1em;
padding: .1em;
`
export const LoveLetterLettersContainer = styled.div`
width: 100%;
display: flex;
flex-wrap: wrap;
margin-top: 2em;

.unClickable{
    pointer-events: none;
    background-color: black;
}
`

export const LoveLetterElems = styled.span`
display: flex;
justify-content: center;
align-items: center;
background-color: ${({color})=> color };
width: 20px;
padding: .3em .5em;
margin: .2em;
border-radius: .2em;
`
export const LoveLetterSymbolElems = styled.span`
display: flex;
justify-content: center;
align-items: center;
background-color: ${({color})=> color };
width: 20px;
padding: .3em .5em;
margin: .2em;
border-radius: .2em;
`
export const LoveLetterSpace = styled.span`
display: flex;
justify-content: center;
align-items: center;
background-color: transparent;
width: 20px;
padding: .3em .5em;
margin: .2em;
border-radius: .2em;
`