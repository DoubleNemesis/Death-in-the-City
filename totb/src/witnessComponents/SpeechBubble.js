import styled from 'styled-components'

const StyledSpeechBubble = styled.div`

.bubble, .bubbleRight{
    position: relative;
    font-family: sans-serif;
    font-size: 18px;
    line-height: 24px;
    width: 400px;
    background: #fff;
    border-radius: 40px;
    padding: 24px;
    text-align: center;
    color: #000;
    margin: 1em;
}

.bubbleRight{
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
  left: 382px;
  bottom: -24px;
}
`
export const SpeechBubbleLeft = ({ children, ...restProps }) => <StyledSpeechBubble{...restProps}><div className="bubble bubble-bottom-left">{children}</div></StyledSpeechBubble>
export const SpeechBubbleRight = ({ children, ...restProps }) => <StyledSpeechBubble{...restProps}><div className="bubbleRight bubble-bottom-right">{children}</div></StyledSpeechBubble>

export const Conversation = styled.div`
display: flex;
flex-direction: column;
background-color: skyblue;
width: 100%;
`