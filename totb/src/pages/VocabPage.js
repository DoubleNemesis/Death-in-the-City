import {useEffect, useState} from 'react'
import Container from '../containers/VocabContainer'
import Title from '../generalComponents/Title'
import SubTitle from '../generalComponents/SubTitle'
import {data2 as data} from '../data/lessonData'

function VocabPage() {
    const [hasFinished, setHasFinished] = useState(false)

    let questions = data.vocabA.map((item, index)=>{
        return(
            <div key={`q${index}`}id={`question${index}`} className="card questionTile">{item}</div>
        )
    })
    let answers = data.vocabB.map((item, index)=>{
        return(
            <div key={`a${index}`}id={`answer${index}`} className="card questionTile">{item}</div>
        )
    })

    let tiles = questions.concat(answers)

useEffect(()=>{
    let selectedCards = [];
    let counter = 1
    document.addEventListener('click', function (e) {
        const targetTile = e.target;
        if (targetTile.classList.contains('card')) {
           if (!targetTile.classList.contains('selected')){
            selectedCards.push(targetTile.id)
            targetTile.classList.add('selected')
            if (selectedCards.length === 2) {
                let firstCard = document.getElementById(selectedCards[0])
                let secondCard = document.getElementById(selectedCards[1])
                if (selectedCards[0].slice(selectedCards[0].length - 1) === selectedCards[1].slice(selectedCards[1].length - 1)) {
                    firstCard.classList.add('used')
                    secondCard.classList.add('used')
                    firstCard.classList.remove('card')
                    secondCard.classList.remove('card')
                    firstCard.innerHTML += `<div class="correctTileTick">${counter}</div>`;
                    secondCard.innerHTML += `<div class="correctTileTick">${counter}</div>`;
                    selectedCards = [] //delete?
                    if (counter === 10){
                        console.log('finished');
                    }
                    else{
                        counter ++
                    }

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
               }       //here
        }
    })
})

    return (
        <div className="vocabPage">
            <Title>Your first challenge...</Title>
            <SubTitle>Click on a word and then click on its synonym</SubTitle>
            <Container>
                {tiles = tiles.sort(() => Math.random() - 0.5)}
            </Container>
        </div>
    )
}

export default VocabPage