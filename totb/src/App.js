import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react'
import { GlobalStyle } from './styles/GlobalStyle'
import { Outer } from './pageElements/Outer'
import VocabPage from './pages/vocab/VocabPage'
import Home from './pages/home/Home'
import Door from './pages/door/Door'
import Start from './pages/newspaper/Newspaper'
import Footer from './pageElements/Footer'
import Credits from './pages/credits/Credits'
import Office from './pages/office/Office'
import Witness from './pages/witness/Witness'
import CodeBox from './pages/trials/codeBox/CodeBox'
import ShreddedLetter from './pages/trials/shreddedLetter/ShreddedLetter'
import LoveLetter from './pages/trials/loveLetter/LoveLetter'
import ErrorCorrection from './pages/trials/errorCorrection/ErrorCorrection'
import Redacted from './pages/trials/redacted/Redacted'
import OrderEvents from './pages/trials/orderEvents/OrderEvents'
import BackStory from './pages/backstory/BackStory'
import EndPage from './pages/endpage/EndPage'
import Sneaky from './pages/sneakyBinPeak/SneakyBinPeak'
import CrimeScene from './pages/crimescene/CrimeScene'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import * as lessonData from './data/lessonData'
import detective from './images/detective.png'
import TonyPic from './images/tonymonceto.png'
import ChayPic from './images/chaymadz.jpg'
import KirstenPic from './images/kirsten.jpg'
import DallasPic from './images/dallas.jpg'
import { homePageData } from './data/lessonData'
import Title from './generalComponents/Title'
import LucyPic from './images/lucy.jpg'
import WendyPic from './images/wendy.jpg'
import tonyYard from './images/tonyYard.jpg'
import chayYard from './images/chayYard.jpg'
import chayHouse from './images/chayHouse.jpg'
import kirstenYard from './images/kirstenYard.jpg'
import dallasYard from './images/dallasYard.jpg'
import dallasHouse from './images/dallasHouse.jpg'
import lucyYard from './images/house5.jpg'
import wendyYard from './images/wendyYard.jpg'
import shreddedletterPic from './images/shreddedletter.png'
import secretcodePic from './images/secretcode.png'
import weightlifterPic from './images/weightlifter.png'
import poisonpenPic from './images/poison.png'
import receiptPic from './images/receipt.png'
import mapImageUrban from './images/mapUrban.png'
import mapImageSuburban from './images/mapSuburban.png'
import mapImageRural from './images/mapRural.png'
import GameContext from './context/GameContext'


