import styled from 'styled-components'
import { PostIt } from '../officeComponents/DeskItems'


export const BoardIdea = (props)=><><PostIt key={props.key}><p>{props.title}</p><p>{props.name}</p></PostIt><img src={props.image}/></>
