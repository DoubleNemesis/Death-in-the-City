import styled from 'styled-components'

const MapFeatureContainer = styled.div`
position: absolute;
right: ${({right})=>right}%;
top: ${({top})=>top}%;
display: flex;
justify-content: center;
align-items: center;
`

const MapPoint = styled.div`
background-color: red;
z-index: 100;
border-radius: 50%;
min-width: 25px;
width: 20px;
min-height: 25px;
height: 20px;
`
const MapLabel = styled.h3`
background-color: white;
padding: .2em;
`

export const MapFeature = (props)=><MapFeatureContainer top={props.top} right={props.right} onClick={props.onclick}><MapPoint id={props.id}/><MapLabel id={props.id}>{props.label}</MapLabel></MapFeatureContainer>