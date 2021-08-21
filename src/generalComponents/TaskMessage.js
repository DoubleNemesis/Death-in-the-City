import styled from 'styled-components'
import pencil from './../images/task.png'
import tick from './../images/tick.png'
import cross from './../images/cross.png'
import party from './../images/party.png'

const TaskImage = styled.img`
width: 40px;
margin-right: .5em;
`

const TaskMessageText = styled.div`
background-color: whitesmoke;
width: ${({width})=> width || '100'}%;
padding: .5em .5em;
font-weight: 700;
margin: 0 auto;

@media(min-width:1025px){
    border: 4px ${({borderColor})=>borderColor || '#141414'} solid;
  border-radius: 5px;
  width: 100%;
}
`

export const TaskMessage = (props) => {
    
    return <TaskMessageText width={props.width} ><TaskImage  src={props.task ? pencil : props.incorrect ? cross : tick} />
        {props.message}
    </TaskMessageText>
}
export const SuccessEmoji = (props) => {
    
    return <TaskMessageText borderColor={props.borderColor} width={props.width}><TaskImage src={party} />{props.message}</TaskMessageText>

}