import { useEffect, useContext } from 'react'
import Container, {StyledAnswersContainer} from './vocabComponents/VocabContainer'
import { vocabData as data } from '../../data/lessonData'
import GameContext from '../../context/GameContext'
import { SpeechBubbleLeft } from '../../generalComponents/ConversationComponents'
import NextPageButton from '../../generalComponents/NextPageButton'
import teacher from '../../images/teacher.png'
import { officeCards } from '../../data/lessonData'
import './VocabStyles.css'

function VocabPage() {
    const { hasDoneVocab, setHasDoneVocab } = useContext(GameContext)
    const { collectedWitnesses, setCollectedWitnesses } = useContext(GameContext)
    const {bubbleText1, bubbleText2} = data

    useEffect(()=>{
        window.scrollTo(0,0)
      },[])

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

    let questionsList = data.vocabA.map((item, index) => {
        return (
            <p key={`q${index}`}>{item}</p>
        )
    })

    let answersList = data.vocabB.map((item, index) => {
        return (
            <p key={`a${index}`} >{item}</p>
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
                            console.log(selectedCards)
                            selectedCards = [] //delete?
                            if (counter === 10) {
                                console.log('finished');
                                setHasDoneVocab(true)
                                window.scrollTo(0, 0)
                                let dummyCollectedWitnesses = [...collectedWitnesses]
                                dummyCollectedWitnesses.push(officeCards.witnesses[0].name)
                                setCollectedWitnesses(dummyCollectedWitnesses)
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
            <SpeechBubbleLeft image={teacher} bubbleWidth="90">
            {!hasDoneVocab ? bubbleText1 : bubbleText2 }
            </SpeechBubbleLeft>
            {!hasDoneVocab ?
                <Container>
                    {tiles = tiles.sort(() => Math.random() - 0.5)}
                </Container> :
                <Container>
                    <div><NextPageButton destination="office" margin=".5em auto">Go to Office</NextPageButton></div>
                    <StyledAnswersContainer>
                   <div> {questionsList} </div>
                  <div>  {answersList} </div>
                  </StyledAnswersContainer>
                </Container>
            }
        </div>
    )
}

export default VocabPage