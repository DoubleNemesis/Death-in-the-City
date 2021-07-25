import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'
import VocabPage from './pages/VocabPage'
import Home from './pages/Home'
import Door from './pages/door/Door'
import Start from './pages/Start'
import Footer from './pages/Footer'
import Credits from './pages/Credits'
import Office from './pages/Office'
import OfficeBase from './pages/office/Office'
// import Witness from './pages/witness/Witness'
import WitnessComp from './pages/witness/WitnessComp'
import MrGrey from './pages/Client'
import CodeBox from './pages/trials/codeBox/CodeBox'
// import TornLetter from './pages/trials/tornLetter/TornLetter'
import ShreddedLetter from './pages/trials/shreddedLetter/ShreddedLetter'
import LoveLetter from './pages/trials/loveLetter/LoveLetter'
import ErrorCorrection from './pages/trials/errorCorrection/ErrorCorrection'
import Redacted from './pages/trials/redacted/Redacted'
import OrderEvents from './pages/trials/orderEvents/OrderEvents'
import BackStory from './pages/BackStory'
import EndPage from './pages/EndPage'
import Sneaky from './pages/sneaky/Sneaky'
import CrimeScene from './pages/CrimeScene'
// import Cont from './pageElements/Cont'
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom'
import * as lessonData from './data/lessonData'
import TonyPic from './images/tonymonceto.png'
import ChayPic from './images/chaymadz.jpg'
import KirstenPic from './images/kirsten.jpg'
import DallasPic from './images/dallas.jpg'
import { homePageData } from './data/lessonData'
import Title from './generalComponents/Title'
import FloePic from './images/floe.jpg'
import WendyPic from './images/wendy.jpg'
import doorGrey from './images/doorGrey.png'
import doorBlue from './images/doorBlue.png'
import doorRed from './images/doorRed.png'
import doorWhite from './images/doorWhite.png'
import doorYellow from './images/doorYellow.png'
import chayYard from './images/chayYard.jpg'
import kirstenYard from './images/kirstenYard.jpg'
import dallasYard from './images/dallasYard.jpg'
import lucyYard from './images/lucyYard.jpg'
import wendyYard from './images/wendyYard.jpg'
import scroll from './images/scroll.png'
import shreddedletterPic from './images/shreddedletter.png'
import errorcorrectionPic from './images/errorcorrection.png'
import secretcodePic from './images/secretcode.png'
import policestatementPic from './images/policestatement.png'
import medicalreportPic from './images/medicalreport.png'
import weightlifterPic from './images/weightlifter.png'
import poisonpenPic from './images/poison.png'
import receiptPic from './images/receipt.png'
import GameContext from './context/GameContext'


