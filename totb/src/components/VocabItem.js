import styled from 'styled-components'

const StyledVocabItem = styled.div`
height: 7em;
width: 7em;
background-color: skyblue;
display: flex;
justify-content: center;
align-items: center;

`

function Item(props){
    return (
        <StyledVocabItem>{props.item}</StyledVocabItem>
    )
}

export default Item