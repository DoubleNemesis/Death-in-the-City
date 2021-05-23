import styled, {keyframes} from 'styled-components'

export const rotateModal = keyframes`
from {
    transform: rotateX(90deg)
}
to {
    transform: rotateX(0deg)
    }
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
export const ModalOpen = styled.div`
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
