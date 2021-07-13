import styled from 'styled-components'
import { history, useHistory } from 'react-router-dom'


const StyledButton = styled.button`
color: white;
background-color: ${({color})=> color || 'red'};
padding: 1.2em 2.2em;
margin: .2em auto;
font-size: ${({fontSize})=> fontSize || 2} rem;
border: none;

:hover{
    background-color: orange;
    border: 1px solid grey; 
    color: black;
}
`
// export const LinkButtonSmall = ()=>{
//     return <StyledButton onClick={()=>history.push(`${props.destination}`)}>{children}</StyledButton>
// }

function NextPageButton({ children, ...props }) {
    let history = useHistory()

    return (
  
            <StyledButton onClick={()=>history.push(`${props.destination}`)}>{children}</StyledButton>

    )

}

export default NextPageButton 