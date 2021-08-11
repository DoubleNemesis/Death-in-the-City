import styled from 'styled-components'
import { SpeechBubbleLeft, SpeechBubbleRight } from '../../../../generalComponents/ConversationComponents'
import { TextButton, TextButtonContainer } from '../../../../generalComponents/SpeechTextButton'
import woodbg from '../../../../images/woodbg.jpg'

export const SuccessMessageComp = (props)=>{
    return(
        <>
        {/* <SpeechBubbleLeft> */}
            {props.message}
            <TextButtonContainer>
                <TextButton onClick={props.onclick}>Click</TextButton>
            </TextButtonContainer>
            {/* </SpeechBubbleLeft> */}
            </>
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

@media(min-width: 700px){
    width: 520px;  
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
    background-color: #141414;
    border: 1px solid #333;
    color: lightgrey;
    font-weight: 400;
}
`

export const LoveLetterElems = styled.span`
display: flex;
justify-content: center;
align-items: center;
background-color: ${({color})=> color };
background: ${({color})=> `linear-gradient(45deg, #ffff00 0%,  ${color} 40%, coral 100%)`};
width: 40px;
padding: .3em .5em;
margin: .2em;
border-radius: .2em;
border: 2px solid #141414;
color: ${({color})=> color === 'red' ? 'white' : '#141414'};
font-weight: 800;

@media(min-width: 700px){
    width: 60px;  
}


`
export const LoveLetterSymbolElems = styled.span`
display: flex;
justify-content: center;
align-items: center;
background-color: ${({color})=> color };
/* background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%); */
width: 20px;
padding: .3em .5em;
margin: .2em;
border-radius: .2em;
border: 2px solid #141414;
color: yellow;

@media(min-width: 700px){
    width: 40px;  
}

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