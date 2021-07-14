import styled from 'styled-components'

const StyledContainer = styled.div`
display: flex;
border: 1px solid #333;
background-color: whitesmoke;
color: black;
font-family:'Courier New', Courier, monospace;
font-size: 1.5rem;
margin: 1em;
z-index: 100;
background-color: #333;
`
const StyledImage = styled.img`
max-width: 100%;
height: 100%;
min-height: 100%;
`
function ImageContainer(props){
    return (
        <StyledContainer ><StyledImage src={props.image}/></StyledContainer>
    )
}

export default ImageContainer