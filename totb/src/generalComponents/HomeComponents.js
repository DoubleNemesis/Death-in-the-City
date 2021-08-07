import styled, {keyframes} from 'styled-components'
import newyork1 from './../images/newyork1logo.jpg'

const itemIn = keyframes`
0% { opacity: 0; }
100% { opacity: 1; }
`
const itemOut = keyframes`
0% { opacity: 1; right: 200px}
100% { opacity: 0; right: 600px}
`
const StyledContainer = styled.div`
display: flex;
flex-direction: column;
width: 100%;
/* border-radius: .3em; */
/* border: 5px solid #fff; */
background-color: #2d2e36;
background: linear-gradient(#333, #2E2523, #333);
background: linear-gradient(#333, #141414, #333);
color: whitesmoke;
font-size: 1.1rem;
opacity: 1;
margin: 1em 0 0 0 ;



img{
/* margin-bottom: 1em; */
margin: 0;
}

@media(min-width:1025px){
flex-direction: row-reverse;


}


p{
    margin: 1em;
    font-size: .9rem;
    color: whitesmoke;
}

h2{
    font-family: inherit;
}


h3{
    font-size: 1.2rem;
    text-align: center;
    margin: 0em .5em 1em .5em;
    /* text-transform: uppercase; */
}

h4{
    margin: 1em;
    font-size: 1.2rem;
    color: whitesmoke;
}
ul{
    /* list-style: none; */
    font-size: .9rem;
    margin-left: 2em;
}




@keyframes fadeIn{
    0% {opacity: 0}
    100%{opacity: 1}
}

`

export const CrimeTape = styled.img`
width: 100%;
`

export const BlockContainer = styled.div`
max-width: ${({maxWidth})=> maxWidth || '50%'};
box-sizing: border-box;
border: ${({border})=>border}px solid #d2a118;

@media(max-width:1024px){
    max-width: 100%;

}

`

export const DetectiveAvatar = styled.img`
margin: 2em;
width: 100px;
`

export const DetectiveContainer = styled.div`

    max-width: 100%;
    padding: 1em 0;
    animation: ${itemIn} 3s;
    animation-fill-mode: forwards;
    /* border: 1px solid red; */
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    background-image: url(${newyork1});
    background-size: cover;
    background-position: center;
    background-color: #2d2e36;

    p{
        margin: 0;
        /* background-color: #2d2e36; */
        padding: .6em 2em .0em 2em;
        font-size: 1.1rem;
        font-weight: 700;
    }
`

export const DetectiveChoiceContainer = styled.div`
    /* position: absolute; */
    display: flex;
    justify-content: center;
    /* flex-wrap: wrap; */
    /* margin: 1em; */
    /* border: 1px solid red; */
    background-color: #333;
    margin-top: 1.3em;
    `
const StyledDetectiveChoiceItem = styled.button`
display: flex;
justify-content: center;
border: 1px solid #666;
border-radius: 3px;
width: 40px;
min-width: 30px;
height: 40px;
min-height: 30px;
margin: .13em;
padding: .4em;
background-color: whitesmoke;

:hover{
    border: 2px solid orange;

}

img{
    max-width: 25px;
}
`

export const DetectiveChoiceItem = (props) =>{
    return(
        <StyledDetectiveChoiceItem onClick={props.onclick} id={props.id}>
            <img src={props.image} id={props.id} alt={props.alt}/>
        </StyledDetectiveChoiceItem>
    )
}
export function TextContainer({children, ...restProps}){

    return (
        <StyledContainer>{children}</StyledContainer>
    )
}

//export default PageContainer