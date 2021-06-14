import { useState, useContext, useEffect } from 'react'
import { List, arrayMove } from 'react-movable';
import PageContainer from '../../../containers/PageContainer'
import Title from '../../../generalComponents/Title'
import { history, useHistory } from 'react-router-dom'
import { SpeechBubbleLeft } from '../../witness/witnessComponents/Questions'
import { Instructions, Conversation, WitnessImage, TaskBox, InfoBox } from '../../witness/witnessComponents/Layout'
import ProfilePic from '../../../images/janitor.png'
// import { redactedData, RedactedComp } from '../../../data/lessonData'
// import { StatementContainer, RedactedTextComp} from './redactedComponents/RedactedComponents'
import GameContext from '../../../context/GameContext'


function Simple() {
    const [items, setItems] = useState(["Item 1", "Item 2", "Item 3"]);
    return (
      <List
        values={items}
        onChange={({ oldIndex, newIndex }) =>
          setItems(arrayMove(items, oldIndex, newIndex))
        }
        renderList={({ children, props }) => <ul {...props}>{children}</ul>}
        renderItem={({ value, props }) => <li className="myClass" {...props}>{value}</li>}
      />
    );
  }


function Redacted() {

    const [redactedInputs, setRedactedInputs] = useState({})
    const [message, setMessage] = useState('')
    const { level, setLevel } = useContext(GameContext)


 console.log(redactedInputs);
    return (
        <>
            <div className="title">
                <Title>Solve the Puzzle</Title>
            </div>
            <PageContainer>
                <Instructions>
                    <WitnessImage img={ProfilePic} />
                    {/* https://unsplash.com/@shnautsher */}
                    <TaskBox>
                        Break the code!
                        </TaskBox>
                </Instructions>
                <Conversation>
                    <SpeechBubbleLeft>
                        {/* {instructions} */}
                    </SpeechBubbleLeft>
                    <Simple/>
                </Conversation>
            </PageContainer>

        </>

    )
}

export default Redacted