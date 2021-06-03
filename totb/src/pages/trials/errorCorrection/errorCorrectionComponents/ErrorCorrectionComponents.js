import styled from 'styled-components'

const SentenceBtn = styled.button`
border: 1px solid grey;
background-color: ${({ bgColor }) => bgColor === 'red' ? 'red' : 'blue'};
font-family: cursive;

:hover{
    background-color: tomato;
}

.selected2{
    background-color: green !important;
}
`

//function to toggle color based on iscorrect prop.

export const SentenceDiv = ({ children, ...props}) => {
    return (
        <SentenceBtn {...props}>{children}</SentenceBtn>
    )

}
