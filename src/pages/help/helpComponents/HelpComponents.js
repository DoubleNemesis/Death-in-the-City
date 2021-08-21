import styled from 'styled-components'
import woodbg from '../../../images/woodbg.jpg'
import notePaper from '../../../images/notePaper.png'

export const Container = styled.div`
display: flex;
background-image: url(${woodbg});
flex-direction: column;
justify-content: center;
background-size: contain;
width: 100%;
padding: 2em;

@media(min-width: 1025px){
    flex-direction: row;
    width: 80%;
    margin: 0 auto;
    border-radius: 5px;
}
`

export const Paper = styled.div`
background-image: url(${notePaper});
background-size: 10%;
background-color: whitesmoke;
background-repeat: repeat-y;
font-family: 'Poppins';
width: 100%;
border-radius: 3px;
font-size: 1rem;
padding: 2em 2em 2em 3em;

h2{
    font-size: 1.5rem;
    padding: .5em 0;
    font-weight: 700;
}

@media(min-width:1025px){
    background-color: whitesmoke;
    padding: 1em;
    padding-left: 3em;
    border-radius: 5px;
    margin-right: .5em;
    width: 90%;
}
`