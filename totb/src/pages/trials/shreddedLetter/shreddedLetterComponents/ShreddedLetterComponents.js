import styled from 'styled-components'
import tornpaperedge from '../../../../images/tornpaperedge.png'
import tornpaperedgeGreen from '../../../../images/tornpaperedgeGreen.png'
import woodbg from '../../../../images/woodbg.jpg'

export const EventsContainer = styled.div`
display: flex;
flex-direction: column;
background-color: saddlebrown;
background-image: url(${woodbg});
background-position: center;
background-size: contain;
width: 80%;
justify-content: center;
align-items: center;
margin: 2em auto 0;
padding-top: 1em;
border-radius: 5px;

ul{
  list-style: none;
  padding: 0;
}

h3{
  color: #333;
  background-color: white;
  padding: .2em .3em;
}

@media(min-width: 1025px){
  flex-direction: row;
  width: 60%;
  align-items: center;
  justify-content: space-around;
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
padding: .5em .3em .5em 2em;
cursor: grab;
font-size: 1rem;
font-family: 'Kalam';
`