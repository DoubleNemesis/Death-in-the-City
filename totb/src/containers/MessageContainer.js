import styled from 'styled-components'

export const MessageContainer = styled.div`
display: flex;
justify-content: center;
margin: .5em;
background-color: ${({bgColor})=>bgColor || 'transparent' } ;
padding: .3em;
color: black;
font-weight: 600;
flex-direction: column;
align-items: center;
text-align: center;

h3{
    margin-top: 1em;
}
`