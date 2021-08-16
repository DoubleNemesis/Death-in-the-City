import styled from 'styled-components'

const StyledContainer = styled.div`
display: flex;
flex-direction: column;
font-size: 1.5rem;
margin: 0 auto;
z-index: 100;
background-color: #333;
width: ${({ width }) => width || 'unset'};
border: 3px solid darkorange;
border-radius: 5px;
color: whitesmoke;
position: relative;
overflow: hidden;

@media(max-width:1024px){
    display: none;
}

p{
    padding: 0;
    margin: 0;
    padding-left: .5em;
}


`
const StyledImage = styled.img`
max-width: 100%;
height: 100%;
min-height: 100%;
`
export function ImageContainer({ children, ...props }) {
    return (
        <StyledContainer width={props.width} ><StyledImage src={props.image} />{children}</StyledContainer>
    )
}


export const FloatingImage = styled.img`
bottom: -10%;
right: -10%;
width: 100px;
position: absolute;
background-color: slategray;
padding: 10px;
border-radius: 10%;
border: 3px solid darkorange;

@media(max-width:1024px){
    display: none;
}
`
export const NewspaperOverlayContainer = styled.div`
position: absolute;
right: 0;
width: 50%;
height: 100%;
background-image: url('https://media.giphy.com/media/YfRc9QhF2lBMQ/source.gif');
background-image: url('https://media.giphy.com/media/v2xIous7mnEYg/giphy.gif');
background-size: cover;
opacity: .5;
padding: 2em;
border-left: 2px solid whitesmoke;
margin-bottom: 2em;

@media(max-width:1024px){
display: none;
}

`

const StyledMainContainer = styled.div`
width: 100%;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;

@media(min-width:1025px){
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

`

export function MainContainer({ children }) {

    return (
        <StyledMainContainer>{children}</StyledMainContainer>
    )

}
