import {useState} from 'react'
import VocabPage from './pages/VocabPage'
import Home from './pages/Home'
import Office from './pages/Office'
import Witness1 from './pages/Witness1'
import Witness2 from './pages/Witness2'
import MrGrey from './pages/Client'
import CodeBox from './pages/CodeBox'
import TornLetter from './pages/TornLetter'
import BackStory from './pages/BackStory'
import Header from './pageElements/Header'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import GameContext from './context/GameContext'

function App() {

const [hasDoneVocab, setHasDoneVocab] = useState(false)
const [level, setLevel] = useState(1)

const providedValues = {hasDoneVocab, setHasDoneVocab, level, setLevel}

  return (
    <div className="outer">

      <Router>
        <GameContext.Provider value={providedValues}>
      <Header>
      <nav>
      <Link to="/">home</Link>.
      <Link to="/vocab">vocab</Link>
      <Link to="/office">office</Link>
      <Link to="/witness1">Janitor</Link>
      <Link to="/witness2">Chay Madz</Link>
      <Link to="/mrgrey">MrGrey</Link>
      <Link to="/codebox">SafeCrack</Link>
      <Link to="/tornletter">TornLetter</Link>
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
          <Witness1 />
        </Route>
        <Route path="/witness2">
          <Witness2 />
        </Route>
        <Route path="/codebox">
          <CodeBox/>
        </Route>
        <Route path="/tornletter">
          <TornLetter/>
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
