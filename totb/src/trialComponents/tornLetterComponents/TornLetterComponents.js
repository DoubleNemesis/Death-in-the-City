import styled, {keyframes} from 'styled-components'
import {useEffect, useState} from 'react'

export const LetterContainer = styled.div`
display: flex;
flex-wrap: wrap;
width: 100%;
height: 500px;
min-width: 100%;
min-height: 500px;
background-color: white;
border: 4px solid black;
box-sizing: border-box;

`

const rotate90 = keyframes`
0% {transform: rotate(0deg);}
100% {transform: rotate(90deg);}
`
const rotate180 = keyframes`
0% {transform: rotate(90deg);}
100% {transform: rotate(180deg);}
`
const rotate270 = keyframes`
0% {transform: rotate(180deg);}
100% {transform: rotate(270deg);}
`
const rotate360 = keyframes`
0% {transform: rotate(270deg);}
100% {transform: rotate(360deg);}
`

const LetterPieceOuter = styled.div`
border: 1px solid red;
/* position: absolute; */
background-color: #999;
width: 400px;
cursor: grab;
animation: ${({position})=>{
    return position === 90 ? rotate90 : position === 180 ? rotate180 : position === 270 ? rotate270 : position === 360 ? rotate360 : null

}
} 1s;
animation-fill-mode: forwards;
`

export const TornLetterPiece = ({children, ...props})=>{
    const [position, setPosition] = useState(0)

    useEffect(()=>{
        const RandomNum = Math.floor(Math.random() *4)
        const potentialRotations = [0, 90, 180, 270]
        setPosition(potentialRotations[RandomNum])
    },[])

    function handleDoubleClick() {
        console.log('click');
        setPosition(prev=>{
         return prev<360 ?  prev+90 : 90
        })
    }
    console.log(position);

return(
<LetterPieceOuter onDoubleClick={handleDoubleClick} position={position}>{children}</LetterPieceOuter>
)

}

