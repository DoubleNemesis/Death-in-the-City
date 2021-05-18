import styled from 'styled-components'

const StyledWitnessImage = styled.img`
width: 30vw;
`
export const WitnessImage = (props)=><StyledWitnessImage src={props.img}></StyledWitnessImage>
