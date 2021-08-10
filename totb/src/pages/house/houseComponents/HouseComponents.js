import styled from 'styled-components'

export const Container = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;

@media(min-width: 1025px){
    flex-direction: row;
}
`

const HouseContainer = styled.div`
width: 100%;
background-color: red;
margin: 0 auto;
`
export const InnerContainer = styled.div`
display: flex;
flex-direction: column;
` 

const WitnessHouse = styled.img`
max-width: 100%;
border: 4px solid #141414;
`

export const HouseDisplay = (props)=>{
    return(
        <HouseContainer><WitnessHouse src={props.house}/></HouseContainer>
    )
}