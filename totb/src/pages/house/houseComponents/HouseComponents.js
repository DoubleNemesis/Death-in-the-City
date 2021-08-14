import styled, {keyframes} from 'styled-components'

const mapZoom = keyframes`
0%{transform: scale(1);}
100%{transform: scale(2);}
`

export const HousePageContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
box-sizing: border-box;
/* border: 1px solid white; */

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

export const DoorBell = styled.button`
border: 4px solid #141414;
width: 30%;
@media(min-width: 1025px){
    width: 25%;

}
`

export const BtnContainer = styled.div`
display: flex;
flex-direction: row;
box-sizing: border-box;
align-items: center;
justify-content: center;
grid-area: btn;
` 
export const InnerContainerSpeech = styled.div`
/* display: flex;
flex-direction: column; */
/* box-sizing: border-box; */
border: 1px solid yellow;
grid-area: innerSpeech;
margin-left: 1em;
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
    
    @media(min-width: 600px){
        height: 300px; 
        width: 100%;
    }
    @media(min-width: 1025px){
        height: 380px; 
        width: unset;
        border: 4px solid #141414;
    /* border-left: none; */
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