import styled from 'styled-components'

const SentenceBtn = styled.button`
border: 2px solid grey;
background-color: ${({ isSelected }) => isSelected ? 'brown' : 'skyblue'};
font-family: cursive;
text-align: left;
margin: .3em 1em;
padding: .3em;

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
background-color: ${({ isCorrect }) => isCorrect ? 'tomato' : 'skyblue'};
font-family: cursive;
text-align: left;
font-size: 1.1rem;
margin: .3em 1em;
padding: .8em;
border-radius: .3em;

input, button{
    margin: .2em;
}
`

export const IncorrectSentencesDiv = ({ children, ...props }) => {
    return (
        <StyledIncorrectSentences{...props}>{children}</StyledIncorrectSentences>
    )

}