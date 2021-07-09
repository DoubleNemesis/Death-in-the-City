import styled from 'styled-components'
import tornpaperedge from '../../../../images/tornpaperedge.png'

export const EventsContainer = styled.div`
background-color: grey;
width: 90%;
min-width: 90%;
height: 45%;
min-height: 45%;
margin: 0 auto;

ul{
  list-style: none;
}
`
export const ParagraphContainer = styled.div`
background-color: white;
width: 100%;
min-width: 100%;
height: auto;

`

export const ShreddedPiece = styled.div`
border: 10px solid transparent;
background-image: url(${tornpaperedge});
background-position: center;
background-size: cover;
background-repeat: no-repeat;
background-color: transparent;
width: auto;
padding: .5em 0 .5em 2em;
cursor: grab;
font-size: 17px;
font-family: cursive;
`