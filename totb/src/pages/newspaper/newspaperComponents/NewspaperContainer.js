import styled, {keyframes} from 'styled-components'
import paperbgdark from '../../../images/paperbgdark.png'

const paperIn = keyframes`
0%{width: 0vw; transform: rotate(0deg)}
100%{width: 80vw; transform: rotate(1080deg)}
`

const paperRotate = keyframes`
0%{ width: 0vw; opacity: .3; transform: rotate(0deg)}
100%{ width: 80vw; opacity: 1; transform: rotate(1080deg)}
` 
const textIn = keyframes`
0%{opacity: 0}
100%{opacity: 1}
`
const textOut = keyframes`
0%{opacity: 0}
100%{opacity: 1}
`


const StyledContainer = styled.div`
width: 0;
animation: ${({paperOpen})=> paperOpen ? paperIn : paperRotate} 1s;
animation-delay: 0s;
animation-fill-mode: forwards;
background-color: transparent;
box-sizing: unset;
box-shadow: 5px 5px 5px 5px #141414;
overflow: hidden;

@media(min-width: 700px){
    max-width: 52vw;
}

@media(min-width: 1025px){
    max-width: 23vw;
}

img{
    width: 100%;
    border-radius: 3px;
}
`
const Text = styled.button`
position: absolute;
align-items: center;
justify-content: center;
display: flex;
width: 88.3%;
height: 10%;
left: 5.7%;
bottom: 5.5%;
background-image:url(${paperbgdark});
color: #dfdbcf;
color: limegreen;
padding: .5rem;
font-size: 1rem;
font-weight: 700;
text-decoration: underline;
opacity: 0;
animation: ${({paperOpen})=> paperOpen ? textIn : textOut} 1s 1s;
animation-fill-mode: forwards;
box-shadow: 2px 2px 2px 2px #999;
cursor: pointer;

@media(min-width: 1225px){
    font-size: 1.2rem;
}
@media(min-width: 1425px){
    font-size: 1.4rem;
}

:hover{
    color: skyblue;
    box-shadow: 1px 1px 1px 1px #666;
}
`

function NewspaperContainer({children, ...restProps}){
    return (
        <StyledContainer {...restProps}>
            <Text {...restProps} onClick={restProps.onclick}>{restProps.homeCallToActionTextBtn}</Text>
            {children}
        </StyledContainer>
    )
}

export default NewspaperContainer 