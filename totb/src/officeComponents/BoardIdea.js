import styled from 'styled-components'

const Container = styled.div`
max-width: 100px;
z-index: 100;
display: flex;
flex-direction: column;
align-items: center;
`
const OverLay = styled.div`
min-width: 100px;
min-height: 100%;
width: 60px;
height: 100px;
background-color: transparent;
position: absolute;
top: 0;
border: 1px solid midnightblue;
`

const PostIt = styled.div`
background-color: pink;
padding: .2em;
margin: 0 0 0 .4em;
max-width: 60px;
font-family: cursive;
box-shadow: 1px 1px 1px #999;
font-size: .6rem;
p{
    margin: 0;
}
`



export const BoardIdea = (props)=><Container x={props.x} y={props.y}><PostIt><p>{props.title}</p><p>{props.name}</p></PostIt><img alt={props.title} src={props.image}/><OverLay id={props.id}/></Container>
