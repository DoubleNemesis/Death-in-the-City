import styled from 'styled-components'

export const MessageContainer = styled.div`
display: flex;
justify-content: center;
margin: .5em;
background-color: ${({bgColor})=>bgColor || 'transparent' } ;
padding: .3em;
color: ${({color})=> color ||'black'};
font-weight: 600;
flex-direction: column;
align-items: center;
text-align: center;
border-radius: 5px;


h3{
    margin: 1em;
}

@media(min-width: 1025px){
    width: ${({width})=>width || '80'}%;
    padding: 1em;
    border: 3px solid #141414;
    margin-top: 1em;

    h3{
    margin-top: unset;

}
}

`