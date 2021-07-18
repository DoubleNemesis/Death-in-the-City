import styled from 'styled-components'
const StyledSpeechBubble = styled.div`

.bubble, .bubbleRight{
    position: relative;
    font-family: sans-serif;
    font-family: 'Kalam';
    font-size: 1.1rem;
    line-height: 1.2rem;
    width: ${({bubbleWidth})=>bubbleWidth || '80'}%;
    min-height: ${({minHeight})=> minHeight || '100' }px;
    background: skyblue;
    border-radius: 10px;
    padding: 1em;
    text-align: left;
    color: #000;
    margin: 1em;
    border: 4px solid #141414;
    box-shadow: 2px 2px 4px 2px #444;

    ol{
      padding: 0 1em;
      color: red;
    }
}

.bubbleRight{ //delete????
    background-color: limegreen;
    float: right;
}

.bubble-bottom-left:before {
  content: "";
  width: 0px;
  height: 0px;
  position: absolute;
  border-left: 24px solid skyblue;
  border-right: 12px solid transparent;
  border-top: 12px solid skyblue;
  border-bottom: 20px solid transparent;
  left: 32px;
  bottom: -24px;
}

.bubble-bottom-right:before {
  content: "";
  width: 0px;
  height: 0px;
  position: absolute;
  border-left: 12px solid transparent;
  border-right: 24px solid limegreen;
  border-top: 12px solid limegreen;
  border-bottom: 20px solid transparent;
  left: 80%;
  bottom: -24px;
}
`
const SpeakerImage = styled.img`
width: 25%;
max-width: 100px;
float: left;
margin: 0 .8em 0 0;
border-radius: 10%;
`

export const SpeechBubbleLeft = ({ children, ...restProps }) => <StyledSpeechBubble{...restProps}><div className="bubble bubble-bottom-left"><SpeakerImage src={restProps.image}/>{children}</div></StyledSpeechBubble>
export const SpeechBubbleRight = ({ children, ...restProps }) => <StyledSpeechBubble{...restProps}><div className="bubbleRight bubble-bottom-right">{children}</div></StyledSpeechBubble>


const StyledSpeechBubbleQ = styled.div`

.bubble{
    position: relative;
    font-family: 'Kalam';
    font-size: 1.2rem;
    line-height: 1.2rem;
    text-align: left;
    background: limegreen;
    border-radius: 20px;
    padding: 1em 1.5em;
    color: #000;
    margin: 1em;
    cursor: pointer;
    max-width: 80%;
    float: right;
    box-sizing: border-box;
}

.bubble-bottom-right:before {
  content: "";
  width: 0px;
  height: 0px;
  position: absolute;
  border-left: 12px solid transparent;
  border-right: 12px solid limegreen;
  border-top: 12px solid limegreen;
  border-bottom: 20px solid transparent;
  left: 80%;
  bottom: -18px; 
}
`

export const Question = ({children, ...restProps})=><StyledSpeechBubbleQ {...restProps}><div className="bubble bubble-bottom-right">{children}</div></StyledSpeechBubbleQ>


