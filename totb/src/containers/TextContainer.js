import styled from 'styled-components'

const StyledContainer = styled.div`
display: flex;
width: 90%;
border-radius: .3em;
border: 3px solid limegreen;
background-color: whitesmoke;
color: black;
font-size: 1.1rem;
opacity: 0;
margin: 1em;
padding: 1em;

animation-name: fadeIn;
animation-delay: .1s;
animation-duration: .3s;
animation-fill-mode: forwards;

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

function PageContainer({children, ...restProps}){

    return (
        <StyledContainer>{children}</StyledContainer>
    )
}

export default PageContainer