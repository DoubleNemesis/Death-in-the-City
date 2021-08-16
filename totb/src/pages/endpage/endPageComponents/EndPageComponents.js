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

export const Form = styled.form`
background-image: url(${notePaper});
background-size: 10%;
background-color: whitesmoke;
background-repeat: repeat-y;
font-family: 'Poppins';
width: 90%;
border-radius: 3px;
font-size: 1rem;
padding-left: 3em;
padding-bottom: 2em;

textarea{
    width: 80%;
    padding: .4em;
}

select{
    width: 80%;
    margin-top: 1em;
    margin-bottom: 1em;
}

@media(min-width:1025px){

    background-color: whitesmoke;
    padding: 1em;
    padding-left: 3em;
    border-radius: 5px;
    textarea{
    max-width: 80%;
}

select{
    max-width: 80%;
}
}
`