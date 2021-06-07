import {useState} from 'react'
import VocabPage from './pages/VocabPage'
import Home from './pages/Home'
import Office from './pages/Office'
import Witness from './pages/witness/Witness'
import MrGrey from './pages/Client'
import CodeBox from './pages/trials/codeBox/CodeBox'
import TornLetter from './pages/trials/tornLetter/TornLetter'
import ErrorCorrection from './pages/trials/errorCorrection/ErrorCorrection'
import BackStory from './pages/BackStory'
import Header from './pageElements/Header'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import * as lessonData from './data/lessonData'
import TonyPic from './images/tonymonceto.png'
import ChayPic from './images/chaymadz.jpg'
import KirstenPic from './images/janitor.png'
// import DallasPic from './images/tonymonceto.png'
// import FloePic from './images/chaymadz.jpg'
// import WendyPic from './images/janitor.png'

import GameContext from './context/GameContext'

function App() {

const [hasDoneVocab, setHasDoneVocab] = useState(false)
const [level, setLevel] = useState(1)

const providedValues = {hasDoneVocab, setHasDoneVocab, level, setLevel}

const {characterNames} = lessonData['characterNames'];
const {questionsWitness1, questionsWitness1_2, witnessConversationArray1, trialURL1} = lessonData['questionsWitness1'];
const {questionsWitness2, questionsWitness2_2, witnessConversationArray2, trialURL2} = lessonData['questionsWitness2'];
const {questionsWitness3, questionsWitness3_2, witnessConversationArray3, trialURL3} = lessonData['questionsWitness3'];
const {questionsWitness4, questionsWitness4_2, witnessConversationArray4, trialURL4} = lessonData['questionsWitness4'];

  return (
    <div className="outer">

      <Router>
        <GameContext.Provider value={providedValues}>
      <Header>
      <nav>
      <Link to="/">home</Link>.
      <Link to="/vocab">vocab</Link>
      <Link to="/office">office</Link>
      <Link to="/witness1">{characterNames[0]}</Link>
      <Link to="/witness2">{characterNames[1]}</Link>
      <Link to="/witness3">{characterNames[2]}</Link>
      <Link to="/witness4">{characterNames[3]}</Link>
      <Link to="/mrgrey">MrGrey</Link>
      <Link to="/codebox">SafeCrack</Link>
      <Link to="/tornletter">TornLetter</Link>
      <Link to="/errorCorrection">ErrorCorrection</Link>
      <Link to="/backstory">BackStory</Link>
        </nav>
    </Header>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/office">
          <Office />
        </Route>
        <Route path="/witness1">
        <Witness
          title={characterNames[0]} 
          questionsWit={questionsWitness1}
          questionsWit2={questionsWitness1_2}
          conversationArray={witnessConversationArray1}
          personImage={TonyPic}
          trialURL={trialURL1}
          />
        </Route>
        <Route path="/witness2">
        <Witness
          title={characterNames[1]} 
          questionsWit={questionsWitness2}
          questionsWit2={questionsWitness2_2}
          conversationArray={witnessConversationArray2}
          personImage={ChayPic}
          trialURL={trialURL2}
          />
        </Route>
        <Route path="/witness3">
          <Witness
          title={characterNames[2]} 
          questionsWit={questionsWitness3}
          questionsWit2={questionsWitness3_2}
          conversationArray={witnessConversationArray3}
          personImage={KirstenPic}
          trialURL={trialURL2}
          />
        </Route>
        <Route path="/witness4">
          <Witness
          title={characterNames[3]} 
          questionsWit={questionsWitness4}
          questionsWit2={questionsWitness4_2}
          conversationArray={witnessConversationArray4}
          personImage={KirstenPic}
          trialURL={trialURL2}
          />
        </Route>
        {/* //props below to make trial pages reeusable */}
        <Route path="/tornletter"> 
          <TornLetter/>
        </Route>
        <Route path="/codebox"> 
          <CodeBox/>
        </Route>
        <Route path="/errorCorrection">
          <ErrorCorrection/>
        </Route>
        <Route path="/vocab">
          <VocabPage />
        </Route>
        <Route path="/mrgrey">
          <MrGrey />
        </Route>
        <Route path="/backstory">
          <BackStory />
        </Route>
      </GameContext.Provider>
      </Router>
    </div>
  );
}

export default App;
