import styled from 'styled-components'

export const Container = styled.div`
grid-area: conversation;
display: flex;
flex-direction: column;
width: 100%;
border: 1px solid red;

@media(min-width:1025px){
    flex-direction: row;
}
`

export const EventsContainer = styled.div`
background-color: white;
width: 100%;
min-width: 100%;
height: 45%;
min-height: 45%;

ul{
    list-style: none;
    margin-left: -2em;
}

li{
    border: 1px solid red;
    margin: .3em .3em 0;
    padding: .3em;
}

@media(min-width:1025px){
    width: 55%;
min-width: 55%;
margin: 1em;
height: unset;
min-height: unset;
background-color: unset;

li{
    background-color: whitesmoke;
    border: 1px solid red;
    margin: .3em .3em 0;
    padding: .3em;
}


}



`
export const ParagraphContainer = styled.div`
background-color: white;
width: 90%;
min-width: 90%;
height: auto;
padding: 1em;
margin: 1em auto;
font-size: 1.2rem;

@media(min-width:1025px){
    width: 40%;
min-width: 40%;
margin: 1em;
}
`