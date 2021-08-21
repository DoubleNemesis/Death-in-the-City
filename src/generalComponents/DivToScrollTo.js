import styled from 'styled-components'

const TargetDiv = styled.div`
@media(min-width:1025px){
    display: none;
}
`

export const DivToScrollTo = ()=>{
    return <TargetDiv id="divToScrollTo"></TargetDiv>
}