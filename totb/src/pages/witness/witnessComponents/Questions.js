import styled from 'styled-components'

const StyledSpeechBubble = styled.div`

.bubble, .bubbleRight{
    position: relative;
    font-family: sans-serif;
    font-family: 'Kalam';
    font-size: 18px;
    line-height: 24px;
    width: 70%;
    background: #fff;
    border-radius: 40px;
    padding: 24px;
    text-align: left;
    color: #000;
    margin: 1em;
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
  border-left: 24px solid #fff;
  border-right: 12px solid transparent;
  border-top: 12px solid #fff;
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


export const SpeechBubbleLeft = ({ children, ...restProps }) => <StyledSpeechBubble{...restProps}><div className="bubble bubble-bottom-left">{children}</div></StyledSpeechBubble>
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


