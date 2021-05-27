import styled, {keyframes} from 'styled-components'
import safewheel from '../../images/safewheel.png'
import visitorbook from '../../images/visitorbook.png'

export const rotateDoor = keyframes`
from { transform: rotateY(0deg); }
to { transform: rotateY(120deg); }
`
export const rotateWheel = keyframes`
0% { transform: rotate(0deg); }
100% { transform: rotate(360deg); }
`
export const rotateAndHide = keyframes`
0% { transform: rotate(0deg); }
50% { transform: rotate(360deg); }

51% { opacity: 1; }
100%{ opacity: 0; }
`
export const hide = keyframes`

from { opacity: 1; }
to { opacity: 0; }
`
export const show = keyframes`

from { opacity: 0; }
to { opacity: 1; }
`
export const StyledInput = styled.input`
width: 2em;
background-color: ${({safeCodeBgColor})=>safeCodeBgColor};
margin-right: .2em;
border-radius: .2em;
`

export const CodeBoxContainer = styled.div`
border: 1px solid black;
padding: 2em;
margin: 0 auto;
display: flex;
flex-direction: column;
align-items: center;
`

const SafeBox = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
min-height: 300px;
min-width: 300px;
height: 300px;
width: 300px;
background-color: #333;
border-radius: 30px;
`
const SafeBoxDoor = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
background-color: #333;
border: 3px solid #999;
min-height: 240px;
min-width: 240px;
height: 240px;
width: 240px;
border-radius: 20px;
position: relative;
animation: ${({codeIsCorrect})=>codeIsCorrect ? rotateDoor : null} 3s;
transform-origin: right;
transform-style: preserve-3d;
animation-fill-mode: forwards;
`
const SafeBoxInside = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
background-color: #666;
border: 3px solid #999;
min-height: 220px;
min-width: 220px;
height: 220px;
width: 220px;
border-radius: 20px;
position: relative;
z-index: 2;
`
const SafeWheel = styled.div`
/* clip-path: polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%); */
background-color: #666;
min-height: 100px;
min-width: 100px;
height: 100px;
width: 100px;
background-image: url(${safewheel});
background-size: cover;
background-repeat: none;
clip-path: circle(50% at 50% 50%);
animation: ${({codeIsCorrect})=>codeIsCorrect ? rotateAndHide : rotateWheel} 2s;
animation-fill-mode: forwards;
animation-delay: 0;
`
const ChildrenContainer = styled.div`
animation: ${({codeIsCorrect})=>codeIsCorrect ? hide : null} .2s;
animation-fill-mode: forwards;
animation-delay: 1.2s;
`
const SafeFeetOuter = styled.div`
display: flex;
justify-content: space-between;
min-height: 40px;
min-width: 240px;
height: 40px;
width: 240px;
`
const SafeFeet = styled.div`
height: 0;
width: 30px;
border-bottom: 20px solid #202020;
border-left: 10px solid transparent;
border-right: 10px solid transparent;
`
const SafeHinge = styled.div`
position: absolute;
right: -7px;
top: ${({top})=> top}px;
height: 20px;
width: 10px;
min-height: 20px;
min-width: 10px;
background-color: #999;
`
const Notes = styled.div`
background-image: url(${visitorbook});
background-size: contain;
background-repeat: no-repeat;
background-position: center;
position: absolute;
z-index: -1;
opacity: 0;
min-height: 200px;
min-width: 100px;
height: 200px;
width: 100px;
animation: ${({codeIsCorrect})=>codeIsCorrect ? show : null} .1s;
animation-fill-mode: forwards;
animation-delay: .7s;
cursor: pointer;

:hover{
    height: 210px;
width: 110px;
}
`


export const Safe = ({ children, ...props }) => {
    return <><SafeBox><SafeBoxInside><Notes {...props} onClick={props.handleVisitorBookClick}/><SafeBoxDoor {...props}><SafeWheel onClick={props.handleCheckCorrectCode}{...props}/><ChildrenContainer {...props}>{children}</ChildrenContainer><SafeHinge top="190"/><SafeHinge top="25"/></SafeBoxDoor></SafeBoxInside></SafeBox><SafeFeetOuter><SafeFeet /><SafeFeet /></SafeFeetOuter></>
}