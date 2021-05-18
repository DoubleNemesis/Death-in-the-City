import styled, {keyframes} from 'styled-components'

export const rotateModal = keyframes`
from {
    transform: rotateX(90deg)
}
to {
    transform: rotateX(0deg)
    }
`

export const Modal = styled.div`
position: absolute;
transform: rotateX(90deg);
min-height: 80vh;
min-width: 90vw;
background-color: white;
animation: ${({isShownDisplayModal})=>{
    if(isShownDisplayModal){
        return rotateModal
    }
    else{
        return null
    }
}} 2s;
animation-fill-mode: forwards;
z-index: 2;
border-radius: .2em;
box-shadow: 2px 2px 5px #333;
`
export const ModalClose = styled.div`
position: absolute;
right:15px;
top:15px;
cursor: pointer;
font-size: 2rem;
z-index: 200000;

:hover{
    color: red;
}


`


export const OfficeLayout = styled.div`
display: flex;
flex-direction: column;
width: 100%;
height: 95vh;
justify-content: space-around;
align-items: center;
background-image: url('https://images.unsplash.com/photo-1519219788971-8d9797e0928e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1028&q=80');
background-size: cover;
background-position: bottom;
box-sizing: border-box;
perspective: 2000px;

@media(max-width: 900px){
    flex-direction: column;
    align-items: center;
    gap: 1em;
}
`
//https://unsplash.com/@lishakov    - desk

export const OverlayDiv = styled.div`
position: absolute;
background-color: transparent;
width: 100%;
height: 100%;
z-index: 1000;
`