function App() {
  const [hasDoneVocab, setHasDoneVocab] = useState(false)
  const [hasVisitorBook, setHasVisitorBook] = useState(false)
  const [isInstructionsModalDisplayed, setIsInstructionsModalDisplayed] = useState(true)
  const [items, setItems] = useState([])
  const [collectedArtefacts, setCollectedArtefacts] = useState([])
  const [completedChallenges, setCompletedChallenges] = useState([])
  const [collectedWitnesses, setCollectedWitnesses] = useState([])
  const [completedWitnesses, setCompletedWitnesses] = useState([])
  const [isShreddedLetterCorrect, setIsShreddedLetterCorrect] = useState(false)
  const [isErrorCorrectionCorrect, setIsErrorCorrectionCorrect] = useState(false)
  const [isLoveLetterCorrect, setIsLoveLetterCorrect] = useState(false)
  const [isOrderEventsCorrect, setIsOrderEventsCorrect] = useState(false)
  const [isRedactedCorrect, setIsRedactedCorrect] = useState(false)
  const [detectiveChosen, setDetectiveChosen] = useState(detective)
  const { homeTitle } = homePageData
  const providedValues = {
    hasDoneVocab, setHasDoneVocab,
    hasVisitorBook, setHasVisitorBook,
    items, setItems,
    isInstructionsModalDisplayed, setIsInstructionsModalDisplayed,
    collectedArtefacts, setCollectedArtefacts,
    collectedWitnesses, setCollectedWitnesses,
    completedWitnesses, setCompletedWitnesses,
    completedChallenges, setCompletedChallenges,
    isShreddedLetterCorrect, setIsShreddedLetterCorrect,
    isErrorCorrectionCorrect, setIsErrorCorrectionCorrect,
    isLoveLetterCorrect, setIsLoveLetterCorrect,
    isOrderEventsCorrect, setIsOrderEventsCorrect,
    isRedactedCorrect, setIsRedactedCorrect,
    detectiveChosen, setDetectiveChosen
  }

  const { characterNames } = lessonData['characterNames'];
  const { characterFirstNames } = lessonData['characterFirstNames'];
  const { questionsWitness1, questionsWitness1_2, witnessConversationArray1, trialURL1, exitMessage1, speechBubbleText1, witnessInfo1 } = lessonData['questionsWitness1'];
  const { questionsWitness2, questionsWitness2_2, witnessConversationArray2, trialURL2, exitMessage2, witnessInfo2 } = lessonData['questionsWitness2'];
  const { questionsWitness3, questionsWitness3_2, witnessConversationArray3, trialURL3, exitMessage3, speechBubbleText3, witnessInfo3 } = lessonData['questionsWitness3'];
  const { questionsWitness4, questionsWitness4_2, witnessConversationArray4, trialURL4, exitMessage4, witnessInfo4 } = lessonData['questionsWitness4'];
  const { questionsWitness5, questionsWitness5_2, witnessConversationArray5, trialURL5, exitMessage5, speechBubbleText5, witnessInfo5 } = lessonData['questionsWitness5'];
  const { questionsWitness6, questionsWitness6_2, witnessConversationArray6, trialURL6, exitMessage6, speechBubbleText6, witnessInfo6 } = lessonData['questionsWitness6'];
  const { artefacts } = lessonData['officeCards'];

  return (
    <>
      <Outer>
        <GlobalStyle />
        <Router>
          <GameContext.Provider value={providedValues}>
            <Navbar expand="lg">
              <Navbar.Brand><Link to="/"><Title image={detectiveChosen}>{homeTitle}</Title></Link></Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                  <Link className="nav-link" to="/">home</Link>.
                  <Link className="nav-link" to="/about">about</Link>
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
            <Route path="/door">
              <Door />
            </Route>
            <Route path="/vocab">
              <VocabPage />
            </Route>
            <Route path="/backstory">
              <BackStory />
            </Route>
            <Route path="/witness1"> {/*Tony Monceto*/}
              <Witness
                title={characterNames[0]}
                questionsWit={questionsWitness1}
                questionsWit2={questionsWitness1_2}
                conversationArray={witnessConversationArray1}
                personImage={TonyPic}
                trialURL={trialURL1}
                exitMessage={exitMessage1}
                witnessInfo={witnessInfo1}
                speechBubbleText={speechBubbleText1}
                doorTitle={characterFirstNames[0]}
                house={tonyYard}
                houseMessage={"That looks like Kaplinsky Tower. I guess I'd better go and see what Tony Monceto can tell me..."}
                mapImage={mapImageUrban}
                coords="50% 10%"
              />
            </Route>
            <Route path="/codebox">
              <CodeBox />
            </Route>
            <Route path="/crimescene">
              <CrimeScene />
            </Route>
            <Route path="/witness2"> {/*Chay*/}
              <Witness
                title={characterNames[1]}
                questionsWit={questionsWitness2}
                questionsWit2={questionsWitness2_2}
                conversationArray={witnessConversationArray2}
                personImage={ChayPic}
                trialURL={trialURL2}
                exitMessage={exitMessage2}
                witnessInfo={witnessInfo2}
                mapImage={mapImageUrban}
                coords="90% 99%"
                house={chayHouse}
                houseMessage={"Chay's not as rich as his friend Lexington, obviously. Let's see what he has to say for himself..."}
              />
            </Route>
            <Route path="/sneaky1">
              <Sneaky title="" artefactName={artefacts[0].name}
                artefactImage={shreddedletterPic}
                yardImage={chayYard}
                hasArtefact
                text="Hmmm time to get your hands dirty! Luckily someone has just put the bin out! See what's inside by clicking the lid...go on, all good private detectives do stuff like this!"
              />
            </Route>
            <Route path="/shreddedletter">
              <ShreddedLetter artefactName={artefacts[0].name} />
            </Route>
            <Route path="/witness3"> {/*Kirsten*/}
              <Witness
                title={characterNames[2]}
                questionsWit={questionsWitness3}
                questionsWit2={questionsWitness3_2}
                conversationArray={witnessConversationArray3}
                personImage={KirstenPic}
                trialURL={trialURL3}
                exitMessage={exitMessage3}
                artefactName={artefacts[1].name}
                artefactImage={artefacts[1].image}
                binCheck={'sneaky2'}
                witnessInfo={witnessInfo3}
                speechBubbleText={speechBubbleText3}
                mapImage={mapImageSuburban}
                coords="50% 50%"
                house={kirstenYard}
                houseMessage={"Wow! Someone's making money! Suburban life, huh? The best of both worlds. Let's see what Kirsten says...."}
              />
            </Route>
            <Route path="/sneaky2">
              <Sneaky title="" artefactName={artefacts[7].name}
                artefactImage={receiptPic} yardImage={kirstenYard}
                text="Kirsten seems nice, but she could be lying. I think you should see what's in her bin!"
              /> {/*receipt*/}
            </Route>
            <Route path="/errorcorrection">
              <ErrorCorrection artefactName={artefacts[1].name} />
            </Route>
            <Route path="/witness4"> {/*Dallas*/}
              <Witness
                title={characterNames[3]}
                questionsWit={questionsWitness4}
                questionsWit2={questionsWitness4_2}
                conversationArray={witnessConversationArray4}
                personImage={DallasPic}
                trialURL={trialURL4}
                exitMessage={exitMessage4}
                binCheck={'sneaky3'}
                artefactName={artefacts[3].name} //order events
                artefactImage={artefacts[3].image}
                witnessInfo={witnessInfo4}
                mapImage={mapImageRural}
                coords="50% 50%"
                house={dallasHouse}
                houseMessage={"Another nice house! I wonder if Dallas will mind me having a swim in his pool....let's see what he has to say..."}
              />
            </Route>
            <Route path="/sneaky3">
              <Sneaky title="" artefactName={artefacts[6].name}
                artefactImage={poisonpenPic} yardImage={dallasYard}
                text="Have a quick look in his bin...nothing wrong with that!"
              /> {/*poison*/}
            </Route>
            <Route path="/orderevents">
              <OrderEvents artefactName={artefacts[3].name} />
            </Route>
            <Route path="/witness5"> {/*Lucy*/}
              <Witness
                title={characterNames[4]}
                questionsWit={questionsWitness5}
                questionsWit2={questionsWitness5_2}
                conversationArray={witnessConversationArray5}
                personImage={LucyPic}
                trialURL={trialURL5}
                exitMessage={exitMessage5}
                witnessInfo={witnessInfo5}
                speechBubbleText={speechBubbleText5}
                mapImage={mapImageSuburban}
                coords="50% 50%"
                house={lucyYard}
                houseMessage={"Lucy has a quiet cottage tucked away from the hustle and bustle of the big city....let's see what she has to say..."}
              />
            </Route>
            <Route path="/sneaky4">
              <Sneaky title="" artefactName={artefacts[2].name}
                artefactImage={secretcodePic} hasArtefact yardImage={lucyYard}
                text="If she won't help you, you'll have to help yourself! Luckily, it's bin day today!"
              />  {/*loveletter*/}
            </Route>
            <Route path="/loveletter">
              <LoveLetter artefactName={artefacts[2].name} />
            </Route>
            <Route path="/witness6"> {/*wendy*/}
              <Witness
                title={characterNames[5]}
                questionsWit={questionsWitness6}
                questionsWit2={questionsWitness6_2}
                conversationArray={witnessConversationArray6}
                personImage={WendyPic}
                trialURL={trialURL6}
                exitMessage={exitMessage6}
                artefactName={artefacts[4].name} //redacted report
                artefactImage={artefacts[4].image}
                binCheck={'sneaky5'}
                witnessInfo={witnessInfo6}
                speechBubbleText={speechBubbleText6}
                mapImage={mapImageUrban}
                coords="20% 20%"
                house={wendyYard}
                houseMessage={"A classy looking place and not far from Kaplinsky Tower. I guess Wendy has also got money! Let's see what she has to say..."}
              />
            </Route>
            <Route path="/sneaky5">
              <Sneaky title="" artefactName={artefacts[5].name} artefactImage={weightlifterPic} yardImage={wendyYard}
                text="You might as well see if she happens to have chucked anything of interest away!"
              /> {/*weight*/}
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
        <Footer />
      </Outer>
    </>
  );
}

export default App;