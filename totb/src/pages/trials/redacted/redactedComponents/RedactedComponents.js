import styled from 'styled-components'
import { redactedData } from '../../../../data/lessonData'
import medicalBG from '../../../../images/medicalBG.png'

const {text} = redactedData

export const StatementContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background-color: white;
background-image: url(${medicalBG});
width: 100%;
min-width: 100%;
height: 60%;
min-height: 60%;
padding: 1em;
font-family: 'Kalam';
font-size: 1rem;

h3{
    text-align: center;
}

@media(min-width: 1025px){
    width: 60%;
    min-width: 60%;
    margin: 0 auto;
}

` 

export const Container = styled.div`
display: flex;
flex-direction: column;
width: 100%;
justify-content: center;
align-items: center;


`