import styled from 'styled-components'

export const StyledModal = styled.div`

position: absolute;
background-color: #2E2523;
background: linear-gradient(#666, #2E2523, #666);
/* background-color: transparent; */
color: white;
z-index: 5;
display: ${({ display }) => display};
flex-direction: column;
align-items: center;
justify-content: center;
left:0;
right:0;
margin-left:auto;
margin-right:auto;
top: 30%;
font-size: 1rem;
width: 90%;
padding: .5em;
border-radius: 5px;

h2{
    color: white;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    margin: .6em .5em;
    font-size: 2rem;
}

p{
    padding: 1em 0 .5em 0;
}

@media(min-width: 1025px){
    display: ${({ display }) => display};
    flex-direction: column;
    width: 20%;
    align-items: center;
    justify-content: center;
}

`

export const ToggleContainer = styled.div `
display: flex;
margin: 2em 0;
`

    export const ToggleTaskInfo = styled.button`
position: relative;
font-size: 1.2rem;
font-weight: 700;
z-index: 2;
color: #333;
margin: 0 auto;
padding: .3em 3em;
text-transform: uppercase;
`
