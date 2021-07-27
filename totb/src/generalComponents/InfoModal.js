import styled from 'styled-components'

export const StyledModal = styled.div`
position: absolute;
background-color: #333;
color: white;
z-index: 5;
display: ${({ display }) => display};
left:5%;
right:5%;
margin-left:auto;
margin-right:auto;
top: 34%;
font-size: 1rem;
border: 1px solid #666;
border-radius: 2px;
padding: 1em;
box-shadow: 4px 4px 3px #666;
/* width: 80%; */
/* display: flex;
flex-direction: column; */
img{   
    border: 1px red solid;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
}

h2{
    color: white;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    margin: .6em .5em;
    font-size: 2rem;
}

`

export const ToggleContainer = styled.div `
display: flex;
`

    export const ToggleTaskInfo = styled.button`
position: relative;
font-size: 1.2rem;
font-weight: 700;
z-index: 2;
color: #333;
margin: 0 auto;
padding: .3em 5em;
text-transform: uppercase;

`

//     export const QuestionOption = styled.button`
// background-color: yellow;
// /* border-bottom: 1px solid #999; */
// padding: .5em 1em;
// margin: .2em;
// border-radius: 2px;
// `