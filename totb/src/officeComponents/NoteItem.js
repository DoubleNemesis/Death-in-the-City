import styled from 'styled-components'

const styledNote = styled.div`
color: red;
font-family: cursive;
`

export const NoteItem = (props)=><><styledNote key={props.key}>{props.text}</styledNote></>
