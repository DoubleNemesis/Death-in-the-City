import styled from 'styled-components'

export const ErrorCorrectionContainer = styled.div`
display: flex;
flex-direction: column;
background-color: pink;
background: repeating-linear-gradient( pink, pink 20px, skyblue 20px, skyblue 21px);
width: 100%;
`

const SentenceBtn = styled.button`
border: 2px solid grey;
background-color: ${({ isSelected }) => isSelected ? 'limegreen' : 'transparent'};
font-family: 'Kalam';
font-size: 1.3rem;
text-align: left;
margin: .3em 1em;
padding: .3em;
border-radius: 5px;
color: black;
font-weight: 600;

:hover{
    background-color: tomato;
}
`

export const SentenceDiv = ({ children, ...props }) => {
    return (
        <SentenceBtn {...props}>{children}</SentenceBtn>
    )
}


const StyledIncorrectSentences = styled.div`
display: flex;
flex-direction: column;
border: 2px solid grey;
background-color: ${({ isCorrect }) => isCorrect ? 'limegreen' : 'skyblue'};
font-family: 'kalam';
text-align: left;
font-size: 1.1rem;
margin: .3em 1em;
padding: .8em;
border-radius: .3em;

input, button{
    margin: .2em;
    /* background-color: ${({ isCorrect }) => isCorrect ? 'white' : 'red'}; */
}

`

export const IncorrectSentencesDiv = ({ children, ...props }) => {
    return (
        <StyledIncorrectSentences{...props}>{children}</StyledIncorrectSentences>
    )

}