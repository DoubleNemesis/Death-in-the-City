import styled from 'styled-components'
import loveLetterBG from '../../../images/loveLetterBG.png'

const StyledContainer = styled.div`
display: flex;
flex-wrap: wrap;
width: 80%;
justify-content: center;
align-items: center;
margin: 0 auto;
border-radius: .3em;
margin-top: 2em;

@media(max-width:900px){
    width: 95%
}

`
export const StyledAnswersContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin: 1em auto;
border-radius: .3em;
/* margin-top: 2em; */
/* background-color: whitesmoke; */
background-color: transparent;
background-image: url(${loveLetterBG});
background-size: cover;
gap: 3em;
padding: 1em 1em 1em 5em;



@media(max-width:900px){
    width: 95%
}

/* .questionTile{
    height: 100px;
} */

`

function Container({children, ...restProps}){
    return (
        <StyledContainer>{children}</StyledContainer>
    )
}

export default Container