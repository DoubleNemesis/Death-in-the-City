import { useEffect, useState, useContext } from 'react'
import { history, useHistory } from 'react-router-dom'
import Container from '../containers/VocabContainer'
import { vocabData as data } from '../data/lessonData'
import GameContext from '../context/GameContext'
import { SpeechBubbleLeft } from './witness/witnessComponents/Questions'
import NextPageButton from '../generalComponents/NextPageButton'
import client from '../images/client.jpg'

function VocabPage() {
    const { hasDoneVocab, setHasDoneVocab } = useContext(GameContext)
    const {bubbleText1, bubbleText2} = data
    console.log(hasDoneVocab);
    let history = useHistory()

    let questions = data.vocabA.map((item, index) => {
        return (
            <div key={`q${index}`} id={`question${index}`} className="card questionTile">{item}</div>
        )
    })
    let answers = data.vocabB.map((item, index) => {
        return (
            <div key={`a${index}`} id={`answer${index}`} className="card questionTile">{item}</div>
        )
    })


    let tiles = questions.concat(answers)

    useEffect(() => {
        let selectedCards = [];
        let counter = 1
        document.addEventListener('click', function (e) {
            const targetTile = e.target;
            if (targetTile.classList.contains('card')) {
                if (!targetTile.classList.contains('selected')) {
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
                            firstCard.innerHTML += `<span class="correctTileTick">${counter}</span>`;
                            secondCard.innerHTML += `<span class="correctTileTick">${counter}</span>`;
                            selectedCards = [] //delete?
                            if (counter === 10) {
                                console.log('finished');
                                setHasDoneVocab(true)
                            }
                            else {
                                counter++
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
                }
                else {
                    targetTile.classList.remove('selected')
                    selectedCards = []
                }     
            }
        })
    })


    return (
        <div className="vocabPage">
            <SpeechBubbleLeft image={client} bubbleWidth="90">
            {!hasDoneVocab ? bubbleText1 : bubbleText2 }
            </SpeechBubbleLeft>

            {!hasDoneVocab ?
                <Container>
                    {tiles = tiles.sort(() => Math.random() - 0.5)}
                </Container> :
                <Container>
                    <NextPageButton destination="officebase">Go to the office!</NextPageButton>
                </Container>



            }

        </div>
    )
}

export default VocabPage