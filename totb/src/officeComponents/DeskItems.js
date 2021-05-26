import styled, {keyframes} from 'styled-components'
import mindmap from '../images/mindmap.jpg'
import notebook from '../images/notebook.png'

export const focusDeskItem = keyframes`

from {
    transform: rotateX(45deg)
}
to {
    transform: rotateX(0deg)
    }
from {
    width: 18vw
}
to {
    width: 80vw
    }
from {
    height: 30vh
}
to {
    height: 90vh
    }
from {
    z-index: 0
}
to {
    z-index: 10
    }
`
export const defocusDeskItem = keyframes`

from {
    transform: rotateX(0deg), translate(15vw, 0)
}
to {
    transform: rotateX(45deg), translate(0, 0)
    }

from {
    width: 80vw
}
to {
    width: 18vw
    }
from {
    height: 90vh
}
to {
    height: 30vh
    }
from {
    z-index: 10
}
to {
    z-index: 1
    }
`
export const Board = styled.div`
display: flex;
flex-direction: column;
height: 30vh;
width: 250px;
background-color: white;
background-image: url(${mindmap});
background-size: cover;
background-position: center;
box-shadow: 1px 1px 3px #202020;
box-shadow: 3px 3px 3px #202020;
transform: rotateX(45deg);
margin-right: 2em;
animation: ${({animateBoard})=>{
    return animateBoard ? focusDeskItem : defocusDeskItem
    }} 2s;
animation-fill-mode: forwards;

img{
    max-width: 50px;
    border: 1px solid #999;
    box-shadow: 1px 1px 1px #999;
    margin-top: .2em;
    padding: .4em;
margin: .4em;
}

@media(max-width: 900px){
    width: 90%;
}
`

export const Desk = styled.div`
width: 100%;
height: 100vh;
display: flex;
flex-direction: row;
justify-content: center;
align-items: flex-end;
padding-bottom: 4em;
`

export const Map = styled.div`
height: 30vh;
width: 18vw;
/* position: absolute; */
background-color: white;
background-image: url('http://tomsclassroom.com/totbImages/map.png');
font-family: Verdana, Geneva, Tahoma, sans-serif;
background-size: cover;
background-position: center;
box-shadow: 3px 3px 3px #202020;
transform: rotateX(45deg);
margin-right: 2em;
animation: ${({animateMap})=>{
    return animateMap ? focusDeskItem : defocusDeskItem
    }} 2s;
animation-fill-mode: forwards;

@media(max-width: 900px){
    width: 90%;
}
`
export const MapLarge = styled.div`
height: 100%;
width: 100%;
position: relative;
background-color: white;
background-image: url('http://tomsclassroom.com/totbImages/maplarge.png');
font-family: Verdana, Geneva, Tahoma, sans-serif;
background-size: cover;
background-position: center;
`
export const Notes = styled.div`
height: 30vh;
width: 250px;
background: repeating-linear-gradient(
  lightcyan,
  lightcyan 30px,
  #999 32px
);
font-family: Verdana, Geneva, Tahoma, sans-serif;
background-position: center;
background-image: url(${notebook});
background-size: contain;
background-position: center;
background-repeat: no-repeat;
box-shadow: 3px 3px 3px #202020;
transform: rotateX(45deg);
animation: ${({animateNotes})=>{
    return animateNotes ? focusDeskItem : defocusDeskItem
    }} 2s;
animation-fill-mode: forwards;
z-index: 20;

@media(max-width: 900px){
    width: 90%;
}
`
export const DeskTitles = styled.h3`
font-family: Verdana, Geneva, Tahoma, sans-serif;
text-align: center;
box-sizing: border-box;
background-color: white;
font-weight: 400;
padding: .6em .3em;
z-index: -1;
margin-top: 0;
border-bottom: 2px solid #666;
`
export const Messages = styled.p`
font-family: cursive;
text-align: center;
transform: rotate(355deg);
color: red;
font-size: 1.2rem;
z-index: -20;

a{
    color: red;
    text-decoration: none;

    :hover{
        text-decoration: underline;
    }
} 
`