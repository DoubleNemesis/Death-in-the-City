import styled from 'styled-components'

export const Instructions = styled.div`
width: 20%;
font-size: 1.2rem;
font-family: Verdana, Geneva, Tahoma, sans-serif;
background-color: white;
padding: .5em;
border-radius: .5em;
display: flex;
flex-direction: column;
min-height: 100%;

li{
    margin-bottom: 10px;
}
`
export const TaskBox = styled.div`
margin-top: 1em;
padding: .5em;
border: 1px solid black;
`
export const InfoBox = styled.div`
margin-top: 1em;
padding: .5em;
font-family: Verdana, Geneva, Tahoma, sans-serif;
background-color: white;
text-align: center;
`

export const Conversation = styled.div`
display: flex;
flex-direction: column;
background-color: skyblue;
width: 100%;
`
export const QuestionOptions = styled.div`
display: flex;
flex-direction: column;
background-color: skyblue;
width: 100%;
`

const StyledWitnessImage = styled.img`
width: auto;
`
export const WitnessImage = (props)=><StyledWitnessImage src={props.img}></StyledWitnessImage>