import styled, {keyframes} from 'styled-components'

const itemIn = keyframes`
0% { opacity: 0; right: -220px}
25% { opacity: 1; right: 200px}
75% { opacity: 1; right: 200px}
100% { opacity: 1; right: 600px}
`
const itemOut = keyframes`
0% { opacity: 1; right: 200px}
100% { opacity: 0; right: 600px}
`
export const HomeItem = styled.div`
/* opacity: 0; */
/* position: absolute;
animation-name: ${itemIn};
animation-duration: 3s;
animation-iteration-count: 4; */
min-width: 50%;
/* animation-delay: 0s; */
/* animation-duration: 1s; */
/* animation-fill-mode: forwards; */
/* animation-fill-mode: initial; */
`

const StyledContainer = styled.div`
display: flex;
flex-direction: column;
position: relative;
width: 100%;
height: 100vh;
border-radius: .3em;
/* border: 5px solid #333; */
background-color: #2d2e36;
color: whitesmoke;
font-size: 1.1rem;
opacity: 0;
margin: 1em;
/* padding: 1em; */

animation-name: fadeIn;
animation-delay: .3s;
animation-duration: .6s;
animation-fill-mode: forwards;

.bulletContainer{
    display: flex;
    justify-content: center;
    margin: 1em;
}

.modalContainer{
    position: absolute;
    left: 0;
    right: 0;
    margin-left: auto;
 	margin-right: auto;
    top: 3%;
    max-width: 100%;
    /* background-color: #2d2e36; */
    text-align: center;
    padding: .5em;
    /* position: relative; */
    /* border-top: 4px solid #666;
    border-bottom: 4px solid #666; */
}

img{
/* margin-bottom: 1em; */
margin: 0;
}

button{
    margin: 0 0 0 0;
}

p{
    margin: 1em;
    font-size: .9rem;
}

ul{
    /* list-style: none; */
    font-size: .9rem;
    margin-left: 2em;
}

h2{
    font-family: inherit;
}

@keyframes fadeIn{
    0% {opacity: 0}
    100%{opacity: 1}
}


/* @media(max-width:900px){
    margin-top: 1em;
    width: 100%;
    min-height: unset;
    flex-direction: column;
    border-radius: unset;
    border: unset;
} */

`

export function TextContainer({children, ...restProps}){

    return (
        <StyledContainer>{children}</StyledContainer>
    )
}

//export default PageContainer