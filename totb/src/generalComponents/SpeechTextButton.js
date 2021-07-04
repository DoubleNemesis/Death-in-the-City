import styled from 'styled-components'

export const TextButtonContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-top: auto.5em;
background-color: transparent;

`
export const TextButton = styled.button`
background-color: ${({bgcolor})=> bgcolor || 'transparent'};
color: black;
margin: .2em;
`