import styled, {keyframes} from 'styled-components'

const mapZoom = keyframes`
0%{transform: scale(1);}
100%{transform: scale(2);}
`

export const HousePageContainer = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
align-items: center;
width: 100%;
box-sizing: border-box;

@media(min-width: 1025px){
    margin: 0 auto;
    margin-top: 3em;
    width: 80%;
    display: grid;
    grid-template-columns: repeat(1, 450px 450px);
    grid-template-rows: 400px auto;
    grid-template-areas: 'house map'
                        'innerSpeech btn'
                        ;
}
`
export const BtnContainer = styled.div`
display: flex;
flex-direction: row;
box-sizing: border-box;
align-items: center;
justify-content: center;
grid-area: btn;
min-width: 50%;
margin-bottom: 1em;

@media(min-width: 1025px){
    min-width: unset;
    margin-bottom: unset;
}

` 
export const InnerContainerSpeech = styled.div`
grid-area: innerSpeech;
min-width: 50%;
margin-left: 1em;

@media(min-width: 1025px){
    border: 1px solid yellow;
min-width: unset;
}
` 

export const HouseContainer = styled.div`
display: flex;
flex-direction: row;
box-sizing: border-box;
grid-area: house;

`

export const HouseImage = styled.img`
border: 4px solid #141414;
border-right: none;
max-width: 100%;


@media(min-width: 1025px){
    height: 380px;
}
`



export const MapContainer = styled.div`
    height: 250px; 
    width: 100%;
    overflow: hidden; 
    border: 4px solid #141414;
    border-top: none;
    grid-area: map;
    display: none;
    
    @media(min-width: 600px){
        height: 300px; 
        width: 100%;
    }
    @media(min-width: 1025px){
        height: 380px; 
        width: unset;
        border: 4px solid #141414;
        display: inline;
}
`
export const MapImage = styled.img`

  transform-origin: ${({coords})=> coords || '5% 75%'};
  transition: transform 1s, filter .5s ease-out;
  animation: ${mapZoom} 4s;
  animation-fill-mode: forwards;

  
  :hover{
      transform: scale(2);
      overflow: hidden; 
  }
`