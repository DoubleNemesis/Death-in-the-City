import styled from 'styled-components'


export const QuestionsContainer = styled.div`
width: 80%;
background-color: skyblue;
display: flex;
border-radius: .3em;
padding: 1em;
box-sizing: border-box;
`
export const QuestionsList = styled.div`
display: flex;
flex-direction: row;
padding: .5em;
flex-wrap: wrap;
background-color: skyblue;
`

const StyledSpeechBubbleQ = styled.div`

.bubble{
    position: relative;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 16px;
    line-height: 1px;
    background: white;
    border-radius: 40px;
    padding: 1.5em 1.5em;
    text-align: center;
    color: #000;
    margin: 1em;
}

.bubble-bottom-right:before {
  content: "";
  width: 0px;
  height: 0px;
  position: absolute;
  border-left: 12px solid transparent;
  border-right: 24px solid white;
  border-top: 12px solid white;
  border-bottom: 20px solid transparent;
  left: 80%;
  bottom: -24px;
}
`

export const Question = ({children, ...restProps})=><StyledSpeechBubbleQ {...restProps}><div className="bubble bubble-bottom-right">{children}</div></StyledSpeechBubbleQ>

export const Instructions = styled.div`
border: 1px solid pink;
width: 50%;
`
