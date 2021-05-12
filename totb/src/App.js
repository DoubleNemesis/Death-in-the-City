import VocabPage from './pages/VocabPage'
import Home from './pages/Home'
import Header from './pageElements/Header'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
//import TestPage from './pages/TestPage'

function App() {
  return (
    <>

      <Router>
      <Header>
      <nav>
      <Link to="/">home</Link>.
      <Link to="/vocab">vocab</Link>
        </nav>
    </Header>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/vocab">
          <VocabPage />
        </Route>
      </Router>
    </>
  );
}

export default App;
