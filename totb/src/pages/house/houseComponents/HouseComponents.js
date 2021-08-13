import styled from 'styled-components'

export const HousePageContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
width: 100%;
box-sizing: border-box;
/* border: 1px solid white; */

@media(min-width: 1025px){
    margin-top: 3em;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(1, auto auto);
    grid-template-rows: 380px auto;
    grid-template-areas: 'house map'
                        'innerSpeech button';
}
`

export const DoorBell = styled.button`
border: 4px solid #141414;
width: 30%;
@media(min-width: 1025px){
    width: 25%;

}
`

export const BellContainer = styled.div`
display: flex;
flex-direction: row;
box-sizing: border-box;
grid-area: button;
` 
export const InnerContainerSpeech = styled.div`
display: flex;
flex-direction: row;
box-sizing: border-box;
grid-area: innerSpeech;
/* border: 1px solid yellow; */
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
    border-left: none;
}
`
export const MapImage = styled.img`

  transform-origin: 5% 75%;
  transition: transform 1s, filter .5s ease-out;

  
  :hover{
      transform: scale(2.5);
      overflow: hidden; 
  }
`