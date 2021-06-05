import styled from 'styled-components'

const SentenceBtn = styled.button`
border: 1px solid grey;
background-color: ${({isSelected})=> isSelected ? 'brown' : 'yellow'};
font-family: cursive;

:hover{
    background-color: tomato;
}
`

//function to toggle color based on iscorrect prop.

export const SentenceDiv = ({ children, ...props}) => {

    return (
        <SentenceBtn {...props}>{children}</SentenceBtn>
    )
}


const StyledIncorrectSentences = styled.div`
border: 1px solid grey;
background-color: ${({isCorrect})=> isCorrect ? 'brown' : 'yellow'};
font-family: cursive;
`

export const IncorrectSentencesDiv = ({children, ...props}) => {
    return(
        <StyledIncorrectSentences{...props}>{children}</StyledIncorrectSentences>
    )

}