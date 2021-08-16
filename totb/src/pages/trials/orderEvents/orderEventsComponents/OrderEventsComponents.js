import styled from 'styled-components'
import policeReportBG from '../../../../images/policeReportBG.png'
import notePaper from '../../../../images/notePaper.png'

export const Container = styled.div`
grid-area: conversation;
display: flex;
flex-direction: column;
width: 100%;

@media(min-width:1025px){
    flex-direction: row;
}
`
export const EventsContainer = styled.div`
background-color: whitesmoke;
background-image: url(${notePaper});
background-size: 8%;
background-repeat: repeat-y;
width: 100%;
min-width: 100%;
height: 45%;
min-height: 45%;


ul{
    list-style: none;
    margin-left: -2em;
}


@media(min-width:1025px){
    width: 55%;
min-width: 55%;
margin: 1em;
height: unset;
min-height: unset;
padding: 1em;
padding-left: 5em; 
}
`
export const ParagraphContainer = styled.div`
background-color: white;
background-image: url(${policeReportBG});
background-repeat: repeat-x;
width: 90%;
min-width: 90%;
height: auto;
padding: 1em;
padding-top: 6em;
margin: 1em auto;
font-size: 1.2rem;
font-family: 'Courier New', Courier, monospace;
font-weight: 700;

@media(min-width:1025px){
    width: 40%;
min-width: 40%;
margin: 1em;
}
`

export const Event = styled.div`
    background-color: whitesmoke;
    border: 2px solid orange;
    margin: .3em .3em 0;
    border-radius: 5px;
background-color: ${({isOrderEventsCorrect})=>isOrderEventsCorrect ? 'lightgreen' : 'whitesmoke'};
width: 80%;
padding: .5em .3em .5em 2em;
cursor: grab;
font-size: 1rem;
font-family: 'Poppins';
margin-left: 10%;

@media(min-width:1025px){
    margin: .3em .3em 0;
}

`