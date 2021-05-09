// title
// gamecontainer
// 
import data from '../data/lessonData'
import Container from '../containers/VocabContainer'
import Item from '../components/VocabItem'




function VocabPage(){

let newData = data['vocabA'].map(item => 
    <Item key={item} item={item}/>
    )
    console.log(data)

    return(
        <>
        <h2>Vocab Page</h2>
        <Container>
        {newData}
        </Container>
        </>
    )

}

export default VocabPage