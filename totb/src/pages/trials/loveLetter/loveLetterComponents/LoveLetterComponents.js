import styled from 'styled-components'
import { SpeechBubbleLeft, SpeechBubbleRight } from '../../../../generalComponents/ConversationComponents'
import { TextButton, TextButtonContainer } from '../../../../generalComponents/SpeechTextButton'
import woodbg from '../../../../images/woodbg.jpg'

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
background-color: transparent;
align-items: center;
`

export const LoveLetterSymbolsContainer = styled.div`
display: flex;
flex-wrap: wrap;
width: 325px;
/* border: 1px solid red; */
background-image: url(${woodbg});
background-size: contain;
margin-top: 1em;
padding: .1em;

.whiteBG{
    background-color: white;
    padding: 1em;
    margin: .5em;
    font-family: 'Kalam';
}
`
export const LoveLetterLettersContainer = styled.div`
width: 100%;
display: flex;
flex-wrap: wrap;
margin-top: 2em;
justify-content: center;

.unClickable{
    pointer-events: none;
    background-color: #666;
    border: 1px solid white;
}
`

export const LoveLetterElems = styled.span`
display: flex;
justify-content: center;
align-items: center;
background-color: ${({color})=> color };
width: 40px;
padding: .3em .5em;
margin: .2em;
border-radius: .2em;
border: 2px solid #141414;
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
border: 2px solid #141414;
color: yellow;
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