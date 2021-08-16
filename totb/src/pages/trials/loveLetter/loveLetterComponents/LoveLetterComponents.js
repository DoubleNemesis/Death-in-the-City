import styled from 'styled-components'
import { TextButton, TextButtonContainer } from '../../../../generalComponents/SpeechTextButton'
import woodbg from '../../../../images/woodbg.jpg'
import loveLetterBG from '../../../../images/loveLetterBG.png'

export const SuccessMessageComp = (props)=>{
    return(
        <>
            {props.message}
            <TextButtonContainer>
                <TextButton onClick={props.onclick} bgcolor="red">Click</TextButton>
            </TextButtonContainer>
            </>
    )
}

export const Container = styled.div`
display: flex;
flex-direction: column;
width: 100%;
`
export const LoveLetterMainContainer = styled.div`
display:flex;
flex-direction: column;
background-color: transparent;
align-items: center;
justify-content: center;
background-image: url(${woodbg});
background-size: contain;

@media(min-width: 1025px){
flex-direction: row;
gap: 2em;
margin-bottom: 3em;
}
`

export const LoveLetterSymbolsContainer = styled.div`
background-color: whitesmoke;

display: flex;
flex-wrap: wrap;
width: 325px;
margin-top: 1em;

background-size: cover;
background-repeat: repeat-y;

.whiteBG{
    background-color: #cfd6de;
    padding: 1em;
    margin: .5em;
    font-family: 'Kalam';
}

@media(min-width: 700px){
    background-color: unset;
    width: 660px;  
    min-width: 660px;
    background-image: url(${loveLetterBG});
    padding: 4em 1em 4em 6.5em;
    margin: 3em 0;
}

`
export const LoveLetterLettersContainer = styled.div`
width: 100%;
display: flex;
flex-wrap: wrap;
margin-top: 2em;
margin-bottom: 2em;
justify-content: center;

.unClickable{
    pointer-events: none;
    background-color: #141414;
    border: 1px solid #333;
    color: lightgrey;
    font-weight: 400;
}

@media(min-width: 700px){
    background-color: #cfd6de;
padding: .5em;
border-radius: 5px;
    width: 520px;  
    max-width: 520px;

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
cursor: pointer;

:hover{
    background: ${({color})=> `linear-gradient(45deg, coral 0%,  ${color} 40%, #ffff00 100%)`};  
}

@media(min-width: 700px){
    width: 50px;
}


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
cursor: pointer;

@media(min-width: 700px){
    width: 42px;  
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