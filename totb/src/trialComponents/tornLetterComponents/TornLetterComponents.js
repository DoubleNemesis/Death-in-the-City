import styled, {keyframes} from 'styled-components'

const rotateLetterPiece = keyframes`

`

const Container = styled.div`
border: 1px solid red;
width: 200px;
cursor: grab;
`



export const TornLetterPiece = (props)=><Container onDoubleClick={props.onDoubleClick}>Some Text Here</Container>