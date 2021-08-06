import styled from 'styled-components'
import { redactedData } from '../../../../data/lessonData'
import medicalBG from '../../../../images/medicalBG.png'

const {text} = redactedData

export const StatementContainer = styled.div`
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
` 

