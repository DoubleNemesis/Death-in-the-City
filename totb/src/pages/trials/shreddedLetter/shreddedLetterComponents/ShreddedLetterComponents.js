import styled from 'styled-components'
import tornpaperedge from '../../../../images/tornpaperedge.png'
import tornpaperedgeGreen from '../../../../images/tornpaperedgeGreen.png'

export const EventsContainer = styled.div`
display: flex;
flex-direction: column;
background-color: grey;
width: 80%;
justify-content: center;
align-items: center;
margin: 0 auto;
padding-top: 1em;

ul{
  list-style: none;
  padding: 0;
}

/*.correctOrder{
  background-color: limegreen;
  border: 2px solid limegreen;
}  */

`
// export const ParagraphContainer = styled.div`
// background-color: white;
// width: 100%;
// min-width: 100%;
// height: auto;
// `

export const ShreddedPiece = styled.div`
border: 5px solid transparent;
background-image: url(${({isShreddedLetterCorrect})=>isShreddedLetterCorrect ? tornpaperedgeGreen :  tornpaperedge});
background-position: center;
background-size: cover;
background-repeat: no-repeat;
/* background-color: ${({isShreddedLetterCorrect})=>isShreddedLetterCorrect ? 'lightgreen' : 'transparent'}; */
background-color: transparent;
width: auto;
padding: .5em 0 .5em 2em;
cursor: grab;
font-size: 1rem;
font-family: 'Kalam';
`