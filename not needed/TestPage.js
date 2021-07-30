import {useEffect} from 'react'
import Container from '../containers/VocabContainer'
import data from '../data/lessonData'


function TestPage() {

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
                    console.log(selectedCards.length);
                    firstCard.classList.add('used')
                    secondCard.classList.add('used')
                    firstCard.classList.remove('card')
                    secondCard.classList.remove('card')
                    selectedCards = []
                    console.log(selectedCards);
                }
                else {
                    console.log('lose');
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
            <h2>Vocab Page</h2>
            <Container>
        {/* <div className="card question" id="question1">arid</div>
        <div className="card question" id="question2">comouflage</div>
        <div className="card question" id="question3">asset</div>
        <div className="card question" id="question4">breed</div>
        <div className="card question" id="question5">beast</div>
        <div className="card question" id="question6">curse</div>
        <div className="card question" id="question7">inscription</div>
        <div className="card question" id="question8">row (vb)</div>
        <div className="card question" id="question9">thrive</div>
        <div className="card question" id="question10">trample</div>
        <div className="card answer" id="answer1">dry</div>
        <div className="card answer" id="answer2">disguise</div>
        <div className="card answer" id="answer3">property</div>
        <div className="card answer" id="answer4">reproduce</div>
        <div className="card answer" id="answer5">creature</div>
        <div className="card answer" id="answer6">jinx</div>
        <div className="card answer" id="answer7">carved text</div>
        <div className="card answer" id="answer8">propel</div>
        <div className="card answer" id="answer9">grow</div>
        <div className="card answer" id="answer10">tread on</div> */}
{tiles = tiles.sort(() => Math.random() - 0.5)}
            </Container>
        </>
    )

}

export default TestPage