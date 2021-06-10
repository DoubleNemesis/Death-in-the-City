import styled from 'styled-components'

export const LoveLetterSymbolsContainer = styled.div`
display: flex;
`
export const LoveLetterLettersContainer = styled.div`
width: 100%;
display: flex;
flex-wrap: wrap;
margin-top: 2em;
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