import styled from 'styled-components'
import woodbg from '../../../images/woodbg.jpg'

export const Container = styled.div`
display: flex;
flex-wrap: wrap;
width: 100%;
justify-content: center;
background-image: url(${woodbg});
background-size: contain;
padding: 1em;
border-radius: 5px;

@media(min-width: 1025px){
    width: 60%;
    margin: 0 auto;
}

`
export const ArtefactDisplay = styled.div`
display: flex;
flex-direction: column;
width: 100%;
justify-content: center;
`
export const WitnessCard = styled.div`
width: 120px;
height: auto;
margin: .2em;
background-color: skyblue;
text-align: center;
border-radius: 5px;
border: 3px solid ${({ borderColor }) => borderColor};
opacity: ${({ opacity }) => opacity};

/* @media(min-width: 700px){
    width: 200px;  
    height: 220px;  
} */

`
export const CardImageContainer = styled.div`
max-height: 100px;
overflow: hidden;

@media(min-width: 700px){
    max-height: 170px;
}
`
export const CardImage = styled.img`
width: 100%;
border-radius: 5px;
`
export const ArtefactCard = styled.div`
display: flex;
flex-direction: column;
width: 120px;
min-height: 100px;
margin: .2em;
background-color: ${({ bgColor }) => bgColor};
justify-content: center;
align-items: center;
color: white;
border: 3px solid ${({ borderColor }) => borderColor};
border-radius: 5px;
position: relative;
padding: .3em;
text-align: center;
align-items: center;

p{
    color: whitesmoke;
    margin: 0;
}

img{
    height: 50px;
    margin-bottom: .3em;
}

@media(min-width: 700px){
    /* width: 180px;   */
    height: 170px;  

    img{
    height: 100px;
    }
}
@media(min-width: 1025px){

    height: 170px;  

    img{
    height: 75px;
}

}
`