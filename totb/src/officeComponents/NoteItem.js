import styled from 'styled-components'

const StyledNote = styled.div`
color: red;
font-family: cursive;
`

export const NoteItem = (props)=><><StyledNote >{props.text}</StyledNote></>
