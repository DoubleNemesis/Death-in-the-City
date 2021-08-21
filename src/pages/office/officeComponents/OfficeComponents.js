import styled from 'styled-components'
import woodbg from '../../../images/woodbg.jpg'

export const Container = styled.div`
position: relative;
display: flex;
flex-wrap: wrap;
width: 100%;
justify-content: center;
background-image: url(${woodbg});
background-repeat: no-repeat;
background-size: cover;
padding: 1em 1em 7.5em 1em;

@media(min-width: 700px){
    border-radius: 5px;
    margin: 0em auto;
    padding-bottom: 3em;
}

@media(min-width: 1025px){
    width: 80%;
    margin: 0em auto;
    padding-bottom: 3em;
}
`

export const GuessContainer = styled.div`
position: relative;

@media(min-width: 200px){
    top: 0;
    right: 0;
    position: absolute;
}
`

export const ArtefactDisplay = styled.div`
display: flex;
flex-direction: column;
width: 90%;
justify-content: center;
align-items: center;
text-align: center;
p{
    width: 100%;
}
img{
    width:50%;
}
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
min-height: 170px;
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
    :hover{
        height: 51px;
    }
}

@media(min-width: 700px){
    height: 190px;  

    img{
    height: 100px;
    height: 35%;
    }
}
@media(min-width: 1025px){
    img{
    height: 50%;
}

}
`