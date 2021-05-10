import {useEffect} from 'react'
import Container from '../containers/VocabContainer'
import Title from '../components/Title'
import SubTitle from '../components/SubTitle'
import data from '../data/lessonData'


function VocabPage() {

    let questions = data.vocabA.map((item, index)=>{
        return(
            <div key={`q${index}`}id={`question${index}`} className="card question">{item}</div>
        )
    })
    let answers = data.vocabB.map((item, index)=>{
        return(
            <div key={`a${index}`}id={`answer${index}`} className="card question">{item}</div>
        )
    })
let tiles = questions.concat(answers)


useEffect(()=>{
    let selectedCards = [];
    document.addEventListener('click', function (e) {
        const targetTile = e.target;
        if (targetTile.classList.contains('card')) {
            console.log('running');
            selectedCards.push(targetTile.id)
            console.log(selectedCards)
            targetTile.classList.add('selected')
            if (selectedCards.length === 2) {
                let firstCard = document.getElementById(selectedCards[0])
                let secondCard = document.getElementById(selectedCards[1])
                if (selectedCards[0].slice(selectedCards[0].length - 1) === selectedCards[1].slice(selectedCards[1].length - 1)) {
                    firstCard.classList.add('used')
                    secondCard.classList.add('used')
                    firstCard.classList.remove('card')
                    secondCard.classList.remove('card')
                    selectedCards = []
                }
                else {
                    firstCard.classList.add('wrong')
                    secondCard.classList.add('wrong')
                    firstCard.classList.remove('selected')
                    secondCard.classList.remove('selected')
                    setTimeout(() => {
                        firstCard.classList.remove('wrong')
                        secondCard.classList.remove('wrong')
                    }, 1000)
                }
                selectedCards = []
            }
        }
    })

})

    


    return (
        <>
            <Title>Vocabulary</Title>
            <SubTitle>Click on a word and then click on its synonym</SubTitle>
            <Container>
                {tiles = tiles.sort(() => Math.random() - 0.5)}
            </Container>
        </>
    )

}

export default VocabPage