function App() {

  const [hasDoneVocab, setHasDoneVocab] = useState(false)
  const [hasVisitorBook, setHasVisitorBook] = useState(false)
  const [isInstructionsModalDisplayed, setIsInstructionsModalDisplayed] = useState(true)
  const [items, setItems] = useState([])
  const [collectedArtefacts, setCollectedArtefacts] = useState([])
  const [completedChallenges, setCompletedChallenges] = useState([])
  const [collectedWitnesses, setCollectedWitnesses] = useState([])
  const [isShreddedLetterCorrect, setIsShreddedLetterCorrect] = useState(false)
  const [isErrorCorrectionComplete, setIsErrorCorrectionComplete] = useState(false)
  const [displayFullLoveLetterText, setDisplayFullLoveLetterText] = useState(false)
  const { homeTitle, homeSubtitle } = homePageData
  const providedValues = {
    hasDoneVocab, setHasDoneVocab,
    hasVisitorBook, setHasVisitorBook,
    items, setItems,
    isInstructionsModalDisplayed, setIsInstructionsModalDisplayed,
    collectedArtefacts, setCollectedArtefacts,
    collectedWitnesses, setCollectedWitnesses,
    completedChallenges, setCompletedChallenges,
    isShreddedLetterCorrect, setIsShreddedLetterCorrect,
    isErrorCorrectionComplete, setIsErrorCorrectionComplete,
    displayFullLoveLetterText, setDisplayFullLoveLetterText
  }

  const { characterNames } = lessonData['characterNames'];
  const { characterFirstNames } = lessonData['characterFirstNames'];
  const { questionsWitness1, questionsWitness1_2, witnessConversationArray1, trialURL1, exitMessage1, speechBubbleText1 } = lessonData['questionsWitness1'];
  const { questionsWitness2, questionsWitness2_2, witnessConversationArray2, trialURL2, exitMessage2 } = lessonData['questionsWitness2'];
  const { questionsWitness3, questionsWitness3_2, witnessConversationArray3, trialURL3, exitMessage3 } = lessonData['questionsWitness3'];
  const { questionsWitness4, questionsWitness4_2, witnessConversationArray4, trialURL4, exitMessage4 } = lessonData['questionsWitness4'];
  const { questionsWitness5, questionsWitness5_2, witnessConversationArray5, trialURL5, exitMessage5 } = lessonData['questionsWitness5'];
  const { questionsWitness6, questionsWitness6_2, witnessConversationArray6, trialURL6, exitMessage6 } = lessonData['questionsWitness6'];
  const { artefacts } = lessonData['officeCards'];

  return (
    <>
    <div className="outer">
      <Router>
        <GameContext.Provider value={providedValues}>
          <Navbar expand="lg">
            <Navbar.Brand><Link to="/"><Title>{homeTitle}</Title></Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/start">start</Link>.
                <Link className="nav-link" to="/vocab">vocab</Link>
                <Link className="nav-link" to="/office">office</Link>
                <Link className="nav-link" to="/witness1">{characterNames[0]}</Link>
                <Link className="nav-link" to="/crimescene">crimeScene</Link>
                <Link className="nav-link" to="/witness2">{characterNames[1]}</Link>
                <Link className="nav-link" to="/witness3">{characterNames[2]}</Link>
                <Link className="nav-link" to="/witness4">{characterNames[3]}</Link>
                <Link className="nav-link" to="/witness5">{characterNames[4]}</Link>
                <Link className="nav-link" to="/witness6">{characterNames[5]}</Link>
                <Link className="nav-link" to="/mrgrey">MrGrey</Link>
                <Link className="nav-link" to="/codebox">SafeCrack</Link>
                <Link className="nav-link" to="/tornletter">TornLetter</Link>
                <Link className="nav-link" to="/loveletter">LoveLetter</Link>
                <Link className="nav-link" to="/errorcorrection">ErrorCorrection</Link>
                <Link className="nav-link" to="/backstory">BackStory</Link>
                <Link className="nav-link" to="/redacted">Redacted</Link>
                <Link className="nav-link" to="/orderevents">Order Events</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/start">
            <Start />
          </Route>
          <Route path="/office">
            <Office />
          </Route>
          <Route path="/officebase">
            <OfficeBase />
          </Route>
          <Route path="/door">
            <Door />
          </Route>
          <Route path="/mrgrey">
            <MrGrey />
          </Route>
          <Route path="/vocab">
            <VocabPage />
          </Route>
          <Route path="/backstory">
            <BackStory />
          </Route>
          <Route path="/witness1"> {/*Tony Monceto*/}
            <WitnessComp
              title={characterNames[0]}
              questionsWit={questionsWitness1}
              questionsWit2={questionsWitness1_2}
              conversationArray={witnessConversationArray1}
              personImage={TonyPic}
              personText="This is my witness backstory"
              trialURL={trialURL1}
              exitMessage={exitMessage1}
              speechBubbleText={speechBubbleText1}
              doorImg={doorGrey}
            />
          </Route>
          <Route path="/codebox">
            <CodeBox />
          </Route>
          <Route path="/crimescene">
            <CrimeScene />
          </Route>
          <Route path="/witness2"> {/*Chay*/}
            <WitnessComp
              title={characterNames[1]}
              questionsWit={questionsWitness2}
              questionsWit2={questionsWitness2_2}
              conversationArray={witnessConversationArray2}
              personImage={ChayPic}
              trialURL={trialURL2}
              exitMessage={exitMessage2}
              doorImg={doorBlue}
              doorTitle={characterFirstNames[1]}
            />
          </Route>
          <Route path="/sneaky1">
            <Sneaky title="" artefactName={artefacts[0].name} artefactImage={shreddedletterPic} hasArtefact yardImage={chayYard}/>
          </Route>
          <Route path="/shreddedletter">
            <ShreddedLetter artefactName={artefacts[0].name} />
          </Route>
          <Route path="/witness3"> {/*Kirsten*/}
            <WitnessComp
              title={characterNames[2]}
              questionsWit={questionsWitness3}
              questionsWit2={questionsWitness3_2}
              conversationArray={witnessConversationArray3}
              personImage={KirstenPic}
              trialURL={trialURL3}
              exitMessage={exitMessage3}
              doorImg={doorRed}
              doorTitle={characterFirstNames[2]}
              artefactName={artefacts[1].name} 
              artefactImage={artefacts[1].image} //????
              binCheck={'sneaky2'}
            />
          </Route>
          <Route path="/sneaky2">
          <Sneaky title="" artefactName={artefacts[7].name} artefactImage={receiptPic} yardImage={kirstenYard}/> {/*receipt*/}
          </Route>
          <Route path="/errorcorrection">
            <ErrorCorrection  artefactName={artefacts[1].name}/>
          </Route>
          <Route path="/witness4"> {/*Dallas*/}
            <WitnessComp
              title={characterNames[3]}
              questionsWit={questionsWitness4}
              questionsWit2={questionsWitness4_2}
              conversationArray={witnessConversationArray4}
              personImage={DallasPic}
              trialURL={trialURL4}
              exitMessage={exitMessage4}
              doorImg={doorYellow}
              doorTitle={characterFirstNames[3]}
              binCheck={'sneaky3'}
              artefactName={artefacts[3].name} //order events
              artefactImage={artefacts[3].image} //order events
            />
          </Route>
          <Route path="/sneaky3">
          <Sneaky title="" artefactName={artefacts[6].name} artefactImage={poisonpenPic} yardImage={dallasYard} /> {/*poison*/}
          </Route>
          <Route path="/orderevents">
            <OrderEvents artefactName={artefacts[3].name} />
          </Route>
          <Route path="/witness5"> {/*Lucy*/}
            <WitnessComp
              title={characterNames[4]}
              questionsWit={questionsWitness5}
              questionsWit2={questionsWitness5_2}
              conversationArray={witnessConversationArray5}
              personImage={FloePic}
              trialURL={trialURL5}
              exitMessage={exitMessage5}
              doorImg={doorWhite}
              doorTitle={characterFirstNames[4]}
            />
          </Route>
          <Route path="/sneaky4">
          <Sneaky title="" artefactName={artefacts[2].name} artefactImage={secretcodePic} hasArtefact yardImage={lucyYard}/>  {/*loveletter*/}
          </Route>
          <Route path="/loveletter">
            <LoveLetter artefactName={artefacts[2].name} />
          </Route>
          <Route path="/witness6"> {/*wendy*/}
            <WitnessComp
              title={characterNames[5]}
              questionsWit={questionsWitness6}
              questionsWit2={questionsWitness6_2}
              conversationArray={witnessConversationArray6}
              personImage={WendyPic}
              trialURL={trialURL6}
              exitMessage={exitMessage6}
              doorImg={doorGrey}
              doorTitle={characterFirstNames[5]}
              artefactName={artefacts[4].name} //redacted report
              artefactImage={artefacts[4].image} 
              binCheck={'sneaky5'}
            />
          </Route>
          <Route path="/sneaky5">
          <Sneaky title="" artefactName={artefacts[5].name} artefactImage={weightlifterPic} yardImage={wendyYard}/> {/*weight*/}
          </Route>
          <Route path="/redacted">
            <Redacted artefactName={artefacts[4].name} />
          </Route>
          <Route path="/endpage">
            <EndPage />
          </Route>
          <Route path="/credits">
            <Credits />
          </Route>
        </GameContext.Provider>
      </Router>
      
    </div>
    <Footer/>
    </>
  );
}

export default App;
