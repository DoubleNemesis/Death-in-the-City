import {useState} from 'react'
import VocabPage from './pages/VocabPage'
import Home from './pages/Home'
import Office from './pages/Office'
import Concierge from './pages/Witness1'
import MrGrey from './pages/Client'
import Trial1 from './pages/Trial1'
import Header from './pageElements/Header'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import GameContext from './context/GameContext'
//import TestPage from './pages/TestPage'

function App() {

const [hasDoneVocab, setHasDoneVocab] = useState(false)


  return (
    <div className="outer">

      <Router>
        <GameContext.Provider value={{vocab: [hasDoneVocab, setHasDoneVocab]}}>
      <Header>
      <nav>
      <Link to="/">home</Link>.
      <Link to="/vocab">vocab</Link>
      <Link to="/office">office</Link>
      <Link to="/concierge">Concierge</Link>
      <Link to="/mrgrey">MrGrey</Link>
      <Link to="/trial1">SafeCrack</Link>
        </nav>
    </Header>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/office">
          <Office />
        </Route>
        <Route path="/concierge">
          <Concierge />
        </Route>
        <Route path="/trial1">
          <Trial1/>
        </Route>
        <Route path="/vocab">
          <VocabPage />
        </Route>
        <Route path="/mrgrey">
          <MrGrey />
        </Route>
      </GameContext.Provider>
      </Router>
    </div>
  );
}

export default App;
