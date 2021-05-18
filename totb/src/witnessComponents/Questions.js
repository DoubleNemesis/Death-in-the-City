import styled from 'styled-components'

const StyledSpeechBubbleQ = styled.div`

.bubble{
    position: relative;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 14px;
    line-height: 1px;
    background: white;
    border-radius: 20px;
    padding: 2em 1.5em;
    text-align: center;
    color: #000;
    margin: 1em;
    cursor: pointer;
    max-width: 50%;
    float: right;
}

.bubble-bottom-right:before {
  content: "";
  width: 0px;
  height: 0px;
  position: absolute;
  border-left: 12px solid transparent;
  border-right: 12px solid white;
  border-top: 12px solid white;
  border-bottom: 20px solid transparent;
  left: 80%;
  bottom: -18px;
}
`

export const Question = ({children, ...restProps})=><StyledSpeechBubbleQ {...restProps}><div className="bubble bubble-bottom-right">{children}</div></StyledSpeechBubbleQ>

export const Instructions = styled.div`
width: 50%;
font-size: 1.5rem;
font-family: Verdana, Geneva, Tahoma, sans-serif;
background-color: white;
padding: .5em;
border-radius: .5em;
display: flex;
flex-direction: column;
min-height: 100%;
`
