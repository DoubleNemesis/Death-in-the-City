import VocabPage from './pages/VocabPage'
import Home from './pages/Home'
import Office from './pages/Office'
import IdeasBoard from './pages/IdeasBoard'
import Header from './pageElements/Header'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
//import TestPage from './pages/TestPage'

function App() {
  return (
    <div className="outer">

      <Router>
      <Header>
      <nav>
      <Link to="/">home</Link>.
      <Link to="/vocab">vocab</Link>
      <Link to="/office">office</Link>
        </nav>
    </Header>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/Office">
          <Office />
        </Route>
        <Route path="/IdeasBoard">
          <IdeasBoard />
        </Route>
        <Route path="/vocab">
          <VocabPage />
        </Route>
      </Router>
    </div>
  );
}

export default App;
